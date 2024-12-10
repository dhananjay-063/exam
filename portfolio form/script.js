document.getElementById("portfolioForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    // Get form data
    const name = document.getElementById("I1").value;
    const email = document.getElementById("I2").value;
    const mobile = document.getElementById("I3").value;
    
    // Check if the form is valid
    if (name && email && mobile) {
        alert("Portfolio successfully created for " + name + "!");
    } else {
        alert("Please fill in all required fields.");
    }
});