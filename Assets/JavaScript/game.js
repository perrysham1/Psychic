var wins = 0;
var losses = 0;
var guessesSoFar = 0;
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Variable that holds a reference to the html where we want to display things
var winsText = document.getElementById("wins");
var lossesText = document.getElementById("losses");
var guessesSoFarText = document.getElementById("guessesSoFar");
var youChoseText = document.getElementById("youChose");
var computerChoseText = document.getElementById("computerChose");

// Player inputs letter
document.onkeyup = function(event) {
    var userGuess = event.key;

// Computer guesses random letter
    var computerGuess = letters[Math.floor(Math.random() * letters.length)];
    console.log(computerGuess);

// Correct guess
if (userGuess === computerGuess) {
    wins++;

// Incorrect guess
} else {
    losses++;
}

// Display the user and computer guesses
youChoseText.textContent = "--> " + userGuess;
computerChoseText.textContent = "--> " + computerGuess;
winsText.textContent = wins;
lossesText.textContent = losses;
guessesSoFarText.textContent = guessesSoFar;
}

// Count of attempts




