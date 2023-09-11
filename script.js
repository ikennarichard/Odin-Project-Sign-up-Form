const form = document.querySelector('form');
const password = form.querySelector('input[id=password]');
const confirmPassword = form.querySelector('input[id=confirm-password]');
const error = form.querySelector('.error');

form.addEventListener('submit', (e) => {
  e.preventDefault()
  if (password.value !== confirmPassword.value) {
    error.classList.add('error-show');
    password.style.outline = '1px solid red';
    setTimeout(() => {
      error.classList.remove('error-show');
      password.style.outline = '';
    }, 2000);
  } else {
    alert('Details submitted successfully')
  };
});
