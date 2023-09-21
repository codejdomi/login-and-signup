
document.addEventListener("DOMContentLoaded", function () {
    const loginButton = document.getElementById("lgin");

    loginButton.addEventListener("click", function () {
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        
        if (username === "admin" && password === "123456") {
            window.location.href = "index.html";
        } else {
            alert("Invalid username or password. Please try again.");
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const navigateButton = document.getElementById("toclick");

    navigateButton.addEventListener("click", function () {
        window.location.href = "formsignup.html";
    });
});