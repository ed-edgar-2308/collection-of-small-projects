"use strict";

const listItems = [];

getData();

$("#filter").value = "";
$("#filter").oninput = function () {
  filterData(this.value);
};

function getData() {
  fetch("https://fakestoreapi.com/products")
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Error calling GET method" + response.status);
      }
    })
    .then((data) => {
      $(".products").innerHTML = "";

      data.forEach((product) => {
        const div = document.createElement("div");
        div.className = "product";
        div.innerHTML = `
					<img src="${product.image}" alt="">
					<div class="product-detail">
						<h4>${product.title.slice(0, 30)}</h4>
						<p>$${product.price}</p>
					</div>
        `;

        $(".products").appendChild(div);
        listItems.push(div);
      });
    })
    .catch((error) => {
      console.log("Error: ", error);
    });
}

function filterData(value) {
  listItems.forEach((item) => {
    if (item.innerText.toLowerCase().includes(value.toLowerCase())) {
      item.classList.remove("hide");
    } else {
      item.classList.add("hide");
    }
  });
}
