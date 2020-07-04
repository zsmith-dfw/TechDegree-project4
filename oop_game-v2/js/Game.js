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
    const phrase = this.phrases[Math.floor(Math.random() * this.phrases.length)]
    return phrase; 
}

/**
* Begins game by selecting a random phrase and displaying it to user
*/
startGame() {
    this.resetGame()
    let hideStart = document.querySelector('#overlay')
    hideStart.style.display = 'none'
    this.getRandomPhrase()
    this.activePhrase = this.getRandomPhrase()
    this.activePhrase.addPhraseToDisplay(Phrase)

}

/**
* Checks for winning move
* @return {boolean} True if game has been won, false if game wasn't
won
*/
checkForWin() {
    let win = false
    let hiddenLetters = this.activePhrase.showMatchedLetter(Phrase)
    console.log(hiddenLetters)
    hiddenLetters = document.getElementsByClassName('hide').length
        if (hiddenLetters === 0) {
            win = true
            this.gameOver(true) 
            return win;
        } else {
            win = false
            return win; 
        }
    }
    /**
* Increases the value of the missed property
* Removes a life from the scoreboard
* Checks if player has remaining lives and ends game if player is out
*/
removeLife() {
    const hearts = document.querySelector('ol') // selecting the only ordered list item in index.html
    hearts.className ='hearts' // give it class of hearts
    let score = document.querySelector('.tries img') // store the first img tag in the list
    let tries = document.querySelector('.tries')
            if (this.activePhrase.checkLetter(this.letter) === false) { // if this method is called
                this.missed ++ // we will add one to missed 
                score.src = "images/lostHeart.png" // change image to lost heart 
                tries.className = 'fails'
                
        }
            if (this.missed >= 5) {
                this.gameOver()

            }
}

/**
* Displays game over message
* @param {boolean} gameWon - Whether or not the user won the game
*/
gameOver(gameWon) {
  
    const gameOverMessage = document.getElementById('game-over-message')
    const gameOverScreen = document.querySelector('.start')
    const showStart = document.querySelector('#overlay')

    if (gameWon === true) {
    showStart.style.display = 'block'
    gameOverMessage.innerHTML = 'The Mojave is saved...for now. For war...war never changes.'
    gameOverScreen.className = 'win'
    
    }

else{
        showStart.style.display = 'block'
        gameOverMessage.innerHTML = 'The Mojave is lost...for now. For war...war never changes.'
        gameOverScreen.className = 'lose'
    }
}

/**
* Handles onscreen keyboard button clicks
* @param (HTMLButtonElement) button - The clicked button element
*/
handleInteraction(button) {


if (this.activePhrase.checkLetter(button.innerHTML) === false) {
    button.disabled = true
    button.className = 'wrong'
    this.removeLife()

} else {

    button.disabled = true
    button.className = 'chosen'
    this.activePhrase.showMatchedLetter(button.innerHTML)
    this.checkForWin()
        if (this.checkForWin() === true) {
            this.gameOver() 
        }
}
}

resetGame() {
    const listId = document.querySelector('ul')
    listId.innerHTML = ''
    let chosen = document.querySelectorAll('.chosen')
    let wrong = document.querySelectorAll('.wrong')
    for (let i = 0; i < chosen.length; i ++) {
        chosen[i].className = 'key'
        chosen[i].disabled = false
    }
    for (let i = 0; i < wrong.length; i ++) {
        wrong[i].className = 'key'
        wrong[i].disabled = false
        this.missed = 0
        console.log(this.missed)
    }
    let allFails = document.querySelectorAll('.fails')
    for (let i = 0; i < allFails.length; i ++) {
        allFails[i].className = 'tries'
    }
    allFails.className = 'tries'

    let score = document.querySelectorAll('.tries img')
    for (let i = 0; i < score.length; i ++) {
        score[i].src = 'images/liveHeart.png'
    }

}
}