var toggle = document.querySelector(".page-header__toggle");
var menu = document.querySelector(".main-nav");
var header = document.querySelector(".page-header__logo");
var cross = document.querySelector(".page-header__icon--cross");
var burger = document.querySelector(".page-header__icon--burger");
var box = document.querySelector(".js-box");

toggle.classList.add("page-header__toggle--show");
menu.classList.add("main-nav--closed");
header.classList.add("page-header__logo--closed");
burger.classList.add("page-header__icon--show");
box.classList.add("js-padding");

toggle.addEventListener("click", function () {
  menu.classList.toggle("main-nav--closed");
  header.classList.toggle("page-header__logo--closed");
  burger.classList.toggle("page-header__icon--show");
  cross.classList.toggle("page-header__icon--show");
  box.classList.toggle("js-padding");
  });
