const Stack = require('./stack-data-structure');

const stackList = document.getElementById('stack-list');
const stackInput = document.getElementById('stack-input');
const container = document.getElementById('container');
const warningTopStack = document.querySelector('#stack-container .warning-top');
const warningBottomStack = document.querySelector(
  '#stack-container .warning-bottom'
);
const addStackBtn = document.getElementById('add-stack');
const takeStackBtn = document.getElementById('take-stack');

const newStack = new Stack();

const clearStackInput = () => {
  stackInput.value = '';
};

const renderListStack = () => {
  newStack.display();
};

renderListStack();

const generateWarningStack = (type) => {
  if (type === 'underflow') {
    newStack.push(stackList);
  } else if (type === 'overflow') {
    newStack.isEmpty();
  }
};

const addToStack = () => {
  try {
    newStack.canPush();
    clearStackInput();
  } catch (error) {
    generateWarningStack();
  }
};

const removeFromStack = () => {
  try {
    // ... your code goes here
    clearStackInput();
  } catch (error) {
    // there was an underflow error, handle it
  }
};

addStackBtn.addEventListener('click', addToStack);
takeStackBtn.addEventListener('click', removeFromStack);
