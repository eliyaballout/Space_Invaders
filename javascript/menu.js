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
  $("#footer").show();
  clearLogPage();
  clearRegPage();
  closeNav();

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
  $("#footer").hide();
  closeNav();
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
  $("#footer").hide();
  closeNav();
}



function aboutPage(){
  openModal();
  closeNav();
}


function openModal(){
  $("#aboutDialog").show();
  $("#contactDialog").hide();
  document.addEventListener("keydown", closeModalOnEscape);
  document.addEventListener("click", closeModalOnClickOutside);
}


function closeModal(){
  $("#aboutDialog").hide();
  document.removeEventListener("keydown", closeModalOnEscape);
  document.removeEventListener("click", closeModalOnClickOutside);
}



function contactPage(){
  openContactModal();
  closeNav();
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
  clearLogPage();
  clearRegPage();
}

