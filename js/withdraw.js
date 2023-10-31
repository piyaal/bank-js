//1.add event handler with withdraw
//step 1
//2get the withdraw amount from withdraw input field
document.getElementById('btn-withdraw').addEventListener('click',function(){
   //console.log("withdraw worked") ;
//step2
//also make sure to convert parsefloat
//get previous withdraw amount
const withdrawfield=document.getElementById('withdraw-field');
const newwithdrawamountstring= withdrawfield.value;
 const newwithdrawamount=parseFloat(newwithdrawamountstring);
 //console.log(newwithdrawamount);

 //3
 const withdrawtotalelement=document.getElementById('withdraw-total');
 const previouswithdrawtotalstring=withdrawtotalelement.innerText;
 const previouswithdrawtotal=parseFloat(previouswithdrawtotalstring);
 console.log(previouswithdrawtotal);
 //4 calculate total withdraw amount
 const currentwithdrawtotal= previouswithdrawtotal+newwithdrawamount;
 withdrawtotalelement.innerText=currentwithdrawtotal;

//5 set total withdraw amount
const balancetotal=document.getElementById('balance-total');
const previousbalancetotalstring=balancetotal.innerText;
const previousbalancetotal=parseFloat(previousbalancetotalstring);
console.log(previousbalancetotal);

//6 calculate new balance total
const newbalancetotal=previousbalancetotal-newwithdrawamount;
balancetotal.innerText=newbalancetotal;

//step 7 clear input field
withdrawfield.value='';
}) 