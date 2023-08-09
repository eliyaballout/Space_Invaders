let myShip = "resources/images/myShip1.png";
playerStarShip = new Image();
playerPosition = {x: 300, y: 400}
playerShipSize = {x: 50, y: 50}



function chooseShip(selectedShip){
    switch (selectedShip) {
        case "resources/images/myShip1.png":
            document.getElementById("myShip1").style.backgroundColor = "red";
            document.getElementById("myShip2").style.backgroundColor = "#b2b3a1";
            document.getElementById("myShip3").style.backgroundColor = "#b2b3a1";

            break;

        case "resources/images/myShip2.png":
            document.getElementById("myShip1").style.backgroundColor = "#b2b3a1";
            document.getElementById("myShip2").style.backgroundColor = "red";
            document.getElementById("myShip3").style.backgroundColor = "#b2b3a1";

            break;

        case "resources/images/myShip3.png":
            document.getElementById("myShip1").style.backgroundColor = "#b2b3a1";
            document.getElementById("myShip2").style.backgroundColor = "#b2b3a1";
            document.getElementById("myShip3").style.backgroundColor = "red";

            break;
    }

    myShip = selectedShip;
}


function setupPlyer(){
    playerPosition["x"] = Math.abs(Math.floor(Math.random() * canvas.width - playerShipSize["x"]));
    playerPosition["y"] = canvas.height - playerShipSize["y"] * 2;
    playerShipSize["x"] = canvas.width / 30;
    playerShipSize["y"] = canvas.width / 30;
    playerStarShip.src = myShip;
    
}


function drawPlayerShips(){ 
    ctx.drawImage(playerStarShip, playerPosition.x, playerPosition.y, playerShipSize["x"], playerShipSize["y"]);
}


function moveParams(){
    if(document.getElementById('mouseGame').checked){
        playerPosition.x = window.event.offsetX;
        playerPosition.y = window.event.offsetY;
        if (window.event.offsetY < (canvas.height * 0.6)) {
            playerPosition.y = canvas.height * 0.6;
        }

        if (window.event.offsetX > canvas.width - playerShipSize["x"]) {
            playerPosition.x = canvas.width - playerShipSize["x"];
        }

        if (window.event.offsetY > canvas.height - playerShipSize["y"]) {
            playerPosition.y = canvas.height - playerShipSize["y"];
        }

        if (window.event.offsetX < 0) {
            playerPosition.x = 0;
        }
    }
}


function updatePlayerPosition() {
    if (keys[allKeyPressed["up"]] && playerPosition.y > (canvas.height * 0.6)) {
        playerPosition.y -= 1;
    }

    if (keys[allKeyPressed["right"]] && playerPosition.x < canvas.width - playerShipSize["x"]) {
        playerPosition.x += 1;
    }

    if (keys[allKeyPressed["down"]] && playerPosition.y < canvas.height - playerShipSize["y"]) {
        playerPosition.y += 1;
    }

    if (keys[allKeyPressed["left"]] && playerPosition.x > 0) {
        playerPosition.x -= 1;
    }

    if (keys[allKeyPressed["up"]] && keys[allKeyPressed["right"]] && playerPosition.y > (canvas.height * 0.6) && playerPosition.x < canvas.width - playerShipSize["x"]) {
        playerPosition.y -= 1;
        playerPosition.x += 1;
    }

    if (keys[allKeyPressed["down"]] && keys[allKeyPressed["right"]] && playerPosition.y < canvas.height - playerShipSize["y"] && playerPosition.x < canvas.width - playerShipSize["x"]) {
        playerPosition.y += 1;
        playerPosition.x += 1;
    }

    if (keys[allKeyPressed["down"]] && keys[allKeyPressed["left"]] && playerPosition.y < canvas.height - playerShipSize["y"] && playerPosition.x > 0) {
        playerPosition.y += 1;
        playerPosition.x -= 1;
    }

    if (keys[allKeyPressed["up"]] && keys[allKeyPressed["left"]] && playerPosition.y > (canvas.height * 0.6) && playerPosition.x > 0) {
        playerPosition.y -= 1;
        playerPosition.x -= 1;
    }
}