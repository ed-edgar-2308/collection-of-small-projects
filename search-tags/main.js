"use strict";

const BASE_TAGS = ["nodejs", "reactjs"];

const wrapper = $(".wrapper__content");
const input = $("input");

input.value = "";
BASE_TAGS.forEach((tag) => {
  generateTags(tag);
});

input.onkeydown = (e) => {
  if (e.key == "Enter") {
    generateTags(input.value);
    input.value = "";
  }
};

$(".wrapper__button").onclick = removeAllTags;

function generateTags(tagContent) {
  const newLi = document.createElement("li");
  newLi.innerHTML = `
    ${tagContent}
    <i onclick="removeTag()"></i>
  `;
  wrapper.insertBefore(newLi, input);
}

function removeTag() {
  wrapper.removeChild(this.parentElement);
  input.focus();
}

function removeAllTags() {
  $$("li").forEach((li) => {
    wrapper.removeChild(li);
  });
  input.focus();
}
