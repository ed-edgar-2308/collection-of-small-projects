"use strict";

const draggable = $(".draggable");

draggable.ondragstart = function () {
  this.classList.add("dragging");
};
draggable.ondragend = function () {
  this.classList.remove("dragging");
};

$$(".box").forEach((box) => {
  box.ondragover = function (e) {
    e.preventDefault();
    this.appendChild(draggable);
  };
});
