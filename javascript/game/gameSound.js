var pause_game = false;
var bgMusic = new Audio("resources/sounds/background.mp3")
bgMusic.volume = 0.4;

var shot = new Audio("resources/sounds/playShot.mp3")
shot.volume = 0.1;

var enemyShotSuccessful = new Audio("resources/sounds/enemyKill.mp3")
enemyShotSuccessful.volume = 0.2;



function playSound(){
    bgMusic.play();
}


function stopSound(){
    bgMusic.pause();
}


function playShot(){
    shot.play();
}


function playEnemyShotSuccessful(){
    enemyShotSuccessful.play();
}