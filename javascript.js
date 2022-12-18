const rounds = document.querySelector('.rounds');
const score = document.querySelector('.score');
const result = document.querySelector('#result');
const winner = document.querySelector('#winner');
const player = document.querySelector('.player');
const computer = document.querySelector('.computer');

const rps = ['rock', 'paper', 'scissors'];


// create variables to keep score between player and computer

let playerScore = 0;
let computerScore = 0;
let round = 1;

// const playerSelection = document.querySelectorAll('.rps button');

const btnRock = document.querySelector('.rock');
const btnPaper = document.querySelector('.paper');
const btnScissors = document.querySelector('.scissors');

btnRock.addEventListener('click', () => playRound(getComputerChoice(), 'rock'));
btnPaper.addEventListener('click', () => playRound(getComputerChoice(), 'paper'));
btnScissors.addEventListener('click', () => playRound(getComputerChoice(), 'scissors'));




// create function for the computer to make a random selection from an array

function getComputerChoice() {
  const randomSelect = rps[Math.floor(Math.random() * rps.length)]
  console.log(randomSelect);
  return randomSelect;
}


// const selections = playerSelection() && computerSelection();

// buttons.forEach(button => {
//   button.addEventListener('click', playRound)
// })

// const winner = playRound(playerSelection, computerSelection)

const playRound = function (getComputerChoice, playerSelection) {
  let win = {
    'rock': 'scissors',
    'scissors': 'paper',
    'paper': 'rock'
  };


  if (win[getComputerChoice] === playerSelection) {
    result.textContent = `You lose!! ${getComputerChoice} beats ${playerSelection}`;
    computer.textContent = `Computer Score: ${computerScore += 1}`;
  } else if (getComputerChoice === win[playerSelection]) {
    result.textContent = `You win!! ${playerSelection} beats ${getComputerChoice}`;
    player.textContent = `Player Score: ${playerScore += 1}`;
  } else result.textContent = 'Tie game!!';

  rounds.textContent = `Round: ${round += 1}`;

  if (computerScore === 5) {
    winner.textContent = 'You lost the match!!';
  } else if (playerScore === 5) {
    winner.textContent = 'You won the match!!';
  }
}

// const winner = playRound(playerSelection, computerSelection)



// create a function for the player's selection


// create function to keep score between player and computer

// create a function to simulate a round and determine a winner


// create a game function to loop rounds 5 times

// function game() {
//   for (i = 0; i <= 5; i++) {
//     const playerSelection = getPlayerChoice();
//     const computerSelection = getComputerChoice();
//     playRound(playerSelection, computerSelection);
//   }
// }


