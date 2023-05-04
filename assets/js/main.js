// TO DO Initialization game function
//function NewGame() { 
//let globalPlayer1 = 0;
//let globalPlayer2 = 0;
// let roundPlayer1 = 0;
//  let roundPlayer2 = 0;
//}

// Initialization Game
let player = [
    "Player1",
    "Player2",
]

let global = 0;
let globalPlayer1 = 0;
let globalPlayer2 = 0;

// Set Up Round
let round = 0;
let currentplayer = "Player1";

// Roll Dice
let RollDiceClick = document.getElementById("RollDice").addEventListener("click", (event) => {

    function RollDice(min, max) {
        min = Math.ceil(1);
        max = Math.floor(6);
        return Math.floor(Math.random() * (max - min) + min);
    }

    // Player 1 turn

    if (currentplayer == "Player1") {

        // Conditions on Roll Dice
        if (RollDice() == 1) {
            round = 0;
            console.log("Perdu Player1- Retour à 0");
            currentplayer = "Player2"

        }
        else {
            round = (round + RollDice());
            console.log(round);
        }
    }

    else { 
        if (RollDice() == 1) {
            round = 0;
            console.log("Perdu Player2- Retour à 0");
            currentplayer = "Player1"

        }
        else {
            round = (round + RollDice());
            console.log(round);
        }

    }
});

// Hold Action
let HoldClick = document.getElementById("Hold").addEventListener("click", (event) => {
    globalPlayer1 = (globalPlayer1 + round);
    round = 0;
    console.log(globalPlayer1);

    if (global >= 100) {
        console.log(global)
        console.log("Vous avez gagné la partie");
    }
});


