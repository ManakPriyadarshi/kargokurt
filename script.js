
// =====================
// ADD TO CART
// =====================
function addToCart(name, price, image){

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  let product = {
    name: name,
    price: price,
    image: image
  };

  cart.push(product);

  localStorage.setItem("cart", JSON.stringify(cart));

  alert("Added to Cart ");
}


// =====================
// OPEN PRODUCT PAGE
// =====================
function openProduct(name, price, image, rating){

  let product = {
    name: name,
    price: price,
    image: image,
    rating: rating
  };

  localStorage.setItem("product", JSON.stringify(product));

  window.location.href = "product.html";
}


// =====================
// LOAD PRODUCT DATA (product.html)
// =====================
if(document.getElementById("name")){

  let product = JSON.parse(localStorage.getItem("product"));

  if(product){
    document.getElementById("name").innerText = product.name;
    document.getElementById("price").innerText = "₹" + product.price;
    document.getElementById("mainImage").src = product.image;
    document.getElementById("rating").innerText = product.rating;
  }
}


// =====================
// OPEN CART PAGE
// =====================
function openCart(){
  window.location.href = "cart.html";
}


// =====================
// DISPLAY CART (cart.html)
// =====================
if(document.getElementById("cartItems")){

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  function displayCart(){
    let container = document.getElementById("cartItems");
    container.innerHTML = "";

    if(cart.length === 0){
      container.innerHTML = "<h3>Your cart is empty </h3>";
      return;
    }

    cart.forEach((item, index) => {
      container.innerHTML += `
        <div class="cart-card">
          <img src="${item.image}">
          <h3>${item.name}</h3>
          <p>₹${item.price}</p>
          <button onclick="deleteItem(${index})">❌ Remove</button>
        </div>
      `;
    });
  }

  window.deleteItem = function(index){
    cart.splice(index,1);
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
  }

  displayCart();
}


// =====================
// HERO AUTO SLIDER
// =====================
let slides = document.querySelectorAll(".slide");
let slideIndex = 0;

function changeSlide(){
  if(slides.length === 0) return;

  slides[slideIndex].classList.remove("active");
  slideIndex = (slideIndex + 1) % slides.length;
  slides[slideIndex].classList.add("active");
}

setInterval(changeSlide, 3000);


// =====================
// PRODUCT IMAGE SLIDER
// =====================
const images = [
  "images/kurta2product.jpg",
  "images/kurta3product.jpg",
  "images/kurta4product.jpg"
];

let index = 0;

function showImage(){
  let img = document.getElementById("mainImage");
  if(img) img.src = images[index];
}

function nextImage(){
  index = (index + 1) % images.length;
  showImage();
}

function prevImage(){
  index = (index - 1 + images.length) % images.length;
  showImage();
}

function setImage(i){
  index = i;
  showImage();
}


// =====================
// NAVIGATION
// =====================
function goHome(){
  window.location.href = "index.html";
}

function openKurta(){
  window.location.href = "kurta.html";
}

function openCargos(){
  window.location.href = "cargos.html";
}


// =====================
// ADD TO CART
// =====================
function addToCart(name, price, image){

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  let product = {
    name: name,
    price: price,
    image: image
  };

  cart.push(product);

  localStorage.setItem("cart", JSON.stringify(cart));

  alert("Added to Cart ");
}


// =====================
// OPEN PRODUCT PAGE
// =====================
function openProduct(name, price, image, rating){

  let product = {
    name: name,
    price: price,
    image: image,
    rating: rating
  };

  localStorage.setItem("product", JSON.stringify(product));

  window.location.href = "product.html";
}


// =====================
// LOAD PRODUCT DATA (product.html)
// =====================
if(document.getElementById("name")){

  let product = JSON.parse(localStorage.getItem("product"));

  if(product){
    document.getElementById("name").innerText = product.name;
    document.getElementById("price").innerText = "₹" + product.price;
    document.getElementById("mainImage").src = product.image;
    document.getElementById("rating").innerText = product.rating;
  }
}


// =====================
// OPEN CART
// =====================
function openCart(){
  window.location.href = "cart.html";
}


// =====================
// DISPLAY CART
// =====================
if(document.getElementById("cartItems")){

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  function displayCart(){
    let container = document.getElementById("cartItems");
    container.innerHTML = "";

    if(cart.length === 0){
      container.innerHTML = "<h3>Your cart is empty </h3>";
      return;
    }

    cart.forEach((item, index) => {
      container.innerHTML += `
        <div class="cart-card">
          <img src="${item.image}">
          <h3>${item.name}</h3>
          <p>₹${item.price}</p>
          <button onclick="deleteItem(${index})">❌ Remove</button>
        </div>
      `;
    });
  }

  window.deleteItem = function(index){
    cart.splice(index,1);
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
  }

  displayCart();
}


// =====================
// NAVIGATION
// =====================
function goHome(){
  window.location.href = "index.html";
}

function openKurta(){
  window.location.href = "kurta.html";
}

function openCargos(){
  window.location.href = "cargos.html";
}

function addCurrentProduct(){
  let product = JSON.parse(localStorage.getItem("product"));

  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(product);

  localStorage.setItem("cart", JSON.stringify(cart));

  alert("Added to Cart ");
}

function checkout(){

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  if(cart.length === 0){
    alert("Cart is empty !");
    return;
  }

  alert("Order Placed Successfully ");

  // clear cart
  localStorage.removeItem("cart");

  // redirect to home
  window.location.href = "index.html";
}

function placeOrder() {
    let product = JSON.parse(localStorage.getItem("buyProduct"));

    let orders = JSON.parse(localStorage.getItem("orders")) || [];

    let newOrder = {
        name: product.name,
        price: product.price,
        image: product.image,
        date: new Date().toLocaleString()
    };

    orders.push(newOrder);

    localStorage.setItem("orders", JSON.stringify(orders));

    alert("🎉 Order Placed Successfully!");
}


