
let randomNumber = Math.floor(Math.random()*100) + 1;

const guessField = document.querySelector('.guessField');
const guessSubmit = document.querySelector('.guessSubmit');

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

let count = 1;

let resetButton;


function checkGuess() {
  let userGuess = Number(guessField.value);

  if(count === 1) {
    guesses.textContent = 'Previous guess: ';
  }

  guesses.textContent += userGuess + ' ';

  if(userGuess === randomNumber) {
    lastResult.textContent = 'Congratulation, you are right';
    lastResult.style.backgroundColor = 'green';
    lowOrHi.textContent = '';
    setGameOver();
  } else if(count === 10) {
    lastResult.textContent = 'Game over';
    setGameOver();
  } else {
    lastResult.textContent = 'Wrong !!!';
    lastResult.style.backgroundColor = 'red';
    if(userGuess > randomNumber) {
      lowOrHi.textContent = 'Your answer is too high';
    } else if(userGuess < randomNumber ){
      lowOrHi.textContent = 'Your answer is too low';
    }
  }

  count++;
  guessField.value = '';
  guessField.focus();
}

guessSubmit.addEventListener('click', checkGuess);
function setGameOver() {
  guessField.disable = true;
  guessSubmit.disable = true;
  
  // add reset button
  resetButton = document.createElement('button');
  resetButton.textContent = 'Restart !';
  document.body.appendChild(resetButton);
  resetButton.addEventListener('click', resetGame);
}

function resetGame() {
  count = 1;

  const resetParagraphs = document.querySelectorAll('.resultParas p');

  for(let i = 0; i< resetParagraphs.length; i++) {
    resetParagraphs[i].textContent = '';
  }

  resetButton.parentNode.removeChild(resetButton);

  guessField.disable = false;
  guessSubmit.disable = false;
  guessField.value = '';
  guessField.focus();

  lastResult.style.backgroundColor = 'white';

  randomNumber = Math.floor(Math.random()*100) + 1;
}


