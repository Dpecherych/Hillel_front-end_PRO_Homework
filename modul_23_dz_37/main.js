const rangeInput = document.getElementById('rangeInput');
const numberInput = document.getElementById('numberInput');
const greenBlock = document.querySelector('.green');
const redBlock = document.querySelector('.red');
const commisioOnDisplay = document.getElementById('commission');
const resultDisplay = document.getElementById('result');

rangeInput.addEventListener('input');
numberInput.addEventListener('input');

rangeInput.oninput = function() {
    document.getElementById('rangeInput').innerHTML = input.value;
  };

