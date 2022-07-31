document.getElementById('deposit-button').addEventListener('click', function(){
    const depositInputText = document.getElementById('deposit-input');
    const newDepositAmountText = depositInputText.value;
    const newDepositAmount = parseFloat(newDepositAmountText);
    
   
    //update deposit total 
    const dipositTotal = document.getElementById('deposit-total');
    const previousDepositText = dipositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);
    
    const newDepositTotal = previousDepositAmount + newDepositAmount;
    dipositTotal.innerText = newDepositTotal;
    console.log(newDepositTotal);

    //update balance total
    const balanceTotal =  document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceAmount = parseFloat(previousBalanceText)

    const newBalanceTotal = previousBalanceAmount + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;
    
    //clean deposit input field
    depositInputText.value = '';
})

document.getElementById('withdraw-button').addEventListener('click', function(){
    const withdrawInput = document.getElementById('withdraw-input');
    const newWithdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountText);
    
    //update withdraw balance
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawText);
    
    
    const newWithdrawBalance = previousWithdrawAmount + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawBalance;

    //clean withdraw input field
    withdrawInput.value = '';


    const balanceTotal =  document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceAmount = parseFloat(previousBalanceText)

    const newBalanceTotal = previousBalanceAmount - newWithdrawAmount;
    balanceTotal.innerText = newBalanceTotal;
    


})












