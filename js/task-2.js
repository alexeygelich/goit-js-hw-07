const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const ul = document.querySelector('ul');

ingredients.forEach(el => {
  let li = document.createElement('li');
  li.textContent = el;
  ul.append(li);
});
