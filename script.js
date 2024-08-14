
let humanScore = 0, computerScore = 0;
let computerSelection, humanSelection;
const container = document.querySelector(".container");
const game = document.querySelector(".game");
const human = document.querySelector(".human");
const computer = document.querySelector(".computer");
const computerimg = document.querySelector("#computerimg");
const round = document.querySelector(".round");

//------------------------------


const img1 = document.createElement("img");
img1.width=80;
img1.height=80;
const img2 = document.createElement("img");
img2.width=80;
img2.height=80;
const img3 = document.createElement("img");
img3.width=80;
img3.height=80;
const paper = document.querySelector("#paper");
const rock = document.querySelector("#rock");
const scissors = document.querySelector("#scissors");

const playRound= document.createElement("button");

playRound.addEventListener("click",function(){
    location.reload();
});

paper.addEventListener("click", function () {
    human.innerHTML="";
    img1.classList.add("img");
    img1.src = "images/hand.png";
    human.appendChild(img1);
    humanSelection = 1;
    
    playGame();
});
rock.addEventListener("click", function () {
    human.innerHTML="";
    img2.classList.add("img");
    img2.src = "images/fist.png";
    human.appendChild(img2);
    humanSelection = 0;
    playGame();

});

scissors.addEventListener("click", function () {
    human.innerHTML="";
    img3.classList.add("img");
    img3.src = "images/peace.png";
    human.appendChild(img3);
    humanSelection = 2;
    playGame();
});

//-------------------------------------

 function playGame () {

    getComputerChoice();

    const h1 = document.createElement("h1");
    playRound.textContent ="Replay";

    if (computerSelection !== humanSelection) {

        if (computerSelection === 0 && humanSelection === 2 ||
            computerSelection === 1 && humanSelection == 0 ||
            computerSelection === 2 && humanSelection === 1) {
            
            computerimg.src = "images/laugh.png";

            

            computerScore++;

            console.log(computerScore);
            
        }
        else if (computerSelection === 0 && humanSelection === 1 ||
            computerSelection === 1 && humanSelection == 2 ||
            computerSelection === 2 && humanSelection === 0) {

            computerimg.src = "images/tired.png";
           
           
            humanScore++;
            console.log(humanScore);
        }


    }

    if (computerScore === 5) {

        container.innerHTML="";  

        h1.textContent = " Computer wins ";
        h1.style.color="rgb(71, 70, 70)";
        container.appendChild(h1);
        computerimg.src="images/laugh.png";
        computerimg.width = 233;
        computerimg.height = 233;
        container.appendChild(computerimg);
        container.appendChild(playRound);
        
    }
    if (humanScore === 5) {

        container.innerHTML="";
        h1.textContent = "You win ";
        h1.style.color="rgb(71, 70, 70)";
        container.appendChild(h1);
        computerimg.src="images/tired.png";
        computerimg.width = 233;
        computerimg.height = 233;
        container.appendChild(computerimg);

        container.appendChild(playRound);
        
    }
}

//-------------------------------

// A function for the computer choice 


function getComputerChoice() {

   
    const choice = document.createElement("img");
    choice.width = 80;
    choice.height = 80;
   
    const p = document.createElement("p");

    computer.innerHTML="";
    

    computerSelection = Math.floor((Math.random() * 3)); // based on the result from it gonna choose : 
    if (computerSelection === 0) {  
        choice.src = "images/fist.png"; } // if =0 its a rock 
    else if (computerSelection === 1) { choice.src = "images/hand.png"; } // if =1 its a paper 
    else { choice.src = "images/peace.png"; }// if =2 its a scissor ;

    computer.appendChild(choice);
    computer.appendChild(p);
}






