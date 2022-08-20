// create an array that contains rock, paper, scissors

const rps = ["rock", "paper", "scissors"];


// create function that generates a random word(Rock, Paper, Scissors) from an array

// create function for the computer to make a random selection from that array
    function getComputerChoice() {
        const randomSelect = rps[Math.floor(Math.random() * rps.length)];
        console.log(randomSelect);
        return randomSelect;
    }

    const computerSelection = getComputerChoice();
    const playerSelection = prompt("Choose rock, paper, or scissors!!").toLowerCase();
    console.log(playerSelection);
    
   
   
// create a prompt for the user to make a selection

// create a function that creates a round
    const roundVictory = "You win!!!"
    const roundDefeat = "You lose!!"

    function playRound(playerSelection, computerSelection) {
        
    }

// player and computer scores start at 0



// loop the rounds 5 times

    function game() {
        for(let i = 0; i < 5; i++) {
            playRound((playerSelection, computerSelection));
                

        }
    }