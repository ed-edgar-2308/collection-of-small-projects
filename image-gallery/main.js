"use strict";

let currentIndex = 0;
const images = $$(".wrapper__image img");

images.forEach((image) => {
  image.onclick = () => {
    showGallery(image);
    currentIndex = [...images].indexOf(image);
  };
});

$(".gallery .close").onclick = () => {
  $(".gallery").classList.remove("show");
};

$(".gallery__control.next").onclick = () => {
  showGallery(images[++currentIndex]);
};

$(".gallery__control.prev").onclick = () => {
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
  $(".gallery__inner img").src = image.src;

  if (image == images[0]) {
    $(".gallery__control.prev").classList.add("hide");
  } else {
    $(".gallery__control.prev").classList.remove("hide");
  }
  if (image == images[images.length - 1]) {
    $(".gallery__control.next").classList.add("hide");
  } else {
    $(".gallery__control.next").classList.remove("hide");
  }
}
