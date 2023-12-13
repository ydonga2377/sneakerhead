"use strict"

const $ = selector => document.querySelector(selector);

const user = localStorage.getItem('username');
const pass = localStorage.getItem('password');

const validForm = () => {

    const username = $("#username").value;
    const password = $("#password").value;

    let isValid = true;
    if (username === '') {
        $("#username_error").textContent = "Username is required.";
        isValid = false;
    } else if (user != username) {
        $("#username_error").textContent = "Username is not matched.";
        isValid = false;
    } else {
        $("#username_error").textContent = "";
    }

    if (password === '') {
        $("#pass_error").textContent = "Password is required.";
        isValid = false;
    } else if (pass != password) {
        $("#pass_error").textContent = "Password is not matched.";
        isValid = false;
    } else {
        $("#pass_error").textContent = "";
    }

    // if(isValid){
    //     if(username)
    // }

};

const clearForm = () => {

    $("#username").value = "";
    $("#password").value = "";
    $("#login_type").value = "";


    $("#username_error").textContent = "";
    $("#pass_error").textContent = "";
    $("#login_type_error").textContent = "";

    $("#f_name").focus();
};

document.addEventListener("DOMContentLoaded", () => {

    $("#login").addEventListener("click", validForm);
    $("#cancel").addEventListener("click", clearForm);

    $("#username").focus();
});
