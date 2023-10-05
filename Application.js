const chatMessages = document.getElementById('chatMessages');
const messageInput = document.getElementById('messageInput');
const sendButton = document.getElementById('sendButton');
const serverUrl = 'ws://your_server_url'; // Replace 'your_server_url' with the WebSocket server URL

let ws;

function showMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.textContent = message;
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function sendMessage() {
    const message = messageInput.value;
    if (message.trim() === '') return;

    ws.send(message);
    messageInput.value = '';
}

function setupWebSocket() {
    ws = new WebSocket(serverUrl);

    ws.onopen = () => {
        showMessage('Connected to the server.');
    };

    ws.onmessage = (event) => {
        showMessage(event.data);
    };

    ws.onclose = () => {
        showMessage('Disconnected from the server.');
    };
}

sendButton.addEventListener('click', sendMessage);

document.addEventListener('DOMContentLoaded', () => {
    setupWebSocket();
});
