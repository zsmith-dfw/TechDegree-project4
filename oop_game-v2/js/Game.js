class Game  {
    constructor () {
        this.missed = 0
        this.phrases = this.createPhrases()
        this.activePhrase = null
    }
/**
* Creates phrases for use in game
* @return {array} An array of phrases that could be used in the game
*/
createPhrases() {
    const phrases = [new Phrase('The game was rigged from the start'),
                     new Phrase('Ave true to Caesar'),
                     new Phrase('I told them I had a theoretical degree in physics'),
                     new Phrase('Begin again and let go'),
                     new Phrase('This is Mister New Vegas')]

        return phrases;
    }
/**
* Selects random phrase from phrases property
* @return {Object} Phrase object chosen to be used
*/
getRandomPhrase() {
    const phrase = this.phrases[Math.floor(Math.random() * this.phrases.length)];
    return phrase; 
};

/**
* Begins game by selecting a random phrase and displaying it to user
*/
startGame() {
console.log(this)
const hideStart = document.querySelector('#overlay')
hideStart.style.display = 'none'
this.getRandomPhrase()
this.activePhrase = this.getRandomPhrase()
this.activePhrase.addPhraseToDisplay(Phrase)


};

handleInteraction () {
    // checkLetter(letter)
    // showMatchedLetter(letter)

}

/**
* Checks for winning move
* @return {boolean} True if game has been won, false if game wasn't
won
*/
checkForWin() {};
/**
* Increases the value of the missed property
* Removes a life from the scoreboard
* Checks if player has remaining lives and ends game if player is out
*/
removeLife() {};

/**
* Displays game over message
* @param {boolean} gameWon - Whether or not the user won the game
*/
gameOver(gameWon) {};

}

// return this.activePhrase.phrase