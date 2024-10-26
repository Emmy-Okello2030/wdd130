// Example script for form submission
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Your message has been sent!");
    this.reset(); // Resets the form fields
});
