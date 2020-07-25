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

//answer: function prependToString(str1, str2){
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

// answer: function charAt(str, idx) {
//     // one-line solution using a ternary operator (condensed if/else)
//     return idx < str.length ? str[idx] : '';
//   }