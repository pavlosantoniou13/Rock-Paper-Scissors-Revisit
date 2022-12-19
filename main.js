const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result
const playerScore = document.getElementById('playerScore')
const computerScore = document.getElementById('computerScore')


//collects users choice and displays it, then it runs our game running generatecomputerchoice() and choosing the winner with get result().
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  userChoice = e.target.id
  userChoiceDisplay.innerHTML = userChoice
  generateComputerChoice()
  getResult()
  isWinner()
  resetGame() 
}))
//generates a random number that equals to choice.
function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1 // or you can use possibleChoices.length
  
  if (randomNumber === 1) {
    computerChoice = 'rock'
  }
  if (randomNumber === 2) {
    computerChoice = 'scissors'
  }
  if (randomNumber === 3) {
    computerChoice = 'paper'
  }
  computerChoiceDisplay.innerHTML = computerChoice
}
//chooses the winner and displays it.
function getResult() {
    if (computerChoice === userChoice) {
      result = 'its a draw!'
    }
    if (computerChoice === 'rock' && userChoice === "paper") {
      result = 'you win!'
    }
    if (computerChoice === 'rock' && userChoice === "scissors") {
      result = 'you lost!'
    }
    if (computerChoice === 'paper' && userChoice === "scissors") {
      result = 'you win!'
    }
    if (computerChoice === 'paper' && userChoice === "rock") {
      result = 'you lost!'
    }
    if (computerChoice === 'scissors' && userChoice === "rock") {
      result = 'you win!'
    }
    if (computerChoice === 'scissors' && userChoice === "paper") {
      result = 'you lost!'
    }
    resultDisplay.innerHTML = result
}
//increments the winners score
function isWinner() {
if (result === 'you win!') {
  playerScore.innerText = parseInt(playerScore.innerText) + 1
}
else if (result === 'you lost!') {
  computerScore.innerText = parseInt(computerScore.innerText) + 1
}
else {
  return;
} 

}
// if playerscore or computer score reach the number of 5 the resets
function resetGame(){
  if (playerScore.innerText === '5' || computerScore.innerText === '5') {
    resultDisplay.innerHTML = '0'
    playerScore.innerText = '0'
    computerScore.innerText = '0'
  }
}