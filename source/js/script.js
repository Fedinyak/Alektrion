var navMain = document.querySelector(".navigation__list");
var navToggle = document.querySelector(".navigation-mobile__menu");

navToggle.addEventListener("click", function() {
  if (navMain.classList.contains("navigation__list--close")) {
    navMain.classList.remove("navigation__list--close");
    navMain.classList.add("navigation__list--open");
  } else {
    navMain.classList.add("navigation__list--close");
    navMain.classList.remove("navigation__list--open");
  }
});

// var navMain = document.querySelector(".main-nav");
// var navToggle = document.querySelector(".main-nav__toggle");

// navToggle.addEventListener("click", function() {
//   if (navMain.classList.contains("main-nav--closed")) {
//     navMain.classList.remove("main-nav--closed");
//     navMain.classList.add("main-nav--opened");
//   } else {
//     navMain.classList.add("main-nav--closed");
//     navMain.classList.remove("main-nav--opened");
//   }
// });

// // меню

// document.addEventListener("DOMContentLoaded", function() {
//   window.addEventListener("scroll", functionForSticky);

//   var navbar = document.querySelector(".navigation");
//   var sticky = navbar.offsetTop;

//   function functionForSticky() {
//     if (window.pageYOffset > sticky) {
//       navbar.classList.add("sticky");
//     } else {
//       navbar.classList.remove("sticky");
//     }
//   }
// });
