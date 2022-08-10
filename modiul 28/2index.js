
console.log(outPut);
const products = ['laptop', 'Camere','laptop and Camere', 'phone', 'Phone And Laptop' ];
const outPut = [];
const searching = 'Camere';

// for(const product of products){
//     //এই খানে দুই টাকেই lower case করতে হবে।
//     if(product.toLowerCase().indexOf(searching.toLowerCase()) != -1){
//         outPut.push(product)
//     }
// }
// console.log(outPut);


// includes দিয়েও একই কাজ করা যায়। includes দিয়ে করলে -১ দেওয়ার দরকার নাই। 
// for(const product of products ){
//     if(product.toLowerCase().includes(searching.toLowerCase())){
//         outPut.push(product);
//     }
// }
// console.log(outPut);

//startswith
for(const product of products){
    if(product.toLowerCase().startsWith(searching.toLowerCase())){
        outPut.push(product);
    }
}
console.log(outPut);