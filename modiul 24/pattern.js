// let n = 5; // height of pattern
// let string = "";
// // External loop
// for (let i = 1; i <= n; i++) {
//   // Internal loop
// //   console.log(i);
//   for (let j = 1; j <= i; j++) {
//     // string += j;
//     string = string + j;
//     console.log(string);
  
//   }
// //   string += "\n";
// // console.log(i);
// string = string + '\n';
// }
// console.log(string);

// let n= 5;
// let string = '';
// for(let i = 1; i<= n; i++){
    
//     for(let j = 1; j<=i; j++){
//         string = string + j;
//     }
//     string = string + '\n';
// }
// console.log(string);

// let n= 5;
// let string = '';
// for(let i = 1; i<= n; i++){
    
//     for(let j = 1; j<=i; j++){
//         string = string + i;
//     }
//     string = string + '\n';
// }
// console.log(string);

// let n= 5;
// let string = '';
// for(let i = 1; i<= n; i++){
    
//     for(let j = 1; j<=i; j++){
//         string = string + n;
//     }
//     string = string + '\n';
// }
// console.log(string);





function pattern (n){
    let string = '';
    
    for(let i = 1; i<=n; i++){
        for(let j = 1; j<=i; j++){
            string = string + ' ' + n;
        }
       
        string = string +'\n';
       
    }  
    return string;
}
console.log(pattern(10))




// let n = 10; // height of pattern
// let string = "";
// // External loop
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n - i + 1; j++) {
//     string += ' ' + n;
//   }
//   string += "\n";
// }
// console.log(string);


// function makePattern(input){
//     let myPattern = '';
//     for(let i = 0; i < input; i++){
//         let p = '';
//     for(let j = i ; j < input; j++){
//      p += input + ' ';
//     }
//     myPattern += p + '\n';
//     }
//     return myPattern;
//     }
// console.log(makePattern(7));












