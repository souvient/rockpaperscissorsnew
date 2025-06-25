
function getComputerChoice() {
    let randomOutcome = Math.floor(Math.random() * 3) + 1;
    if (randomOutcome === 1) {
        return "rock";
    } else if (randomOutcome === 2) {
        return "scissors";

    } else {
        return "paper";
    }
}

function getHumanChoice() {
    
    let userInput = prompt("Rock, paper or scissors?");

    return userInput;

}



    function playGame() {

        let humanScore = 0;
        let computerScore = 0;

        function playRound(humanChoice, computerChoice) {

            humanChoice = humanChoice.toLowerCase();
        
            if (humanChoice === "rock" && computerChoice === "paper") {
                computerScore++;
                return "You lose! Paper beats rock!";
                
        
            } else if (humanChoice === "paper" && computerChoice === "scissors") {
                computerScore++;
                return "You lose! Scissors beat paper" 
        
            } else if (humanChoice === "scissors" && computerChoice === "rock") {
                computerScore++;
                return "You lose! Rock beats scissors";
        
            } else if (humanChoice === "scissors" && computerChoice === "paper") {
                humanScore++;
                return "You win! Scissors beat paper";
        
            
        
            } else if (humanChoice === "paper" && computerChoice === "rock") {
                humanScore++;
                return "You win! Paper beats rock";
        
            } else if (humanChoice === "rock" && computerChoice === "scissors") {
                humanScore++;
                return "You win! Rock beats scissors";
        
            } else if (humanChoice === computerChoice) {
                return "Try again! You've chosen the same optin as the computer"
            }
        
            }
            
            

            for (let i = 0; i < 5; i++) {

               const humanSelection = getHumanChoice();
               const computerSelection = getComputerChoice();
               const roundResult  =  playRound(humanSelection, computerSelection);
               console.log(roundResult);

            }

            if (humanScore > computerScore) {
                return `You win! your score is ${humanScore}, and computer's is ${computerScore}`
            } else if (humanScore < computerScore) {
                return `You lose! your score is ${humanScore}, and computer's is ${computerScore}`
            } else {
                return "Draw!"
            }
            

        
    }


    
   

    






