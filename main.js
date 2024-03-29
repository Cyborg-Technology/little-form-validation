alert("i am a js code!!");
var joinpg = document.getElementById("join");
var username = document.getElementById("username");
var password = document.getElementById("password");

var login = document.getElementById("login");
var username2 = document.getElementById("username2");
var password2 = document.getElementById("password2");
var welcome = document.getElementById("welcome");

var sound = new Audio();
sound.src =
  "https://www.dropbox.com/s/r4jgza9hd4k3xyx/Computer%20Error-SoundBible.com-69768060%20%281%29.mp3?dl=0";

var body = document.getElementById("body");
var idty = document.getElementById("idty");
var header = document.getElementById("header");

header.style.display = "none";
login.style.display = "none";
body.style.display = "none";
//warning notes
var warns = new Array();

warns[0] = "inputted a wrong value!";
warns[1] = "fill up the gap with the required detail!";
warns[2] = "Verified";

//the user
var person = ("name", "password", "identity");

//signing up
function save() {
  //new username and new password are empty
  if (username.value == 0 && password.value == 0) {
    document.getElementById("warning1").innerHTML = warns[1];
    document.getElementById("warning1").style.display = "inline";

    document.getElementById("warning2").innerHTML = warns[1];
    document.getElementById("warning2").style.display = "inline";

    sound.play();
  }
  //if only new username is empty
  else if (username.value == 0) {
    document.getElementById("warning2").style.display = "none";

    document.getElementById("warning1").innerHTML = warns[1];
    document.getElementById("warning1").style.display = "inline";

    sound.play();
  }
  //if new password is empty
  else if (password.value == 0) {
    document.getElementById("warning1").style.display = "none";

    document.getElementById("warning2").innerHTML = warns[1];
    document.getElementById("warning2").style.display = "inline";

    sound.play();
  }

  //if the user's main name is empty'
  else if (idty.value == 0) {
    document.getElementById("warning0").style.display = "inline";
    document.getElementById("warning0").textContent = warns[1];

    document.getElementById("warning1").style.display = "none";
    document.getElementById("warning2").style.display = "none";

    sound.play();
  }

  //if the both are correct
  else {
    //the new password and username sre saved for login..
    this.name = username.value;
    this.password = password.value;
    this.identity = idty.value;

    joinpg.style.display = "none";
    login.style.display = "block";
  }
} //save ends here.

//login
function validate() {
  //if both username and password is empty...
  if (username2.value == 0 && password2.value == 0) {
    document.getElementById("warning3").innerHTML = warns[1];
    document.getElementById("warning3").style.display = "inline";
    document.getElementById("warning3").style.color = "red";

    document.getElementById("warning4").innerHTML = warns[1];
    document.getElementById("warning4").style.display = "inline";
    document.getElementById("warning4").style.color = "red";

    sound.play();
  }
  //if username is empty and password correct
  else if (username2.value == 0 && password2.value == password) {
    document.getElementById("warning3").innerHTML = warns[1];
    document.getElementById("warning3").style.display = "inline";
    document.getElementById("warning3").style.color = "red";

    document.getElementById("warning4").innerHTML = warns[2];
    document.getElementById("warning4").style.display = "inline";
    document.getElementById("warning4").style.color = "green";

    sound.play();
  }
  //if password is empty and username correct.
  else if (password2.value == 0 && username2.value == name) {
    document.getElementById("warning4").innerHTML = warns[1];
    document.getElementById("warning4").style.display = "inline";
    document.getElementById("warning4").style.color = "red";

    document.getElementById("warning3").innerHTML = warns[2];
    document.getElementById("warning3").style.display = "inline";
    document.getElementById("warning3").style.color = "green";

    sound.play();
  }
  //if username and password are wrong
  else if (username2.value != name && password2.value != password) {
    document.getElementById("warning3").innerHTML = warns[0];
    document.getElementById("warning3").style.display = "inline";
    document.getElementById("warning3").style.color = "red";

    document.getElementById("warning4").innerHTML = warns[0];
    document.getElementById("warning4").style.display = "inline";
    document.getElementById("warning4").style.color = "red";

    sound.play();
  } //username is wrong and password correct
  else if (username2.value != name && password2.value == password) {
    document.getElementById("warning3").innerHTML = warns[0];
    document.getElementById("warning3").style.display = "inline";
    document.getElementById("warning3").style.color = "red";

    document.getElementById("warning4").textContent = warns[2];
    document.getElementById("warning4").style.color = "green";
    document.getElementById("warning4").style.display = "inline";

    sound.play();
  } //if password is wrong and username correct..
  else if (password2.value != password && username2.value == name) {
    document.getElementById("warning4").innerHTML = warns[0];
    document.getElementById("warning4").style.display = "inline";
    document.getElementById("warning4").style.color = "red";

    document.getElementById("warning3").textContent = warns[2];
    document.getElementById("warning3").style.color = "green";
    document.getElementById("warning3").style.display = "inline";

    sound.play();
  } //if username is correct and password empty
  else if (username2.value == name && password2.value == 0) {
    document.getElementById("warning3").textContent = warns[2];
    document.getElementById("warning3").style.color = "green";
    document.getElementById("warning3").style.display = "inline";

    document.getElementById("warning4").innerHTML = warns[1];
    document.getElementById("warning4").style.display = "inline";
    document.getElementById("warning4").style.color = "red";

    sound.play();
  }
  //if password is correct and username empty
  else if (password2.value == password && username2.value == 0) {
    document.getElementById("warning4").textContent = warns[2];
    document.getElementById("warning4").style.color = "green";
    document.getElementById("warning4").style.display = "inline";

    document.getElementById("warning3").innerHTML = warns[1];
    document.getElementById("warning3").style.display = "inline";
    document.getElementById("warning3").style.color = "red";

    sound.play();
  }
  //if all is correct
  else {
    document.getElementById("warning4").textContent = warns[2];
    document.getElementById("warning4").style.color = "green";
    document.getElementById("warning4").style.display = "inline";

    document.getElementById("warning3").textContent = warns[2];
    document.getElementById("warning3").style.color = "green";
    document.getElementById("warning3").style.display = "inline";

    alert("Welcome " + identity);
    login.style.display = "none";
    body.style.display = "block";
    header.style.display = "block";

    document.getElementById("warning3").style.display = "none";
    document.getElementById("warning4").style.display = "none";

    welcome.innerHTML = "welcome " + identity;
  }
}
//  back to login
function logout() {
  body.style.display = "none";
  login.style.display = "block";
}
