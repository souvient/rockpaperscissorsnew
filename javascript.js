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

function getHUmanChoice() {
    


}