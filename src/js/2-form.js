let formData = {
  email: '',
  message: ''
};

const form = document.querySelector('.feedback-form');
const emailInput = form.elements.email;
const messageInput = form.elements.message;

const STORAGE_KEY = 'feedback-form-state';

loadFormData();

form.addEventListener('input', onInputChange);
form.addEventListener('submit', onFormSubmit);

function onInputChange(event) {
  formData[event.target.name] = event.target.value.trim();

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(event) {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  form.reset();

  formData = { email: '', message: '' };
  localStorage.removeItem(STORAGE_KEY);
}

function loadFormData() {
  const savedData = localStorage.getItem(STORAGE_KEY);
  
  if (savedData) {
    formData = JSON.parse(savedData);
    emailInput.value = formData.email;
    messageInput.value = formData.message;
  }
}