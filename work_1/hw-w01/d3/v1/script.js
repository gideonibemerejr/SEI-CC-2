const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [],
  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum;
  }
};
game.play();

console.log(game.secretNum);



let guess = 0;;
function addGuess(prevGuess) {
  game.prevGuesses.push(prevGuess);
  game.prevGuesses.join("  ,  ");
}
// If the player has an incorrect guess, display an alert message that informs the player:
  while (guess !== 'quit' ) {
    // prompt the player to enter guess of what the secret number is until they guess correctly
    guess = prompt(`Enter a guess between ${game.smallestNum} and ${game.biggestNum}:`);
    if (guess == game.secretNum) {
      addGuess(guess);
      alert('Nice job! You did it in ' +game.prevGuesses.length+ ' guesses!');
      guess = 'quit';
      // If the player has an incorrect guess, display an alert message that informs the player:
    } else if (guess > game.secretNum && guess !== 'quit') {
        addGuess(guess);
        alert('Your guess is too high. Here are your previous guesses: ' +game.prevGuesses);
    } else if (guess < game.secretNum) {
      addGuess(guess);
      alert('Your guess is too low. Here are your previous guesses: ' +game.prevGuesses);
    }
  } 




