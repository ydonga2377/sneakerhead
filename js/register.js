"use strict"

$("#register-btn").click(function () {
    var firstName = $("#f_name").val();
    var lastName = $("#l_name").val();
    var email = $("#email").val();
    var password = $("#password").val();
    var confirmPassword = $("#confirm_password").val();


    if (password !== confirmPassword) {
        alert("Confirm Password Does not match with password.Please enter the matching password.");
        return;
    }

    var storedUser = JSON.parse(localStorage.getItem("users")) || [];

    var existingUser = storedUser.find(u => u.username === email);
    
    if (existingUser) {
        alert("Email is already registered. Please try with new email address.");
    }else {
        storedUser.push({ firstName: firstName, lastName: lastName, email: email, password: password });
        localStorage.setItem("users", JSON.stringify(storedUser));
        window.location.href = "index.html";
    }
})

const clearForm = () => {

    $("#f_name").value = "";
    $("#l_name").value = "";
    $("#email").value = "";
    $("#password").value = "";
    $("#confirm_password").value = "";

    $("#fn_error").textContent = "";
    $("#ln_error").textContent = "";
    $("#email_error").textContent = "";
    $("#pass_error").textContent = "";
    $("#confirm_pass_error").textContent = "";

    $("#f_name").focus();
};