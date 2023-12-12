$(document).ready(function() {
    // Sample array of products
    
    $('#productCarousel').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
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
    });