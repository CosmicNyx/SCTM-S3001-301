//setting up variables for player and comp choices
const choiceBtn = document.querySelectorAll(".choiceBtn");

let player;
let comp;
let result;

choiceBtn.forEach(button => button.addEventListener("click", () => {
    player = button.textContent;
    compTurn();
    console.log("You chose: " + player + "\nComputer chose: " + comp)
    console.log(check())
    console.log("-----------------------")
}));

function compTurn() {
    const randNum = Math.floor(Math.random() * 3) + 1;
    if (randNum == 1) {
        comp = "Rock";
    } else if (randNum == 2) {
        comp = "Paper";
    } else if (randNum == 3) {
        comp = "Scissors";
    }
}

function check() {
    if (player == comp) {
        return "Draw!";
    }
    else if (comp == "Rock") {
        return (player == "Paper") ? "You Win!" : "You Lose!"
    }
    else if (comp == "Paper") {
        return (player == "Scissors") ? "You Win!" : "You Lose!"
    }
    else if (comp == "Scissors") {
        return (player == "Rock") ? "You Win!" : "You Lose!"
    }
}