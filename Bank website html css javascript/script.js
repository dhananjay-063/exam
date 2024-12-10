document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Sample login credentials (you can replace this with actual authentication)
    var validUsername = "user123";
    var validPassword = "pass123";

    if (username === validUsername && password === validPassword) {
        alert("Login successful!");
        window.location.href = "#home"; // Redirect to homepage after successful login
    } else {
        document.getElementById('error-message').style.display = "block";
    }
});
