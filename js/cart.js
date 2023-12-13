// cart.js

// Initialize an empty cart array to store added products
var cartItems = [];

// Function to add a product to the cart
function addToCart(product, quantity) {
    // Check if the product is already in the cart
    var existingItem = cartItems.find(item => item.id === product.id);

    if (existingItem) {
        // If the product is already in the cart, update the quantity
        existingItem.quantity += quantity;
    } else {
        // If the product is not in the cart, add it with the specified quantity
        cartItems.push({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: quantity,
            image: product.image
        });
    }

    // Save the updated cart to local storage (you can use other storage methods if needed)
    saveCartToLocalStorage();
}

// Function to save the cart to local storage
function saveCartToLocalStorage() {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
}

// Function to retrieve the cart from local storage
function getCartFromLocalStorage() {
    var storedCart = localStorage.getItem('cartItems');
    if (storedCart) {
        cartItems = JSON.parse(storedCart);
    }
}

// Function to display cart items
function displayCartItems() {
    // Your existing displayCartItems function logic here
}

// Call getCartFromLocalStorage to load cart data when the page loads
getCartFromLocalStorage();
// cart.js

// ... (your existing code)

// Function to display cart items in the HTML
function displayCartItemsInHTML() {
  // Get the cart items container
  var cartItemsContainer = document.getElementById('cart-items');

  // Clear existing content
  cartItemsContainer.innerHTML = '';

  // Check if the cart is empty
  if (cartItems.length === 0) {
    // Display a message for an empty cart
    cartItemsContainer.innerHTML = '<p>No items in the cart</p>';
  } else {
    // Loop through the cart items and generate HTML for each item
    cartItems.forEach((item, index) => {
      var cartItemHTML = `
          <div class="cart-item">
              <img src="${item.image}" alt="${item.name}" class="cart-item-image">
              <div class="cart-item-details">
                  <h4>${item.name}</h4>
                  <p>Price: $${item.price}</p>
                  <p>Quantity: ${item.quantity}</p>
                  <button class="remove-item-btn" data-index="${index}">Remove</button>
              </div>
          </div>
      `;
      cartItemsContainer.innerHTML += cartItemHTML;
    });
  }

  // Update the total in the HTML
  updateTotalInHTML();

  // Attach click event listeners to the remove buttons
  var removeButtons = document.getElementsByClassName('remove-item-btn');
  for (var i = 0; i < removeButtons.length; i++) {
    removeButtons[i].addEventListener('click', handleRemoveItemClick);
  }
}

// Function to handle the click on the "Remove" button
function handleRemoveItemClick(event) {
  var indexToRemove = event.target.getAttribute('data-index');

  // Remove the item from the cartItems array
  cartItems.splice(indexToRemove, 1);

  // Update the HTML to reflect the updated cart
  displayCartItemsInHTML();

  // Save the updated cart data
  saveCartToLocalStorage();
}

// ... (your existing code)



// Function to update the total in the HTML
function updateTotalInHTML() {
  // Get the total container and total span
  var totalContainer = document.getElementById('total-section');
  var totalSpan = document.getElementById('cart-total');

  // Calculate the total
  var total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  // Update the total in the HTML
  totalSpan.innerText = total.toFixed(2);

  // Show or hide the total section based on whether there are items in the cart
  totalContainer.style.display = cartItems.length > 0 ? 'block' : 'none';
}

// Function to handle the checkout button click
function handleCheckoutClick() {
  // Implement your checkout logic here
  alert('Proceeding to checkout. Implement your checkout logic.');
}

// Call the displayCartItemsInHTML function to initially display the cart items
displayCartItemsInHTML();

// Attach a click event listener to the checkout button
document.getElementById('checkout-btn').addEventListener('click', handleCheckoutClick);

// cart.js

// ... (your existing code)

function handleClearCartClick() {
  // Clear cart items
  cartItems = [];

  // Update the HTML to reflect the cleared cart
  displayCartItemsInHTML();

  // Save the updated cart data
  localStorage.removeItem('cartItems');
  // Refresh the page
  location.reload();
  console.log('cartItems');
}

document.getElementById('clear-cart-btn').addEventListener('click', handleClearCartClick);
console.log('cartItems');