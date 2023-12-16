"use strict"

const clearError = (inputId) => {
    $(`${inputId} + span`).text("");
};

$("#firstName, #lastName, #email, #registerPassword, #confirmPassword").on("input", function () {
    clearError(`#${this.id}`);
});

$("#register-btn").click(function () {
    var firstName = $("#firstName").val();
    var lastName = $("#lastName").val();
    var email = $("#email").val();
    var password = $("#registerPassword").val();
    var confirmPassword = $("#confirmPassword").val();

    var nameRegex = /^[a-zA-Z]+$/;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{5,}$/;

    if (!firstName && !nameRegex.test(firstName)) {
        $("#firstName + span").text("Please enter your First name and it should only contain char.");
    }

    if (!lastName && !nameRegex.test(lastName)) {
        $("#lastName + span").text("Please enter your Last name and it should only contain char.");
    }

    if (!email && !emailRegex.test(email)) {
        $("#email + span").text("Please enter valid email address.(ex: youremail@gmail.com)");
    }

    if (!passwordRegex.test(password)) {
        $("#registerPassword + span").text("Password must contain at least one letter and one number, and be at least 5 characters long.");
        return;
    }

    if (password !== confirmPassword) {
        $("#confirmPassword + span").text("Confirm Password does not match with Password. Please enter the matching password.");
        return;
    }

    var storedUser = JSON.parse(localStorage.getItem("users")) || [];

    var existingUser = storedUser.find(u => u.username === email);

    if (existingUser) {
        alert("Email is already registered. Please try with new email address.");
    } else {
        storedUser.push({ firstName: firstName, lastName: lastName, email: email, password: password });
        localStorage.setItem("users", JSON.stringify(storedUser));
        window.location.href = "index.html";
    }

})

const clearForm = () => {

    $("#firstName").val("");
    $("#lastName").val("");
    $("#email").val("");
    $("#registerPassword").val("");
    $("#confirmPassword").val("");

    // $("#fn_error").text("");
    // $("#ln_error").text("");
    // $("#email_error").text("");
    // $("#pass_error").text("");
    // $("#confirm_pass_error").text("");

    $("#f_name").focus();
};