var canvas;
var ctx;

intervalTime = 1; 
intervalTimeEnemyFire = 1500;
playerScore = 0;
lifeLeft = 3;
durationGame = document.getElementById("time").value;
timeLeft = durationGame;
recordsData = [];//[[score, time, date]..]
LastGameRecord = [];//[score, time, date]
let keys = {}; // Object to keep track of which keys are currently being pressed
let gameOn = false;



window.onload = () => {
  canvas = document.getElementById("canvas");
	ctx = canvas.getContext("2d");
  initialGame();

  window.addEventListener("keydown", (event2) => {
    switch (event2.key) { 
      case allKeyPressed["fire"]:
        playerFires.push({"x": playerPosition.x + (playerShipSize["x"] / 2), "y": playerPosition.y})
        break;

      case "z":
        if (document.getElementById('crosswise').checked)
          playerFiresLeft.push({"x": playerPosition.x + (playerShipSize["x"] / 2), "y": playerPosition.y})
          break;

      case "x":
        if (document.getElementById('crosswise').checked)
          playerFiresRight.push({"x": playerPosition.x + (playerShipSize["x"] / 2), "y": playerPosition.y})
          break;
    }   
  });

  window.addEventListener("keydown", (event) => {
    switch (event.key) { 
      case allKeyPressed["up"]:
        if(playerPosition.y > (canvas.height * 0.6)){
          playerPosition.y -= 5;
        }
        break;
        
      case allKeyPressed["right"]:
        if(playerPosition.x < canvas.width - playerShipSize["x"]){
          playerPosition.x += 5;
        }
        break;

      case allKeyPressed["down"]:
        if(playerPosition.y < canvas.height - playerShipSize["y"]){
          playerPosition.y += 5;
        }
        break;

      case allKeyPressed["left"]:
        if(playerPosition.x > 0){
          playerPosition.x -= 5;
        }
        break;
    }    
  });


  window.addEventListener("keydown", (event) => {
    keys[event.key] = true;
  });


  window.addEventListener("keyup", (event) => {
      delete keys[event.key];
  });

};


function initialGame(){
  canvas.width = screen.width * 0.9
  canvas.height = screen.height * 0.67
  gamebackgroundImage = new Image();
  gamebackgroundImage.src = 'resources/images/gameBackground.jpg';
}


function setup(){
  lifeLeft = 3;
  document.getElementById('heart1').style.visibility='visible';
  document.getElementById('heart2').style.visibility='visible';
  document.getElementById('heart3').style.visibility='visible';

  timeLeft = durationGame;

  playerScore = 0;
  updateScore(playerScore);

  setupPlyer();
  setupEnemyShips();
  setupFire();
}


function startGameLoop(){
  gameOn = true;
  playSound();
  mainGameLoop = setInterval(loop, intervalTime);
  createEnemyFireLoop = setInterval(createEnemyFire, intervalTimeEnemyFire / activeEnemyShip);
  countdownInterval = setInterval(countDown, 1000);   // Start the countdown timer
}


function restartGame(){
  document.getElementById('heart1').style.visibility = 'visible';
  document.getElementById('heart2').style.visibility = 'visible';
  document.getElementById('heart3').style.visibility = 'visible';
  initialGame()
  setup()
  startGameLoop()
}


function loop(){ 
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawPlayerShips();
  updatePlayerPosition();
  drawFires();
  moveFiers();

  drawEnemyShips();
  moveEnemyShips();

  chakeCollision()
  checkGameOver()

}


function pauseGame(){
  stopSound();
  removeTheInterval();
  $("#pauseGame").hide();
  $("#resumeGame").show();
}


function resumeGame(){
  startGameLoop();
  $("#pauseGame").show();
  $("#resumeGame").hide();
}


function newGameDuringGame(){
  pauseGame();
  $("#startGame").show();
  $("#pauseGame").show();
  $("#resumeGame").hide();
  restartGame();
}


function muteGame(){
  stopSound();
  $("#muteGame").hide();
  $("#unmuteGame").show();
}


function unMuteGame(){
  playSound();
  $("#muteGame").show();
  $("#unmuteGame").hide();
}


function countDown() {
  // Get the time remaining element
  var timeGameEl = document.getElementById("timeGame");
  if (timeLeft > 0) {
    timeLeft--;
    timeGameEl.textContent = timeLeft;
  }

  else {
    timeGameEl.textContent = "Time's up!";
  }
}


function exitGame(){
  pauseGame();
  muteGame();
  recordsData = [];
  removeTheInterval();
  gameOn = false;
}


function removeTheInterval(){
  clearInterval(mainGameLoop); // Pause game loop
  clearInterval(createEnemyFireLoop);
  clearInterval(countdownInterval); // Pause countdown timer

  mainGameLoop = null;
  createEnemyFireLoop = null;
  countdownInterval = null;
}