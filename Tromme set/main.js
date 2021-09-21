var audio;

document.addEventListener('keydown', (event) => {
    playSound(event.key.toUpperCase())
});

function playSound(letter) {
    console.log(letter);
    switch (letter) {
        case "Q": audio = new Audio('assets/sounds/Hi-Hats/Hihat 1.wav'); break;
        case "W": audio = new Audio('assets/sounds/Hi-Hats/Hihat 2.wav'); break;
        case "E": audio = new Audio('assets/sounds/Hi-Hats/Hihat 3.wav'); break;
        case "R": audio = new Audio('assets/sounds/Hi-Hats/Hihat 4.wav'); break;
        case "T": audio = new Audio('assets/sounds/Hi-Hats/Hihat 5.wav'); break;

        case "A": audio = new Audio('assets/sounds/Snares/Snare 1.wav'); break;
        case "S": audio = new Audio('assets/sounds/Snares/Snare 2.wav'); break;
        case "D": audio = new Audio('assets/sounds/Snares/Snare 3.wav'); break;
        case "F": audio = new Audio('assets/sounds/Snares/Snare 4.wav'); break;
        case "G": audio = new Audio('assets/sounds/Snares/Snare 5.wav'); break;

        case "Z": audio = new Audio('assets/sounds/Kicks/Kick 1.wav'); break;
        case "X": audio = new Audio('assets/sounds/Kicks/Kick 2.wav'); break;
        case "C": audio = new Audio('assets/sounds/Kicks/Kick 3.wav'); break;
        case "V": audio = new Audio('assets/sounds/Kicks/Kick 4.wav'); break;
        case "B": audio = new Audio('assets/sounds/Kicks/Kick 5.wav'); break;

        case "Y": audio = new Audio('assets/sounds/Claps/Clap 1.wav'); break;
        case "U": audio = new Audio('assets/sounds/Claps/Clap 2.wav'); break;
        case "I": audio = new Audio('assets/sounds/Claps/Clap 3.wav'); break;
        case "O": audio = new Audio('assets/sounds/Claps/Clap 4.wav'); break;
        case "P": audio = new Audio('assets/sounds/Claps/Clap 5.wav'); break;

        case "H": audio = new Audio('assets/sounds/Foley/Foley 1.wav'); break;
        case "J": audio = new Audio('assets/sounds/Foley/Foley 2.wav'); break;
        case "K": audio = new Audio('assets/sounds/Foley/Foley 3.wav'); break;
        case "L": audio = new Audio('assets/sounds/Foley/Foley 4.wav'); break;
        case "Ø": audio = new Audio('assets/sounds/Foley/Foley 5.wav'); break;

        case "N": audio = new Audio('assets/sounds/Percussions/African Caxixi.wav'); break;
        case "M": audio = new Audio('assets/sounds/Percussions/Cabasa 2.wav'); break;
        case ",": audio = new Audio('assets/sounds/Percussions/Cabasa.wav'); break;

        default: audio = new Audio(); break;
    }
    audio.play();
};

var musicArray = [
    "Q", "W", "E", "R", "T",
    "A", "S", "D", "F", "G",
    "Y", "U", "I", "O", "P",
    "H", "J", "K", "L", "Ø",
    "Z", "X", "C", "V", "B",
    "N", "M", ",",
];

var hihatArray = [
    "Q", "W", "E", "R", "T",
];

var snareArray = [
    "A", "S", "D", "F", "G",
];

var kickArray = [
    "Z", "X", "C", "V", "B",
];


var clapArray = [
    "Y", "U", "I", "O", "P",
];

var foleyArray = [
    "H", "J", "K", "L", "Ø",
];
var percussionArray = [
    "N", "M", ",",
];


var randomInstruments;

function startMusicInterval() {
    stopMusicInterval();
    randomInstruments = setInterval(function () {
        let randomNote = Math.floor(Math.random() * musicArray.length);
        playSound(musicArray[randomNote]);
    }, document.getElementById("music-input").value);
}
function stopMusicInterval() {
    clearInterval(randomInstruments);
}
var randomHihats;

function startHihatInterval() {
    stopHihatInterval();
    randomHihats = setInterval(function () {
        let randomNote = Math.floor(Math.random() * hihatArray.length);
        playSound(hihatArray[randomNote]);
    }, document.getElementById("hihat-input").value);
}
function stopHihatInterval() {
    clearInterval(randomHihats);
}
var randomSnares;

function startSnareInterval() {
    stopSnareInterval();
    randomSnares = setInterval(function () {
        let randomNote = Math.floor(Math.random() * snareArray.length);
        playSound(snareArray[randomNote]);
    }, document.getElementById("snare-input").value);
}
function stopSnareInterval() {
    clearInterval(randomSnares);
}
var randomKicks;

function startKickInterval() {
    stopKickInterval();
    randomKicks = setInterval(function () {
        let randomNote = Math.floor(Math.random() * kickArray.length);
        playSound(kickArray[randomNote]);
    }, document.getElementById("kick-input").value);
}
function stopKickInterval() {
    clearInterval(randomKicks);
}

var randomClaps;

function startClapInterval() {
    stopClapInterval();
    randomClaps = setInterval(function () {
        let randomNote = Math.floor(Math.random() * clapArray.length);
        playSound(clapArray[randomNote]);
    }, document.getElementById("clap-input").value);
}
function stopClapInterval() {
    clearInterval(randomClaps);
}
var randomFoleys;

function startFoleyInterval() {
    stopFoleyInterval();
    randomFoleys = setInterval(function () {
        let randomNote = Math.floor(Math.random() * foleyArray.length);
        playSound(foleyArray[randomNote]);
    }, document.getElementById("foley-input").value);
}
function stopFoleyInterval() {
    clearInterval(randomFoleys);
}
var randomPercussions;

function startPercussionInterval() {
    stopPercussionInterval();
    randomPercussions = setInterval(function () {
        let randomNote = Math.floor(Math.random() * percussionArray.length);
        playSound(percussionArray[randomNote]);
    }, document.getElementById("percussion-input").value);
}
function stopPercussionInterval() {
    clearInterval(randomPercussions);
}