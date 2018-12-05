var Letter = function (initVal) {
    this.initVal = initVal;

    if (this.initVal === " ") {
        this.isGuessed = true;
    } else {
        this.isGuessed = false;
    }

    this.takeGuess = function (guessVal) {
        if (this.isGuessed) {
            return true;
        }
        if (guessVal.toLowerCase() === this.initVal.toLowerCase()) {
            this.isGuessed = true;
            return true;
        } else {
            this.isGuessed = false;
            return false;
        }
    };
};

Letter.prototype.toString = function () {
    if (this.isGuessed) {
        return this.initVal;
    } else {
        return "_";
    }
}

module.exports = Letter;


