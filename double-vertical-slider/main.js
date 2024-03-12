"use strict";

const slidesLength = $(".right-slide").querySelectorAll("div").length;

let activeSlideIndex = 0;

$(".left-slide").style.top = `-${(slidesLength - 1) * 100}vh`;

$(".up-button").addEventListener("click", () => {
  changeSlide("up");
});
$(".down-button").addEventListener("click", () => {
  changeSlide("down");
});

const changeSlide = (direction) => {
  const sliderHeight = $(".slider-container").clientHeight;
  if (direction === "up") {
    activeSlideIndex++;
    if (activeSlideIndex > slidesLength - 1) {
      activeSlideIndex = 0;
    }
  } else if (direction === "down") {
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesLength - 1;
    }
  }

  $(".right-slide").style.transform = `translateY(-${
    activeSlideIndex * sliderHeight
  }px)`;
  $(".left-slide").style.transform = `translateY(${
    activeSlideIndex * sliderHeight
  }px)`;
};
