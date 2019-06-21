
// letter guessing game, computer generates letter from array, user inputs a letter guess, user guesses <= 9 are displayed.
// wins are added, losses are added, guess are deducted from 9.

// alphabet array

var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//scoring variables
var answer;
var wins = 0;
var losses = 0;
var guessesLeft = 9;
// user guess lists here a maximum of 9 times or until win.
var guesses = [];


//computer chooses a random letter
var answer = alphabet[Math.floor(Math.random() * alphabet.length)];

function reset() {
            // reset = alphabet[Math.floor(Math.random() * alphabet.length)];
        reset = answer;
        console.log(reset);
        guessesLeft = 9;
        guesses = [];

    }

// console.log(answer)


//user chooses a letter via key event.
document.onkeypress = function (event) {
    // var userGuess = event.key;
var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    guesses.push(userGuess);
    document.getElementById('guesses').innerHTML = "Your Guesses so far: " + guesses.join("  ");

    
    // if user guess matches computer guess, add to win
    //if win add plus 1 to win, reset.

        if (userGuess === answer) {
            win();
            document.getElementById('wins').innerHTML = "Wins: " + wins;

            function win() {
                wins++;
                alert("WOOHOO!!! You Got IT!!!")
                reset();
            }
        } 
    
        else {
            guessesLeft--;
            document.getElementById('guessesLeft').innerHTML = "Guesses Left: " + guessesLeft;
        }
    //  if user guess is different then computer guess, deduct 1 unit from remaining guesses.
    // if guesses left reaches zero then add loss.
    //if loss, add plus 1 to loss, reset.

        if (guessesLeft == 0) {
            loss();
            document.getElementById('losses').innerHTML = "Losses: " + losses;

            function loss() {
                losses++;
                reset();
            }
        }

    
    
}