function updateProductNumber(product,price, isIncrease ){
    const productInput = document.getElementById(product +'-number');
    let productNumber = productInput.value;

    if(isIncrease){
        productNumber = parseInt(productNumber) + 1;
    }else if(productNumber > 0){
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    //update product total balance
    const productTotal = document.getElementById(product +'-total');
   
    productTotal.innerText = productNumber * price;
    //calculateTotal
    calculateTotal();
}

function getInputValue(product){
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}

function calculateTotal(){
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case')* 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = (subTotal * 10) / 100;
    const total = subTotal+ tax;
   //update on the html for subtotal
   document.getElementById('sub-total').innerText = subTotal;
   document.getElementById('tax-amount').innerText = tax;
   document.getElementById('total-price').innerText = total;

}
//phone handler for increasing and decreasing

document.getElementById('phone-plus').addEventListener('click', function(){
    updateProductNumber('phone',1219, true);
})
document.getElementById('phone-minus').addEventListener('click', function(){
    updateProductNumber('phone',1219,false);
})

//case handler for increasing and decreasing
document.getElementById('case-plus').addEventListener('click', function(){
    updateProductNumber('case', 59, true);
})

document.getElementById('case-minus').addEventListener('click', function(){
    updateProductNumber('case', 59, false);
})
/*
//update phone account
function updatePhoneNumber(isIncrease){
    const phoneInput = document.getElementById('phone-number');
    let phoneNumber = phoneInput.value;
    if(isIncrease){
        phoneNumber = parseInt(phoneNumber) + 1;
    } else if(phoneNumber > 0){
        phoneNumber = parseInt(phoneNumber) - 1;
    }
    phoneInput.value = phoneNumber;

    const phoneTotal = document.getElementById('phone-total');
    phoneTotal.innerText = phoneNumber * 1219;
}
//case handler for mobile phones increasing and decreasing
document.getElementById('phone-plus').addEventListener('click', function(){
    updatePhoneNumber(true)
})
document.getElementById('phone-minus').addEventListener('click', function(){
    updatePhoneNumber(false)
})*/