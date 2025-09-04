// Form submission handling

document.getElementById("userForm").addEventListener("submit", function(event) {

    event.preventDefault(); // stop page refresh

    let name = document.getElementById("name").value;

    let email = document.getElementById("email").value;

    let message = document.getElementById("message").value;

    let response = `Thank you, ${name}! Your information has been received.`;

    document.getElementById("formResponse").innerText = response;

    // Clear the form

    document.getElementById("userForm").reset();

});