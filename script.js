const messages = [
    "Hello!",
    "How can I help you?",
    "Ask me anything.",
    "This is a sample chat.",
    "Feel free to customize it."
];

let messageIndex = 0;
let letterIndex = 0;
let typingSpeed = 50; // Adjust the typing speed (milliseconds per letter)

const chatBox = document.getElementById("chat-box");
const startButton = document.getElementById("start-button");
const restartButton = document.getElementById("restart-button");

function displayLetter() {
    if (messageIndex < messages.length) {
        const message = messages[messageIndex];
        if (letterIndex < message.length) {
            const letter = message.charAt(letterIndex);
            const messageElement = document.createElement("span");
            messageElement.textContent = letter;
            chatBox.appendChild(messageElement);
            letterIndex++;
            setTimeout(displayLetter, typingSpeed);
        } else {
            messageIndex++;
            if (messageIndex < messages.length) {
                chatBox.appendChild(document.createElement("br")); // Add line break between messages
            } else {
                restartButton.style.display = "block"; // Show the restart button when the chat ends
            }
            letterIndex = 0;
            setTimeout(displayLetter, 1000); // Pause for 1 second between messages
        }
    }
}

function startChat() {
    startButton.disabled = true; // Disable the start button during the chat
    displayLetter();
}

function restartChat() {
    chatBox.innerHTML = ""; // Clear the chat box
    messageIndex = 0;
    letterIndex = 0;
    startButton.disabled = false; // Enable the start button
    restartButton.style.display = "none"; // Hide the restart button
}

startButton.addEventListener("click", startChat);
restartButton.addEventListener("click", restartChat);
