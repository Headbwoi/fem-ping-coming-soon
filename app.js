const form = document.getElementById('form');
const email = document.getElementById('email');
  
form.addEventListener('submit', e => {
  e.preventDefault();
  
  validateInputs();
})

const setError = (element, message) => {
  const text_btn = element.parentElement;
  const errorDisplay = text_btn.querySelector('.error');
  
  errorDisplay.innerText = message;
  text_btn.classList.add('error');
  text_btn.classList.remove('success');
}

const setSuccess = element => {
  const text_btn = element.parentElement;
  const errorDisplay = text_btn.querySelector('.error');
  errorDisplay.innerText = '';
  text_btn.classList.add('success');
  text_btn.classList.remove('error');
}

const isValidEmail = email => {
  const re = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
  const emailValue = email.value.trim();
  
  if (emailValue === '') {
    setError(email, 'Email is required');
    
  }
  else if(!isValidEmail(emailValue)){
    setError(email, 'Please provide a valid Email address');
  }
  else{
    setSuccess(email);
  }
};