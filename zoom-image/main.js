"user strict";

const result = $(".zoomer .result");
const size = 4;

$$(".zoomer .image").forEach((item) => {
  item.onmousemove = function (e) {
    result.classList.remove("hide");

    const img = item.querySelector("img");

    let x = (e.offsetX / this.offsetWidth) * 100;
    let y = (e.offsetY / this.offsetHeight) * 100;

    let posX = e.pageX - $(".zoomer").offsetLeft;
    let posY = e.pageY - $(".zoomer").offsetTop;

    result.style.cssText = `
			background-image: url(${img.src});
			background-size: ${(img.width * size) / 10}rem ${(img.height * size) / 10}rem;
			background-position : ${x}% ${y}%;
			left: ${posX}px;
			top: ${posY}px;
		`;
  };

  item.onmouseleave = () => {
    result.style = ``;
    result.classList.add("hide");
  };
});
