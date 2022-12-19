const choices = ["rock", "paper", "scissors"]
const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  userChoice = e.target.id
  
  
  
}))

function game() {
  //for (let i = 0; i < 5; i++) {
    playRound(); // exei i mesa sta ()
  //}
    
}

function playRound(){
const playerSelection = userChoice
const computerSelection = getComputerChoice();
const winner = checkWinner(playerSelection, computerSelection);
console.log(winner)
}

/*function playerChoice() {
    let input = prompt("Rock,Paper or Scissors?");
    while(input == null){
        input = prompt("Rock,Paper or Scissors?");
    }
    input = input.toLowerCase();
    return input
}
*/
function checkWinner(choiceP, choiceC) {
    if (choiceP === choiceC){
      return "Tie"
    } else if ((choiceP === 'rock' && choiceC =='scissors') || (choiceP === 'scissors' && choiceC =='paper') || (choiceP === 'paper' && choiceC =='rock') ){
      return 'You win'
    } else {
      return 'You lose'
    }
      
    
}

function getComputerChoice() {
    return choices[Math.floor(Math.random()*choices.length)] 
    
}




