var Word = require("./Word.js");

var inquirer = require("inquirer");
var colors = require('colors/safe');
var word;
var prevWord;
var guessesRemaining;
var gameNum = 0;

var words = ["Happy Holidays", "Merry Christmas", "Happy New Year"];

newGame();

function newGame() {
    if (gameNum < words.length) {
        word = new Word(words[gameNum]);
        prevWord = word.toString();
        guessesRemaining = 15;
        gameNum++;
        console.log(word.toString() + "\n");
        getGuess();
    }
}

function getGuess() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "guess a letter > ",
                name: "answer"
            }
        ])
        .then(function (inquireRespond) {
            word.takeGuess(inquireRespond.answer);

            console.log("\n" + word.toString() + "\n");

            if (word.toString() != prevWord) {
                console.log(colors.green("CORRECT!!!\n"));
            }
            else {
                console.log(colors.yellow("INCORRECT!\n"));
            }

            guessesRemaining--;

            if (guessesRemaining < 11) {
                console.log(guessesRemaining + " guesses remaining.\n");
            }

            if (!word.isGuessed() && guessesRemaining > 0) {
                prevWord = word.toString();
                getGuess();
            }
            else if (guessesRemaining === 0) {
                console.log(colors.red("\nSorry, you lost!"));
            }

            else {
                if (gameNum < words.length) {
                    console.log(colors.magenta("\nCongratulations! Start a new game!\n"));
                    newGame();
                }
                else {
                    console.log(colors.red("Game Over!!!"));
                }
            }
        });
}