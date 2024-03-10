"use strict";

$(".open-modal-btn").onclick = toggleModal;
$(".modal__header i").onclick = toggleModal;
$(".modal__footer button").onclick = toggleModal;

$(".modal").onclick = (e) => {
  if (e.target == e.currentTarget) toggleModal();
};

document.onkeydown = (e) => {
  if (e.key == "Escape" && !$(".modal").classList.contains("hide")) {
    toggleModal();
  }
};

function toggleModal() {
  $(".modal").classList.toggle("hide");
}
