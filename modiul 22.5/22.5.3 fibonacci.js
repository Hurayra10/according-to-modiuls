//fibonacci series theke jodi kono index number ber korte cai tahole () bracket dite hobe

function fibo (n){
    if (n == 0){
        return 0;
    }
    if(n == 1){
        return 1;
    }
    
    return fibo(n-1) + fibo(n-2);
}
console.log(fibo(15))


//differener way fibonacci dhara ber korar. akhane [] bracket use korte hoi..
function fibonacci (n){
    let fibo = [0, 1];
    for (let i = 2; i <= n; i ++){
        fibo[i] = fibo [i -1] + fibo [i-2]
   }
   return fibo;
}
const result = fibonacci(15)
console.log(result);







