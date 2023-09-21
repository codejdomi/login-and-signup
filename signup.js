
document.addEventListener("DOMContentLoaded", function () {
    const navigateButton = document.getElementById("clickable");

    navigateButton.addEventListener("click", function () {
        window.location.href = "form.html";
    });
});