let myShip;


function chooseShip(selectedShip){
    switch (selectedShip) {
        case "/resources/images/myShip1.png":
            document.getElementById("myShip1").style.backgroundColor = "red";
            document.getElementById("myShip2").style.backgroundColor = "#b2b3a1";
            document.getElementById("myShip3").style.backgroundColor = "#b2b3a1";

            break;

        case "/resources/images/myShip2.png":
            document.getElementById("myShip1").style.backgroundColor = "#b2b3a1";
            document.getElementById("myShip2").style.backgroundColor = "red";
            document.getElementById("myShip3").style.backgroundColor = "#b2b3a1";

            break;

        case "/resources/images/myShip3.png":
            document.getElementById("myShip1").style.backgroundColor = "#b2b3a1";
            document.getElementById("myShip2").style.backgroundColor = "#b2b3a1";
            document.getElementById("myShip3").style.backgroundColor = "red";

            break;
    }

    myShip = selectedShip;
}


// TODO setup here all the movment that attached to the player ship