"use strict";

const SPEED = 4;

$(".wrapper").scrollLeft = 0;
let startX, scrollLeft;

$(".wrapper").onmousemove = function (e) {
  if (e.buttons == 1) {
    const currentX = e.pageX - this.offsetLeft;
    const distance = startX - currentX;
    this.scrollLeft = scrollLeft + distance;
    startX = currentX;
    scrollLeft = this.scrollLeft;
  } else {
    startX = e.pageX - this.offsetLeft;
    scrollLeft = this.scrollLeft;
  }
};
