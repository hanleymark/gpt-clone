import getConfig from './lib/getConfig.js';

const messages = [];

const inputButtonSubmit = () => {
  const inputText = document.getElementById('input-text').value;
  if (!inputText) return;

  const prompt = {
    role: 'user',
    content: inputText,
  };
  messages.push(prompt);
  console.log(`Submitting input: ${inputText}`);
  fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: messages,
        stream: false,
      }),
    })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const response = data.choices[0].message.content;
      messages.push({
        role: 'bot',
        content: response,
      });
    
      updateDisplay();
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

const clearButtonSubmit = () => {
  console.log('Clear button pressed');
};

const updateDisplay = () => {
    const display = document.getElementById('content-messages');
    display.innerHTML = messages.map((message) => {
        return `<div class="message-wrapper role-${message.role}">${message.content}</div>`;
    }).join('');
    }

document.addEventListener('DOMContentLoaded', () => {
  const inputButton = document.querySelector('#input-button');
  const clearButton = document.querySelector('#clear-button');
  if (inputButton) {
    inputButton.addEventListener('click', inputButtonSubmit);
  }
  if (clearButton) {
    clearButton.addEventListener('click', clearButtonSubmit);
  }
});

// This has to come after the DOMContentLoaded event listener is added
// otherwise the 'await' may cause the DOMContentLoaded event to be missed
const config = await getConfig();
const apiKey = config?.OPEN_AI_KEY;
