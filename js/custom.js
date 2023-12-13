$(document).ready(function() {

  $("#owl-carousel-banner").owlCarousel({
      items: 1,
      loop: true,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      nav: true,
      dots: false,
      navText: ["<i class='fa fa-arrow-left'></i>", "<i class='fa fa-arrow-right'></i>"],
  });
  
  $('#testimonial-owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots:false,
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 2
        }
    }
})

  $('#productCarousel').owlCarousel({
      loop: true,
      margin: 10,
      responsiveClass: true,
      autoplay:true,
      autoplayTimeout:2000,
      // autoplayHoverPause:true,
      nav:true,
      dots:true,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 4,
        },
      },
    });

    // Loop through the first 4 products and append them to the Owl Carousel
    for (var i = 0; i < 6; i++) {
      $('#productCarousel').trigger('add.owl.carousel', [createProductElement(products[i])]).trigger('refresh.owl.carousel');
    }

    // Function to create product elements
    function createProductElement(product) {
      return `
        <div class="item">
          <div class="box">
            <a href="single-product.html?id=${product.id}">
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

      displayProducts(products);

    // Handle filter change event
    $('#price-filter').on('change', function () {
        filterProducts($(this).val());
    });
  });

  function displayProducts(products) {
    var productContainer = $('#product-container');

    // Clear existing products
    productContainer.empty();

    // Loop through products and append HTML
    $.each(products, function (index, product) {
      var productHtml = '<a href="single-product.html?id=' + product.id + '" class="">';
      productHtml += '<div class="col-3 single-product-block">';
      productHtml += '<div class="container-exp">';
      productHtml += '<div class="card">';
      productHtml += '<div class="imgBx">'+'<img src="' + product.image + '">'+'</div>';
     
      productHtml += '<div class="contentBx"><h2>' + product.name + '</h2>';
      productHtml += '<p class="card-text">$' + product.price + '</p>';
      productHtml += '<a href="single-product.html?id=' + product.id + '" class="btn btn-primary">Add to Cart</a>';
      productHtml += '</div>';
      productHtml += '</div>';
      productHtml += '</div></a>';
  
      productContainer.append(productHtml);
  });
  
}

function filterProducts(maxPrice) {
    var filteredProducts = [];

    if (maxPrice > 0) {
        filteredProducts = products.filter(function (product) {
            return product.price <= maxPrice;
        });
    } else {
        // If maxPrice is 0 (All), display all products
        filteredProducts = products;
    }

    // Display the filtered products
    displayProducts(filteredProducts);
}