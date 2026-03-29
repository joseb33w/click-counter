const counterEl = document.getElementById('counter');
const plusBtn = document.getElementById('plus');
const minusBtn = document.getElementById('minus');
const resetBtn = document.getElementById('reset');

let count = 0;

function updateDisplay() {
  counterEl.textContent = count;
  counterEl.classList.remove('negative', 'zero');
  if (count < 0) counterEl.classList.add('negative');
  else if (count === 0) counterEl.classList.add('zero');

  // Pop animation
  counterEl.classList.add('pop');
  setTimeout(() => counterEl.classList.remove('pop'), 150);
}

plusBtn.addEventListener('click', () => { count++; updateDisplay(); });
minusBtn.addEventListener('click', () => { count--; updateDisplay(); });
resetBtn.addEventListener('click', () => { count = 0; updateDisplay(); });

updateDisplay();
