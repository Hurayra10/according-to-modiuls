//genarate a 4 digit code
function getPin(){
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if(pinString.length == 4){
        return pin;
    }else{
        return getPin();
    }
}
//calling the generator pin from here//
function generatePin(){
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}

document.getElementById('key-pad').addEventListener('click', function(event){
   const number = event.target.innerText;
   const calcInput = document.getElementById('type-numbers-display');
   if(isNaN(number)){
    if(number == "C"){
        calcInput.value  = '';
    }
   }else{
        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number;
        calcInput.value = newNumber;
   }
   
   
});

//working here with submit button
function varifyPin(){
   const pin = document.getElementById('display-pin').value;
   const typeNumbers = document.getElementById('type-numbers-display').value;
   const successMsg = document.getElementById('notify-success');
   const failError = document.getElementById('notify-fail');
   if(pin == typeNumbers){
    
    successMsg.style.display = 'block';
    failError.style.display = 'none';
   }else{
       failError.style.display = 'block';
       successMsg.style.display = 'none';
   }
}

















