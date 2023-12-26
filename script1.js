function sendMessage() {
    var mobileNumber = document.getElementById("mobileNumber").value;
    var resultElement = document.getElementById("result");

    // Basic validation
    if (!mobileNumber.trim()) {
        resultElement.innerHTML = "Please enter a mobile number.";
        return;
    }

    // Additional validation (you may customize this based on your requirements)
    // For simplicity, this example checks if the number starts with a plus sign
    if (!mobileNumber.startsWith("+")) {
        resultElement.innerHTML = "Invalid country code. Please start with a '+' sign.";
        return;
    }

    // You can add more validations here based on your needs

    // Perform actions (e.g., redirecting to WhatsApp, sending messages)
    // Note: The actual implementation would involve backend logic and API calls

    // Display a success message
    resultElement.innerHTML = "Message sent successfully!";
}
