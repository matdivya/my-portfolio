document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("#contact-form").addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Message sent successfully!");
    });
});
