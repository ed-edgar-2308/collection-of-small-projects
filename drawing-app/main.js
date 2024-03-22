"use strict";

const canvas = $("#canvas");
const colorEl = $("#color");

const context = canvas.getContext("2d");
let startX, startY, currentX, currentY;
let color = colorEl.value;
let size = 10;

canvas.onmousemove = (e) => {
  if (e.buttons == 1) {
    currentX = e.offsetX;
    currentY = e.offsetY;
    drawCircle(currentX, currentY);
    drawLine(startX, startY, currentX, currentY);
    startX = e.offsetX;
    startY = e.offsetY;
  } else {
    startX = undefined;
    startY = undefined;
  }
};

colorEl.onchange = function () {
  color = this.value;
};

$("#eraser").onclick = () => {
  color = "#fff";
};

$("#decrease").onclick = function () {
  this.nextElementSibling.innerText = --size;
};

$("#increase").onclick = function () {
  this.previousElementSibling.innerText = ++size;
};

$("#save").onclick = (e) => {
  const imageURI = canvas.toDataURL("image/png");
  e.currentTarget.href = imageURI;
};

$("#clear").onclick = () => {
  context.clearRect(0, 0, canvas.width, canvas.height);
};

function drawCircle(currentX, currentY) {
  context.beginPath();
  context.arc(currentX, currentY, size, 0, Math.PI * 2);
  context.fillStyle = color;
  context.fill();
  context.closePath();
}

function drawLine(startX, startY, currentX, currentY) {
  context.beginPath();
  context.moveTo(startX, startY);
  context.lineTo(currentX, currentY);
  context.strokeStyle = color;
  context.lineWidth = size * 2;
  context.stroke();
  context.closePath();
}
