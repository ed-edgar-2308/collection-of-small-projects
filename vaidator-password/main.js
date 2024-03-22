"use strict";

const input = $("form input");

input.oninput = function () {
  this.value.search(/[a-z]/) >= 0
    ? $(".lowercase").classList.add("valid")
    : $(".lowercase").classList.remove("valid");

  this.value.search(/[A-Z]/) >= 0
    ? $(".uppercase").classList.add("valid")
    : $(".uppercase").classList.remove("valid");

  this.value.search(/[0-9]/) >= 0
    ? $(".number").classList.add("valid")
    : $(".number").classList.remove("valid");

  this.value.search(/\W/) >= 0
    ? $(".symbol").classList.add("valid")
    : $(".symbol").classList.remove("valid");

  this.value.length >= 8
    ? $(".characters").classList.add("valid")
    : $(".characters").classList.remove("valid");
};

$(".form-eye").onclick = function () {
  this.classList.toggle("show");
  input.type == "password" ? (input.type = "text") : (input.type = "password");
};
