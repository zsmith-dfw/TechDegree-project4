class Phrase {
    constructor (phrase) {
        this.phrase = phrase.toLowerCase(phrase)

    }
/**
* Display phrase on game board
*/
addPhraseToDisplay() {
const phraseId = document.querySelector('#phrase') // probably don't need this anymore
const listId = document.querySelector('ul')
listId.className ='letters'
console.log(listId)
const characters = this.phrase.split("")
console.log(characters)
const regex = new RegExp(/[a-z]/i)
    for (let i = 0; i < characters.length; i++) {
            if (regex.test(characters[i])) {
                let li = document.createElement('li')
                li.className = `hide letter ${characters[i]}`
                listId.appendChild(li)
                
            } else {
                let li2 = document.createElement('li')
                li2.className = 'space'
                listId.appendChild(li2)
            }
        }
    }
}
// psuedocode   
// loop over the characters
// if it is a letter, create class based on the letter and append
// else create a space class and append 
