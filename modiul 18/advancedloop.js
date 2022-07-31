// let i = 0;
// while (i <= 10){
//     console.log(i);
//     if(i == 5){
//        break;
//     }
//     i++;
// }
// const item = ['a', 'b', 'c', 'd', 'e'];
// const numbers = [2, 5, 55, 20 ,98, 45, 20];

// for (let i = 0; i < numbers.length; i++) {
//     let element = numbers[i];
//     if(element > 55){
//         break;
//         // console.log(element)
//     }
//     console.log(element);
// }

const item = ['a', 'b', 'c', 'd', 'e'];
item[2] = 'Comola';
console.log(item);

if(item.indexOf('Comola') !== -1){
    console.log('Hurry! Comola is here!');
}


if(item.indexOf('Sipla') === -1){
    console.log('Alas! Sipla is not here!');
}


