import getConfig from './lib/getConfig.js';
import { botSvg, userSvg } from './avatars.js';

const apiUrl = 'https://api.openai.com/v1/chat/completions';
const messages = [];
const history = [];

const inputButton = document.querySelector('#input-button');
const clearButton = document.querySelector('#clear-button');
const inputTextField = document.getElementById('input-text');

let requestController;
let signal;
let timeoutId;

const inputButtonSubmit = async () => {
  const inputText = inputTextField.value.trim();
  if (!inputText) return;

  requestController = new AbortController();
  signal = requestController.signal;

  const prompt = {
    role: 'user',
    content: inputText,
  };

  messages.push(prompt);
  updateMessagesDisplay(messages);
  inputTextField.value = '';
  inputTextField.disabled = true;
  inputButton.disabled = true;

  console.log(`Submitting input: ${inputText}`);

  timeoutId = setTimeout(() => {
    requestController.abort();
    alert('The request timed out. Please try again.');
    const lastMessage = messages.pop();
    updateMessagesDisplay(messages);
    inputTextField.value = lastMessage.content;
    inputTextField.disabled = false;
    inputButton.disabled = false;
    inputTextField.focus();
  }, 60000);

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      signal: signal,
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: messages,
        stream: false,
      }),
    });
    const data = await response.json();

    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    console.log(data);

    const answer = data.choices[0].message.content;

    messages.push({
      role: 'assistant',
      content: answer,
    });

    history.push({
      question: inputText,
      answer: answer,
    });

    updateMessagesDisplay(messages);
    updateHistoryDisplay(history);
    inputTextField.disabled = false;
    inputButton.disabled = false;
    inputTextField.focus();
  } catch (error) {
    if (error.name === 'AbortError') {
      console.log('Fetch aborted');
    } else {
      console.error('Fetch error:', error);
      const lastMessage = messages.pop();
      updateMessagesDisplay(messages);
      inputTextField.value = lastMessage.content;
      inputTextField.disabled = false;
      inputButton.disabled = false;
    }
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
  }
};

const clearButtonSubmit = () => {
  const verify = confirm(
    'Are you sure you want to clear the chat history? This will also abort pending requests.'
  );
  if (!verify) return;
  requestController.abort();
  if (timeoutId) {
    console.log(`${`Timeout ${timeoutId} cleared`}`);
    
    clearTimeout(timeoutId);
  }
  messages.length = 0;
  history.length = 0;
  updateMessagesDisplay(messages);
  updateHistoryDisplay(history);
  inputTextField.disabled = false;
  inputButton.disabled = false;
  inputTextField.focus();
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
  if (inputTextField) {
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
