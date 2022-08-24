// create an array that contains rock, paper, scissors

const rps = ["rock", "paper", "scissors"];


// create function for the computer to make a random selection from that array
    function getComputerChoice() {
        const randomSelect = rps[Math.floor(Math.random() * rps.length)];
        console.log(randomSelect);
    }

    const computerSelection = getComputerChoice();
    const playerSelection = prompt("Choose rock, paper, or scissors!!").toLowerCase();
    console.log(playerSelection);
    
   
// create function to keep score between player and computer

    let playerScore = 0;
    let computerScore = 0;

// create a function to simulate a round

    function playRound(playerSelection, computerSelection) {
        if (playerSelection === computerSelection) {
            console.log("Tie game!!!");
        } else if (playerSelection === "rock" && computerSelection === "scissors" || 
        playerSelection === "scissors" && computerSelection === "rock" || playerSelection === "paper" && computerSelection === "scissors"
        || playerSelection === "rock" && computerSelection === "paper") {
            console.log("You Win!!");
            playerScore++;
        } else {
            console.log("You Lose!!");
            computerScore++;
        }
    }

// create a function that loops the round 5 times

    function game() {
        for(let i = 0; i < 5; i++) {
            playRound(playerSelection, computerSelection);
                

        }
    }