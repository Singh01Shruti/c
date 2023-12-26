/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  
  const sortedStr1 = str1.replace(/[^a-zA-Z!]/g, '').toLowerCase().split('').sort().join('');
  const sortedStr2 = str2.replace(/[^a-zA-Z!]/g, '')
  sortedStr2 = sortedStr2.toLowerCase().split('').sort().join('');
  
 
  return sortedStr1 === sortedStr2;
}


const result = isAnagram('hello', 'hello!');
console.log(result); // Output: true

module.exports = isAnagram;
