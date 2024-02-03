document.addEventListener('DOMContentLoaded', function ()
{
var sendButton = document.getElementById("sendButton");
var userInputField = document.getElementById("user-input");

sendButton.addEventListener('click', function (event)
{
    event.preventDefault();
    sendMessage();
});

userInputField.addEventListener('keypress', function (event)
{
    if (event.key === 'Enter' && !event.shiftKey)
    {
        event.preventDefault();
        sendMessage();
    }
});

function sendMessage()
{
    var userInput = userInputField.value.trim();
    if (userInput === "") return; // Skip empty messages

    // Disable the send button and input field to prevent sending another message
    sendButton.disabled = true;
    userInputField.disabled = true;

    var outputDiv = document.getElementById("output");
    var userMessage = document.createElement('div');
    userMessage.className = 'message user-message';
    userMessage.textContent = userInput;
    outputDiv.appendChild(userMessage);

    userInputField.value = ""; // Clear input after sending

    // Simulating a bot response (just echo atm)
    setTimeout(function ()
    {
        var botMessage = document.createElement('div');
        botMessage.className = 'message bot-message';
        botMessage.textContent = "Echo: " + userInput; 
        outputDiv.appendChild(botMessage);

        // Re-enable the send button and input field after the echo response
        sendButton.disabled = false;
        userInputField.disabled = false;
        userInputField.focus(); 
    }, 1000); // Adjust delay to simulate network latency
    }
});