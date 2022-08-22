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
        console.log(roundVictory)
    const roundDefeat = "You lose!!"
        console.log(roundDefeat)


    function playRound(playerSelection, computerSelection) {
        switch (playerSelection + computerSelection) {
            case "rockscissors":
            case "scissorspaper":
            case "paperrock":
                result = user1;
                break;
            case "scissorsrock":
            case "paperscissors":
            case "rockpaper":
                result = user2;
                break;
            case "rockrock":
            case "paperpaper":
            case "scissorsscissors":
                result = null;
                break;
        }
    }

// player and computer scores start at 0



// loop the rounds 5 times

    function game() {
        for(let i = 0; i < 5; i++) {
            playRound((playerSelection, computerSelection));
                

        }
    }