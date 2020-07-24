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

// Write a function called prependToString, which accepts two strings.

// The function should return a new string with the second string prepended to the first string.

// Examples:

// prependToString('awesome', 'very') // 'veryawesome'
// prependToString('world', 'hello ') // 'hello world'
// prependToString('nothing', '') // 'nothing'

function prependToString(str1, str2){
    return string = str2.concat(str1);
  }