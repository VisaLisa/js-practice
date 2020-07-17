//example 1 if/else if/ else statements

if (1 === 1) {
    console.log("It's True!");
}

let rating = 'ten';

if (rating === 3){
    console.log('You are a super star!');
}
else if (rating === 2) {
    console.log ('Meets expectations');
}
else if (rating === 1) {
    console.log ('Needs improvement');
}
else {
    console.log ("Invalid rating")
}

//example 2 
let highScore = 1430;
let userScore = 1000;

if (userScore >= highScore) {
    console.log('Congrats, you have a new high score of ' + userScore);
    highScore = userScore;
}
else if (highScore >= userScore) {
    console.log('Try to beat the High Score of ' + highScore + '. Your score was ' + userScore);
}

else{
    console.log('Score Error');
}

// example 3 - nesting conditional
let password = 'AHdfhnoifgd';

if (password.length >= 6) {
    if (password.indexOf(' ') === -1) {
        console.log('Valid Password!');
    }    
    else {
        console.log('Password is long enough, but cannot contain spaces');
    }
}
else {
    console.log('Password must be longer!');
}

// example 4 - FALSY/TRUTHY
let loggedInUser = true;

if (loggedInUser) {
    console.log('You are logged in!');
}
else {
    console.log('Please log in');
}

// example 5 - Logical AND (&&)

let password1 = 'Aghdd';

if (password1.length >= 8 && password1.indexOf(' ') === -1) {
    console.log('Valid Password');
}    
else {
    console.log('Invalid Password');
}

//  example 6 - Logical or (||)

let age = 64;

if (age < 6 || age >=65) {
    console.log("You get in for free");
}
else {
    console.log('You must pay');
}

// example 7 - Logical Not (!); both functions below are the same output

let flavor = "banana";

if (flavor !== 'grape'  && flavor !== 'cherry') {
    console.log('We do not have that flavor');
}

if (!(flavor === 'grape' || flavor === 'cherry')) {
    console.log('We do not have that flavor');
}


// example 8 - switch statements
let day = Blob;

switch (day) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log('Invalid day');
}

// ternary operator

let status = 'offline';

// let color;
// if(status === 'offline') {
//     color = 'red';
// }
// else {
//     color = 'green';
// }

let color = status === 'offline' ? 'red' : 'green';

// array

let shoppingList = ['apples','cookies','cans'];
// what's the 2nd item in the array
console.log(shoppingList[1]);

//add potatoes to the list
shoppingList[shoppingList.length] = 'potatoes';

// JAVASCRIPT METHOD!!

//push - adding items into list
//pop - remove item from list

shoppingList.push('bath salts');
shoppingList.pop('');
console.log("This is the shopping list: "+ shoppingList + " totaling " + shoppingList.length+ " items");

let dishesToDo = ['big platter', 'mug', 'small plate']
//unshift - add item to the end of array
dishesToDo.unshift('large plate')
//shift - remove item from array
dishesToDo.shift('mug')

//Concatenating arrays

let num1 = [1,2,3];
let num2 = [4,5,6];
let num3 = [7,8,9];

let new_arraynum = num1.concat(num2,num3);

// includes array - searches for item within array and determines true/false 
if (num1.includes(3)){
    console.log('There is a 3');
}

//indexOf will show which number the value is in the array
num3.indexOf(8)

//sort array

let people = ['Tim', 'Joe','Iver','Sam'];

people.sort()