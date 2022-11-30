//setting up variables for player and comp choices
const choiceBtn = document.querySelectorAll(".choiceBtn");

let player;
let comp;
let result;

choiceBtn.forEach(button => button.addEventListener("click", () => {
    player = button.textContent;
    compTurn();
    console.log(check())
}));

function compTurn() {

    const randNum = Math.floor(Math.random() * 3) + 1;
    if (randNum == 1) {
        computer = "Rock";
    } else if (randNum == 2) {
        computer = "Paper";
    } else if (randNum == 3) {
        computer = "Scissors";
    }
}

function check() {
    if (player == computer) {
        return "Draw!";
    }
    else if (computer == "Rock") {
        return (player == "Paper") ? "You Win!" : "You Lose!"
    }
    else if (computer == "Paper") {
        return (player == "Scissors") ? "You Win!" : "You Lose!"
    }
    else if (computer == "Scissors") {
        return (player == "Rock") ? "You Win!" : "You Lose!"
    }
}

