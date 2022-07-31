let products = [
    {name: 'Laptop', price: 43000, quantity: 1},
    {name: 'shirt', price: 4000, quantity: 3},
    {name: 'watch', price: 3000, quantity: 5},
    {name: 'phone', price: 2400, quantity: 10}
    
]

// let totalPrice = 0;
// for(let product of products){
//     totalPrice = totalPrice + product.price;
// }
// console.log(totalPrice);

let cardTotal = 0;
for(let card of products){
    let totalProduct = card.price * card.quantity;
    cardTotal = cardTotal + totalProduct;

}
console.log(cardTotal);




