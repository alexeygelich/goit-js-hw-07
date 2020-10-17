const ul = document.querySelector('#categories');
const categories = ul.children;
console.log(`В списке ${categories.length} категории.`);

[...categories].forEach(el => {
  let h2 = el.querySelector('h2');
  let arr = el.querySelectorAll('li');
  console.log(
    `Категория: ${h2.textContent}\nКоличество элементов: ${arr.length}`,
  );
});
