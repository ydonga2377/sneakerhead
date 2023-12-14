$(document).ready(function () {
    var storedCartItemData = localStorage.getItem('cartItems');
    if (storedCartItemData) {
        cartItems = JSON.parse(storedCartItemData);
    }

    var storedBillngAddress = localStorage.getItem('billingDetails');
    if (storedBillngAddress) {
        billngAddress = JSON.parse(storedBillngAddress)
    }

    function randomOrderNumber() {
        var orderNumber = Math.floor(1000000000 + Math.random() * 9000000000);
        return orderNumber.toString();
    }

    $("#order_number span").html(randomOrderNumber);

    const currentDate = new Date();

    const shipDate = new Date(currentDate);
    shipDate.setDate(currentDate.getDate() + 10);

    const format = date => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${month}/${day}/${year}`;
    };

    const formatOrderDate = format(currentDate)
    const formatShipDate = format(shipDate)

    $("#order_date span").text(formatOrderDate);
    $("#ship_date span").text(formatShipDate);

    $.each(cartItems, function (index, data) {
        var dataHtml = '<div class="order_summ" id="' + index + '">'
        dataHtml += '<div class="order_image">'
        dataHtml += '<img src="' + data.image + '" alt="">'
        dataHtml += '</div>'
        dataHtml += '<div class="order_detail">'
        dataHtml += '<h4>Name: ' + data.name + '</h4>'
        dataHtml += '<span>Price: ' + data.price + '</span>'
        dataHtml += '<span>Qun: ' + data.quantity + '</span>'
        dataHtml += '</div>'
        dataHtml += '</div>';

        $("#shipped_data").append(dataHtml);
    });

    $("#billing_address,#ship_address").html('<span>' + billngAddress.firstName + ' ' + billngAddress.lastName + '</span></br><span>' + billngAddress.phone + '</span><p>' + billngAddress.address + '</p>');

    var totalBillAmout = 0;

    var storedCartItemData = JSON.parse(localStorage.getItem("cartItems")) || [];
    $.each(storedCartItemData, function (index, productDetail) {
        var totalProductPrice = (productDetail.price * productDetail.quantity);

        // Calculate the Total Bill Price
        totalBillAmout += totalProductPrice;
    });

    $("#subtotal").html('$' + totalBillAmout.toFixed(2))

    var finalTotal = totalBillAmout + 25;
    $("#final_total").html('$' + finalTotal.toFixed(2))

});