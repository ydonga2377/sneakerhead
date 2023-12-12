// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();

// owl carousel 

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 6
        }
    }
})

$(document).ready(function() {
    // Sample array of products
    var products = [
      { name: 'Shoes 1', price: 200, image: '../images/shoe1.png' },
      { name: 'Shoes 2', price: 70, image: '../images/shoe2.png' },
      { name: 'Shoes 3', price: 400, image: '../images/shoe3.png' },
      { name: 'Shoes 4', price: 450, image: '../images/shoe4.png' },
    ];

    // Function to create product elements
    function createProductElement(product) {
      return `
        <div class="col-3">
          <div class="box">
            <a href="">
              <div class="img-box">
                <img src="${product.image}" alt="${product.name}">
              </div>
              <div class="detail-box">
                <h6>${product.name}</h6>
                <h6>
                  Price
                  <span>${product.price}</span>
                </h6>
              </div>
              <div class="new">
                <span>New</span>
              </div>
            </a>
          </div>
        </div>
      `;
    }

    // Loop through the products and append them to the productContainer
    for (var i = 0; i < products.length; i++) {
      $('#productContainer').append(createProductElement(products[i]));
    }
  });