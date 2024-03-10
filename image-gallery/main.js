"use strict";

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

let currentIndex = 0;
const images = $$(".wrapper .image img");

images.forEach((image) => {
  image.onclick = () => {
    showGallery(image);
    currentIndex = [...images].indexOf(image);
  };
});

$(".gallery .close").onclick = () => {
  $(".gallery").classList.remove("show");
};

$(".control.next").onclick = () => {
  showGallery(images[++currentIndex]);
};

$(".control.prev").onclick = () => {
  showGallery(images[--currentIndex]);
};

document.onkeydown = (e) => {
  if (e.key == "Escape") $(".gallery").classList.remove("show");
  if (e.key == "ArrowLeft" && currentIndex != 0) {
    showGallery(images[--currentIndex]);
  }
  if (e.key == "ArrowRight" && currentIndex != images.length - 1) {
    showGallery(images[++currentIndex]);
  }
};

function showGallery(image) {
  $(".gallery").classList.add("show");
  $(".gallery-inner img").src = image.src;

  if (image == images[0]) {
    $(".control.prev").classList.add("hide");
  } else {
    $(".control.prev").classList.remove("hide");
  }
  if (image == images[images.length - 1]) {
    $(".control.next").classList.add("hide");
  } else {
    $(".control.next").classList.remove("hide");
  }
}
