function NewGame() {
    let global = 0;
}

let RollDiceClick = document.getElementById("RollDice").addEventListener("click", (event) => {

    // Roll Dice
    function RollDice(min, max) {
        min = Math.ceil(1);
        max = Math.floor(6);
        return Math.floor(Math.random() * (max - min) + min);
    }

    // Conditions on Roll Dice
    if (RollDice() === 1) {
        console.log("1")
    }
    else if (RollDice() === 2) {
        console.log("2")
    }
    else if (RollDice() === 3) {
        console.log("3")
    }

    else if (RollDice() === 4) {
        console.log("4")
    }

    else if (RollDice() === 5) {
        console.log("5")
    }
    else {
        console.log("6")
    }
});


function Hold() {

}