const rounds = document.querySelector('.rounds');
const score = document.querySelector('.score');
const result = document.querySelector('#result');
const winner = document.querySelector('#winner');
const player = document.querySelector('.player');
const computer = document.querySelector('.computer');
const buttons = document.querySelector('#buttons');

const rps = ['rock', 'paper', 'scissors'];


// create variables to keep score between player and computer

let playerScore = 0;
let computerScore = 0;

// create variable to keep track of rounds

let round = 1;

// create variables and event listeners for the player selections

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

// create main function to simulate rounds of rock, paper, scissors

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

  // removes button div once the player or computer reach the match point, to prevent game from continuing

  if (computerScore === 5 || playerScore === 5) {
    buttons.remove();
  }
}








