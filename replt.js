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

//PROBLEM #8
//Note to Lisa: his was the hardest one for me to solve

// Write a function called removeFromString, which accepts a string, a starting index (number) and a number of characters to remove. 

// The function should return a new string with the characters removed. 

// Examples:
// removeFromString('Elie', 2, 2) // 'El'
// removeFromString('Elie', 0, 1) // 'lie'
// removeFromString('Rithm School', 0, 6) // 'School'
// removeFromString('Rithm School', 2, 4) // 'RiSchool'
// removeFromString('Rithm School', 6, 400) // 'Rithm '

function removeFromString(str, index, number) {
    let newString = str.slice(0, index) + str.slice(index + number);
    return newString;
  }

//TEACHER's SOLUTION
// converting to an array method
// function removeFromStringArr(str, start, removeCount) {
//     let arr = str.split('');
//     arr.splice(start, removeCount);
//     return arr.join('');
//   }
  
//   // regular method
//   function removeFromString(str, start, removeCount) {
//     let newStr = '';
//     for (let i = 0; i < str.length; i++) {
//       if (i < start || i >= start + removeCount) {
//         newStr += str[i];
//       }
//     }
//     return newStr;
//   }

// PROBLEM #9
// Write a function called includes, which accepts an array and a number. 

// The function should return true if the value exists in the array and false if it does not. 

// Do not use the built in Array.includes() function!

// Examples:
// includes([1, 2, 3, 4], 4) // true
// includes([1, 2, 3, 4], 14) // false
// includes([], 14) // false

function includes(array, number){
    for(let i=0; i < array.length; i++){
      if(array[i] === number){
        return true;
      }
    }
    return false;
  }

// TEACHER'S SOLUTION FOR #9
// function includes(arr, val) {
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] === val) {
//         return true;
//       }
//     }
//     return false;
//   }
  
// PROBLEM #10
// Write a function called indexOf, which accepts an array and a number. 

// The function should return the first index at which the value exists or -1 if the value is not found.

// Do not use the built in Array.indexOf() function!

// Examples:
// var arr = [5, 10, 15, 20];
// indexOf(arr, 20); // 3

// var arr2 = [1, 2, 3, 4, 5];
// indexOf(arr2, 2); // 1

// var arr3 = [1, 2];
// indexOf(arr3, 10); // -1

function indexOf(array,number){
    for(i=0;i < array.length; i++){
      if(array[i]===number){
        return i;
      }
    }
    return -1;
  }
  var arr = [5, 10, 15, 20];
  var arr2 = [1, 2, 3, 4, 5]
  var arr3 = [1, 2]

  // TEACHER'S SOLUTION FOR #10
//   function indexOf(arr, val) {
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] === val) {
//         return i;
//       }
//     }
//     return -1;
//   }
  
TODO: PROBLEM #11

// Write a function called lastIndexOf, which accepts an array and a number.

// The function should return the last index at which the value exists, or -1 if the value is not found.

// Do not use the built in Array.lastIndexOf() function!

// Examples:
// lastIndexOf([1, 2, 3, 4], 2); // 1
// lastIndexOf([1, 2, 3, 4, 2], 2); // 4
// lastIndexOf([1, 2, 3, 4], 22); // -1


function lastIndexOf(array,number){
    let count = 0;
    for (let i = 0; i < array.length, i++){
      if(array(i) === number){
        return count++;
      }
    }
    return -1;
  }

// TEACHER'S SOLUTION TO #11

// PROBLEM #12
// Write a function called push which accepts two parameters, an array and any value. 

// The function should add the value to the end of the array and then return the new length of the array.

// Do not use the built in Array.push() function!

// Examples:
// var arr = [1, 2, 3];
// push(arr, 10); // 4

// arr; // [1, 2, 3, 10]

// var secondArr = [5, 2, 1, 6];
// push(secondArr, 20); // 5

// arr; // [5, 2, 1, 6, 20]
var arr = [1, 2, 3];
var secondArr = [5, 2, 1, 6];

function push(array, value){
  array[array.length] = value;
  return array.length;
}

console.log(arr);
console.log(secondArr);

// TEACHER'S SOLUTION #12
// function push(arr, value) {
//     // remember JS arrays are dynamic (in fact, technically they are objects)
//     //  so you can dynamically assign a new index at arr.length
//     //   and the length automatically updates
//     arr[arr.length] = value;
//     return arr.length;
//   }

// PROBLEM #13
// Write a function called pop which accepts an array.

// The function should remove the last value in the array and return the value removed or undefined if the array is empty.

// Do not use the built in Array.pop() function!

// Examples:
// var arr = [1, 2, 3, 4];
// pop(arr); // 4
// arr; // [1, 2, 3]

// var emptyArr = [];
// pop(emptyArr); // undefined
// emptyArr.length; // 0

function pop(arr) {
    for (i = 0; i < arr.length; i++){
      if(arr[i] === 0){
        return undefined;
      }
      return arr.splice(-1);
    }
    
  }
  
  var arr = [1, 2, 3, 4];
  var emptyArr = [];
  
  console.log(arr);
  console.log(emptyArr);
  

// TEACHER'S SOLUTION #13

// PROBLEM #16
// Write a function called reverse, which accepts an array and returns the same array with all of the values reversed. In other words, do not solve this by creating a new array.

// Note: returning the same array is called an in-place operation, since no additional space is used. https://en.wikipedia.org/wiki/In-place_algorithm 

// Do not use the built in Array.reverse() function!

// Examples:
// reverse([5, 4, 3, 2, 1]); // [1, 2, 3, 4, 5]
// reverse([]); // []

// var arr = [1, 2, 3];
// reverse(arr); // [3, 2, 1]
// arr; // [3, 2, 1]

function reverse(arr) {
    var newArr = Array.from(arr);
    for (let i = 0; i < arr.length; i++) {
      arr[i] = newArr[(newArr.length - i - 1)];
    }
    return arr;
  }

// TEACHER'S SOLUTION #16

/* 
 * swap each value in the array starting from the 
 *  beginning and going to the middle. Note the middle element
 *  itself does not need to be swapped
 */
// function reverse(arr) {
//     // midpoint is length / 2, floored to account for odd lengths
//     let middle = Math.floor(arr.length / 2);
  
//     for (let i = 0; i < middle; i++) {
//       let end = arr.length - 1;
//       // make a temporary variable to store a value closer 
//       //  to the beginning
//       let temp = arr[i];
//       // swap the value closer to the beginning with
//       //  a value the same distance from the end
//       arr[i] = arr[end - i];
//       // swap the value closer to the end with
//       //  the temporary variable
//       arr[end - i] = temp;
//     }
//     return arr;
//   }

//PROBLEM #17
// Write a function called max, which accepts an array and returns the highest value. 

// Do not use the built-in Math.max() function!

// Examples:
// max([5, 1, 4, 7, 1, 2]); // 7
// max([3, 4, 12, 1, 8]); // 12
// max([-1, 6, 3, 2.2, -10, -4]); // 6

function max(arr){
    var findMax = 0;
    for(let i=0;i<arr.length;i++){
      if (arr[i] > findMax){
        findMax = arr[i];
      }
    }
    return findMax;
  }

//   TEACHER'S SOLUTION #17
//   function max(arr) {
//     // we can use the first element as the default 'maximum'
//     let maximum = arr[0];
//     // then if we encounter a larger element in the rest of the array,
//     //   replace the value. Note we can start our loop at index 1
//     for (var i = 1; i < arr.length; i++) {
//       if (arr[i] > maximum) {
//         maximum = arr[i];
//       }
//     }
//     return maximum;
//   }