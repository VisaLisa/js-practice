// PROBLEM #1
// Write a function called appendToString, which accepts two strings. 

// The function should return a new string which consists of the second string appended to the first string.

// Examples:
// appendToString("Hello", " World!"); // "Hello World!"
// appendToString("Foo", "bar"); // "Foobar"
// appendToString("bar", "Foo"); // "barFoo"
// appendToString("", "test"); // "test"
// appendToString("other test", ""); // "other test"

function appendToString(str1, str2) {
    return str1 + str2;
  }


// PROBLEM #2
  // Write a function called prependToString, which accepts two strings.

// The function should return a new string with the second string prepended to the first string.

// Examples:

// prependToString('awesome', 'very') // 'veryawesome'
// prependToString('world', 'hello ') // 'hello world'
// prependToString('nothing', '') // 'nothing'

function prependToString(str1, str2){
    return string = str2.concat(str1);
  }

//teacher's answer: function prependToString(str1, str2){
//     return str2 + str1;
// }


//PROBLEM #3
// Write a function called charAt which accepts a string and an index (number) and returns the character at that index. 

// The function should return an empty string if the number is greater than the length of the string.

// Do not use the built in charAt method - the tests will fail if you do! 

function charAt(str, idx){
    if(idx > str.length){ 
      return '';
    }
    else{
      return str[idx];}
  }

// teacher's answer: function charAt(str, idx) {
//     // one-line solution using a ternary operator (condensed if/else)
//     return idx < str.length ? str[idx] : '';
//   }

//PROBLEM #4
// Write a function called stringIncludes, which accepts two strings: the first string is a word and the second string is a single character. 

// The function should return true if the first string includes the character, otherwise it should return false.

// Do not use the built in String.includes() function!
//Examples
// stringIncludes('awesome', 'e'); // true
// stringIncludes('awesome', 'z'); // false

function stringIncludes(string, word){
    return string.indexOf(word) > 0 || false;
  }


//TEACHER'S SOLUTION #4; 
//function stringIncludes(str, char) {
  // the ES2015 keyword 'let' is preferable for loop iterator variables
  //  since it is scoped to that block
  //   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === char) {
//       return true;
//     }
//   }
//   return false;
// }



//TPROBLEM #5
// Write a function called stringIndexOf, which accepts two strings: the first is a word and the second is a single character.

// The function should return the first index in the word at which the character exists or -1 if the character is not found.

// Do not use the built in String.indexOf() function!

// Examples:
//stringIndexOf('awesome', 'e') // 2
// stringIndexOf('awesome', 'z') // -1

function stringIndexOf(str, char){
    for(let i = 0; i < str.length; i++){
      if (str[i] === char){
        return i;
      }
    }
    return -1;
  }

  
// TEACHER'S SOLUTION #5
//   function stringIndexOf(str, char) {
//     for (let i = 0; i < str.length; i++) {
//       if (str[i] === char) {
//         return i;
//       }
//     }
//     // by the time you've reached this line, the loop has examined
//     //   every single character in the string
//     return -1;
//   }
  

//PROBLEM #6
// Instructions from your teacher:
// Write a function called stringLastIndexOf, which accepts two strings: the first is a word and the second is a single character.

// The function should return the last index at which the character exists or -1 if the character is not found.

// Do not use the built in String.lastIndexOf() function!

// Examples:
// stringLastIndexOf('awesome', 'e'); // 6
// stringLastIndexOf('awesome', 'z'); // -1

function stringLastIndexOf(word, char){
    let lastchar = word.slice(-1)[0];
    if (lastchar === char){
      return word.length - 1;
    }
    return -1;
  }

//TEACHER'S SOLUTION #6
// function stringLastIndexOf(str, char) {
//     // the approach is the same as the last problem, except
//     //  the loop goes backwards
//     for (let i = str.length - 1; i >= 0; i--) {
//       if (str[i] === char) {
//         return i;
//       }
//     }
//     return -1;
//   }


// PROBLEM #7
// Write a function called repeat, which accepts a string and a number and returns a new string with the string repeated that number of times.

// Do not use the built in repeat method - the tests will fail if you do!

// Examples:
// repeat('Matt', 3) // 'MattMattMatt'
// repeat('Elie', 2) // 'ElieElie'
// repeat('Michael', 0) // '' 

function repeat(str, num){
    let newString = "";
    while(num > 0){
      newString += str;
      num--;
    }
    return newString;
  }

// TEACHER'S SOLUTION FOR #7
// function repeat(str, num) {

//     var newStr = '';  // string we will build up
  
//     for (let i = 0; i < num; i++) {
//       // note that this creates a new string every iteration of the loop
//       //  because JavaScript strings are immutable
//       newStr += str;
//     }
  
//     return newStr;
//   }


