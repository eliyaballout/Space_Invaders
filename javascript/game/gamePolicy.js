$(document).ready(function(){
  $("#NewGameGameOverDialog").click(newGameDialog); 
  $("#SettingsGameOverDialog").click(goToSettingsPage); 
});



function newGameDialog(){
  gameOverDialogToNewGameDisplay();
  newGameDuringGame();
}


function checkGameOver(){
  if (lifeLeft === 0 || timeLeft === 0 || activeEnemyShip === 0){
    gameOver();
  }
}


function gameOver(){
  LastGameRecord = [playerScore, durationGame - timeLeft, new Date().toLocaleString()];
  recordsData.push(LastGameRecord);
  pauseGame();
  displayScore(); 
  if (lifeLeft <= 0){
    $("#endGameText").html("Game Over!<br>The spaceShips has succeeded to eliminate you! You lost :( ...");
  }

  if (timeLeft === 0){
    if (playerScore < 100){
      $("#endGameText").html("Game Over!<br>You can do better. Your score game is: " + playerScore + " points!");
    }
    else{
      $("#endGameText").html("Winner!<br>You succeeded to eliminate most of them! Good luck next time ...");
    }
  }

  if (activeEnemyShip === 0){
    $("#endGameText").html("Champion!<br>Your mission has been accomplished. Thank you! ...");
  }
  
  $("#endheaderText").html("Game Over!");
  goToGameOverDialog();
}


function reduceLife(){
  switch (lifeLeft) { 
    case 3:
      document.getElementById('heart3').style.visibility = 'hidden';
      break;

    case 2:
      document.getElementById('heart2').style.visibility = 'hidden';
      break;

    case 1:
      document.getElementById('heart1').style.visibility = 'hidden';
      break;
  } 

  lifeLeft--;
}


function updateScore(addedScore) {
  let scoreGameEl = document.getElementById("scoreGame");
  playerScore += addedScore;
  scoreGameEl.textContent = playerScore;
}


function displayScore(){
    printLastGame = 0; 
    maxRecordsToShow = 20;
    canvas2 = document.getElementById("canvas2");
  	ctx2 = canvas2.getContext("2d");
    ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
    ctx2.font = "bolder 25px Arial";
    ctx2.fillStyle = "black"; 
    ctx2.fillText("Place", 10, 75); 
    ctx2.fillText("Score", 120, 75);
    ctx2.fillText("Date", 230, 75);
    sortedRecordsData = recordsData;
    sortedRecordsData.sort((record1,record2) => record2[0] - record1[0]);

    for (let i = 0; i < sortedRecordsData.length; i++) {
      ctx2.fillStyle = "white";
      if(sortedRecordsData[i] === LastGameRecord || (i === maxRecordsToShow && printLastGame === 0)){ //print last game
        printLastGame = 1;
        ctx2.fillStyle = "#20dea2";
        let place = getPlaceRecord(sortedRecordsData, LastGameRecord);
        let score = LastGameRecord[0];
        let date = LastGameRecord[2];
        ctx2.fillText(place, 10, 110 + i * 30);      
        ctx2.fillText(score, 120, 110 + i * 30);
        ctx2.fillText(date, 230, 110 + i * 30);
        ctx2.fillStyle = "white";
      } 

      else { 
        let score = sortedRecordsData[i][0];
        let date = sortedRecordsData[i][2];
        ctx2.fillText(i + 1, 10, 110 + i * 30);      
        ctx2.fillText(score, 120, 110 + i * 30);
        ctx2.fillText(date, 230, 110 + i * 30);
      }
    }    
}


function getPlaceRecord(sortedRecordsData, LastGameRecord){
  for (let i = 0; i < sortedRecordsData.length; i++) {
    if(sortedRecordsData[i] === LastGameRecord){
      return i + 1;
    }
  }
}