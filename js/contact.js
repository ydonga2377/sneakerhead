"use strict"

const $ = selector => document.querySelector(selector);

const contactUs = () =>
{
    let name = $("#name").value;
    let email = $("#email").value;
    let messageBox = $("#messageBox").value;

    if(name == "")
    {
       $("#errorMessage").textContent ="Name Cannot be blank"; 
    }
    else if(/\d/.test(name))
    {
        $("#errorMessage").textContent="Name Cannot be number"; 
    }
    else {$("#errorMessage").textContent="*";}

    if(email == "")
    {
        $("#errorMessage1").textContent="Email Cannot be blank";
    }
    else if (!emailIsValid(email))
    {
        $("#errorMessage1").textContent="Invalid email address";
    }
    else {$("#errorMessage1").textContent="*";}


    if(messageBox == "")
    {
        $("#errorMessage2").textContent="Message Cannot be blank";
    }
    else {$("#errorMessage2").textContent="*";}

    function emailIsValid(email) {
        var emailRegex = /^\S+@\S+\.\S+$/;
        return emailRegex.test(email);
      }

      if ($("#errorMessage").textContent === "*" && $("#errorMessage1").textContent === "*" && $("#errorMessage2").textContent === "*") {
        // All validations passed, show success message
        $("#successMessage").textContent = "Message sent successfully!";
        $("#name").value="";
        $("#email").value="";
        $("#messageBox").value="";
        // You might want to reset the form or perform other actions here
    } else {
        // Clear the success message if any validation fails
        $("#successMessage").textContent = "";
    }

};


document.addEventListener("DOMContentLoaded", () => {
    $("#send").addEventListener("click", contactUs);

    $("#name").focus();
});