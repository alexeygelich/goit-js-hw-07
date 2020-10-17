const inputRef = document.querySelector('input');
const renderBtn = document.querySelector('button[data-action="render"]');
const destroyBtn = document.querySelector('button[data-action="destroy"]');
const boxesRef = document.querySelector('#boxes');
let amount = 0;
let a = 30;
let b = 30;

inputRef.addEventListener('input', () => {
  amount = inputRef.value;
});
renderBtn.addEventListener('click', () => {
  createBoxes(amount);
});
destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes(num) {
  for (let i = 0; i < num; i++) {
    let rnd1 = Math.random() * 255;
    let rnd2 = Math.random() * 255;
    let rnd3 = Math.random() * 255;
    const div = document.createElement('div');
    div.style.backgroundColor = `rgb(${rnd1} ${rnd2} ${rnd3})`;
    div.style.width = a + 'px';
    div.style.height = b + 'px';
    boxesRef.append(div);
    a += 10;
    b += 10;
  }
}

function destroyBoxes() {
  boxesRef.innerHTML = ``;
}
