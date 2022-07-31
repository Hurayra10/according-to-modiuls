/* let fibo = [0, 1]
for(let i = 2; i <= 10; i ++){
    fibo[i]= fibo[i-1] + fibo[i-2]
}
console.log(fibo);
*/

function fibonacci(num){
    if (typeof num != 'number'){
        return "Plese give a number"
    }else if(num < 2){
        return "Please give a number which is greater than 2"
    }

    let fibo = [0, 1];

    for(let i = 2; i <= num; i ++){
       fibo [i] = fibo[i - 1] + fibo [i -2];
    }
    return fibo;
}
console.log(fibonacci(-4)); 

