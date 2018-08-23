// Initialize Firebase
var config = {
    apiKey: "AIzaSyDGR_t2OmqYx4kV43uhLSDBSxQudi8SWzw",
    authDomain: "sunlight-scripture.firebaseapp.com",
    databaseURL: "https://sunlight-scripture.firebaseio.com",
    projectId: "sunlight-scripture",
    storageBucket: "sunlight-scripture.appspot.com",
    messagingSenderId: "1065419366338"
};
firebase.initializeApp(config);
var db = firebase.firestore();
const settings = {timestampsInSnapshots: true};
db.settings(settings);
var databaseId;

var database = firebase.database();

function testFirebase() {
    var docRef1 = db.collection("main").doc("test");
    docRef1.get().then(function (doc) {
        if (doc.exists) {
            console.log("Document data:", doc.data());
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch(function (error) {
        console.log("Error getting document:", error);
    });
}

function initFirebase() {
    var test = db.collection("main").doc("test").set({
        divamount: 50
    });
}

function createUserInFirebase() {
    var email = document.getElementById("usernameInput").value;
    var password = document.getElementById("passwordInput").value;
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
    });
}

function logInToFirebase() {
    var email = document.getElementById("usernameInput").value;
    var password = document.getElementById("passwordInput").value;
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        console.log(errorCode, errorMessage);
        email = null;
        password = null;
    });
}

function logOutOfFirebase() {
    firebase.auth().signOut().then(function () {
        // Sign-out successful.
    }).catch(function (error) {
        // An error happened.
    });
}


var bodyStyle = document.body.style;

var mainDiv = document.createElement(`div`);
mainDiv.id = "mainDiv";
mainDiv.style.margin = "1vh 0.1vw";
mainDiv.style.textAlign = "center";
document.body.appendChild(mainDiv);

var backgroundDiv = document.createElement(`div`);
backgroundDiv.id = "backgroundDiv";
backgroundDiv.style.margin = "0";
backgroundDiv.style.padding = "0 0 45vh";
backgroundDiv.style.background = "#bbbbbb";
backgroundDiv.style.textAlign = "center";
document.getElementById("mainDiv").appendChild(backgroundDiv);

var titleDiv = document.createElement(`div`);
titleDiv.innerHTML = "Are's App";
titleDiv.id = "titleDiv";
titleDiv.style.margin = "0";
titleDiv.style.padding = "5vh 0";
titleDiv.style.fontSize = "5em";
document.getElementById("backgroundDiv").appendChild(titleDiv);

var usernameDiv = document.createElement(`div`);
usernameDiv.innerHTML = "Username: ";
usernameDiv.id = "usernameDiv";
usernameDiv.style.margin = "0";
usernameDiv.style.padding = "5vh 0";
document.getElementById("backgroundDiv").appendChild(usernameDiv);

var usernameInput = document.createElement(`input`);
usernameInput.placeholder = "Username";
usernameInput.id = "usernameInput";
usernameInput.style.marginLeft = "1vw";
usernameInput.value = "emil@getacademy.no";
document.getElementById("usernameDiv").appendChild(usernameInput);

var passwordDiv = document.createElement(`div`);
passwordDiv.innerHTML = "Password: ";
passwordDiv.id = "passwordDiv";
passwordDiv.style.margin = "0";
passwordDiv.style.padding = "5vh 0";
document.getElementById("backgroundDiv").appendChild(passwordDiv);

var passwordInput = document.createElement(`input`);
passwordInput.placeholder = "Password";
passwordInput.id = "passwordInput";
passwordInput.type = "password";
passwordInput.style.marginLeft = "1vw";
passwordInput.value = "abc123";
document.getElementById("passwordDiv").appendChild(passwordInput);

var firebaseLogInButton = document.createElement(`button`);
firebaseLogInButton.innerHTML = "Log in";
firebaseLogInButton.id = "logInInput";
firebaseLogInButton.style.margin = "0 2vw";
firebaseLogInButton.style.fontSize = "5vw";
firebaseLogInButton.onclick = logInToFirebase;
document.getElementById("backgroundDiv").appendChild(firebaseLogInButton);

var firebaseLogOutButton = document.createElement(`button`);
firebaseLogOutButton.innerHTML = "Log out ";
firebaseLogOutButton.id = "logOutInput";
firebaseLogOutButton.style.margin = "0 2vw";
firebaseLogOutButton.style.fontSize = "5vw";
firebaseLogOutButton.onclick = logOutOfFirebase;
document.getElementById("backgroundDiv").appendChild(firebaseLogOutButton);

var newLineInText = document.createElement(`div`);
newLineInText.id = "newLineInText";
newLineInText.style.marginTop = "1vh";
document.getElementById("backgroundDiv").appendChild(newLineInText);

var firebaseCreateUserButton = document.createElement(`button`);
firebaseCreateUserButton.innerHTML = "Create user";
firebaseCreateUserButton.id = "createUserButton";
firebaseCreateUserButton.style.margin = "0 0.5vw";
firebaseCreateUserButton.style.fontSize = "1.4vw";
firebaseCreateUserButton.onclick = createUserInFirebase;
document.getElementById("backgroundDiv").appendChild(firebaseCreateUserButton);

var firebaseInfoButton = document.createElement(`button`);
firebaseInfoButton.innerHTML = "See firebase info";
firebaseInfoButton.id = "usernameInput";
firebaseInfoButton.style.margin = "0 0.5vw";
firebaseInfoButton.style.fontSize = "1.4vw";
firebaseInfoButton.onclick = testFirebase;
document.getElementById("backgroundDiv").appendChild(firebaseInfoButton);

var firebaseInitButton = document.createElement(`button`);
firebaseInitButton.innerHTML = "change firebase info";
firebaseInitButton.id = "usernameInput";
firebaseInitButton.style.margin = "0 0.5vw";
firebaseInitButton.style.fontSize = "1.4vw";
firebaseInitButton.onclick = initFirebase;
document.getElementById("backgroundDiv").appendChild(firebaseInitButton);
