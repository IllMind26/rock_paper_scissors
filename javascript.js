// create an array that contains rock, paper, scissors

const rps = ["rock", "paper", "scissors"];


// create function that generates a random word(Rock, Paper, Scissors) from an array

// create function for the computer to make a random selection from that array
    function getComputerChoice() {
        const randomSelect = rps[Math.floor(Math.random() * rps.length)];
        console.log(randomSelect);
        alert(randomSelect);
    }

    
   
   
// create a prompt for the user to make a selection

// create a function that creates a round, make these rounds repeat 5 times

// within that round function
    function playRound(playerSelection, computerSelection) {

    }

    const playerSelection = prompt("Select rock, paper, or scissors!");
    const computerSelection = getComputerChoice();
// player and computer scores start at 0

    let playerScore = 0;
    let computerScore = 0;

// loop the rounds 5 times
    function game() {
        for(let i = 0; i < 5; i++); {
            playRound();
        }
    }
   