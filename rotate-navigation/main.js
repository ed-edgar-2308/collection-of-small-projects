"use strict";

$("#open").addEventListener("click", () => {
  $(".container").classList.add("show-nav");
});

$("#close").addEventListener("click", () => {
  $(".container").classList.remove("show-nav");
});
