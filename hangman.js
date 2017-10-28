var inquirer = require("inquirer");
var turn = 0;
var wordList =["Jurassic Park", "Wedding Crashers", "Old School", "The Goonies", "The Matrix", "Hook", "The Other Guys"];
var currword;
var gamemax = wordList.length;
var showwords = [];
var teststring = "";
var word = require("./word.js");
var letter = require("./letter.js");

inquirer.prompt([{
    name:"play",
    type:"confirm",
    message: "Are you ready to play Hangman!"
}]).then(function(answer) {
    if(answer.play === true) {
        setupWords(turn);
        test();
        playgame(currword);
    }
});

//Beginning of my functions.
function playgame(currword) {
    if (currword.guesses > 0) {
        inquirer.prompt(
            {
                name: "userChoice",
                type: "input",
                message: "Guess a letter"
            }
        ).then(function (answer) {
            currword.correctGuess(answer.userChoice);
            test();
            if(teststring.indexOf("_") === -1) {
                if(turn === gamemax) {
                    console.log("You have won!\n");
                    return;
                }else {
                    console.log("You have guessed this word correctly\n");
                    currword = setupWords(turn);
                    console.log("\nNew Word\n");
                    test();
                    playgame(currword);
                }
            }
            else if(teststring.indexOf("_") != -1) {
                playgame(currword);
            }
        })
    }
    else {
        console.log("You have no more guesses remaining");
        inquirer.prompt(
            {
                name: "playagain",
                type: "confirm",
                message: "You have no more guesses left, do you want to play again?"
            }
        ).then(function (answer) {
            if (answer.playagain === true) {
                //call function to play game again.
                turn = 0;
                setupWords(turn);
                playgame(currword);
            }
        })
    }
}
//function used to set up letters and word constructors.
function setupWords(y) {
    showwords = [];
    currword = new word.word(wordList[y]);
    // console.log("this is the call when new word", currword.currArray);
    for(var j = 0; j < currword.currArray.length; j++) {
        showwords.push(new letter.letter(currword.currArray[j], currword.lettersguessed));
    }
    turn++;
    // console.log("this is hte showwords", showwords);
    return currword;
}
// function for prompt to print things out correctly
function test() {
    teststring ="";
    for(var i = 0; i < showwords.length; i++) {
        teststring = teststring + showwords[i].display() + " ";
    }
    console.log(teststring + "\n");
}