document.getElementById("registrationForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const workshop = document.getElementById("workshop").value;
    const message = document.getElementById("message").value;

    // Form validation (additional checks can be added)
    if (!name || !email || !phone || !workshop) {
        alert("Please fill out all required fields.");
        return;
    }

    // Success message
    const responseMessage = `
        Thank you, ${name}, for registering for the ${workshop} workshop.
        We have sent a confirmation to your email: ${email}.
    `;

    document.getElementById("responseMessage").innerText = responseMessage;

    // Optionally clear the form
    document.getElementById("registrationForm").reset();
});
