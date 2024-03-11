"use strict";

$$("button").forEach((btn) => {
  btn.onclick = function () {
    playSound(this.querySelector("audio"));
  };
});

document.onkeydown = (e) => {
  const btn = $(`.key-${e.key}`);
  btn && btn.click();
};

function playSound(audio) {
  const clone = audio.cloneNode();
  clone.play();
  setTimeout(() => (clone.volume = 0.8), 400);
  setTimeout(() => (clone.volume = 0.6), 800);
  setTimeout(() => (clone.volume = 0.4), 1200);
  setTimeout(() => (clone.volume = 0.2), 1600);
  setTimeout(() => (clone.volume = 0), 2000);
}
