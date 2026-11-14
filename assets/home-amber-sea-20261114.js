// Visual redesign only: original rendering, copy, order and filters below are unchanged.
const seaStyle = document.createElement("link");
seaStyle.rel = "stylesheet";
seaStyle.href = new URL("./home-sea-20261114.css", import.meta.url).href;
document.head.appendChild(seaStyle);
import {siteUrl as yuliaSiteUrl} from "./portability-domain-c5eae32fed.js";
// Full homepage draft. Source copy and real reviews preserved.
export function renderAmberHome(runtime) {
  const { i, R, ye, q2, jp, B2, M2, Ep, Uh, kh, qh, Oe, Oh } = runtime;
  const [l, o] = R.useState("all"),
    u = R.useMemo(
      () => (l === "all" ? jp : jp.filter((r) => r.category === l)),
      [l],
    );
  return i.jsxs(i.Fragment, {
    children: [
      i.jsx("section", {
        "data-loc": "client/src/pages/Home.tsx:29",
        className: "hero-section home-hero",
        children: i.jsxs("div", {
          "data-loc": "client/src/pages/Home.tsx:29",
          className: "page-width hero-content",
          children: [
            i.jsx("span", {
              "data-loc": "client/src/pages/Home.tsx:29",
              className: "eyebrow",
              children: "Остеопат и мастер Рэйки · Анталия и Москва",
            }),
            i.jsxs("h1", {
              "data-loc": "client/src/pages/Home.tsx:29",
              style: { maxWidth: "100%" },
              children: [
                i.jsx("span", {
                  style: { display: "block" },
                  children: "Юлия ОздеМир",
                }),
                " ",
                i.jsx("span", {
                  className: "home-hero-tagline",
                  style: {
                    display: "block",
                    whiteSpace: "nowrap",
                    fontSize: "clamp(20px, 6vw, 52px)",
                  },
                  children: "Зажигаю выгоревших",
                }),
              ],
            }),
            i.jsx("p", {
              "data-loc": "client/src/pages/Home.tsx:29",
              children:
                "Моя работа нужна, чтобы тело перестало быть вашим главным проблемным проектом и снова стало надёжной системой. На сеансе мы помогаем ему перенастроить внутренние процессы: перестать тратить силы на старые сбои, вернуть саморегуляцию и направить энергию туда, где она действительно нужна. На жизнь.",
            }),
          ],
        }),
      }),
      i.jsx("section", {
        "data-loc": "client/src/pages/Home.tsx:30",
        className: "home-paths section-padding",
        children: i.jsxs("div", {
          "data-loc": "client/src/pages/Home.tsx:30",
          className: "page-width",
          children: [
            i.jsx("span", {
              "data-loc": "client/src/pages/Home.tsx:30",
              className: "eyebrow",
              children: "Как начать",
            }),
            i.jsx("h2", {
              "data-loc": "client/src/pages/Home.tsx:30",
              children: "С чем ко мне приходят",
            }),
            i.jsxs("div", {
              className: "home-paths-layout",
              children: [
                i.jsx("div", {
                  className: "home-paths-photo",
                  children: i.jsx("img", {
                    src: yuliaSiteUrl("/yulia-ozdemir-site/assets/woman-shore-1f55845b40.jpg"),
                    alt: "Девушка на берегу моря на рассвете",
                    loading: "lazy",
                    decoding: "async",
                  }),
                }),
                i.jsx("div", {
                  "data-loc": "client/src/pages/Home.tsx:30",
                  className: "path-list",
                  children: q2.map((r) =>
                    i.jsxs(
                      ye,
                      {
                        "data-loc": "client/src/pages/Home.tsx:30",
                        href: r.href,
                        className: "path-row",
                        children: [
                          i.jsx("span", {
                            "data-loc": "client/src/pages/Home.tsx:30",
                            children: r.number,
                          }),
                          i.jsxs("div", {
                            "data-loc": "client/src/pages/Home.tsx:30",
                            children: [
                              i.jsx("h3", {
                                "data-loc": "client/src/pages/Home.tsx:30",
                                children: r.title,
                              }),
                              r.paragraphs.map((p, n) =>
                                i.jsx(
                                  "p",
                                  {
                                    "data-loc": "client/src/pages/Home.tsx:30",
                                    children: p,
                                  },
                                  n,
                                ),
                              ),
                              i.jsx("span", {
                                "data-loc": "client/src/pages/Home.tsx:30",
                                className: "inline-link",
                                children: r.cta,
                              }),
                            ],
                          }),
                          i.jsx(Oe, {
                            "data-loc": "client/src/pages/Home.tsx:30",
                            size: 23,
                            strokeWidth: 1.4,
                          }),
                        ],
                      },
                      r.number,
                    ),
                  ),
                }),
              ],
            }),
          ],
        }),
      }),
      i.jsxs("div", {
        className: "about-session-group",
        children: [
          i.jsx("section", {
            "data-loc": "client/src/pages/Home.tsx:31",
            className: "home-about section-padding",
            children: i.jsxs("div", {
              "data-loc": "client/src/pages/Home.tsx:31",
              className: "page-width home-about-layout",
              children: [
                i.jsxs("div", {
                  className: "home-about-copy",
                  "data-loc": "client/src/pages/Home.tsx:31",
                  children: [
                    i.jsx("span", {
                      "data-loc": "client/src/pages/Home.tsx:31",
                      className: "eyebrow",
                      children: "О мастере",
                    }),
                    i.jsx("h2", {
                      "data-loc": "client/src/pages/Home.tsx:31",
                      children: "Обо мне",
                    }),
                    i.jsx("p", {
                      "data-loc": "client/src/pages/Home.tsx:31",
                      children:
                        'Меня зовут Юлия ОздеМир. Больше четырнадцати лет я помогаю людям решать жизненные проблемы методами биодинамики, остеопатии и Рэйки. Я специалист по оздоровлению, Доктор Остеопрактики и биодинамики, Мастер Школы "Проект остеопрактика". Я мастер Рэйки, автор и ведущая трансформационной игры «Прикосновение Рэйки». Психолог-консультант, расстановщик.',
                    }),
                    i.jsxs(ye, {
                      "data-loc": "client/src/pages/Home.tsx:31",
                      href: "/obo-mne",
                      className: "inline-link",
                      children: [
                        "Познакомиться со мной ",
                        i.jsx(Oh, {
                          "data-loc": "client/src/pages/Home.tsx:31",
                          size: 17,
                        }),
                      ],
                    }),
                  ],
                }),
                i.jsx("div", {
                  "data-loc": "client/src/pages/Home.tsx:31",
                  className: "home-about-photo",
                  children: i.jsx("img", {
                    "data-loc": "client/src/pages/Home.tsx:31",
                    src: yuliaSiteUrl("/yulia-ozdemir-site/assets/master-1.jpg"),
                    alt: "Юлия ОздеМир",
                    loading: "eager",
                  }),
                }),
              ],
            }),
          }),
          i.jsxs("section", {
            className: "home-contact section-padding",
            "aria-label": "Запись на первый сеанс",
            children: [
              i.jsxs("div", {
                className: "page-width home-contact-layout",
                children: [
                  i.jsxs("div", {
                    className: "home-session-copy",
                    children: [
                      i.jsx("span", {
                        className: "eyebrow",
                        children: "Запись",
                      }),
                      i.jsx("h2", { children: "Первый сеанс" }),
                      i.jsx("p", {
                        children:
                          "Начните с одного сеанса, дальнейший формат обсудим по вашей ситуации.",
                      }),
                      i.jsx("p", {
                        children:
                          "Вы можете выбрать дату и время или сначала написать мне в Telegram или WhatsApp. Я отвечу лично.",
                      }),
                    ],
                  }),
                  i.jsxs("div", {
                    className: "home-session-details",
                    children: [
                      i.jsxs("p", {
                        className: "home-session-meta",
                        children: [
                          "Очно или дистанционно",
                          i.jsx("br", {}),
                          "1 час + 7 дней сопровождения",
                        ],
                      }),
                      i.jsx("p", {
                        className: "home-session-price",
                        children: "12 000 ₽",
                      }),
                      i.jsxs(ye, {
                        "data-loc": "client/src/pages/Home.tsx:34",
                        href: "/zapis",
                        className: "button button-primary home-session-primary",
                        children: [
                          "Выбрать дату и время ",
                          i.jsx(Oe, { size: 16 }),
                        ],
                      }),
                      i.jsxs("div", {
                        className: "home-session-messengers",
                        children: [
                          i.jsx("a", {
                            href: "https://t.me/yulia_ozdemir",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "inline-link",
                            children: "Написать в Telegram",
                          }),
                          i.jsx("a", {
                            href: "https://wa.me/79258898812",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "inline-link",
                            children: "Написать в WhatsApp",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      i.jsx("section", {
        "data-loc": "client/src/pages/Home.tsx:32",
        className: "home-reviews section-padding",
        "aria-labelledby": "reviews-title",
        children: i.jsxs("div", {
          "data-loc": "client/src/pages/Home.tsx:32",
          className: "page-width",
          children: [
            i.jsxs("div", {
              "data-loc": "client/src/pages/Home.tsx:32",
              className: "home-reviews-heading",
              children: [
                i.jsxs("div", {
                  "data-loc": "client/src/pages/Home.tsx:32",
                  children: [
                    i.jsx("h2", {
                      "data-loc": "client/src/pages/Home.tsx:32",
                      id: "reviews-title",
                      children: "Отзывы",
                    }),
                  ],
                }),
              ],
            }),
            i.jsx("div", {
              "data-loc": "client/src/pages/Home.tsx:32",
              className: "review-filters",
              role: "group",
              "aria-label": "Фильтр отзывов",
              children: B2.map((r) =>
                i.jsx(
                  "button",
                  {
                    "data-loc": "client/src/pages/Home.tsx:32",
                    type: "button",
                    className: l === r ? "active" : "",
                    "aria-pressed": l === r,
                    onClick: () => o(r),
                    children: M2[r],
                  },
                  r,
                ),
              ),
            }),
            i.jsx("div", {
              "data-loc": "client/src/pages/Home.tsx:32",
              className: "review-grid",
              children: u.map((r, f) =>
                i.jsx(
                  Uh,
                  {
                    "data-loc": "client/src/pages/Home.tsx:32",
                    index: f,
                    children: i.jsxs("article", {
                      "data-loc": "client/src/pages/Home.tsx:32",
                      className: "review-card",
                      children: [
                        i.jsx("span", {
                          "data-loc": "client/src/pages/Home.tsx:32",
                          className: "review-topic",
                          children: r.topic,
                        }),
                        r.kind === "video"
                          ? i.jsxs("div", {
                              "data-loc": "client/src/pages/Home.tsx:32",
                              className: "review-video-content",
                              children: [
                                i.jsx(kh, {
                                  "data-loc": "client/src/pages/Home.tsx:32",
                                  className: "review-video-icon",
                                  size: 31,
                                  strokeWidth: 1.25,
                                  "aria-hidden": "true",
                                }),
                                i.jsxs("strong", {
                                  "data-loc": "client/src/pages/Home.tsx:32",
                                  children: ["«", r.quote, "»"],
                                }),
                                r.duration &&
                                  i.jsxs("span", {
                                    "data-loc": "client/src/pages/Home.tsx:32",
                                    className: "review-video-duration",
                                    children: ["Видео · ", r.duration],
                                  }),
                                r.source &&
                                  i.jsx(Ep, {
                                    "data-loc": "client/src/pages/Home.tsx:32",
                                    source: r.source,
                                    video: !0,
                                  }),
                              ],
                            })
                          : i.jsxs(i.Fragment, {
                              children: [
                                i.jsx(qh, {
                                  "data-loc": "client/src/pages/Home.tsx:32",
                                  className: "review-quote-icon",
                                  size: 27,
                                  strokeWidth: 1.25,
                                  "aria-hidden": "true",
                                }),
                                i.jsxs("blockquote", {
                                  "data-loc": "client/src/pages/Home.tsx:32",
                                  children: ["«", r.quote, "»"],
                                }),
                                r.source &&
                                  i.jsx(Ep, {
                                    "data-loc": "client/src/pages/Home.tsx:32",
                                    source: r.source,
                                  }),
                              ],
                            }),
                        i.jsxs("footer", {
                          "data-loc": "client/src/pages/Home.tsx:32",
                          children: [
                            i.jsx("strong", {
                              "data-loc": "client/src/pages/Home.tsx:32",
                              children: r.name,
                            }),
                            i.jsx("span", {
                              "data-loc": "client/src/pages/Home.tsx:32",
                              children: r.context,
                            }),
                          ],
                        }),
                      ],
                    }),
                  },
                  `${r.category}-${r.name}-${r.quote}`,
                ),
              ),
            }),
            i.jsxs("div", {
              className: "hero-actions home-reviews-booking",
              style: { marginTop: 24 },
              children: [
                i.jsxs(ye, {
                  href: "/zapis",
                  className: "button button-primary",
                  children: ["Записаться на сеанс ", i.jsx(Oe, { size: 16 })],
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
