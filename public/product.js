let products = [];
const productContainer = document.getElementById("products-data");
fetch("https://node-pair.herokuapp.com/products")
  .then((res) => res.json())
  .then((data) => {
    products = data;
    console.log(data);
    showproducts(data);
  });
function showproducts(products) {
  productContainer.innerHTML = "";
  products.forEach((product) => {
    productContainer.innerHTML += `
    <div class="col-md-3">
      <div class="card" style="width: 18rem;">
  <img src="${product.imgURL}" class="card-img-top">
  <div class="card-body">
    <p class="card-text">${product.title}</p>  
    <p class="card-text">${product.category}</p>
    <p class="card-text">R${product.price}</p>
    <p class="card-text">${product.description}</p>
    <p class="card-text">${product.gender}</p>
  </div>
</div>
</div>
    `;
  });
}

function addProduct() {
  const task = document.querySelector(addpro).value;

  const todo = {};
}
