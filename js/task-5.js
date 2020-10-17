const inputName = document.querySelector('#name-input');
const outName = document.querySelector('#name-output');

inputName.addEventListener('input', onName);

function onName(e) {
  outName.textContent = e.target.value;
  if (e.target.value === '') {
    console.log('пусто');
    outName.textContent = 'незнакомец';
  }
}
