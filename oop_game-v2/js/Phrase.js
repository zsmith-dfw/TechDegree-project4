class Phrase {
    constructor (phrase) {
        this.phrase = phrase.toLowerCase(phrase)

    }
/**
* Display phrase on game board
*/
addPhraseToDisplay() {
const phraseId = document.getElementById('phrase')
const characters = this.phrase.split("")
console.log(characters)
const regex = new RegExp(/[a-z]/i)
for (let i = 0; i < characters; i++) {
    if (regex.test(characters[i])) {
        let li = document.createElement('li')
        li.className = `hide letter ${characters[i]}`
        phraseId.appendChild(li)
        
    } else {
        let li2 = document.createElement('li')
        li2.className = 'space'
        phraseId.appendChild(li2)
    }

    
// loop over the characters
// if it is a letter, create class based on the letter and append
// else create a space class and append 

};


}
}

