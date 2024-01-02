document.addEventListener('DOMContentLoaded', function () {
  const rangeInput = document.getElementById('rangeInput');
  const numberInput = document.getElementById('numberInput');
  const greenBar = document.querySelector('.green-bar');
  const redBar = document.querySelector('.red-bar');

  rangeInput.addEventListener('input', updateValues);
  numberInput.addEventListener('input', updateValues);

  function updateValues() {
    const value = parseInt(rangeInput.value, 10);
    numberInput.value = value;

    const commission = calculateCommission(value);
    const totalValue = value + commission;

    greenBar.style.height = `${value}px`;
    redBar.style.height = `${commission}px`;

    console.log('Value:', value);
    console.log('Commission:', commission);
    console.log('Total Value:', totalValue);
  }

  function calculateCommission(value) {
    if (value < 20) {
      return value * 0.02;
    } else if (value >= 20 && value < 50) {
      return value * 0.04;
    } else if (value >= 50 && value < 75) {
      return value * 0.06;
    } else {
      return value * 0.08;
    }
  }
});