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