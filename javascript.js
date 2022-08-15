// create an array that contains rock, paper, scissors

const rps = ["rock", "paper", "scissors"];


// create function that generates a random word(Rock, Paper, Scissors) from an array

// create function for the computer to make a random selection from that array
    function getComputerChoice() {
        const randomSelect = rps[Math.floor(Math.random() * rps.length)];
        return randomSelect;
        
    }

    getComputerChoice();

    
   
   
// create a prompt for the user to make a selection

// create a function that creates a round, make these rounds repeat 5 times

// within that round function
    function playRound(playerSelection, computerSelection) {

    }

    const playerSelection = prompt("");
    const computerSelection = getComputerChoice();

    function game(){
        playRound();
    }

    for (let i = 0; i < 5; i++); 
   

// Rock beats scissors
    rock > scissors 
// Scissors beats paper
    scissors > paper
// Paper beats rock
    paper > rock