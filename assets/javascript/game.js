// Grab reference to my DOM Elements
var newGameButton = document.getElementById("new-game-button");
var placeholders = document.getElementById("place-holders");
var guessedLetters = document.getElementById("guessed-letters");
var guessesLeft = document.getElementById("letters-left");
var wins = document.getElementById("wins-made");
var losses = document.getElementById("losses-made");


// Create Variables for game
var wordBank = ["Chelsea", "Liverpool", "Paris St Germain", "Real Madrid", "Barcelona", "Ajax", "Juventus", "Napoli", "Arsenal", "Boca Juniors"];
var winsCount = 0;
var lossesCount = 0;
var guessesLeft$ = 7;
var pickedWord = " ";
var pickedWordPlaceHolderArr = [];
var guessedLetterBank = [];
var incorrectLetterBank = [];
var gameRunning = false;



// Create new game function - to reset game
function newGame() {
    
    //reset all game info
    guessesLeft$ = 7;
    guessedLetterBank = [];
    incorrectLetterBank = [];
    pickedWordPlaceHolderArr = [];
    gameRunning = true;

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
    guessesLeft.textContent = guessesLeft$;
    placeholders.textContent = pickedWordPlaceHolderArr.join(" ");
    guessedLetters.textContent = incorrectLetterBank;

}
// letterGuess function, based on letter pressed if it is in the array
function letterGuess(letter) {
    console.log(letter);

    if (gameRunning === true && guessedLetterBank.indexOf(letter) === -1) {
        // Print to DOM
        guessedLetters.textContent = guessedLetterBank.join(" ");
        // Run Game Logic
        guessedLetterBank.push(letter);

        // check if guessed letter is in picked word
        for (var i = 0; i <pickedWord.length; i++) {
            // Converting lower case values to be compared correctly
            if(pickedWord[i].toLowerCase() === letter.toLowerCase()) {
                //If a match swap out character in placeholder with the letter
                pickedWordPlaceHolderArr[i] = pickedWord[i];
            }
        }
        placeholders.textContent = pickedWordPlaceHolderArr.join(" ");

    }
    else {
       if(gameRunning === false) {
           alert("The game has not yet started, please click Let's Play!");
        }else {
            alert ("You have already guessed this letter, try again!");
        }
    }

}


// check for incorrect letter
function checkIncorrect(letter) {
    if (pickedWordPlaceHolderArr.indexOf(letter.toLowerCase()) === -1 && 
    pickedWordPlaceHolderArr.indexOf(letter.toUpperCase()) === -1) { 
        guessesLeft$ --;
        incorrectLetterBank.push(letter);
        guessedLetterBank.textContent = incorrectLetterBank.join(" ");
        guessesLeft.textContent = guessesLeft$;
    }
    checkLoss();
}


// check lose
function checkLoss() {
    if (guessesLeft$ === 0) {
        gameRunning = false;
        lossesCount ++;
        losses.textContent = lossesCount;
    }
    checkWin();
}


// check win
function checkWin () {
    if (pickedWord.toLowerCase() === pickedWordPlaceHolderArr.join(" ").toLowerCase())
    {
        winsCount ++;
        gameRunning = false;
        wins.textContent = winsCount;
    }
}


// add event listener for new game button
newGameButton.addEventListener("click", newGame);


// add onkeyup event to trigger letterGuess
document.onkeyup = function(event) {
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        letterGuess(event.key);
    }
}