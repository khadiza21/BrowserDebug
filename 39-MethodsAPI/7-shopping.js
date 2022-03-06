const displayLocalStorageCart = () => {
  const cart = getCart();
  for (const name in cart) {
    displayProducts(name);
  }
};

const addItem = () => {
  const pName = document.getElementById("product-name");
  const pNameValue = pName.value;
  if (!pNameValue) {
    return;
  }
  // display in the ui
  displayProducts(pNameValue);
  //   add product to local storage
  addProductToCart(pNameValue);
  //clear
  pName.value = "";
};

const displayProducts = (name) => {
  const ul = document.getElementById("product-list");
  const li = document.createElement("li");
  li.innerText = name;
  ul.appendChild(li);
};

const getCart = () => {
  const cart = localStorage.getItem("cart");
  let cartObj;
  if (cart) {
    cartObj = JSON.parse(cart);
  } else {
    cartObj = {};
  }
  return cartObj;
};

const addProductToCart = (name) => {
  const cart = getCart();
  if (cart[name]) {
    cart[name] = cart[name] + 1;
  } else {
    cart[name] = 1;
  }
  // console.log(cart);
  const cartStringified = JSON.stringify(cart);
  localStorage.setItem("cart", cartStringified);
};

const placeOrder = () => {
  document.getElementById("product-list").textContent = "";
  localStorage.removeItem("cart");
};
displayLocalStorageCart();
