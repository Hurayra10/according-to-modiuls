//memory button
let simpleMemoryButton = document.getElementById('simple-memory-btn');
let extraMemoryBtn = document.getElementById('extra-memory-btn');
//storage button
let firstSrorageBtn = document.getElementById('first-storage-btn');
let secondStorageBtn = document.getElementById('second-storage-btn');
let thirdSrorageBtn = document.getElementById('third-storage-btn');
//delivery button
let firstDelevaryBtn = document.getElementById('first-delevary-btn');
let secondDelevaryBtn = document.getElementById('second-delevary-btn');
//price
let bestPrise = document.getElementById('best-price');
let memoryCost = document.getElementById('memory-cost');
let storageCost = document.getElementById('storage-cost');
let deliveryCost = document.getElementById('delivery-cost');
let firstTotalPrice = document.getElementById('first-total-price');
//apply btn and apply input button
let inputField = document.getElementById('input-field');
let applyBtn = document.getElementById('apply-btn');
const finalPrice = document.getElementById("final-price")
let totalPrice ;

const commonFun = (product, price) => {
    if (product === "a") {
        // memoryCost.innerText = price 
        if (price === 0) {
            memoryCost.innerText = 0
        }else{
            const p= Number(memoryCost.innerText) + price
            memoryCost.innerText = p
        }

    } else if (product === "b") {
        if (price === 0) {
            storageCost.innerText = 0
        }else{
            const p= Number(storageCost.innerText) + price
            storageCost.innerText = p
        }
        // storageCost.innerText = price
    } else if (product === "c") {
        if (price === 0) {
            deliveryCost.innerText = 0
        }else{
            const p= Number(deliveryCost.innerText) + price
            deliveryCost.innerText = p
        }
        // deliveryCost.innerText = price
    }


   totalPrice = Number(bestPrise.innerText) + Number(memoryCost.innerText) + Number(storageCost.innerText) + Number(deliveryCost.innerText)


    firstTotalPrice.innerText = totalPrice
    finalPrice.innerHTML=totalPrice
}

applyBtn.addEventListener("click", function (e) {
    
    const inputFieldText = inputField.value
    if (inputFieldText === "hurayra") {
     
        const finalPriceAfterPro= Number(firstTotalPrice.innerText) * .8;
        finalPrice.innerText=finalPriceAfterPro.toFixed(2)
    } 
})
simpleMemoryButton.addEventListener("click", function () {
    commonFun("a", 0)
})

// simpleMemoryButton.addEventListener('click', ()=>{
//     commonFun("a", 0)
// })
extraMemoryBtn.addEventListener('click', ()=>{
    commonFun("a", 180)
})
firstSrorageBtn.addEventListener('click', ()=>{
    commonFun("b", 0)
})
secondStorageBtn.addEventListener('click', ()=>{
    commonFun("b", 100)
})
thirdSrorageBtn.addEventListener('click', ()=>{
    commonFun("b", 200)
})
firstDelevaryBtn.addEventListener('click', ()=>{
    commonFun("c", 0)
})
secondDelevaryBtn.addEventListener('click', ()=>{
    commonFun("c", 20)
})





