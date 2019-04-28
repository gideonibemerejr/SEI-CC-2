const startGame = document.getElementById('startGame'),
      feedback = document.getElementById('feedback'),
      sumbitButton = document.getElementById('submitButton'),
      userInput = document.getElementById('userInput').value;

const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [],
  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum;
      this.prevGuesses = [];
      feedback.innerHTML = `Enter a guess between ${this.smallestNum} and ${this.biggestNum}:.  ${this.secretNum}`
      let guess = NaN;
      while (guess !== this.secretNum){
        guess = this.getGuess();
        this.prevGuesses.push(guess);
        this.render(guess);
        if (guess === this.secretNum) return;
      }
  },
  getGuess: function() {
    let guess = NaN;
    while (isNaN(guess) || guess > this.biggestNum || guess < this.smallestNum) {
      guess = parseInt(prompt());
      // prompt the player to enter guess of what the secret number is until they guess correctly
      // feedback.innerHTML = `Enter a guess between ${this.smallestNum} and ${this.biggestNum}:.  ${this.secretNum}
    }
    return guess; 
  },
  render: function(guess) {
    let message = '';
    if (guess == this.secretNum) {
      message = `Congrats! You guessed the number in ${this.prevGuesses.length} guesses!`
      startGame.innerHTML = "PLAY AGAIN";
    } if (guess > this.secretNum) {
      message = `Your guess is too high. Here are your previous guesses: ${this.prevGuesses.join(', ')}`    
    } else if (guess < this.secretNum) {
      message = `Your guess is too low. Here are your previous guesses: ${this.prevGuesses.join(', ')}` 
    };
    feedback.innerHTML = message;
    console.log(message);
    console.log(this.prevGuesses);
  }

};

startGame.addEventListener('click', function () {
  game.play()

})
console.log(message);



// let guess = 0;
// function addGuess(prevGuess) {
//   game.prevGuesses.push(prevGuess);
//   game.prevGuesses.join("  ,  "); œœ
// }
// // If the player has an incorrect guess, display an alert message that informs the player:
//   while (guess !== 'quit' ) {
//     // prompt the player to enter guess of what the secret number is until they guess correctly
//     sumbitButton.addEventListener('click', function() {
//       guess = userInput
//       console.log(guess);
//       if (guess == game.secretNum) {
//         addGuess(guess);
//         alert('Nice job! You did it in ' + game.prevGuesses.length + ' guesses!');
//         guess = 'quit';
//         // If the player has an incorrect guess, display an alert message that informs the player:
//       } else if (guess > game.secretNum && guess !== 'quit') {
//         addGuess(guess);
//         alert('Your guess is too high. Here are your previous guesses: ' + game.prevGuesses);
//       } else if (guess < game.secretNum) {
//         addGuess(guess);
//         alert('Your guess is too low. Here are your previous guesses: ' + game.prevGuesses);
//       }
//     })
//   } 




