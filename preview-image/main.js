"use strict";

$("#input-img").onchange = (e) => {
  console.log("🚀 ~ e.target:", e.target);
  let file = e.target.files[0];

  if (!file) return;

  let img = document.createElement("img");
  img.src = URL.createObjectURL(file);

  $(".preview").appendChild(img);
};
