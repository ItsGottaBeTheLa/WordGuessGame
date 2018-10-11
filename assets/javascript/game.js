// Array of Words to choose randomly
var word = [
    "Hazard", 
    "Mbappe", 
    "Ronaldo", 
    "Neymar", 
    "Messi", 
    "Dybala",
];

// Choose random Word
var randomWord = word[Math.floor(Math.random() * word.length)];

// var wordSelected = document.getElementById("currentWord");
// wordSelected.innerHTML = randomWord;
var chosenWord = [];

// Underscores based on array
// var currentWord = chosenWord;
for (var i = 0; i < randomWord.length; i++) {
    chosenWord.push("_");
}

var wordSelected = document.getElementById("currentWord");
wordSelected.innerHTML = chosenWord;


// Get users guess

// Check if Guess is right

//If right push to wins

//If wrong push to Number of Guesses Remaining
