class Phrase {
    constructor (phrase) {
        this.phrase = phrase.toLowerCase(phrase)

    }
/**
* Display phrase on game board
*/
addPhraseToDisplay() {
const characters = Game.phrases.split("")
const regex = new RegExp(/[a-z]/i)
for (let i = 0; i < characters; i++) {
    if (regex.test(characters[i])) {
        let li = document.createElement('li')
        li.className = `hide letter ${[i]}`
    }
    
// loop over the characters
// if it is a letter, create class based on the letter and append
// else create a space class and append 

};


}
}
