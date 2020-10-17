const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', () => {
  if (inputRef.value.length < inputRef.getAttribute('data-length')) {
    inputRef.classList.remove('green');
    inputRef.classList.add('red');
  } else {
    inputRef.classList.remove('red');
    inputRef.classList.add('green');
  }
});
