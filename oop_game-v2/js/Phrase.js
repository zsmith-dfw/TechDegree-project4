class Phrase {
    constructor (phrase) {
        this.phrase = phrase.toLowerCase(phrase)

    }
/**
* Display phrase on game board
*/
addPhraseToDisplay() {

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
                li.innerHTML = `${characters[i]}`
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
}

/**
* Displays passed letter on screen after a match is found
* @param (string) letter - Letter to display
*/
showMatchedLetter(letter) {
    console.log(letter)
        let letterMatch = document.querySelectorAll('.letters li') // select all the li elements 
        for (let i = 0; i < letterMatch.length; i ++) { // looping through the list elements 
         if (letterMatch[i].classList.contains(`${letter}`) ) { // if the name in the iterated li element has a name that matches the letter...
                letterMatch[i].className = `show letter ${letter}` // change the list items class name to show letter so that it can be displayed
                letterMatch[i].innerHTML = `${letter}`
            }
        }
    }
}