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