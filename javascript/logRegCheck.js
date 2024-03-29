const allUsers = [];
allUsers.push({username: "admin", email: "admin@gmail.com", password: "admin123", firstname: "admin", lastname: "admin", birthDate: "04/23/2023"})




function addUser(uName, eMail, pass, fName, lName, bd ) {
    newUser = {username: uName,  email: eMail, password: pass, firstname: fName, lastname: lName, birthDate: bd}
    allUsers.push(newUser);
}


function isValidUser(user, pass) {
    for (let i = 0; i < allUsers.length; i++) {
        if (allUsers[i].username == user && allUsers[i].password == pass) {
            return true;
        }
    }
    return false;
}


function loginSubmit(){
    event.preventDefault();
    let $inputs = $('#LForm :input');
    let info = {};
    $inputs.each(function() {
        info[this.name] = $(this).val();
    });

    if(isValidUser(info["username"], info["password"])){       
        goToSettingsPage();
    }

    else {
        alert("Invalid username or password!");
        clearLogPage();
        loginPage();
    }
}


function clearLogPage(){
    document.getElementById('LForm').reset();
}


function clearRegPage(){
    document.getElementById('RForm').reset();
    $('label[id*="error"]').text('');
}