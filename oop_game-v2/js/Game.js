class Game  {
    constructor () {
        this.missed = 0
        this.phrases = []
        this.activePhrase = null
    }
/**
* Creates phrases for use in game
* @return {array} An array of phrases that could be used in the game
*/
createPhrases() {
    const phrases = [new Phrase('First Phrase'),
                     new Phrase('Second Phrase'),
                     new Phrase('Third Phrase'),
                     new Phrase('Fourth Phrase'),
                     new Phrase('Fifth Phrase')]
    
        return phrases;
    }

}