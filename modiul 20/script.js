// let numbers = [ 5, 75, 20, 41, 6, 0, 50];
// let sum = 0;


// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     // let result = sum + element;
//     // console.log(element);
 
//     sum = sum + element;
//     console.log(sum);
// }
function arrytotal (numbers){
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        let element = numbers[i];
        sum = sum + element;
    }
    return sum;
}

console.log(arrytotal([ 5, 75, 20, 41, 6, 0, 50]))

















// let sum = numbers.reduce(function(a,b){
//     return a + b;
// }, 0);



// console.log(sum);






