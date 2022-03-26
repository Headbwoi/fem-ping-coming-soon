const form = document.querySelector('.form')//get form element
const email = document.querySelector('#email')// get email input id
const errorTxt = document.querySelector('#errortxt') //get error text id

//add event listener of submit on form
form.addEventListener('submit', e => {
  e.preventDefault()//pervents form from submitting
  
  checkEmail() //calls checkEmail functiob
  
  email.onkeyup = () => {checkEmail()} // if keyboard is released checkEmail
  
  function checkEmail(){ //checkEmail function
    
    const emailValue = email.value.trim()//remove spaces from email value
    
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; //email pattern validation 
    
    //conditions for email validation
    if(emailValue === ''){ //if emailvalue is empty
      email.classList.add('error') //adds erroe class
      email.classList.remove('sucess')//remove success class
      errorTxt.innerText = 'Whoops! It looks like you forgot to add your email' //display error message
    }
    else if(!emailValue.match(pattern)){
      //if emailvalue does not match pattern 
      email.classList.add('error')// add error
      email.classList.remove('success')//remove success
      errorTxt.innerText = 'Please provide a valid email address'
      //display error message
    }
    else{
      //if email value matches pattern and is not empty
      email.classList.remove('error')
      //remove error class
      email.classList.add('success')//adds success class
      errorTxt.innerText = ''
      //no message displayed
    }
  }
  
})