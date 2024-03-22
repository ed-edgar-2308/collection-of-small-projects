"use strict";

const body = $("body");
const range = $(".range");
const rangeBar = $(".range-bar");

setRangeBar(40);

range.onmousemove = function (e) {
  const percent = Math.round((e.layerX / this.offsetWidth) * 100);
  setRangeBar(percent);
};

function setRangeBar(percent) {
  rangeBar.style.width = `${percent}%`;
  rangeBar.querySelector("span").innerText = `${percent}%`;
  body.style.backgroundColor = `rgba(0, 0, 0, ${percent / 100})`;
}
