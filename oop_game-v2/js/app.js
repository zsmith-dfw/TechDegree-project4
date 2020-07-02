// const phrase = new Phrase ('Life is like a box of chocolates')
// console.log(`Phrase - phrase: ${phrase.phrase}`)
// const game = new Game ()

// game.phrases.forEach((phrase, index) => {
//     console.log(`Phrase ${index} - phrase: ${phrase.phrase}`);
//     });

// const logPhrase = (phrase) => {
//     console.log(`Phrase - phrase: `, phrase.phrase);
//     };
//     const game = new Game();
//     logPhrase(game.getRandomPhrase());
//     logPhrase(game.getRandomPhrase());
//     logPhrase(game.getRandomPhrase());
//     logPhrase(game.getRandomPhrase());
//     logPhrase(game.getRandomPhrase());

// const game = new Game()
// const randomPhrase = game.getRandomPhrase()
// const phrase = new Phrase(randomPhrase.phrase)
// phrase.addPhraseToDisplay()

// const game = new Game()
// game.getRandomPhrase().addPhraseToDisplay()

// const game = new Game();
// game.startGame();
// console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);

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







