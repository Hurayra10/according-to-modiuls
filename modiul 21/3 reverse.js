const greetings = 'Assalamo Alaikum via. How are you?';

function reverseString (text){
    let reverse = '';
    for(let letter of text){
        reverse = letter + reverse;
        console.log(letter);
    }
  
}
reverseString(greetings);
// console.log(reverseString(greetings));