function NewGame() {
    let globalPlayer1 = 0;
    let globalPlayer2 = 0;
    let roundPlayer1 = 0;
    let roundPlayer2 = 0;
}


let global = 0;

// Set Up Round
let round = 0;

// Roll Dice
let RollDiceClick = document.getElementById("RollDice").addEventListener("click", (event) => {

    function RollDice(min, max) {
        min = Math.ceil(1);
        max = Math.floor(6);
        return Math.floor(Math.random() * (max - min) + min);
    }

    // Conditions on Roll Dice
    if (RollDice() == 1) {
        round = 0;
        console.log("Perdu - Retour à 0");
    }
    else {
        round = (round + RollDice());
        console.log(round);
    }
});

// Hold Action
let HoldClick = document.getElementById("Hold").addEventListener("click", (event) => {
    global = (global + round);
    round = 0;
    console.log(global);

    if (global >= 100 ) {
        console.log (global)
        console.log ("Vous avez gagné la partie");
    }
});