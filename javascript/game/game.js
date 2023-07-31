import EnemyController from "./enemyController.js";
import Player from "./player.js";
import BulletController from "./bulletController.js";

var canvas;
var ctx;
var player;
var playerBulletController;
var enemyBulletController;
var enemyController;
let isGameOver;
let isTimeLeft;
let isLives;
let didWin;
var background;
var defaultXVelocity;
var points = 0;
var lives;


// // constants for game play
var TIME_INTERVAL = 1000 / 60; // screen refresh interval in milliseconds  

var intervalTimer = null; // holds interval timer
var timeLeft; // the amount of time left in seconds
var timeElapsed; // increment the time elapsed
var timerCount = 0;

function checkGameOver() {
    if (isGameOver) {
        return;
    }

    if (enemyBulletController.collideWith(player)) {
        player.lives -= 1;
        if (player.lives <= 0) { isGameOver = true; isLives = true; }
    }
    if (enemyController.enemyRows.length === 0) {
        didWin = true;
        isGameOver = true;
    }
}

function displayGameOver() {
    if (isGameOver) {
        let text = didWin ? "Champion!" : isLives ? "You Lost" : points >= 100 ? "Winner!" : `${points}\nyou can do better`;

        ctx.fillStyle = "white";
        ctx.font = "70px Arial";
        ctx.fillText(text, canvas.width / (text.length / 2), canvas.height / 2);
        stopTimer();
    }
    // resetElements(); // reinitialize all game elements
    // stopTimer(); // terminate previous interval timer
}

function updateTime() {
    ++timerCount;
    if (TIME_INTERVAL * timerCount >= 1000) {
        ++timeElapsed; // increment the time elapsed
        if (timeElapsed % 5 === 0 && timeElapsed <= 20) { increaseVelocity(); }
        --timeLeft; // decrement the timer
        timerCount = 0;
    } // end if
}
function displayPoints() {
    ctx.fillStyle = "white";
    ctx.font = "bold 24px serif";
    ctx.textBaseline = "top";
    ctx.fillText(`Points: ${points}`, canvas.width * 0.75, canvas.height / 160);
}

function displayTimeRemaining() {
    // display time remaining
    ctx.fillStyle = "white";
    ctx.font = "bold 24px serif";
    ctx.textBaseline = "top";
    ctx.fillText(`Time remaining: ${timeLeft}sec`, canvas.height / 160, canvas.height / 160);
}
function increaseVelocity() {
    player.velocity += player.velocity;
    enemyController.defaultXVelocity += enemyController.defaultXVelocity;
}
function drawLives() {
    let img = new Image();
    img.src = `resources/images/live.png`;
    for (let i = 0; i < player.lives; i++) {
        ctx.drawImage(img, canvas.width / 2 - i * canvas.height / 75, canvas.height / 75, canvas.height / 75, canvas.height / 75)
    };
}

function game() {
    canvas.width = canvas.width; // clears the canvas (from W3C docs)
    checkGameOver();
    displayGameOver();
    if (!isGameOver) {
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
        drawLives();
        points += enemyController.draw(ctx);
        player.draw(ctx);
        playerBulletController.draw(ctx);
        enemyBulletController.draw(ctx);
        displayPoints();
        updateTime();
        displayTimeRemaining();
        // if the timer reached zero
        if (timeLeft <= 0) {
            stopTimer();
            isGameOver = true;
            isTimeLeft = true;
            // showGameOverDialog("You lost"); // show the losing dialog
        }
    }
}

function startTimer() {
    intervalTimer = window.setInterval(game, TIME_INTERVAL);
} // end function startTimer

function stopTimer() {
    if (!intervalTimer == null) { window.clearInterval(intervalTimer); }
} // end function stopTimer


function setupGame() {
    // stop timer if document unload event occurs
    stopTimer();
    document.addEventListener("unload", stopTimer, false);

    // get the canvas, its context and setup its click event handler

    canvas = document.getElementById("gameBoard"); // the canvas
    ctx = canvas.getContext("2d"); // used for drawing on the canvas

    // TODO Change
    canvas.width = window.innerWidth / 2.2;
    canvas.height = window.innerHeight / 1.3;

    defaultXVelocity = 3;

    playerBulletController = new BulletController(canvas, canvas.height, "gold", true, true);
    enemyBulletController = new BulletController(canvas, 1, "red", false, false);

    player = new Player(canvas, defaultXVelocity, playerBulletController);
    enemyController = new EnemyController(canvas, defaultXVelocity, enemyBulletController, playerBulletController);
    isGameOver = false;
    didWin = false;
    isLives = false;
    // TODO change canvas height and weight according to the current webpage

    background = new Image();
    background.src = "resources/images/spaceCat.png";

    timerCount = 0;
    timeElapsed = 0; // increment the time elapsed
    timeLeft = document.getElementById("time").value; // start the countdown at 10 seconds
    points = 0;
    isTimeLeft = false;

    game();
    startTimer(); // starts the game loop
} // end function setupGame

window.setupGame = setupGame;
window.stopGame = stopTimer;