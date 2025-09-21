// Navbar
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

// Hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("active");
});

// Tabs
const tabs = document.querySelectorAll(".tab_btn");
const contents = document.querySelectorAll(".content");

tabs.forEach((tab, index) => {
  tab.addEventListener("click", (e) => {
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    tab.classList.add("active");

    var line = document.querySelector(".line");
    line.style.width = e.target.offsetWidth + "px";
    line.style.left = e.target.offsetLeft + "px";

    contents.forEach((content) => {
      content.classList.remove("active");
    });
    contents[index].classList.add("active");
  });
});

// Smooth Load
window.addEventListener("DOMContentLoaded", () => {
  document.querySelector("main").classList.add("show");
  document.querySelector("footer").classList.add("show");
});
