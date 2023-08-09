/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("mySidebar").style.width = "180px";
  document.getElementById("main").style.marginLeft = "180px";
}
  
  
  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}


/* #################################################################################################################################### */
/* #################################################################################################################################### */


function welcomePage(){
  $("#WelcomePage").show();
  $("#RegisterPage").hide();
  $("#LoginPage").hide();
  $("#aboutPage").hide();
  $("#contactPage").hide();
  $("#settingsPage").hide();
  $("#gamePage").hide();
  $("#gameOverDialog").hide();
  $("#footer").show();
  clearLogPage();
  clearRegPage();
  closeNav();

  if (gameOn){
    exitGame();
  }
}

function registerPage(){
  clearLogPage();
  clearRegPage();
  $("#WelcomePage").hide();
  $("#RegisterPage").show();
  $("#LoginPage").hide();
  $("#aboutPage").hide();
  $("#contactPage").hide();
  $("#settingsPage").hide();
  $("#gamePage").hide();
  $("#gameOverDialog").hide();
  $("#footer").hide();
  closeNav();
  
  if (gameOn){
    exitGame();
  }
}


function loginPage(){
  clearLogPage();
  clearRegPage();
  $("#WelcomePage").hide();
  $("#RegisterPage").hide();
  $("#LoginPage").show();
  $("#aboutPage").hide();
  $("#contactPage").hide();
  $("#settingsPage").hide();
  $("#gamePage").hide();
  $("#gameOverDialog").hide();
  $("#footer").hide();
  closeNav();
  
  if (gameOn){
    exitGame();
  }
}


function aboutPage(){
  openModal();
  closeNav();

  if (gameOn){
    pauseGame();
  }
}


function openModal(){
  $("#aboutDialog").show();
  $("#contactDialog").hide();
  document.addEventListener("keydown", closeModalOnEscape);
  document.addEventListener("click", closeModalOnClickOutside);
}


function closeModal(){
  $("#aboutDialog").hide();
  if (gameOn){
    resumeGame();
  }

  document.removeEventListener("keydown", closeModalOnEscape);
  document.removeEventListener("click", closeModalOnClickOutside);
}



function contactPage(){
  openContactModal();
  closeNav();

  if (gameOn){
    pauseGame();
  }
}


function openContactModal(){
  $("#aboutDialog").hide();
  $("#contactDialog").show();
  document.addEventListener("keydown", closeModalOnEscape);
  document.addEventListener("click", closeContactModalOnClickOutside);
}


function closeContactModal(){
  $("#contactDialog").hide();
  document.removeEventListener("keydown", closeModalOnEscape);
  document.removeEventListener("click", closeContactModalOnClickOutside);
}


function closeModalOnEscape(e) {
  if (e.key === "Escape") {
    closeModal();
    closeContactModal();
  }
}


function closeModalOnClickOutside() {
  $(document).mouseup(function(e) {
    let dialog = $("#aboutDialog");
    let target = $(e.target);
    if (!target.is(dialog) && !dialog.has(target).length) {
        dialog.hide();
    }
  });
}


function closeContactModalOnClickOutside() {
  $(document).mouseup(function(e) {
    let dialog = $("#contactDialog");
    let target = $(e.target);
    if (!target.is(dialog) && !dialog.has(target).length) {
      dialog.hide();
    }
  });
}


/* #################################################################################################################################### */
/* #################################################################################################################################### */


function goToSettingsPage(){
  $("#WelcomePage").hide();
  $("#RegisterPage").hide();
  $("#LoginPage").hide();
  $("#aboutPage").hide();
  $("#contactPage").hide();
  $("#settingsPage").show();
  $("#gamePage").hide();
  $("#gameOverDialog").hide();
  clearLogPage();
  clearRegPage();
}


/* #################################################################################################################################### */
/* #################################################################################################################################### */


function startGame(){
  $("#WelcomePage").hide();
  $("#RegisterPage").hide();
  $("#LoginPage").hide();
  $("#aboutPage").hide();
  $("#contactPage").hide();
  $("#settingsPage").hide();
  $("#gamePage").show();
  $("#startGame").show();
  $("#pauseGame").show();
  $("#resumeGame").show();
  $("#gameOverDialog").hide();
  clearLogPage();
  clearRegPage();

  event.preventDefault();

  restartGame();
  newGameDuringGame();

}


function goToGameOverDialog(){
  $("#gameOverDialog").show();
  $("#startGame").hide();
  $("#pauseGame").hide();
  $("#resumeGame").hide();
  $("#muteGame").hide();
  $("#unmuteGame").hide();
  $("#volumeFader").hide();
}


function gameOverDialogToNewGameDisplay(){
  $("#gameOverDialog").hide();
  $("#startGame").show();
  $("#pauseGame").show();
  $("#resumeGame").show();
  $("#muteGame").show();
}


/* #################################################################################################################################### */
/* #################################################################################################################################### */