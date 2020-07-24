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

people.sort();

//using splice to insert in the middle of array

people.splice(1,0,'Bob');

//using splice to remove
//people.splice(3,2)

//using splice to replace
//people.splice(3,2,'arron','eric')

// OBJECT SECTION

// const Lisa = [
//     height: 62;
//     weight: 150; 
//     city: 'Seattle';
//     age: 29; 
//     grade: [
//         midterm: 80;
//         final: 100;
//     ]
// ];
// loops
for (let bet = 1; bet <= 10; bet += 3){
    console.log('Hello');
}

// for(let num = 1; num <= 20; num++){
//     console.log(`${num}x${num} = ${num * num}`);
// }

const myStudents = [
    {
        firstName : 'Zeus',
        grade     : 86
    },
    {
        firstName : 'Artemis',
        grade     : 97
    },
    {
        firstName : 'Hera',
        grade     : 72
    },
    {
        firstName : 'Apollo',
        grade     : 90
    }
];

for (let i = 0; i < myStudents.length; i++) {
    let student = myStudents[i];
    console.log(`${student.firstName} scored ${student.grade}`);
}

// let total = 0;

// for (let i = 0; i < myStudents.length; i++){
//     let student = myStudents[i];
//     total += student.grade;
// }
// console.log(total / myStudents.length);

const examScores = [98, 77, 84, 91, 57, 66];

for (let i = 0; i <= examScores.length; i++){
    console.log(i, examScores[i]);
};

//function greet()
function greet(name){
    console.log(`Hello, ${name}`);
}


function rollDice() {
    let roll = Math.floor(Math.random() * 6) + 1;
    console.log(`Rolled: ${roll}`);
}

function throwDice(numRolls){
    for (let i = 0; i < numRolls; i++){
        rollDice();
    }
}

function square(num) {
    console.log(num * num);
}

function sum (x,y) {
    console.log(x + y);
}

function divide(a,b){
    console.log(a / b);
}
function containsPurple(arr){
    for (let color of arr) {
        if (color === 'purple' || color ==='magenta') {
            return true;
        }
    }
    return false;
}

// function isValidPassword(password, username) {
//     const tooShort = password.length < 8;
//     const hasSpace = password.indexOf(' ') !== -1;
//     const tooSimilar = password.indexOf(username) !== -1;
//     if (!tooShort && !hasSpace && !tooSimilar){
//     return true;}
//     return false;
// } 

function isValidPassword(password, username) {
    const tooShort = password.length < 8;
    const hasSpace = password.indexOf(' ') !== -1;
    const tooSimilar = password.indexOf(username) !== -1;
    return !tooShort && !hasSpace && !tooSimilar;
}

function avg(arr){
    let totalnum = 0;
    //loop over each num
    for(let num of arr){
        //add them together
        totalnum += num;
    }
    //divide by number of num
    return totalnum / arr.length;
}

//pangram functions
//version 1

// function isPangram(sentence){
//     let lowerCased = sentence.toLowerCase();
//     for(let char of 'abcdefghijklmnopqrstuvwxyz') {
//         if (lowerCased.indexOf(char) === -1){
//             return false;
//         }
//     }
//     return true;
// }

//version 2
function isPangram(sentence){
    let lowerCased = sentence.toLowerCase();
    for (let char of 'abcdefghijklmnopqrstuvwxyz') {
        if (!lowerCased.includes(char)){
            return false;
        }
    }
    return true;
}

//playing cards functions
//write a getCard() function which returns a random playing card object, like: 
// { 
//    value: 'K'
//    suit: 'clubs' 
// }
//  pick a random value from: 1-A
//  pick a random suit from: clubs, spades, hearts, diamonds
// return both in an object

// function getCard(){
//     const values =['1','2','3','4','5','6','7','8','9','10','J','Q','K','A'];
//     const validx = Math.floor(Math.random() * values.length); 
//     const value = values[validx];

//     const suits = ['clubs', 'spades', 'hearts', 'diamonds'];
//     const suitIdx = Math.floor(Math.random() * suits.length);
//     const suit = suits[suitIdx];
//     return {value, suit};
// }
function pick(arr) {
	//return random element from arr
	const idx = Math.floor(Math.random() * arr.length);
	return arr[idx];
}

function getCard() {
	const values = [
		'1',
		'2',
		'3',
		'4',
		'5',
		'6',
		'7',
		'8',
		'9',
		'10',
		'J',
		'Q',
		'K',
		'A'
	];
	const suits = [ 'clubs', 'spades', 'hearts', 'diamonds' ];
	return { value: pick(values), suit: pick(suits) };
}

//block scope

let radius = 0;

if(radius > 0){
    const PI = 3.14;
    let circ = 2 * PI * radius;
}

// console.log(radius);
// console.log(PI);
// console.log(circ);

let animals = ['bear','tiger','panda'];

for (var i = 0; i < animals.length; i++){
    console.log(i, animals[i])
}

function doubleArr(arr){
    const result = [];
    for(let num of arr){
        let double = num * 2;
        result.push(double);
    }
    return result;
}