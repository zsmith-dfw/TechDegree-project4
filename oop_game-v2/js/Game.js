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



}

