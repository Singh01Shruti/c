/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  if(str.length == 0 || str.length == 1) return true;
  str = str.replace(/ /g, "");
  str = str.replace(/[,.!?]/g, "");
  str = str.toLowerCase();
  if((str.length % 2 == 0)){
    for(let i = 0; i<= str.length/2;i++){
      if(str[i] != str[str.length-i-1]) return false;
    }
    return true;
  } else{
    for(let i = 0; i<str.length/2;i++){
      if(str[i] != str[str.length-i-1]) return false;
    }
    return true;
  }
  }



console.log(isPalindrome("Ana"));
module.exports = isPalindrome;
