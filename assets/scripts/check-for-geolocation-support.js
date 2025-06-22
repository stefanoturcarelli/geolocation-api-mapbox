"use strict";

// Function to display message in the message box
function displayMessage(message, isSupported) {
  const messageBox = document.getElementById("geolocation-message");
  const messageText = messageBox.querySelector("p");

  messageText.textContent = message;

  // Add appropriate class based on support status
  if (isSupported) {
    messageBox.classList.add("message-success");
    messageBox.classList.remove("message-error");
  } else {
    messageBox.classList.add("message-error");
    messageBox.classList.remove("message-success");
  }
}

// Check for geolocation support
if (navigator.geolocation) {
  displayMessage(
    "✅ Geolocation is supported! Your browser can access location services.",
    true
  );
  console.log("Geolocation is supported!");
} else {
  displayMessage("❌ Geolocation is not supported for this Browser/OS.", false);
  console.log("Geolocation is not supported for this Browser/OS.");
}
