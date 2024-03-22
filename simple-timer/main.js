"use strict";

const resetBtn = $("#reset");
const playBtn = $("#play");
const timerEl = $("#timer");
const root = $(":root");

// Initial setup
const TOTAL_SECONDS = 60;
let isPlaying = false;
let currentSeconds = TOTAL_SECONDS;
timerEl.innerText = formatTime(TOTAL_SECONDS);

const timerInterval = setInterval(run, 1000);

playBtn.addEventListener("click", () => {
  isPlaying = !isPlaying;
  playBtn.classList.toggle("play");
  playBtn.classList.toggle("bg-green-500"); // Toggle the color class
  const playIcon = playBtn.querySelector("i");
  playIcon.classList.toggle("fa-play"); // Toggle the play icon
  playIcon.classList.toggle("fa-pause"); // Toggle the pause icon
});
resetBtn.addEventListener("click", resetAll);

// Format the time
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const newSeconds = seconds % 60;

  return `${minutes.toString().padStart(2, "0")}:${newSeconds
    .toString()
    .padStart(2, "0")}`;
}

// Run the timer
function run() {
  if (isPlaying) {
    currentSeconds--;
    if (currentSeconds <= 0) {
      clearInterval(timerInterval);
      resetAll();
    }

    timerEl.innerText = formatTime(currentSeconds);
    root.style.setProperty("--degrees", calcDeg());
  }
}

// Reset all the values
function resetAll() {
  isPlaying = false;
  playBtn.classList.remove("play");
  playBtn.classList.remove("bg-green-500"); // Remove the color class
  const playIcon = playBtn.querySelector("i");
  playIcon.classList.remove("fa-pause"); // Remove the pause icon
  playIcon.classList.add("fa-play"); // Add the play icon
  currentSeconds = TOTAL_SECONDS;
  timerEl.innerText = formatTime(TOTAL_SECONDS);
  root.style.setProperty("--degrees", "0deg");
}

// Calculate the degrees
function calcDeg() {
  return `${360 - (currentSeconds / TOTAL_SECONDS) * 360}deg`;
}
