// JavaScript to handle the contact form submission
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get the input values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Simple validation (check if fields are not empty)
    if (name && email && message) {
        alert("Thank you for contacting us, " + name + "! We'll get back to you soon.");
    } else {
        alert("Please fill in all the fields.");
    }

    // Optionally, clear the form after submission
    document.getElementById("contact-form").reset();
});
