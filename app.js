import getConfig from './lib/getConfig.js';
import { botSvg, userSvg } from './avatars.js';

const apiUrl = 'https://api.openai.com/v1/chat/completions';
const messages = [];
const history = [];

const inputButton = document.querySelector('#input-button');
const clearButton = document.querySelector('#clear-button');
const inputTextField = document.getElementById('input-text');

const inputButtonSubmit = async () => {
  const inputText = inputTextField.value.trim();
  if (!inputText) return;

  const prompt = {
    role: 'user',
    content: inputText,
  };
  messages.push(prompt);
  updateMessagesDisplay(messages);
  inputTextField.value = '';
  inputTextField.focus();

  console.log(`Submitting input: ${inputText}`);

  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: messages,
      stream: false,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const response = data.choices[0].message.content;
      messages.push({
        role: 'assistant',
        content: response,
      });

      history.push({
        question: inputText,
        answer: response,
      });

      updateMessagesDisplay(messages);
      updateHistoryDisplay(history);
    })
    .catch((error) => {
      console.error('Error:', error);
      alert('There was an error. Please try again.');
      const lastMessage = messages.pop();
      updateMessagesDisplay(messages);
      inputTextField.value = lastMessage.content;
    });
};

const clearButtonSubmit = () => {
  const verify = confirm('Are you sure you want to clear the chat history?');
  if (!verify) return;
  messages.length = 0;
  history.length = 0;
  updateMessagesDisplay(messages);
  updateHistoryDisplay(history);
};

const updateMessagesDisplay = (messages) => {
  clearMessages();
  const display = document.getElementById('content-messages');
  messages.forEach((message) => {
    const messageElement = document.createElement('div');
    messageElement.innerHTML = `${message.role === 'user' ? userSvg : botSvg}`;
    messageElement.innerHTML += message.content;
    messageElement.className = `message-wrapper role-${message.role}`;
    display.appendChild(messageElement);
  });
  display.scrollTop = display.scrollHeight;
};

const updateHistoryDisplay = (history) => {
  clearHistory();
  const display = document.getElementById('content-history');

  history.forEach((item, index) => {
    const historyElement = document.createElement('div');
    const historyItemText =
      item.question.length > 24
        ? `${item.question.substring(0, 21)}...`
        : item.question;
    historyElement.innerHTML = `${index + 1} ${historyItemText}`;
    historyElement.className = 'history-wrapper';
    historyElement.itemIndex = index;
    historyElement.addEventListener('click', (e) => {
      filterMessages(e.target.itemIndex);
    });
    display.appendChild(historyElement);
    display.scrollTop = display.scrollHeight;
  });
};

document.addEventListener('DOMContentLoaded', () => {
  if (inputButton) {
    inputButton.addEventListener('click', inputButtonSubmit);
  }
  if (clearButton) {
    clearButton.addEventListener('click', clearButtonSubmit);
  }
  if(inputTextField) {
    inputTextField.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        inputButtonSubmit();
      }
    });
  }
  inputTextField.focus();
});

const clearMessages = () => {
  document
    .querySelectorAll('.message-wrapper')
    .forEach((element) => element.remove());
  inputTextField.focus();
};

const clearHistory = () => {
  document
    .querySelectorAll('.history-wrapper')
    .forEach((element) => element.remove());
  inputTextField.focus();
};

const filterMessages = (index) => {
  updateMessagesDisplay(messages.slice(0, (index + 1) * 2));
};

// This has to come after the DOMContentLoaded event listener is added
// otherwise the 'await' may cause the DOMContentLoaded event to be missed
const config = await getConfig();
const apiKey = config?.OPEN_AI_KEY;
