"use strict"

$(document).ready(function () {

  $("#checkoutToPayment").on('click', function () {
    var firstName = $("#f_name").val();
    var lastName = $("#l_name").val();
    var phone = $("#phone").val();
    var email = $("#email").val();
    var address = $("#address").val();
    var zipcode = $("#zipcode").val();

    if (!firstName && !lastName && !phone && !email && !address && !zipcode) {
      alert("Please fill in all required fields");
    } else {
      var userData = {
        firstName: firstName,
        lastName: lastName,
        phone: phone,
        email: email,
        address: address,
        zipcode: zipcode
      }
      localStorage.setItem("billingDetails", JSON.stringify(userData));

      alert("Checkout successfull! User data has been stored");
      window.location.href = "thankyou.html"
    }

  })

  var storedCartItemData = JSON.parse(localStorage.getItem("cartItems")) || [];
  var tableBody = $("#totalProdcutAmount tbody");

  var totalBillAmout = 0;

  $.each(storedCartItemData, function (index, productDetail) {

    var totalProductPrice = (productDetail.price * productDetail.quantity);

    var row = '<tr class="table_row_' + index + '">' +
      '<td>' + productDetail.name + '</td>' +
      '<td>' + productDetail.quantity + '</td>' +
      '<td>' + productDetail.price + '</td>' +
      '</tr>';
    tableBody.append(row);

    // Calculate the Total Bill Price
    totalBillAmout += totalProductPrice;
  });

  $("#totalBillAmout").text(totalBillAmout.toFixed(2));
})
