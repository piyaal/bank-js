 //console.log('js ase naki!')

 //step 1 add event lister to deposit button
 document.getElementById('btn-deposit').addEventListener('click',function(){
  //console.log('deposit clicked')
  //get deposite input field
  const depositField=document.getElementById('deposit-field'); 
  //for input field use .value to get the inpiut
  const newdepositAmountstring= depositField.value; 
  const newdepositAmount=parseFloat(newdepositAmountstring);
   //console.log(depositAmount) 
  
  //get the total amount
  const depositTotalElement=document.getElementById('deposit-total');
  //for non input element use inner text area
  const predeposittotalstring=depositTotalElement.innerText;
const predeposittotal=parseFloat(predeposittotalstring)
//add deposit number
  const currentdeposittotal=predeposittotal+newdepositAmount;
  
  depositTotalElement.innerText=currentdeposittotal;
//step 5 get current total id  
const balancetotalelement=document.getElementById('balance-total')
const prebalancetotalstring=balancetotalelement.innerText;
const prebalancetotal=parseFloat(prebalancetotalstring)

//step6 calculate total balance
const currentBalanceTotal= prebalancetotal+newdepositAmount;
//set the balance total

balancetotalelement.innerText=currentBalanceTotal;


//clear the deposit field
 depositField.value='';
 }) 