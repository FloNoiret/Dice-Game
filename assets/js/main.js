// Initialization Game
let player = [
    "Player1",
    "Player2",
]
let globalPlayer1 = 0;
let globalPlayer2 = 0;

// Set Up Round
let round = 0;
let currentPlayer = "Player1";

// Roll Dice
let RollDiceClick = document.getElementById("RollDice").addEventListener("click", (event) => {

    function RollDice(min, max) {
        min = Math.ceil(1);
        max = Math.floor(6);
        return Math.floor(Math.random() * (max - min) + min);
    }

    // Player 1 turn to roll dice
    if (currentPlayer == "Player1") {

        // Conditions on Roll Dice
        if (RollDice() == 1) {
            round = 0;
            console.log("Perdu Player1 - Retour à 0");
            currentPlayer = "Player2"; // Player 2 turn

        }
        else {
            round = (round + RollDice());
            console.log(round);
        }
    }

    // Player 2 turn to roll dice 
    else {
        if (RollDice() == 1) {
            round = 0;
            console.log("Perdu Player2- Retour à 0");
            currentPlayer = "Player1"; // Player 1 turn
        }
        else {
            round = (round + RollDice());
            console.log(round);
        }

    }
});

// Hold Action
let HoldClick = document.getElementById("Hold").addEventListener("click", (event) => {

    // Player 1 Turn & hold
    if (currentPlayer == "Player1") {
        globalPlayer1 = (globalPlayer1 + round);// Addition Round to global
        round = 0; // Return to Zero for next round
        console.log("Total Player1 :" + globalPlayer1);

        currentPlayer = "Player2"; // Player 2 turn
        console.log("Au tour de Player 2");

        if (globalPlayer1 >= 100) {
            console.log("Victoire Player1 :" + globalPlayer1);
            console.log("Vous avez gagné la partie Player 1");
        }
    }
    //Player 2 Turn & hold

    else {
        globalPlayer2 = (globalPlayer2 + round); // Addition Round to global
        round = 0; // Return to Zero for next round
        console.log("Total Player2 :" + globalPlayer2);

        currentPlayer = "Player1"; // Player 1 turn
        console.log("Au tour de Player 1");

        if (globalPlayer2 >= 100) {
            console.log("Victoire Player2 :" + globalPlayer2);
            console.log("Vous avez gagné la partie Player 2");
        }
    }
});

//New Game 

let NewGameClick = document.getElementById("NewGame").addEventListener("click", (event) => {

    // Reinitialize the game variable
        globalPlayer1 = 0;
        globalPlayer2 = 0;
        round = 0;
        console.log ("New Game")
});