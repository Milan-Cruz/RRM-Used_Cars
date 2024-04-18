/********f************
    
    Project 3 Javascript
    Name: Milan Cruz
    Date: 23-03-2024
    Description:
        Task 1- validade before submitting. LINE 407
        Task 2- make the reset button work. LINE 410
        Task 3- make the add item buttons work. LINE 413
        Task 4- update formHasErrors() so that every field is validated
            a- required fields. LINE 125
            b- postal code regex. LINE 143
            c- email regex. LINE 159
            d- card radios checked. LINE 174
            e- expiry date validation. LINE 189
            f- card regex. LINE 212
            g- card modulus LINE 230


*********************/

function trim(str) {
    // Uses a regex to remove spaces from a string.
    return str.replace(/^\s+|\s+$/g, "");
}

function formFieldHasInput(fieldElement) {
    // Check if the text field has a value
    if (fieldElement.value == null || fieldElement.value.trim() == "") {
        // Invalid entry
        return false;
    }

    // Valid entry
    return true;
}

function hideErrors() {
    // Get an array of error elements
    let error = document.getElementsByClassName("error-message");

    // Loop through each element in the error array
    for (let i = 0; i < error.length; i++) {
        // Hide the error element by setting it's display style to "none"
        error[i].style.display = "none";
    }
}

function formHasErrors() {
    let errorFlag = false;

    //	Complete the validations below

    // ALL REQUIRED FIELDS VALIDATION
    let requiredFields = ["fullname", "phone", "email", "comments"];
    for (let i = 0; i < requiredFields.length; i++) {
        let textField = document.getElementById(requiredFields[i]);
        if (!formFieldHasInput(textField)) {
            document.getElementById(requiredFields[i] + "_error").style.display = "block";

            if (!errorFlag) {
                textField.focus();
                textField.select();
            }

            // Raise the error flag
            errorFlag = true;
        }
    }

    // PHONE REGEX VALIDATION
    let regexPhone = /^\d{10}$/;
    // something @ something . something
    let phoneDigits = document.getElementById("phone").value;

    // Regex part
    if (!regexPhone.test(phoneDigits)) {
        document.getElementById("phone_error").style.display = "block";

        if (!errorFlag) {
            document.getElementById("phone").focus();
            document.getElementById("phone").select();
        }

        // Raise error flag
        errorFlag = true;
    }

    // EMAIL REGEX
    // something @ something . something
    let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let emailValue = document.getElementById("email").value;

    if (!regexEmail.test(emailValue)) {
        document.getElementById("email_error").style.display = "block";

        if (!errorFlag) {
            document.getElementById("email").focus();
            document.getElementById("email").select();
        }

        errorFlag = true;
    }

    // Final function return
    return errorFlag;
}

function validate(e) {
    // Hides all error elements on the page
    hideErrors();

    // Determine if the form has errors
    if (formHasErrors()) {
        // Prevents the form from submitting
        e.preventDefault();

        // When using onSubmit="validate()" in markup, returning false would prevent
        // the form from submitting
        return false;
    }

    // When using onSubmit="validate()" in markup, returning true would allow
    // the form to submit
    return true;
}

function resetForm(e) {
    if (confirm('Clear contact info?')) {
        hideErrors();
        return true;
    }
    e.preventDefault();
    return false;
}

//RUNNING HAS ERRORS
// hideErrors();

function load() {
    // Hide all errors
    hideErrors();

    // Add event listener for the form submit
    document.getElementById("orderform").addEventListener("submit", validate);

    // Add event listener for the "clear form" reset
    document.getElementById("orderform").addEventListener("reset", resetForm);
}

// Add document load event listener
document.addEventListener("DOMContentLoaded", load);