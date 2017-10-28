// constructor function! for word
var letters = /^[A-Za-z]+$/;
var word = function word(blah) {
    //concerting word into array of letters, with capitalization
    this.currArray = blah.split("");
    this.len = blah.length;
    //creating an array so we can do the comparison in lowercase so we can ignore if user inputs cap or lower in console
    this.lowerArray = [];
    for (var i = 0; i < this.len; i++) {
        this.lowerArray.push(this.currArray[i].toLowerCase());
    }
    //max amount of guess per word
    this.guesses = 12;
    this.lettersguessed = [];
    this.correctGuess = function correctGuess (x) {
        //checking to see if user input is a letter
        if (x.length === 1 && x.match(letters)) {
            var lower = x.toLowerCase();
            //checking to see if the user has guessed the letter already, if it hasnt will process next if statement
            if (this.lettersguessed.indexOf(x) === -1) {
                //checks to see if the letter guessed is a letter in the word, if  not it substracts from guesses, if not console logs correct
                if (this.lowerArray.indexOf(lower) === -1) {
                    this.guesses--;
                    console.log("\nYou is wrong Shawty\n");
                    console.log("You have " + this.guesses + " remaning!\n");
                } else {
                    console.log("\nCorrect!\n");
                }
                //always pushes the letter into the letter guess array if not already guessed.
                this.lettersguessed.push(lower);
            } else {
                console.log("\nyou have selected this word already\n");
            }
        }
        //in already guessed console logs below message to the screen.
        else {
            console.log("\nPlease select a letter.\n")
        }
    }
};

module.exports = {
    word: word
};