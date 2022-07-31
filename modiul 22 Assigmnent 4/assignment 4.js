//sheerTOMon 
function seerToMon(seer){
    let mon = seer / 40;
    return mon;
}
console.log(seerToMon(120));
/*
Problem 01
function seerToMon(seer) {
if(typeof(seer) === "string") {
return "Enter a Number";
} else if(seer < 0) {
return "Enter a Positive Number";
} else {
const mon = seer / 40;
return mon;
}
}
const mon = seerToMon(12)
console.log(mon);
*/

//totalSales
function totalSales(shirt, pant, shoe){
    const shirtPrise = 100 * shirt;
    const pantPrise = 200 * pant;
    const shoePrise = 500 * shoe;

    const totalPrice = shirtPrise + pantPrise + shoePrise;
    return totalPrice;
}
console.log(totalSales(2,3,5));


/* Problem 02
function totalSales(shirtQuantity, pantQuantity, shoeQuantity) {
    if((shirtQuantity < 0) || (pantQuantity < 0) || (shoeQuantity < 0)) {
    return "Please enter valide quantity number";
    } else if((typeof(shirtQuantity) === "string") || (typeof(pantQuantity) === "string") || (typeof(shirtQuantity) === "string")) {
    console.log(typeof(shirtQuantity));
    return "Please enter valide quantity number";
    } else {
    const shirtPrice = 100;
    const pantPrice = 200;
    const shoePrice = 500;
    const totalShirtPrice = shirtQuantity * shirtPrice;
    const totalPantPrice = pantQuantity * pantPrice;
    const totalShoePrice = shoeQuantity * shoePrice;
    const totalPrice = totalShirtPrice + totalPantPrice + totalShoePrice;
    return totalPrice;
    }
    }
    console.log(totalSales(1, 1, 1));
*/
//deliveryCost

function deliveryCost(itemQuantity){
    let till100piece = 100;
    let till200piece = 80;
    let avobe200piece = 50;

    if(itemQuantity <= 100){
        const  firstItem = itemQuantity * till100piece;
        return firstItem;
    }
    else if(itemQuantity <= 200){
        const first100 = 100 * till100piece;
        const restItem = itemQuantity - 100;
        const restSecondIems = restItem * till200piece;
        const secondFinalTotal = first100 + restSecondIems;
        return  secondFinalTotal;
    }
    else{
        const first100 = 100 * till100piece;
        const restSecondIems = 100 * till200piece;
        const restItem = itemQuantity - 200;
        const restthirdIems = restItem * avobe200piece;
        const FinalTotal = first100 + restSecondIems + restthirdIems;
        return FinalTotal;
    }
}

console.log(deliveryCost(4000));


/* Problem 03
function deliveryCost(quantity) {
    if((quantity < 0) || (typeof(quantity) === "string")) {
        console.log("hi");
        return "Please enter a valide shirt quantity number "
        } 
    else if(quantity <= 100) {
        return quantity * 100
    } 
    else if(quantity > 100 && quantity < 200) {
        const over100 = quantity - 100;
        const first100charge = 100 * 100;
        const over100Charge = over100 * 80;
        const totalCharge = first100charge + over100Charge;
        return totalCharge
    } 
    else {
        const first100charge = 100 * 100;
        const over100Charge = 100 * 80;
        const over200 = quantity - 200
        const over200Charge = over200 * 50;
        const totalCharge = first100charge + over100Charge + over200Charge;
        return totalCharge;
        }
    }
    console.log(deliveryCost(200));

*/


// Problem 04
function perfectFriend(frindsArray) {
    if(Array.isArray(frindsArray)) {
        for(const name of frindsArray) {
        if(name.length === 5) {
        return name;
        }
    }
        } else {
         return "Please provide a Array";
        }
    }
let frindsName = ["apon", "farid", "jibon"]
console.log(perfectFriend(frindsName));