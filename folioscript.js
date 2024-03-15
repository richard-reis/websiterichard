$('body').hide().fadeIn(2000);

document.addEventListener("DOMContentLoaded", function () {
    // Get the contact link element
    var contactLink = document.getElementById("contact-link");

    // Add click event listener
    contactLink.addEventListener("click", function (event) {
        // Prevent default link behavior
        event.preventDefault();

        // Scroll to the end of the website
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth' // Optional smooth scrolling
        });
    });
});
