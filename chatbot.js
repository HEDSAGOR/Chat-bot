// Función para enviar el mensaje y obtener la respuesta
function sendMessage() {
    let userInput = document.getElementById('user-input').value;
    if (userInput.trim() === '') return;

    // Mostrar el mensaje del usuario
    let chatLog = document.getElementById('chat-log');
    let userMessage = document.createElement('div');
    userMessage.textContent = 'Tú: ' + userInput;
    chatLog.appendChild(userMessage);

    // Limpiar el campo de entrada
    document.getElementById('user-input').value = '';

    // Simular la respuesta del chatbot
    let botResponse = getBotResponse(userInput);

    // Mostrar la respuesta del chatbot
    let botMessage = document.createElement('div');
    botMessage.textContent = 'Bot: ' + botResponse;
    chatLog.appendChild(botMessage);

    // Desplazar el chat hacia abajo
    chatLog.scrollTop = chatLog.scrollHeight;
}

// Función simple para generar una respuesta del chatbot
function getBotResponse(input) {
    // Respuestas simples basadas en palabras clave
    const responses = {
        'hola': '¡Hola! ¿En qué puedo ayudarte?',
        'cómo estás': 'Estoy bien, gracias. ¿Y tú?',
        'adiós': '¡Hasta luego!',
        'default': 'Lo siento, no entiendo eso. ¿Podrías reformular la pregunta?'
    };

    input = input.toLowerCase();

    // Buscar una respuesta
    return responses[input] || responses['default'];
}
