const menuOpenButton = document.querySelector(".header-menu-open-button");
const menuCloseButton = document.querySelector(".navbar-menu-close-button");
const navbarMenu = document.querySelector(".header-navbar");
const overlay = document.querySelector(".overlay");

const closeNavbarMenu = function () {
  navbarMenu.classList.remove("active");
  overlay.classList.remove("active");
  document.body.classList.remove("scroll-lock");
  menuOpenButton.setAttribute("aria-expanded", "false");
};

menuOpenButton.addEventListener("click", function () {
  navbarMenu.classList.add("active");
  overlay.classList.add("active");
  document.body.classList.add("scroll-lock");
  menuOpenButton.setAttribute("aria-expanded", "true");
});

menuCloseButton.addEventListener("click", closeNavbarMenu);
overlay.addEventListener("click", closeNavbarMenu);
