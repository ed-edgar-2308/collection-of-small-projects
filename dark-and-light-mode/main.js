"use strict";

$("#toggleMode").onclick = () => {
  document.body.classList.toggle("dark");
  $("#toggleMode").classList.toggle("dark");
};
