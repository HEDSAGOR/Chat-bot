// Función para que el chatbot hable
function speak(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'es-ES';  // Español
    speechSynthesis.speak(utterance);
}

// Llamar a la función `speak` cada vez que el chatbot responda
function sendMessage() {
    let userInput = document.getElementById('user-input').value;
    if (userInput.trim() === '') return;

    // Mostrar el mensaje del usuario
    let chatLog = document.getElementById('chat-log');
    let userMessage = document.createElement('div');
    userMessage.textContent = 'Tú: ' + userInput;
    chatLog.appendChild(userMessage);
    // Función para que el chatbot hable
function speak(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'es-ES';  // Español
    speechSynthesis.speak(utterance);
}
