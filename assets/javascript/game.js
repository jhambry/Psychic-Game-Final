var choices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var winnings = 0;

var losed = 0;

var guesses = 9;

var guessesLeft = 9;

var guessedLetters = [];

var letToGuessing = null;

var pcGuess = choices[Math.floor(Math.random() * choices.length)];

var updatingGuesses = function() {

    document.querySelector('#guessesLefts').innerHTML = "Guesses left: " + guessesLeft;
};


var updatingToGuess = function() {

    this.letToGuessing = this.choices[Math.floor(Math.random() * this.choices.length)];
};

var soFar = function() {

    document.querySelector('#lettersGuessed').innerHTML = "Your Guesses so far: " + guessedLetters.join(', ');
};

var back2Normal = function() {

    totalGuesses = 9;

    guessesLeft = 9;

    guessedLetters = [];

    updatingToGuess();

    updatingGuesses();

    soFar();
}


updatingToGuess();

updatingGuesses();

document.onkeyup = function(event) {

    guessesLeft--;

    var whatAreYouGuessing = String.fromCharCode(event.keyCode).toLowerCase();

    guessedLetters.push(whatAreYouGuessing);

    updatingGuesses();

    soFar();

    if (guessesLeft > 0){

        if (whatAreYouGuessing == letToGuessing){

            winnings++;

            document.querySelector('#winnings').innerHTML = "Wins: " + winnings;

            alert("Winner!");

            back2Normal();

        }


    }else if(guessesLeft == 0){

        losed++;

        document.querySelector('#losed').innerHTML = "Losses: " + losed;

        alert("You lose");

        back2Normal();

    }

};
