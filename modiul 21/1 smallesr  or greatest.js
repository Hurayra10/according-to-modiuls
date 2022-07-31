// find out the maximum number from an array
/* 
function maximum (num){
    let max = num[0];
    for(let i = 0; i< num.length; i ++){
        let element = num[i];
        if(element > max){
            max = element;
        }

    }
    return max;
}
let numbers = [100, 50, 5, 75, 0, 7];
console.log(maximum(numbers));*/



// find out the manimum number from an array
function minimum (num){
    let min = num[0];
    for(let i = 0; i< num.length; i ++){
        let element = num[i];
        if(element < min){
            min = element;
        }

    }
    return min;
}
let numbers = [100, 50, 5, 75, 3, 7];
console.log(minimum(numbers));











