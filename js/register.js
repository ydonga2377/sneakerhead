"use strict"

const $ = selector => document.querySelector(selector);

const validForm = () => {

    const firstname = $("#f_name").value;
    const lastName = $("#l_name").value;
    const email = $("#email").value;
    const password = $("#password").value;
    const confirmPassword = $("#c_password").value;
    const regex = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$";

    let isValid = true;

    if (firstname === "") {

        $("#fn_error").textContent = "First Name is required.";
        isValid = false;

    } else {

        $("#fn_error").textContent = "";

    }

    if (lastName === "") {

        $("#ln_error").textContent = "Last Name is required.";
        isValid = false;

    } else {

        $("#ln_error").textContent = "";

    }

    if (email === "") {

        $("#email_error").textContent = "Email is required.";
        isValid = false;

    } else if (!email.match(regex)) {

        $("#email_error").textContent = "Please enter a valid email address like abc@gmail.com";
        isValid = false;

    } else {

        $("#email_error").textContent = "";
        localStorage.setItem('username', email);

    }

    if (password === "") {

        $("#pass_error").textContent = "Password is required.";
        isValid = false;

    } else {

        $("#pass_error").textContent = "";

    }

    if (confirmPassword === "") {

        $("#c_pass_error").textContent = "Confirm Password is required.";
        isValid = false;

    } else {

        $("#c_pass_error").textContent = "";

    }

    if (password != confirmPassword) {

        $("#c_pass_error").textContent = "Password must match.";
        isValid = false;

    } else {

        $("#c_pass_error").textContent = "";
        localStorage.setItem('password', confirmPassword);

    }

    if (isValid) {
        window.location.href = "login.html";
    }
};

const clearForm = () => {
    // clear user inputs
    $("#f_name").value = "";
    $("#l_name").value = "";
    $("#email").value = "";
    $("#password").value = "";
    $("#c_password").value = "";

    $("#fn_error").textContent = "";
    $("#ln_error").textContent = "";
    $("#email_error").textContent = "";
    $("#pass_error").textContent = "";
    $("#c_pass_error").textContent = "";

    $("#f_name").focus();
};

document.addEventListener("DOMContentLoaded", () => {

    $("#submit").addEventListener("click", validForm);
    $("#clear").addEventListener("click", clearForm);

    $("#f_name").focus();
});
