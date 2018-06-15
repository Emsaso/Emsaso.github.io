var playerOneName = "Emil";
var playerTwoName = "Hellenes";
var playerThreeName = "Lill June";
var playerFourName = "Kvamme";
var playerFiveName = "Terje";
var playerSixName = "Eskil";
var playerSevenName = "Geir";
var playerEightName = "Eddie";



var newElement = document.createElement("div");
newElement.setAttribute("class", "player" + i);
newElement.innerHTML = "Player" + i;
var div = document.createElement("div");
div.innerHTML = "Emil";


function StartGame() {
    for (var i = 0; i < 8; i++) {
        document.getElementsByClassName("player")[i].innerHTML = playerOneName;
    }
}