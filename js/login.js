document.getElementById('btn-submit').addEventListener('click',function(){
//console.log('submit button clicked'); 

//step2 get the email add inside the email input field
//alwAYS remember to us .value to get text from input field

  const emailField=document.getElementById('user-email');
const email=emailField.value;
console.log(email);
})

//set id on the html ele,emnt for passwprd

const passwordField=document.getElementById('user-password');
const password=passwordField.value;
console.log(password);

//verify email and passwprd
if(email==='hasan@gmail.com' && password==='secret'){
    console.log('valid user')
}
else
console.log('invalid user');