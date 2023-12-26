/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  const regex = /[AEIOUaeiou]/
  str = str.replace(/ /g, "");
  let count = 0;
  for(let i =0; i< str.length ; i++){
    if(regex.test(str[i])) count ++;
  }
  return count;
}


console.log(countVowels("hello i"));
module.exports = countVowels;