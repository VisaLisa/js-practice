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

// teacher's answer for #3
// function charAt(str, idx) {
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

//TEACHER's SOLUTION for #8
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
  
// PROBLEM #11

// Write a function called lastIndexOf, which accepts an array and a number.

// The function should return the last index at which the value exists, or -1 if the value is not found.

// Do not use the built in Array.lastIndexOf() function!

// Examples:
// lastIndexOf([1, 2, 3, 4], 2); // 1
// lastIndexOf([1, 2, 3, 4, 2], 2); // 4
// lastIndexOf([1, 2, 3, 4], 22); // -1


function lastIndexOf(arr, number) {
  for(let i=arr.length-1; i>=0; i--) {
    if(arr[i] === number){ 
      return i;
    }
  }
  return -1;
}


// // TEACHER'S SOLUTION TO #11
// function lastIndexOf(arr, val) {
//   for (let i = arr.length - 1; i >= 0; i--) {
//     if (arr[i] === val) {
//       return i;
//     }
//   }
//   return -1;
// }


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
  if(arr.length === 0){
    return undefined;
  }
  var lastLetter = arr[arr.length - 1];
  arr = arr.splice(arr.length-1);
  return lastLetter;
  
}

var arr = [1, 2, 3, 4];
var emptyArr = [];

console.log(arr);
console.log(emptyArr);
  

// TEACHER'S SOLUTION #13
// function pop(arr) {
//   if (arr.length === 0) {
//     return;  // default function return value is 'undefined'
//   }
//   // store the last value
//   let finalVar = arr[arr.length - 1];
//   // decreasing the length will automatically shrink the array
//   arr.length = arr.length - 1;

//   return finalVar;
// }

// PROBLEM #14
// Write a function called unshift which accepts an array and a value and adds the value to the beginning of the array.

// This function should return the new length of the array.

// Do not use the built in Array.unshift() function!

// Examples:

// var arr = [1, 2, 3];
// unshift(arr, 0); // 4
// arr; // [0, 1, 2, 3]

// unshift([4, 5, 6], 10); // 4
function unshift(arr, val) {
  for (let i = arr.length; i >= 0; i--) {
    arr[i] = arr[i - 1];
  }
  arr[0] = val;
  return arr.length;
}

// Teacher's solution for #14
// function unshift(arr, val) {
//   // starting from the end of the array, each item has to be
//   //  moved up one to account for the new element at the beginning
//   for (let i = arr.length; i >= 0; i--) {
//     arr[i] = arr[i - 1];
//   }
//   arr[0] = val;
//   return arr.length;
// }


// PROBLEM #15
// Write a function called shift which accepts an array and removes the first value in the array and then returns the value removed. It should return undefined if the array is empty.

// Do not use the built in shift function!

// Examples:

// var arr = ["a","b","c"];
// shift(arr); // "a"
// arr; // ["b","c"]

// var emptyArr = [];
// shift(emptyArr); // undefined
// emptyArr.length; // 0

function shift(array){
  if (array.length === 0){
    return undefined;
  }
  var firstLetter = array[0]; 
  array = array.splice(0,1);
  return firstLetter;
}

var arr = ["a","b","c"];
var emptyArr = [];

// Teacher's solution for #15

// function shift(arr) {
//   if (arr.length === 0) {
//     return;
//   }
//   let firstVal = arr[0];
//   // have to move up each element to account for missing first element
//   for (let i = 1; i < arr.length; i++) {
//     arr[i - 1] = arr[i];
//   }
//   arr.length = arr.length - 1;
//   return firstVal;
// }

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

//PROBLEM #18
// Write a function called min, which accepts an array of numbers and returns the lowest value. 

// Do note use the built-in Math.min() function!

// Examples:
// min([5, 1, 4, 7, 1, 2]); // 1
// min([-1, 6, 3, 2.2, -10, -4]); // -10

function min(arr){
    var findMin = arr[0];
    for(let i=0; i<arr.length; i++){
      if (arr[i] < findMin){
        findMin = arr[i];
      }
    }
    return findMin;
}

// TEACHER's SOLUTION for #18
// function min(arr) {
//     let lowest = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//       if (arr[i] < lowest) {
//         lowest = arr[i];
//       }
//     }
//     return lowest;
//   }

// PROBLEM #19
// Write a function called slice, which accepts an array, and two numbers.

// The function should return a new array with the elements starting at the index of the first number and going until the index of the second number.

// If a third parameter is not passed to the function, it should slice until the end of the array by default.

// If the third parameter is greater than the length of the array, it should slice until the end of the array.

// Do not use the built in Array.slice() function!

// Examples:

// slice([1, 2, 3, 4, 5], 0, 2); // [1, 2]
// slice([1, 2, 3, 4, 5], 2, 4); // [3, 4]
// slice([1, 2, 3, 4, 5], 2); // [3, 4, 5]
// slice([1, 2, 3, 4, 5], 2, 10); // [3, 4, 5]
function slice(arr, num1, num2) {
  let result = [];
  from = Math.max(num1, 0);
  to = Math.min(num2);
  
  if((!num2) || (num2 > arr.length)) {
    for(let i = from; i<arr.length; i++) {
    result.push(arr[i]);}
  } else { 
    for(let i = from; i<to; i++) {
    result.push(arr[i]);
    }
  }
  return result;
  }


// Teacher's Solution for #19
// function slice(arr, start, end) {
//   let newArr = [];
//   // handle end not being passed or being too large
//   if (end === undefined || end > arr.length) {
//     end = arr.length;
//   }
//   // slice from start to end
//   for (let i = start; i < end; i++) {
//     newArr.push(arr[i]);
//   }
//   return newArr;
// }


// PROBLEM #20
// Write a function called squareEvenNumbers which accepts an array and returns the sum of all of the even numbers in the array squared.
// Examples:

// squareEvenNumbers([1, 2, 3, 4, 5]); // 20
// squareEvenNumbers([1, 3, 5, 7]); // 0
// squareEvenNumbers([5, 6, 7]); // 36

function squareEvenNumbers(arr) {
  var sum = 0;
  for(var i = 0; i < arr.length; i++){
    if(arr[i] % 2 === 0){
    sum += arr[i] * arr[i];
    }
  }
  return sum;
}

//TEACHER'S SOLUTION for #20
// function squareEvenNumbers(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       sum += arr[i] ** 2;
//     }
//   }
//   return sum;
// }

// PROBLEM #21
// Write a function called keys, which accepts an object and returns an array of all of the keys in the object. 

// Do not use the built in Object.keys() function!

// Examples:

// var obj = { a: 1, b: 2, c: 3 };
// keys(obj); // ["a", "b", "c"]

// var obj2 = { first: 'Matt', last: 'Lane' };
// keys(obj); // ["first", "last"]

// var obj3 = {};
// keys(obj); // []

function keys(obj){
  var keys = [];
  for (var key in obj) {
    keys.push(key);
    if (obj.length === 0){
      keys = [];
    }
  }
  return keys;
}

// TEACHER'S SOLUTION #21
// function keys(obj) {
//   let arr = [];
//   for (let key in obj) {
//     arr.push(key);
//   }
//   return arr;
// }

// PROBLEM #22
// Write a function called values, which accepts an object and returns an array of all of the values in the object.

// Do not use the built in Object.values() function!

// Examples:
// var obj = { a: 1, b: 2, c: 3 };
// values(obj); // [1,2,3]

// var obj2 = { first: 'Matt', last: 'Lane', isDogOwner: true };
// values(obj2); // ["Matt", "Lane", true]

// var obj3 = {};
// values(obj3); // []

function values(obj){
  var arr = [];
  if (obj.length === 0){
      arr = [];
    }
  for(let key in obj) {
        arr.push(obj[key]);
      }
  return arr;
}

var obj = { a: 1, b: 2, c: 3 };
var obj2 = { first: 'Matt', last: 'Lane', isDogOwner: true };
var obj3 = {};

// TEACHER's SOLUTION FOR #22
// function values(obj) {
//   let valuesArr = [];
//   for (let key in obj) {
//     valuesArr.push(obj[key]);
//   }
//   return valuesArr;
// }


// PROBLEM #23
// Write a function called swapKeyAndValue, which accepts an object and a key. 

// The function should return a new object with the given key and its value flipped, and all the other key/value pairs unchanged.

// Examples:

// var instructor = { name: 'Elie', job: 'Instructor' };

// swapKeyAndValue(instructor, 'name');
// // {Elie: 'name', job: "Instructor"}

// swapKeyAndValue(instructor, 'job');
// // {name: "Elie", Instructor: 'job'}

function swapKeyAndValue({...obj},key){
  if(obj.hasOwnProperty(key)){
    const new_key = obj[key];
    obj[new_key] = key;
    delete obj[key];
  }
  return obj;
}

var instructor = { name: 'Elie', job: 'Instructor' };

// TEACHER's SOLUTION FOR #23
// function swapKeyAndValue(obj, swapKey) {
//   let newObj = {};

//   // loop through old object
//   for (let key in obj) {
//     if (key === swapKey) {
//       // the one key needs to be swapped with its value
//       newObj[obj[key]] = key;
//     } else {
//       // the other keys and values just need to be copied over
//       newObj[key] = obj[key];
//     }
//   }
//   return newObj;
// }

// PROBLEM #24
// Write a function called entries, which accepts an object and returns an array of arrays of key-value pairs.

// In other words, each sub-array is an "entry" in the object with two elements: the first element is the key, and the second element is the value.

// Do not use the built in Object.entries() function!

// Examples:

// var obj = { a: 1, b: 2, c: 3 };
// entries(obj); 
// // [["a",1], ["b",2], ["c",3]]

// var obj2 = { first: 'Matt', last: 'Lane', isDogOwner: true };
// entries(obj2); 
// // [["first","Matt"], ["last","Lane"], ["isDogOwner",true]]

// var obj3 = {};
// entries(obj3); // []

// function entries(obj){
//   if (Object.keys(obj).length === 0){
//     return [];
//     }
//   return Object.keys(obj).map(function(key) {
//     return [key, obj[key]];
//   });
// }

// var obj = { a: 1, b: 2, c: 3 };
// var obj2 = { first: 'Matt', last: 'Lane', isDogOwner: true };
// var obj3 = {};

// TEACHER's SOLUTION FOR #23

function entries(obj) {
  let container = [];
  for (let key in obj) {
    // push a sub-array of [key, obj] into the parent array
    container.push([key, obj[key]]);
  }
  return container;
}

// PROBLEM #25
// Write a function called countValues which accepts an array and a number and returns the number of times that value appears in the array. 

// Examples:

// countValues([4,1,4,2,3,4,4], 4) // 4
// countValues([4,1,4,2,3,4,4], 100) // 0
// countValues([], 1) // 0

function countValues(arr,num){
  count = 0;
  for (var i = 0; i < arr.length; i++){
    if(arr[i] === num){
      count ++;
    }
  }
  return count;
}

// TEACHER's SOLUTION FOR #25
function countValues(arr, val) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      count++;
    }
  }
  return count;
}

// PROBLEM #26

// TEACHER's SOLUTION FOR #26
// Write a function generatePairs that accepts an integer and generates an array containing the pairs of integers [a, b]. The pairs should be sorted by increasing values of a then increasing values of b.

// Examples:

// generatePairs(3) // [ [0, 0], [0, 1], [0, 2], [0, 3], [1, 1], [1, 2], [1, 3], [2, 2], [2, 3], [3, 3] ]
// generatePairs(2) // [ [0, 0], [0, 1], [0, 2], [1, 1], [1, 2], [2, 2] ]
// generatePairs(1) // [ [0, 0], [0, 1], [1,1]]
// generatePairs(0) // [ [0, 0]]

// Credit -  https://www.codewars.com/kata/pairs-of-integers-from-0-to-n/train/javascript

function generatePairs (int){
  let pairs = [];
  for (let i=0; i <= int; i++){
    for (let j=i; j <= int; j++){
      pairs.push([i,j]);
    }
  }
  return pairs;
}

// Teacher's solution for #26
// function generatePairs(n) {
//   var result = [];
//   for(i =0 ; i <= n ; i++){
//     for(j = i ; j <= n ; j++){
//         result.push([i, j]);
//     }
//   }
//   return result;
// }

// PROBLEM #27
// Implement a function called multiples that accepts two numbers: x and n. 

// The function should return the first n multiples of the number x. 

// Assume that x is a positive integer.

// Examples:

// multiples(3, 4) // [3, 6, 9, 12]
// multiples(2, 5) // [2, 4, 6, 8, 10]

// Credit - https://www.codewars.com/kata/return-the-first-m-multiples-of-n/train/javascript

function multiples(x,n) {
  let arr = [];
  for(let i=1; i <= n; i++){
    arr.push(x*i);
  }
  return arr;
}

// Teacher's solution for #27
// function multiples(x, n) {
//   const arr = [];
//   // multiply x * i for every number from 1 up to and including n
//   for (let i = 1; i <= n; i++) {
//     arr.push(i * x);
//   }
//   return arr;
// }

// PROBLEM #28
// Write a function called pluck, which takes an array of objects and the name of a key.

// The function should return an array containing the value associated with that key for each object, or undefined if that key is not present in the object.


// Examples:
 
// pluck([
//   { name: "Tim" }, { name: "Matt" }, { name: "Elie" }],
//  'name'
// )
// // ["Tim", "Matt", "Elie"]

// pluck(
//   [{ name: "Tim", isBoatOwner: true }, { name: "Matt", isBoatOwner: false }, { name: "Elie" }],
//  'isBoatOwner'
// )
// // [true, false, undefined]

function pluck(obj,key){
  return obj.map(function (value){
    return value[key];
  });
}

// Teacher's solution for #28

// function pluck(arr, key) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     newArr.push(arr[i][key]);
//   }
//   return newArr;
// }


// PROBLEM #29
// Write a function called twoHighest that takes an array of numbers as its argument and returns the two highest numbers within the array. 

// The returned value should be an array in the following format: [secondHighest, highest]

// The order of the numbers passed in could be any order.

// Do not use the build in sort() method - the tests will fail!

// Examples:

// twoHighest([1, 2, 10, 8]); // [8, 10]
// twoHighest([6, 1, 9, 10, 4]); // [9,10]
// twoHighest([4, 25, 3, 20, 19, 5]); // [20,25]
// twoHighest([1, 2, 2]) // [2, 2];

// Credit - https://www.codewars.com/kata/two-oldest-ages-1
function twoHighest(arr) {
  var highest = 0;
  var secondHighest = 0;

  for (var i = 0; i < arr.length; i++) { 
    if (arr[i] >= highest) { 
      secondHighest = highest; 
      highest = arr[i];
    } else if (arr[i] > secondHighest && arr[i] < highest) {
      secondHighest = arr[i];
    }
  }

  return [secondHighest, highest];
}

// Teacher's solution for #29
/**
 * This approach takes 1 single sweep of the array with two pointers.
 *  The highest and secondHighest are initialized to negative Infinity
 *  so that any numbers in the array will be eligible. Then set the
 *  secondHighest first, and if it's greater than the highest, swap.
 */
// function twoHighest(nums) {
//   // initialize both to the lowest possible values
//   let highest = -Infinity;
//   let secondHighest = -Infinity;

//   for (let num of nums) {
//     // set secondHighest first
//     if (num > secondHighest) {
//       secondHighest = num;
//     }
//     // see if we need to set highest
//     if (secondHighest >= highest) {
//       // if so, swap
//       let tmp = highest;
//       highest = secondHighest;
//       secondHighest = tmp;
//     }
//   }
  
//   return [secondHighest, highest];
// }

// PROBLEM #30

// Write a function called minMaxKeyInObject that accepts an object with numeric keys.*

// The function should return an array with the following format: [lowestKey, highestKey]


// Examples:

// minMaxKeyInObject({ 2: 'a', 7: 'b', 1: 'c', 10: 'd', 4: 'e' });
// // [1, 10]

// minMaxKeyInObject({ 1: 'Elie', 4: 'Matt', 2: 'Tim' });
// // [1, 4]


// * Remember all object keys are strings, even if they hold numeric values.
function minMaxKeyInObject(obj){
  let keyArr = Array.from(Object.keys(obj))
  
  let min = Math.min(...keyArr)
  let max = Math.max(...keyArr)
  return [min,max]
}


// Teacher's solution for #30

/**
 * Standard approach looping through object with two pointers
 */
function minMaxKeyInObject(obj) {
  let minKey = Infinity;
  let maxKey = -Infinity;

  for (let key in obj) {
    // convert key to number and compare
    let keyNum = +key; // this is shorthand for Number(key)
    if (keyNum < minKey) {
      minKey = keyNum;
    }
    if (keyNum > maxKey) {
      maxKey = keyNum;
    }
  }

  return [minKey, maxKey];
}

/**
 * Advanced approach. Declarative 1-liner using Object.keys 
 *  and Array spread operator (...)
 */
function minMaxKeyInObjectDeclarative(obj) {
  return [Math.min(...Object.keys(obj)), Math.max(...Object.keys(obj))];
}


// PROBLEM #31
// Write a function called stringFromObject that generates a string from an object's key/value pairs.

// The format should be "key = value, key = value". 

// Each key/value pair should be separated by a comma and space except for the last pair.

// Examples:

// stringFromObject({ a: 1, b: '2' }); 
// // "a = 1, b = 2"

// stringFromObject({ name: 'Elie', job: 'Instructor', isCatOwner: false }); 
// // "name = Elie, job = Instructor, isCatOwner = false"

// stringFromObject({}); 
// // ""

// Credit - https://www.codewars.com/kata/building-strings-from-a-hash

function stringFromObject(obj) {
  var string = "";
  for (var key in obj){
    string += key + ' = ' + obj[key] + ', ';
  }
  string = string.slice(0, string.length - 2);
  return string;
}

//Teacher's solution for #31
/**
 * Loop thru keys building a string with ' = ' between
 *  key and value and ', ' between each entry,
 *  then slice off the comma and space at the end
 */
// function stringFromObject(obj) {
//   let finalStr = '';
//   for (let key in obj) {
//     finalStr += key + ' = ' + obj[key] + ', ';
//   }
//   return finalStr.slice(0, -2);
// }

// /**
//  * This is a very advanced approach that you might see in production code.
//  *  Get entries of an object (an array of arrays with [key, value]), then
//  *  turn it into an array of strings like ['key = value', 'key = value'],
//  *  then finally join the array on comma + space
//  */
// function stringFromObjectDeclarative(obj) {
//   return Object.entries(obj)
//     .map(pair => pair.join(' = '))
//     .join(', ');
// }

// PROBLEM #32
// A query string, is a way to send data in an HTTP request, you may see it in a URL starting with a question mark. Write a function called toQueryString, which accepts an object and returns a string with each key and value separated by a = and each pair separated by a &. If the value is an array, add another pair to the string with each value

// Examples:

// toQueryString({}) // ""
// toQueryString({"bar": [ 2, 3], "foo": 1 }) // "bar=2&bar=3&foo=1"
// toQueryString({name: "Elie", "nums": [1,2,3,4]}) // "name=Elie&nums=1&nums=2&nums=3&nums=4"

// Credit - https://www.codewars.com/kata/do-you-know-how-to-make-query-string

// function toQueryString(obj) {
//   return Object.entries(obj).reduce((acc,[key,val])=>{
//       if(Array.isArray(val)){
//         val.forEach(e=>acc += (acc ? "&": "") + key + "=" + e);
//       } else {
//       	acc += (acc ? "&": "") + key + "=" + val;
//       }
//       return acc;
//   }, "");
// }

// Teacher's solution for #32
function toQueryString(obj){
  var str = '';
  for(var key in obj){
    if(Array.isArray(obj[key])){
      for(var i = 0; i < obj[key].length; i++){
        str += '&' + key + '=' + obj[key][i]
      }
    } else {
      str += '&' + key + '=' + obj[key]
    }
  }
  return str.slice(1);
}

// PROBLEM #33
// Write a function called countNumbers, which accepts an array of strings. The function should return a count of the number of strings in the array that can be successfully converted into a number. For example, the string "1" can be successfully converted to the number 1, but the string "hello" cannot be converted into a number.

// Examples:

// countNumbers(['a','b','3','awesome','4']); // 2
// countNumbers(['32', '55', 'awesome', 'test', '100']); // 3
// countNumbers([]); // 0
// countNumbers(['4','1','0','NaN']); // 3
// countNumbers(['7', '12', 'a', '', '6', '8', ' ']); // 4

function countNumbers(arr) {
  return arr.filter(function(el) {
    return parseFloat(el) == el;
  }).length;
}

// Teacher's solution for #33
// function countNumbers(arr){
//   let count = 0;
//   for(let val of arr){
//     let valToNumber = parseInt(val)
//     let isValNaN = isNaN(valToNumber) 
//     if(isValNaN === false){
//       count++
//     }
//   }
//   return count;
// }

// ANOTHER OPTION
// function countNumbers(arr){
//   // return an array of values that are not NaN when converted to a string
//   // and calculate the length
//   return arr.filter(val => !isNaN(parseInt(val))).length
// }

// PROBLEM #34
// Write a function called totalCaps, which accepts an array of strings and returns the total number of capitals in each of the strings. Do not convert the array into a string.

// Examples:

// totalCaps(["AwesomE", "ThIngs", "hAppEning", "HerE"]) // 8
// totalCaps(["Elie", "Matt", "Tim"]) // 3
// totalCaps(["hello", "world"]) // 0

function totalCaps(arr){
  var total = 0;
  var capWords = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for(var i = 0; i < arr.length; i++){
    for(var j = 0; j < arr[i].length; j++){
      if(capWords.includes(arr[i][j])){
        total++;
      }
    }
  }
  return total;
}

//Teacher's solution for #34
// function totalCaps(arr){
//   var count = 0;
//   for(var i = 0; i < arr.length; i++){
//     for(var j = 0; j < arr[i].length; j++){
//       if(arr[i].charCodeAt(j) >= 65 && arr[i].charCodeAt(j) <= 90){
//         count++
//       }
//     }
//   }
//   return count;
// }

// function countCaps(str){
//   const caps = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
//   let count = 0;
//   for(let char of str){
//     if(caps.includes(char)) {
//       count++
//     }
//   }
//   return count
// }

// function totalCaps(arr){
//   let finalCount = 0;
//   for(let str of arr){
//     finalCount += countCaps(str)
//   }
//   return finalCount
// }

// PROBLEM #35
// Given an array of unique numbers, return a new array of rankings of the original array. For example, if your input array is [10, 5, 20], the output should be [2, 3, 1], since 10 is the second largest number, 5 is the third largest, and 20 is the largest.

// Examples:

// rankings([10, 5, 20]); // [2, 3, 1]
// rankings([6, 8, 1, 12, 4, 3, 9]); // [4, 3, 7, 1, 5, 6, 2]
// rankings([100]); // [1]
// rankings([4, 2, 3, 1]); // [1, 3, 2, 4]

// Credit - https://www.codewars.com/kata/ranking-system

function rankings (arr) {
  var sortedArr = [];
  var newArr = []

  for (let item of arr) {
    sortedArr.push(item);
  }  
  sortedArr.sort((a, b) => b - a);

  for (i = 0; i < arr.length; i++) {
    newArr.push(sortedArr.indexOf(arr[i]) + 1)
  }

  return newArr;
}

//Teacher's solution for #35
// function rankings(arr) {
//   var rankingsArr = [];
//   for (var i = 0; i < arr.length; i++) {
//     var rank = 1;
//     for (var j = 0; j < arr.length; j++) {
//       if (arr[j] > arr[i]) rank++;
//     }
//     rankingsArr.push(rank);
//   }
//   return rankingsArr;
// }

