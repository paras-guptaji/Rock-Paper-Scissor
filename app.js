let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");

const compChoice = () => {
    let array = ["rock","paper","scissor"];
    let ans = Math.floor(Math.random() * 3);
        return array[ans];
};

const drawGame = () => {
    msg.innerText = "Game draw-Play again";
    msg.style.backgroundColor = "#0E373D";
};

const showWinner = (userWin, myChoice, compChoic) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore ;
        msg.innerText = `You win:) Your ${myChoice} beats ${compChoic}` ;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore ;
        msg.innerText = `You Lose! ${compChoic} beats your ${myChoice}`
        msg.style.backgroundColor = "red";
    }
}

const playgame = (myChoice) => {
    console.log("user choice:", myChoice);

    const compChoic = compChoice();
    console.log(compChoic);

    if(myChoice === compChoic){
        drawGame();
    }
    else{
        let userWin = true;
        if(myChoice === "rock"){
            userWin = (compChoic === "paper") ? false : true ;
        } else if (myChoice === "paper"){
            userWin = (compChoic === "scissor") ? false : true ;
        } else {
            userWin = (compChoic === "rock") ? false : true ; 
        }
        showWinner(userWin , myChoice, compChoic);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        playgame(userChoice);

        
        })
    });
