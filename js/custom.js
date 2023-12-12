$(document).ready(function() {
    // Sample array of products
    

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
    $('#sampleCarousel').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
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
  
      // Sample data for 4 boxes
      var sampleData = [
        { content: 'Box 1' },
        { content: 'Box 2' },
        { content: 'Box 3' },
        { content: 'Box 4' },
      ];
  
      // Loop through the sample data and append them to the Owl Carousel
      for (var i = 0; i < sampleData.length; i++) {
        $('#sampleCarousel').trigger('add.owl.carousel', [createBoxElement(sampleData[i])]).trigger('refresh.owl.carousel');
      }
  
      // Function to create box elements
      function createBoxElement(box) {
        return `
          <div class="item">
            ${box.content}
          </div>
        `;
      }
    });
