"use strict";

$$(".food-menu button").forEach((btn) => {
  btn.onclick = function () {
    const type = this.getAttribute("type-food");

    $(".food-menu button.active").classList.remove("active");
    this.classList.add("active");

    $$(".food-item").forEach((item) => {
      if (type == "all" || item.getAttribute("type-food") == type)
        item.classList.remove("hide");
      else item.classList.add("hide");
    });
  };
});
