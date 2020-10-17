let counterValue = 0;
let Value = document.querySelector('#value');

const decrementBTN = document.querySelector('button[data-action="decrement"]');
const incrementBTN = document.querySelector('button[data-action="increment"]');

decrementBTN.addEventListener('click', () => {
  counterValue -= 1;
  Value.textContent = counterValue;
});

incrementBTN.addEventListener('click', () => {
  counterValue += 1;
  Value.textContent = counterValue;
});
