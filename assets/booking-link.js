(() => {
  "use strict";

  // Единственная страница онлайн-записи Юлии.
  const BOOKING_URL = "https://ozdemiryulia-alt.github.io/#schedule";
  const bookingPaths = new Set(["/zapis", "/yulia-ozdemir-site/zapis"]);

  const normalisePath = (path) => {
    const value = String(path || "/").replace(/\/+$/, "");
    return value || "/";
  };

  const isInternalBookingLink = (href) => {
    try {
      const url = new URL(href, window.location.href);
      return url.origin === window.location.origin && bookingPaths.has(normalisePath(url.pathname));
    } catch {
      return false;
    }
  };

  const openBooking = (replace = false) => {
    window.location[replace ? "replace" : "assign"](BOOKING_URL);
  };

  // Старый адрес записи остаётся рабочим для сохранённых ссылок.
  if (bookingPaths.has(normalisePath(window.location.pathname))) {
    openBooking(true);
    return;
  }

  // В собранном сайте ссылки на запись встречаются на разных страницах.
  // Перехватываем только их и ведём в действующий календарь.
  document.addEventListener(
    "click",
    (event) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
        return;
      }

      const target = event.target instanceof Element ? event.target.closest("a[href]") : null;
      if (!target || target.target === "_blank" || !isInternalBookingLink(target.href)) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();
      openBooking();
    },
    true,
  );
})();
