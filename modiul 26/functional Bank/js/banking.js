function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputAmoutText = inputField.value;
    const amountValue = parseFloat(inputAmoutText);
    inputField.value = '';
    return amountValue;
}


function updateTotalField(totalFieldId, amount){
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);
    totalElement.innerText = previousTotal + amount;
}

function updateBalance (amount, isAdd){
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    if(isAdd == true){
        balanceTotal.innerText = previousBalanceTotal + amount;
    }else{
        balanceTotal.innerText = previousBalanceTotal - amount;
    }
}

document.getElementById('deposit-button').addEventListener('click', function(){
    const depositAmount =  getInputValue('deposit-input');
    if(depositAmount > 0){
        updateTotalField('deposit-total', depositAmount);
        updateBalance(depositAmount, true);
    }
    

})

document.getElementById('withdraw-button').addEventListener('click', function(){
    const withdrawAmount = getInputValue('withdraw-input');
    if(withdrawAmount > 0){
        updateTotalField('withdraw-total', withdrawAmount);
        updateBalance(withdrawAmount, false);
    }
})





/*
document.getElementById('deposit-button').addEventListener('click', function(){
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText);
   
    //update deposit total
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositText =  depositTotal.innerText
    const previousDepositAmount = parseFloat(previousDepositText);

    const newDepositTotl = previousDepositAmount + newDepositAmount;
    depositTotal.innerText = newDepositTotl;
    
    //update balance total
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceAmount = parseFloat(previousBalanceText);
   

    const newBalanceTotal = previousBalanceAmount + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;

     //clear the deposit input field
     depositInput.value = '';
    
})


//handle wothdraw event handler
document.getElementById('withdraw-button').addEventListener('click', function(){
    const withdrawInput = document.getElementById('withdraw-input');
    const newWithdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountText);
   
    //update withdraw total

    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText =  withdrawTotal.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawText);

    const newWithdrawTotal = previousWithdrawAmount + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;

    //clean withdraw input
    withdrawInput.value = '';


    //update balance total
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceAmount = parseFloat(previousBalanceText);
   

    const newBalanceTotal = previousBalanceAmount -  newWithdrawTotal;
    balanceTotal.innerText = newBalanceTotal;
})

*/






















