function isPangram(sentence){
    let lowerCased = sentence.toLowerCase(); // set all char in sentence to lowercase
    for (let char of 'abcdefghijklmnopqrdtuvwxyz'){
        if (!lowerCased.includes(char){
            return false:
        }
    }
        return true; 
}

console.log(isPangram("sphinx of black quartz, judge my vow");) // true
console.log(isPangram("the quick brown fox jumps over the lazy dog");) // true
console.log(isPangram("this does not have all letters");) // false
console.log(isPangram("this will not work as well");) // false)
