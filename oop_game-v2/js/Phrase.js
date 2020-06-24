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

/**
* Checks if passed letter is in phrase
* @param (string) letter - Letter to check
*/
checkLetter(letter) {
    if (this.phrase.includes(letter)) {
        return true
    
    } else {
        return false 
    }
};


// if letter selected by player is in phrase, return true, else return false

/**
* Displays passed letter on screen after a match is found
* @param (string) letter - Letter to display
*/
showMatchedLetter(letter) {

    if (this.checkLetter() = true) {
        this.li.className = `show letter ${letter}`

    }

};
}

