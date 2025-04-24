const con = document.getElementById("container");
let html = "";
fetch("https://fakestoreapi.com/products")
  .then((data) => data.json())
  .then((data) => {
    data.forEach((products) => {
      html += `<div class="product-box">
      <img class="product-img" src="${products.image}">
      <div class="content"><span>${products.title}</span>
      <span>${products.price}</span>
      </div>
      <button class="add-to-cart">+Add to cart</button>
            </div>
            `;
    });
    con.innerHTML = html;
  });
