"use strict";

counterUp($(".counter.face h2"), 3300);
counterUp($(".counter.youtube h2"), 1000);
counterUp($(".counter.tiktok h2"), 9900);

function counterUp(el, to) {
  let speed = 200;
  let from = 0;
  let step = to / speed;
  const counter = setInterval(function () {
    from += step;
    if (from == to) {
      el.innerText = to;
      clearInterval(counter);
    } else {
      el.innerText = Math.round(from);
    }
  }, 1);
}
