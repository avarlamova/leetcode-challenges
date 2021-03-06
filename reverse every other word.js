/*Reverse every other word in a given string, then return the string. 
Throw away any leading or trailing whitespace, while ensuring there is 
exactly one space between each word. Punctuation marks should be treated 
as if they are a part of the word in this kata.

*/

function reverse(str){
    let res = [];
    str = Array.from(str.split(' '));
    
    for (let i=0; i<str.length; i++) {
      if (i%2===0) res.push (str[i])
      else res.push(Array.from(str[i]).reverse().join(''))
  }  
    return res.join(' ').trim()
  }