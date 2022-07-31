//feet to inche
// function footToInch (foot){
//     let inch = foot * 12;
//     return inch;
// }
// let result = footToInch(10);
// console.log(result);



//check even and odd number

// function evenOdd(number){
//     if(number % 2 == 0){
//         console.log('This number is even');
//     }else{
//         console.log('This number is odd');
//     }
// }
// let result = evenOdd(19);
// console.log(result);


// program to check leap year
// function checkLeapYear(year) {

//     //three conditions to find out the leap year
//     if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
//         console.log(year + ' is a leap year');
//     } else {
//         console.log(year + ' is not a leap year');
//     }
// }

// // take input
// const year = prompt('Enter a year:');

// checkLeapYear(year);


//calculate factorial number
// let factorial = 1;
// for(let i = 1; i < 10; i++){

//     factorial = factorial * i;
//     console.log(i, factorial);
// }

// function factorial(number){
//         let factorial = 1;
//         for(let i = 1; i < number; i++){

//             factorial = factorial * i;
//             console.log(i, factorial);
//          }
//          return factorial;
// }

// let result = factorial(5);
// console.log(result);



//while loop diye factorial

// let factorial = 1;
// let i = 1;
// while (i < 10){
//     factorial = factorial * i;
//     // console.log(i, factorial);
//     i++;
// }
// console.log(i, factorial);


// function factorial( number){

//     let factorial = 1;
//         let i = 1;
//         while (i < number){
//         factorial = factorial * i;
//         // console.log(i, factorial);
//         i++;
//     }
//     return factorial;

// }

// let result = factorial(5);
// console.log( result);


//factorial with recursive way
function factorial(n){
    if(n==1){
        return 1;
    }else{
        return n * factorial(n-1);
    }
}

let result = factorial(7);
console.log(result);






