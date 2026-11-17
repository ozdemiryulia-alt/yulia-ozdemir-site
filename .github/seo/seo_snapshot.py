"""Снимки готового текста страниц основного сайта для поисковиков и ИИ-помощников.

Сайт рисуется программой в браузере, а роботы часто программу не запускают и видят
пустую страницу. Этот скрипт открывает каждую страницу в браузере без окна и сохраняет
содержимое <div id="root"> в snapshots/<путь>/root.html. При сборке для хостинга
build.py вставляет его в страницу; у посетителя программа сайта потом рисует всё заново.

Запуск: python seo_snapshot.py <папка сайта> <папка для снимков> [путь к chrome]
Работает в GitHub Actions (Linux) и на компьютере.
"""
import json
import os
import re
import socket
import subprocess
import sys
import threading
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path

SITE = Path(sys.argv[1]).resolve()
OUT = Path(sys.argv[2]).resolve()
CHROME = sys.argv[3] if len(sys.argv) > 3 else "google-chrome"
SKIP_DIRS = {"assets", "documents", "__manus__", ".git", ".github", "zapis"}


def routes():
    found = []
    for index in SITE.rglob("index.html"):
        rel = index.parent.relative_to(SITE)
        if rel.parts and rel.parts[0] in SKIP_DIRS:
            continue
        if '<div id="root"></div>' not in index.read_text(encoding="utf-8", errors="ignore"):
            continue
        found.append("/" if not rel.parts else "/" + "/".join(rel.parts) + "/")
    return sorted(found)


def extract_root(html):
    start = html.find('<div id="root">')
    if start < 0:
        return ""
    i = start + len('<div id="root">')
    depth = 1
    for m in re.compile(r"<(/?)div\b[^>]*>", re.I).finditer(html, i):
        depth += -1 if m.group(1) else 1
        if depth == 0:
            return html[i:m.start()]
    return ""


def clean(fragment):
    # Служебные пометки сборщика и пустая область уведомлений роботам не нужны.
    fragment = re.sub(r'\sdata-loc="[^"]*"', "", fragment)
    fragment = re.sub(r'<section aria-label="Notifications[^"]*"[^>]*></section>', "", fragment)
    return fragment


def render(url):
    args = [CHROME, "--headless=new", "--disable-gpu", "--hide-scrollbars", "--no-first-run",
            "--virtual-time-budget=8000", "--window-size=1280,2400", "--dump-dom", url]
    raw = subprocess.run(args, stdout=subprocess.PIPE, stderr=subprocess.DEVNULL, timeout=120).stdout
    try:
        return raw.decode("utf-8")
    except UnicodeDecodeError:
        return raw.decode("cp1251", errors="replace")


def main():
    with socket.socket() as s:
        s.bind(("127.0.0.1", 0))
        port = s.getsockname()[1]
    handler = partial(SimpleHTTPRequestHandler, directory=str(SITE))
    handler.log_message = lambda *a: None
    server = ThreadingHTTPServer(("127.0.0.1", port), handler)
    threading.Thread(target=server.serve_forever, daemon=True).start()
    report = {}
    try:
        for route in routes():
            html = render("http://127.0.0.1:{}{}".format(port, route))
            fragment = clean(extract_root(html))
            text = re.sub(r"\s+", " ", re.sub(r"<[^>]+>", " ", fragment)).strip()
            h1 = re.findall(r"<h1[^>]*>(.*?)</h1>", fragment, re.S)
            words = len(text.split())
            report[route] = {"words": words, "h1": re.sub(r"<[^>]+>", "", h1[0]).strip() if h1 else ""}
            if words < 30:
                print("мало текста, снимок не сохранён:", route, words)
                continue
            target = OUT / route.strip("/") / "root.html" if route != "/" else OUT / "root.html"
            target.parent.mkdir(parents=True, exist_ok=True)
            target.write_text(fragment, encoding="utf-8")
            print(route, words, "слов")
    finally:
        server.shutdown()
    OUT.mkdir(parents=True, exist_ok=True)
    (OUT / "report.json").write_text(json.dumps(report, ensure_ascii=False, indent=1), encoding="utf-8")
    if sum(1 for r in report.values() if r["words"] >= 30) < len(report) * 0.8:
        sys.exit("слишком много пустых снимков")


if __name__ == "__main__":
    main()
