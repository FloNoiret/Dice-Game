
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

// Set Up Roll Dice
function RollDice(min, max) {
    min = Math.ceil(1);
    max = Math.floor(6);
    return Math.floor(Math.random() * (max - min) + min);
}

// Execute Roll Dice on click
let RollDiceClick = document.getElementById("RollDice").addEventListener("click", (event) => {

    var result = RollDice();

    // Player 1 turn to roll dice
    if (currentPlayer == "Player1") {
        if (result == 1) {
            round = 0;
            console.log("Perdu Player1 - Retour à 0");
            currentPlayer = "Player2"; // Player 2 turn
            document.getElementById("turnPlayer2").classList.add('turnplayer');
            document.getElementById("turnPlayer1").classList.remove('turnplayer');
            document.getElementById("dialog-info").innerHTML = "<dialog open class='dialog-info'> Nooo ! You got a 1 ! <br> It's Player 2 turn <form method='dialog'> <button class='dialog-btn'>OK</button> </form> </dialog>";

        }
        else {
            round = (round + result);
            console.log(round);
        }
        document.getElementById("roundPlayer1").innerText = round;
    }
    // Player 2 turn to roll dice 
    else {
        if (result == 1) {
            round = 0;
            console.log("Perdu Player2- Retour à 0");
            currentPlayer = "Player1"; // Player 1 turn
            document.getElementById("turnPlayer1").classList.add('turnplayer');
            document.getElementById("turnPlayer2").classList.remove('turnplayer');
            document.getElementById("dialog-info").innerHTML = "<dialog open class='dialog-info'> Nooo ! You got a 1 ! <br> It's Player 1 turn <form method='dialog'> <button class='dialog-btn'>OK</button> </form> </dialog>";
        }
        else {
            round = (round + result);
            console.log(round);
        }
        document.getElementById("roundPlayer2").innerText = round;
    }
    //Dice Display
    if (result == 1) {
        document.getElementById("dice").src = "./assets/images/1.jpg";
    }
    else if (result == 2) {
        document.getElementById("dice").src = "./assets/images/2.jpg";
    }
    else if (result == 3) {
        document.getElementById("dice").src = "./assets/images/3.jpg";
    }
    else if (result == 4) {
        document.getElementById("dice").src = "./assets/images/4.jpg";
    }
    else if (result == 5) {
        document.getElementById("dice").src = "./assets/images/5.jpg";
    }
    else if (result == 6) {
        document.getElementById("dice").src = "./assets/images/6.jpg";
    }
    else {
        console.log("error display dice")
    }

});


// Hold Action
let HoldClick = document.getElementById("Hold").addEventListener("click", (event) => {

    // Player 1 Turn & hold
    if (currentPlayer == "Player1") {
        globalPlayer1 = (globalPlayer1 + round);// Addition Round to global
        document.getElementById("globalPlayer1").innerText = globalPlayer1;

        round = 0; // Return to Zero for next round
        document.getElementById("roundPlayer1").innerText = round;


        currentPlayer = "Player2"; // Player 2 turn
        console.log("Au tour de Player 2");
        document.getElementById("turnPlayer2").classList.add('turnplayer');
        document.getElementById("turnPlayer1").classList.remove('turnplayer');

        if (globalPlayer1 >= 100) {
            console.log("Victoire Player1 :" + globalPlayer1);
            console.log("Vous avez gagné la partie Player 1");
            document.getElementById("dialog-info").innerHTML = '<dialog open class="dialog-info-win"> <p> Congratulation ! <br> You won Player 1 ! </p> <img src="./assets/images/Congratulation.png"><form method="dialog"> <button class="dialog-btn">OK</button> </form> </dialog>';
        }
    }
    //Player 2 Turn & hold

    else {
        globalPlayer2 = (globalPlayer2 + round); // Addition Round to global
        document.getElementById("globalPlayer2").innerText = globalPlayer2;

        round = 0; // Return to Zero for next round
        document.getElementById("roundPlayer2").innerText = round;


        currentPlayer = "Player1"; // Player 1 turn
        console.log("Au tour de Player 1");
        document.getElementById("turnPlayer1").classList.add('turnplayer');
        document.getElementById("turnPlayer2").classList.remove('turnplayer');

        if (globalPlayer2 >= 100) {
            console.log("Victoire Player2 :" + globalPlayer2);
            console.log("Vous avez gagné la partie Player 2");
            document.getElementById("dialog-info").innerHTML = '<dialog open class="dialog-info-win"> <p> Congratulation ! <br> You won Player 2 ! </p> <img src="./assets/images/Congratulation.png"><form method="dialog"> <button class="dialog-btn">OK</button> </form> </dialog>';
        }
    }
});

//New Game 

let NewGameClick = document.getElementById("NewGame").addEventListener("click", (event) => {

    // Reinitialize the game variable
    globalPlayer1 = 0;
    document.getElementById("globalPlayer1").innerText = globalPlayer1;
    globalPlayer2 = 0;
    document.getElementById("globalPlayer2").innerText = globalPlayer2;
    round = 0;
    document.getElementById("roundPlayer1").innerText = round;
    document.getElementById("roundPlayer2").innerText = round;
    document.getElementById("turnPlayer1").classList.add('turnplayer');
    document.getElementById("turnPlayer2").classList.remove('turnplayer');

    console.log("New Game")
});


// Screen Orientation 

screen.orientation.addEventListener('change', function () {

    let orientation = screen.orientation.type;
    console.log('new orientation is ', orientation);

    if (orientation == 'portrait-primary' || orientation == 'portrait') {
        console.log('Change ton orientation pour Paysage');
        document.getElementById("body").innerHTML = '<div class="orientation-warning"> <p>Please switch to landscape orientation to play <br> DICE GAME </p> <img src="./assets/images/Switch-to-landscape.png"> <div>';
    }
    else {
        location.reload();
    }
});