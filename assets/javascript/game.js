// Grab reference to my DOM Elements
var $newGameButton = document.getElementById("new-game-button");
var $placeholders = document.getElementById("place-holders");
var $guessedLetters = document.getElementById("guessed-letters");
var $lettersLeft = document.getElementById("letters-left");
var $wins = document.getElementById("wins-made");
var $losses = document.getElementById("losses-made");


// Create Variables for game
var wordBank = ["America", "Italy", "France", "Spain", "Netherlands", "England"];
var wins = 0;
var losses = 0;
var guessesLeft = 0;
var pickedWord = " ";
var pickedWordPlaceHolderArr = [];
var guessedLetterBank = [];
var incorrectLetterBank = [];
var gameRunning = false;


// Create new game function - to reset game
function newGame() {
    
    //reset all game info
    gameRunning = true;
    guessesLeft = 7;
    guessedLetterBank = [];
    incorrectLetterBank = [];
    pickedWordPlaceHolderArr = [];

    // Pick a new word
    pickedWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    
    // create place holders based on word length
    for (var i = 0; i < pickedWord.length; i++) {
        if(pickedWord[i] === " ") {
            pickedWordPlaceHolderArr.push(" ");
        } else {
            pickedWordPlaceHolderArr.push("_");
        }
    }

    // Write game info to DOM


}
// letterGuess function, based on letter pressed if it is in the array



// check for incorrect letter



// check lose



// check win


// add event listener for new game button
$newGameButton.addEventListener("click", newGame);


// add onkeyup event to trigger letterGuess