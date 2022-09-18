// create an array that contains rock, paper, scissors

const rps = ["rock", "paper", "scissors"];


// create function for the computer to make a random selection from that array
    function getComputerChoice() {
        let randomSelect = rps[Math.floor(Math.random() * rps.length)];
        console.log('The CPU has selected ' + randomSelect);
        return randomSelect;
    }


    const computerSelection = getComputerChoice();
    const playerSelection = prompt("Choose rock, paper, or scissors!!").toLowerCase();
 
// create code to display what the player has input in the console
    if (playerSelection === 'rock' || playerSelection === "paper" || playerSelection === 'scissors') {
        console.log('You have selected ' + `${playerSelection}`);
    } else {
      console.log('Invalid input');
    }
    
   
// create function to keep score between player and computer

    let playerScore = 0;
    let computerScore = 0;

// create a function to simulate a round and determine a winner

  const winner = playRound(playerSelection, computerSelection);

  function playRound(playerSelection, computerSelection) {
    let win = {
      rock: "scissors",
      scissors: "paper",
      paper: "rock"
    }

    if (win[playerSelection] === computerSelection) {
      console.log(`You win!! ${playerSelection} beats ${computerSelection}`);
      playerScore++;
      console.log(playerScore);
    } else if (win[computerSelection] === playerSelection) {
      console.log(`You lose!! ${computerSelection} beats ${playerSelection}`);
      computerScore++;
      console.log(computerScore);
    } else  console.log('Tie game!!')
    return playerScore || computerScore;
  }

  // create a game function to loop rounds 5 times

  function game() {
    for (let i = 0; i < 5; i++) {
      playRound(playerSelection, computerSelection);
    }
  }
  
  

