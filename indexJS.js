
let humanScore = 0, computerScore = 0;
// A function for the computer choice 

function getComputerChoice() {
    let a = Math.floor((Math.random() * 3)); // based on the result from it gonna choose : 
    if (a === 0) { return "rock"; } // if =0 its a rock 
    else if (a === 1) { return "paper"; } // if =1 its a paper 
    else { return "scissor" }; // if =2 its a scissor ;
}

// A function for the human choice 
function getHumanChoice() {

    let a = prompt("Please enter ur choice : ");

    if (a !== "rock" && a !== "Rock " && a !== "RoCk" && a !== "paper" && a !== "scissor") { getHumanChoice(); }
    else { return a; }


}

function playGame() {

    let playRound = 5;
    while (playRound > 0) {

        playround();

        playRound = playRound - 1;

    }

    if (computerScore > humanScore) { return "the computer wins "; }

    else if (computerScore < humanScore) { return "the human wins "; }

    else { return " it is equall no one wins "; }
}

function playround() {

    const computerSelection = getComputerChoice();
    const humanSelection = getHumanChoice();
    if (computerSelection !== humanSelection) {

        if (computerSelection === "rock" && humanSelection === "scissor") {

            console.log("rock defeat scissor computer wins");
            computerScore++;
        }
        else if (computerSelection === "rock" && humanSelection === "paper") {

            console.log("paper defeat rock human wins");
            humanrScore++;
        }
        else if (computerSelection === "paper" && humanSelection == "scissor") {

            console.log("paper defeat scissor human wins");
            humanScore++;
        }
        else if (computerSelection === "paper" && humanSelection == "rock") {

            console.log("paper defeat rock computer wins");
            computerScore++;
        }
        else if (computerSelection === "scissor" && humanSelection === "rock") {

            console.log("rock defeat scissor human wins");
            humanScore++;
        }
        else if (computerSelection === "scissor" && humanSelection === "paper") {
            console.log("scissor defeat paper computer wins");
            computerScore++;
        }


    }
}
console.log(playGame());