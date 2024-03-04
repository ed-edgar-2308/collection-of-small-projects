const $ = document.querySelector.bind(document);

function toggleModal() {
  $(".modal").classList.toggle("hide");
}

$(".open-modal-btn").addEventListener("click", toggleModal);
$(".modal__header i").addEventListener("click", toggleModal);
$(".modal__footer button").addEventListener("click", toggleModal);

$(".modal").addEventListener("click", (e) => {
  if (e.target == e.currentTarget) toggleModal();
});
