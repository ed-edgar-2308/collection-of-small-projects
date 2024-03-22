"use strict";

const notes = JSON.parse(localStorage.getItem("notes"));

if (notes) {
  notes.forEach((note) => addNewNote(note));
}

$("#add").addEventListener("click", () => addNewNote());

function addNewNote(text = "") {
  const note = document.createElement("div");
  note.classList.add("note");
  note.innerHTML = `
    <div class="tools">
        <button class="edit"><i class="fas fa-edit"></i></button>
        <button class="delete"><i class="fas fa-trash-alt"></i></button>
    </div>

    <div class="main ${text ? "" : "hide"}"></div>
    <textarea class="${text ? "hide" : ""}"></textarea>
  `;

  const textArea = note.querySelector("textarea");
  const editBtn = note.querySelector(".edit");
  const deleteBtn = note.querySelector(".delete");
  const main = note.querySelector(".main");

  textArea.value = text;
  main.innerHTML = marked(text);

  textArea.addEventListener("input", (e) => {
    main.innerHTML = marked(e.target.value);
    updateLS();
  });

  editBtn.addEventListener("click", () => {
    main.classList.toggle("hide");
    textArea.classList.toggle("hide");
  });

  deleteBtn.addEventListener("click", () => {
    note.remove();
    updateLS();
  });

  document.body.appendChild(note);
}

function updateLS() {
  const notes = [];

  $$("textarea").forEach((note) => notes.push(note.value));

  localStorage.setItem("notes", JSON.stringify(notes));
}
