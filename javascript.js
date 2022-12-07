const rounds = document.querySelector('.rounds');

const score = document.querySelector('.score');
const result = document.querySelector('.result');
const WINS = [
  {
    name: 'rock',
    beats: 'scissors'
  },
  {
    name: 'scissors',
    beats: 'paper'
  },
  {
    name: 'paper',
    beats: 'rock'
  }
]


// create a function for the player's selection

const choices = document.querySelectorAll('[data-selection]');

choices.forEach(choice => {
  choice.addEventListener('click', e => {
    const choiceName = choice.dataset.selection
    const win = WINS.find(win => win.name === choiceName)
    getPlayerChoice(win);
  })
})

function getPlayerChoice(win) {
  const computerSelection = getComputerChoice()
  const youWin = winner(playerSelection, computerSelection);
  const youLose = winner(computerSelection, playerSelection);
  console.log(computerSelection);
}

// create function for the computer to make a random selection from an array

function getComputerChoice() {
  const randomSelect = Math.floor(Math.random() * WINS.length);
  return WINS[randomSelect];
}

function winner(choice, computerSelection) {
  return win.beats === computerSelection.name
}

const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();

// create function to keep score between player and computer

let playerScore = 0;
let computerScore = 0;

// create a function to simulate a round and determine a winner

const winning = playRound(playerSelection, computerSelection);

function playRound(playerSelection, computerSelection) {
  if (computerSelection === WINS[playerSelection]) {
    result.textContent = `You win!! ${playerSelection} beats ${computerSelection}`;
    playerScore++;
    console.log('You have ' + playerScore);
  } else if (WINS[computerSelection] === playerSelection) {
    result.textContent = `You lose!! ${computerSelection} beats ${playerSelection}`;
    computerScore++;
    console.log('The CPU has ' + computerScore);
  } else result.textContent = 'Tie game!!';

}


// create a game function to loop rounds 5 times



// game();
