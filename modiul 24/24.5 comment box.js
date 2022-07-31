const button = document.getElementById('clickbtn');

button.addEventListener('click', function(){
    
    const commentBox = document.getElementById('new-comment');
    const userComment = commentBox.value; //get user comment
    
    const p = document.createElement('p');//create p element
    p.innerText = userComment;
   
    const mainParagraphSection = document.getElementById('paragraph-section');
    mainParagraphSection.appendChild(p);
    commentBox.value = ''; //commentBox er value faka kore dilam.
    


})










































// const button = document.getElementById('subButton');
// button.addEventListener('click', function(){
//     //get user comment
//     const box = document.getElementById('text-box');
//     // const boxValue = box.value;
   
    
//     //create p element
//     const p = document.createElement('p');
   
//     p.innerText = box.value;
   

//     //set up append child
//     const commentContainer = document.getElementById('comment-container');
   
//    commentContainer.appendChild(p);

//     //value ke zero i mean khali korte hobe.
//    box.value = '';
// })


//Problem: 03
//Write a function that takes the base and height of a triangle and return its area.

// function triangle(base, height){
//     let result = 1/2 * (base * height);
//     return result;
// }
// console.log(triangle(5, 6));


// let str = 'Hello';
 
// str = str.substring(2);
// console.log(str);


// //Problem: 04
// //Write a function that takes a word and returns the new word without including the first two characters.
 
// function str (word){
//     return word.substring(2);
// }
// console.log(str("hello"));



//Day: 05
//Problem: 05
//Write a function that takes an array and return the first and last elements as a new array.



// function started(nums) {
//     const array1 = [];
//     array1.push(nums[0], nums[nums.length - 1]);

//     return array1;
// }
// console.log(started([20, 20, 30]));





//Problem: 06
//Write a function that takes an array and return a reverse array.
// let num = [1, 2, 3, 4, 5];
// function reverse(arr){
//     let newArray = [];
//     let n = 0;

//     for(let i = num.length - 1; i >= 0; i --){
//         newArray[n]= num[i];
//         n++
//     }
//     return newArray;
// }
// console.log(reverse([num]));
// console.log(num);







// let numbers = [1, 2, 3, 4, 5];
// let reversedNumbers = [];

// for(let i = numbers.length -1; i >= 0; i--) {
//   reversedNumbers.push(numbers[i]);
// }

// console.log(reversedNumbers);
// console.log(numbers);



//Write a function that takes an array of strings and numbers, and filters out the array so that it returns an array of integers only.


//Problem =7

// const filterArea = [5, 6 , 0 , 'a', 'z', 11];

// function filterArr(num){
//     let newArr = [];
    
//     for (let i = 1; i <num.length; i ++){
//         if(typeof num[i] === 'number'){
//             newArr.push(num[i])
//         }
//     } 
//     return newArr;
// }
    
// console.log(filterArr(filterArea));


//Problem: 08
//write a function that takes an array and a string as arguments and return the index number of the string.

// function findStringIndex(arr, str){
//     for(let i = 0; i < arr.length; i ++){
//         if(arr[i] === str){
//             return i;
//         }
//     } 
// }

// let newArr = [2, 5, 'a', 'b', 5, 'z'];
// console.log(findStringIndex(newArr, 'z'));

//Day: 09
//Problem: 09
//Write a function that takes two arguments X and Y as integers. And returns a value of X to the power of Y.



// function power  (x, y){
//     let newNum = 1;
//     for(let i= 1; i <= y; i++){
//         newNum = newNum * x;
//     }
//     return newNum;
// }


// console.log(power(5,3));

 //Problem: 10
//Write a function that takes a parameter as an integer and returns the number of digits in this parameter
// function countDigit(n){
//     let count = 0;

//     if(n===0){
//         return 1;
//     }
//     while (n != 0){
//         n = Math.floor(n/10);
//         count++;
//     }
//     return count;
// }
// console.log(countDigit(55));


// //finding the longest string from an arry and shows the index number of it.

// function longestString(names){
//     let longestWord = '';

//     for(name of names){
//         if(name.length >longestWord.length){
//             longestWord = name;
//         }
//     }
//     return[longestWord, names.indexOf(longestWord)];
// }

// console.log(longestString(['Abu', 'Hurayra', 'Abu Hurayra', 'Bangladesh is my life']));
// console.log(longestString([10, 5, 20, 80, 7, 71, 100]));
//Problem: 12
//Write a function that takes an array of a number and return the largest number in an array
// function largestNumber(num){
//     let largeNum = '';
//     for(let i = 0; i<num.length; i ++){
//         if(num[i] > largeNum){
//             largeNum= num[i];
//         }
//     }
//     return largeNum;
// }
// console.log(largestNumber([10, 50, 20, 80, 7, 21, 100])); //100
// console.log(largestNumber(['Abu', 'Hurayra', 'Abu Hurayra', 'Bangladesh is my life']));

// function countZero(arr){
//     let count = 0;
//     for(let i = 0; i < arr.length; i++){
//     for(let j = 0; j < arr[i].length; j++){
//     if(arr[i][j] == 0){
//     count++;
//     }
//     }
//     }
//     return count;
//     }
//     console.log(countZero([[1,0,1],[5,1,6],[0,8,0]]));



// function findLargestNum(num){
//     let largeNum = numbers[0];
//     for(let i = 0; i<numbers.length; i++){
//         if(num[i] > largeNum){
//             largeNum = num [i];
//         }
//     }
//     return largeNum;
// }

// console.log(findLargestNum(numbers));



// const numbers = [20, 400, 2,  10, 45, 8, 6, 13];

// function findLowestNum(num){
//     let lowestNum = numbers[0];

//     for(let i = 0; i<numbers.length ; i++){
//         if(num[i] < lowestNum){
//             lowestNum = num [i];
//         }
//     }
//     return lowestNum;
// }

// console.log(findLowestNum(numbers));

//Problem 14
//Write a function that takes an array of a number and return the second lowest number in an array
// const numbers = [20, 40, 2,  3, 45, 8, 6, 13];
// function findSecondLowestNum(num){
//     let minNum = numbers[0];
//     let secondlowestNum = numbers[1];

//     for(let i = 0; i<numbers.length ; i++){
//         if(num[i] < minNum){
//             secondlowestNum = minNum;
//             minNum = num[i];
//         }else if(num[i] < secondlowestNum){
//             secondlowestNum = num[i]
//         }
//     }
//     return secondlowestNum;
// }

// console.log('Second smallest number: ' + findSecondLowestNum(numbers));



//Day: 15
//Problem: 15

//Write a function that takes a string like this "rtr3dg6dfju7". And find all numbers from this string and return the sum of those numbers.

