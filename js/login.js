"use strict"

$("#login").click(function () {
    var username = $("#username").val();
    var password = $("#password").val();

    var storedUser = JSON.parse(localStorage.getItem("users")) || [];

    var user = storedUser.find(u => u.email === username && u.password === password);

    if (user) {
        window.location.href = "index.html";
    } else {
        alert("Invalid username or password");
    }
});