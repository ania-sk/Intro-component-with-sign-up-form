//selecting form element
const form = document.querySelector(".singup-data-form");

// selecting form input elements
const inputFirstName = document.getElementById("first-name");
const inputLastName = document.getElementById("last-name");
const inputEmail = document.getElementById("email");
const inputPssword = document.getElementById("password");

// selecting error elements
const errorIcon = document.getElementsByClassName("error-icon");
const errorText = document.getElementsByClassName("error-text");

$("input").removeClass("error");

//checking the content of the form after submit
form.addEventListener("submit", function(event){
    event.preventDefault();

    //get data from the form 
    const firstName = inputFirstName.value;
    const lastName = inputLastName.value;
    const email = inputEmail.value;
    const password = inputPssword.value;   
    
    //checking whether data has been entered
    if(firstName === ""){        
        showHideError("first-name", false);
    } else {
        isValid = true;
        showHideError("first-name", true)
    }

    if(lastName === ""){
        showHideError("last-name", false);
    }  else {
        showHideError("last-name", true);
    }

    if(email === ""){        
        showHideError("email", false);
        inputEmail.placeholder = "email@example/com";
    } else {
        showHideError("email", true);
    }

    if(password === ""){
        showHideError("password", false);
    } else {
        showHideError("password", true);
    }
});

// showing/hiding errors
function showHideError(className, isValid){
   
    var textError = "." + className + ".error-text";
    var imgError = "." + className + ".error-icon";
    var borderError = "input#" + className;

    if(isValid === false){
        $(textError).removeClass("hidden");
        $(imgError).removeClass("hidden");
        $(borderError).addClass("error"); 
    } else {
        $(textError).addClass("hidden"); 
        $(imgError).addClass("hidden");
        $(borderError).removeClass("error");
    }
}