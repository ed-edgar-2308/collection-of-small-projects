"use strict";

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

document.onkeydown = (e) => {
  $(".box__result").innerText = e.which;
  $(".card.key p:last-child").innerText = e.key == " " ? "Space" : e.key;
  $(".card.location p:last-child").innerText = e.location;
  $(".card.which p:last-child").innerText = e.which;
  $(".card.code p:last-child").innerText = e.code;

  $(".alert").classList.add("hide");
  $(".box").classList.remove("hide");
};
