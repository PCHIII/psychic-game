// letter guessing game, computer generates letter from array, user inputs a letter guess, user guesses <= 9 are displayed.
// wins are added, losses are added, guess are deducted from 9.
// alphabet array
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//scoring variables
// user guess lists here a maximum of 9 times or until win.
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guesses = [];

//computer chooses a random letter
var answer = alphabet[Math.floor(Math.random() * alphabet.length)];

// reset game after win or loss

function reset() {
    reset == answer;
    guessesLeft = 9;
    guesses = [];

}

//user chooses a letter via key event.
document.onkeypress = function (event) {

    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    guesses.push(userGuess);

    // if user guess matches computer guess, add to win.
    //if win add plus 1 to win, reset.

    if (userGuess == answer) {
        wins++;
        alert("Namaste, Welcome to Enlightenment!!!");
        reset();
    }
    //  if user guess is different then computer guess, deduct 1 unit from remaining guesses.
    // if guesses left reaches zero then add loss.
    //if loss, add plus 1 to loss, reset.
    else {
        guessesLeft--;

    }
    if (guessesLeft == 0) {
        losses++;
        reset();

    }

    //  add elements into html
    document.getElementById('guesses').innerHTML = "Your Guesses so far: " + guesses.join("  ");

    document.getElementById('wins').innerHTML = "Wins: " + wins;

    document.getElementById('guessesLeft').innerHTML = "Guesses Left: " + guessesLeft;

    document.getElementById('losses').innerHTML = "Losses: " + losses;

}