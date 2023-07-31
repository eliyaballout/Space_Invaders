let myShip = document.getElementById("myShip1");


function chooseShip(selectedShip) {
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
    window.playerShip = myShip;
}
let allKeyPressed = {};

$(document).ready(function(){

    $(".movmentKey").keydown(function(e){
        let regex = new RegExp("^[a-zA-Z]+$");
        let key = String.fromCharCode(e.which).toLowerCase();
        if (!regex.test(key) && !(e.keyCode >=37 && e.keyCode <= 40)) {
            e.preventDefault();
            alert("Movment is only allowed with arrow keys or letters!")
        }

        else {
            if (!verifyDublicates(e)){
                alert("This key is already selected!")
            }

            else {
                allKeyPressed[this.id] = e.key;
                $("#"+this.id).val(e.key);
            }
            
        }
    });


    
    $("#shoot").keydown(function(e){
        let regex = new RegExp("^[a-zA-Z ]+$");
        let key = String.fromCharCode(e.which).toLowerCase();
        if (!regex.test(key)) {
            e.preventDefault();
            alert("Shooting is only allowed with space or letters!")
        }

        else {
            if (!verifyDublicates(e)){
                alert("This key is already selected!")
            }

            else {
                if (e.keyCode == 32){
                    $("#shoot").val("spaceBar");
                }
                else {
                    $("#shoot").val(e.key);
                }

                allKeyPressed[this.id] = e.key;
            }
        }
    });


    function verifyDublicates(e){
        for (let savedKey in allKeyPressed){
            if (e.key == allKeyPressed[savedKey]){
                return false;
            }
        }

        return true;
    }

});