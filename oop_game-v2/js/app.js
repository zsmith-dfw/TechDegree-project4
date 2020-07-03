const game = new Game()
const startButton = document.getElementById('btn__reset')
startButton.addEventListener('click', (e) => { 
game.startGame()
})

const letter = document.getElementById('qwerty') // targeting the whole div that contains all the keys

console.log(letter) // list of everything in qwerty
letter.addEventListener('click', (event) => { // listening for when something in the qwerty div is clicked 
  if (event.target.tagName === 'BUTTON') { // if the targeted element is a button
    console.log(event.target)
    game.handleInteraction(event.target) // pass the letter parameter to this function 

     }
  })







