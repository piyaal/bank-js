document.getElementById('btn-submit').addEventListener('click',function(){
//console .log('submit button clicked'); 

//step2 get the email add inside the email input field
//alwAYS remember to us .value to get text from input field

  const emailField=document.getElementById('user-email');
  //always remember  to use .value to get text from an input field
const email=emailField.value;

//set id on th e html ele,emnt for passwprd

const passwordField=document.getElementById('user-password');
const password=passwordField.value;
if(email==='hasan@gmail.com' && password === 'buba') {
    window.location.href='bank.html'; }
    else{
    console.log('invalid user') }
//console.log(email,pass)
})
//verify email and passwprd
