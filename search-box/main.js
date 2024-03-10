"use strict";

document.querySelector(".search__btn").onclick = function () {
  this.parentElement.classList.toggle("open");
  this.previousElementSibling.focus();
};
