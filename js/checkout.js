"use strict"

$(document).ready(function () {

  $("#checkoutToPayment").on('click', function () {
    var firstName = $("#f_name").val();
    var lastName = $("#l_name").val();
    var phone = $("#phone").val();
    var email = $("#email").val();
    var address = $("#address").val();
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
