"use strict";

let listDivImg = $$(".list-img div");
let currentIndex = 0;

setCurrent(currentIndex);

listDivImg.forEach((img, index) => {
  img.onclick = () => {
    setCurrent(index);
  };
});

$(".next").onclick = () => {
  if (currentIndex == listDivImg.length - 1) {
    currentIndex = 0;
  } else currentIndex++;

  setCurrent(currentIndex);
};

$(".prev").onclick = () => {
  if (currentIndex == 0) currentIndex = listDivImg.length - 1;
  else currentIndex--;

  setCurrent(currentIndex);
};

function setCurrent(index) {
  currentIndex = index;
  $(".img-wrap img").src = listDivImg[currentIndex].querySelector("img").src;

  listDivImg.forEach((item) => {
    item.classList.remove("active");
  });

  listDivImg[currentIndex].classList.add("active");
}
