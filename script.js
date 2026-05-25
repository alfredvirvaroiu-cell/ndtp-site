const header = document.querySelector("[data-header]");
const navToggle = document.querySelector("[data-nav-toggle]");

navToggle?.addEventListener("click", () => {
  const isOpen = header?.classList.toggle("menu-open") ?? false;
  document.body.classList.toggle("nav-open", isOpen);
  navToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
});

document.querySelectorAll(".site-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    header?.classList.remove("menu-open");
    document.body.classList.remove("nav-open");
    navToggle?.setAttribute("aria-label", "Open menu");
  });
});
