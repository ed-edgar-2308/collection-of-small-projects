"use strict";

const SQUARES = 200;

for (let i = 0; i < SQUARES; i++) {
  const square = document.createElement("div");
  square.className = "square";

  square.onmouseover = function () {
    const color = generateRandomColor();
    this.style.background = color;
    this.style.boxShadow = `0 0 10px ${color}, 0 0 100px ${color}`;
  };

  square.onmouseout = function () {
    this.style = "";
  };

  $(".container").appendChild(square);
}

function generateRandomColor() {
  const LETTERS = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += LETTERS[Math.floor(Math.random() * 17)];
  }

  return color;
}
