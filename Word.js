var Letter = require("./Letter.js");

var Word = function (initVal) {
    this.initVal = initVal;
    this.letters = [];

    for (var i = 0; i < initVal.length; i++) {
        var letter = new Letter(initVal.charAt(i));
        this.letters.push(letter);
    }

    this.takeGuess = function (guessVal) {
        for (var i = 0; i < this.letters.length; i++) {
            this.letters[i].takeGuess(guessVal);
        }
    };

    this.isGuessed = function () {
        for (var i = 0; i < this.letters.length; i++) {
            if (!this.letters[i].isGuessed) {
                return false;
            }
        }
        return true;
    };
};

Word.prototype.toString = function () {
    var outStr = "";

    for (var i = 0; i < this.letters.length; i++) {
        outStr += this.letters[i] + " ";
    }

    outStr.trim();

    return outStr;
};

module.exports = Word;