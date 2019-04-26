const start = document.getElementById('start-game'),
      feedback = document.querySelector('p'),
      buttons = document.getElementById('buttons'),
      submit = document.getElementById('submit-button'),
      input = document.querySelector('input');

const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [],
  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum;
      feedback.innerHTML = `Enter a guess between ${this.smallestNum} and ${this.biggestNum}:.  ${this.secretNum}`
      start.innerHTML = "START"
      resetInput();
      this.prevGuesses = [];
  },
  getGuess: function() {
    guess = parseInt(input.value);
    if (isNaN(guess) || guess > this.biggestNum || guess < this.smallestNum) {
      feedback.innerHTML = `C'mon guess a NUMBER`;
      resetInput();
    } else {
      game.prevGuesses.push(guess);
      if (guess == this.secretNum) {
        feedback.innerHTML = `Congrats! You guessed the number in ${this.prevGuesses.length} guesses!`
        start.innerHTML = "PLAY AGAIN";
      } if (guess > this.secretNum) {
        feedback.innerHTML = `Your guess is too high. Here are your previous guesses: ${this.prevGuesses.join(', ')}`  
        resetInput();  
      } if (guess < this.secretNum) {
        feedback.innerHTML = `Your guess is too low. Here are your previous guesses: ${this.prevGuesses.join(', ')}` 
        resetInput();
      };
    }
    return guess
  },
};

function resetInput() {
  input.value = '';
}



start.addEventListener('click', function(){
  game.play();
});

submit.addEventListener('click', function(){
  game.getGuess();
});




 

// let guess = 0;
// function addGuess(prevGuess) {
//   game.prevGuesses.push(prevGuess);
//   game.prevGuesses.join("  ,  ");
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




