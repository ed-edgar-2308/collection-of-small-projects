"use strict";

loop();
window.onscroll = loop;

function loop() {
  $$(".show-on-scroll").forEach((item) => {
    if (isElInViewPort(item)) {
      item.classList.add("start");
    } else {
      item.classList.remove("start");
    }
  });
}

function isElInViewPort(element) {
  let rect = element.getBoundingClientRect();

  return rect.bottom >= 0 && rect.top <= window.innerHeight;
}
