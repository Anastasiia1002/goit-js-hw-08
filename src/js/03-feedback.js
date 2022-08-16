import { throttle } from 'lodash';

const form = document.querySelector('.feedback-form');
const LOCALSTORAGE_KEY = 'feedback-form-state';
let localStorageData = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
let formData = {};

if (localStorageData) {
  form.elements.email.value = localStorageData.email;
  form.elements.message.value = localStorageData.message;
}

form.addEventListener(
  'input',
  throttle(() => {
    formData.email = form.elements.email.value;
    formData.message = form.elements.message.value;
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
  }, 500)
);

form.addEventListener('submit', event => {
  event.preventDefault();
  if (formData.email && formData.message) {
    console.log(formData);
    localStorage.removeItem(LOCALSTORAGE_KEY);
    event.target.reset();
    return;
  }
  alert('Заповніть ,будь ласка, ВСІ поля!!!');
});
