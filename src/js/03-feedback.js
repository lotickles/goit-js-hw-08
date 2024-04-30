import throttle from 'lodash.throttle';

const form = document.querySelector('form.feedback-form');
const emailEl = document.querySelector('input[name="email"]');
const messageEl = document.querySelector('textarea[name="message"]');

const STORAGE_KEY = 'feedback-form-state';

function onPageReload() {
  const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (savedMessage) {
    emailEl.value = savedMessage.email;
    messageEl.value = savedMessage.message;
  }
}
onPageReload();

function onFormInput() {
  const email = emailEl.value;
  console.log(email);
  const message = messageEl.value;
  console.log(message);

  const formData = {
    email,
    message,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}
form.addEventListener('input', onFormInput);
// form.addEventListener('input', e => console.log(e));
function onFormSubmit(e) {
  e.preventDefault();
  const email = emailEl.value;
  const message = messageEl.value;

  if (email == '' || message == '') {
    alert('Please enter a valid parameters');
    form.reset();
    return;
  }
  form.reset();
  localStorage.removedItem(STORAGE_KEY);
}
form.addEventListener('submit', onFormSubmit);
