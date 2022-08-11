let incomeField = document.getElementById('income-field');
let foodField = document.getElementById('food-field');
let rentField = document.getElementById('rent-field');
let clothesField = document.getElementById('clothes-field');
let totalField = document.getElementById('total-field');
let balanceField = document.getElementById('balance-field');
let savingField = document.getElementById('saving-field');
let remainingField = document.getElementById('remaining-field');
let total;


function incomeExpenseFun (){
    total =  Number(foodField.value) +Number(rentField.value ) +Number(clothesField.value);
    totalField.innerText = total;
    balanceField.innerText = Number(incomeField.value) - total;
        clothesField.value = '';
        incomeField.value = '';
        incomeField.value = '';
        foodField.value = '';
        rentField.value = '';

    
}
function saveRemaining(){
    const savingAmount = Number(balanceField.innerText) * .20;
    savingField.innerText = savingAmount;
    const remainingBalance = Number(balanceField.innerText) - Number(savingField.innerText );
    console.log(remainingBalance);
    remainingField.innerText = remainingBalance;
}

// All Button 
document.getElementById('calculate-btn').addEventListener('click', function(){
    incomeExpenseFun()
    })


document.getElementById('save-btn').addEventListener('click', function(){
    saveRemaining()
})















