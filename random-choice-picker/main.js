"use strict";

$("#textarea").value = "";
$("#textarea").focus();

$("#textarea").addEventListener("keyup", function (e) {
  createTags(this.value);
  if (e.key === "Enter") {
    setTimeout(() => {
      this.value = "";
    }, 10);
    randomSelect();
  }
});

function createTags(input) {
  const tags = input
    .split(",")
    .filter((tag) => tag.trim() !== "")
    .map((tag) => tag.trim());

  $("#tags").innerHTML = "";

  tags.forEach((tag) => {
    const tagEl = document.createElement("span");
    tagEl.classList.add("tag");
    tagEl.innerText = tag;
    $("#tags").appendChild(tagEl);
  });
}

function randomSelect() {
  const TIME = 10;

  const handleRandom = setInterval(() => {
    const randomTag = pickRandomTag();

    randomTag.classList.add("highlight");
    setTimeout(() => {
      randomTag.classList.remove("highlight");
    }, 100);
  }, 100);

  // Stop Random Choice
  setTimeout(() => {
    clearInterval(handleRandom);
    setTimeout(() => {
      pickRandomTag().classList.add("highlight");
    }, 100);
  }, TIME * 100);
}

function pickRandomTag() {
  return $$(".tag")[Math.floor(Math.random() * $$(".tag").length)];
}
