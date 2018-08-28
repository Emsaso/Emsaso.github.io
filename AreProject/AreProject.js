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
const settings = { timestampsInSnapshots: true };
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

//function testFirebase2() {
//    var docRef1 = db.collection("main").doc("test");
//    docRef1.get().then(function (doc) {
//        if (doc.exists) {
//            document.getElementById("infoFiv").innerHTML = "Document data: " + doc.data();
//        } else {
//            // doc.data() will be undefined in this case
//            document.getElementById("infoFiv").innerHTML = "No such document!";
//        }
//    }).catch(function (error) {
//        document.getElementById("infoFiv").innerHTML = "Error getting document!" + error;
//    });
//}

function initFirebase() {
    var test = db.collection("main").doc("test").set({
        divamount: document.getElementById("variableInput").value
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

    });
    email = null;
    password = null;

    setTimeout(function() {
   var user = firebase.auth().currentUser;
    console.log(user);
    if (user !== null) {
        var email_id = user.email;
        var email_verified = user.emailVerified;
        document.getElementById("user_para").innerHTML =
            "Welcome User : " + email_id + "<br/> Verification status : " + email_verified;
        document.getElementById("backgroundDiv").style.background = "hotpink";
    }}, (700));
}

function logOutOfFirebase() {
    firebase.auth().signOut().then(function () {
        // Sign-out successful.
    }).catch(function (error) {
        // An error happened.
        });
    document.getElementById("backgroundDiv").style.background = "#bbbbbb";
    document.getElementById("user_para").innerHTML = "Not logged in";
}

function send_verification() {
    var user = firebase.auth().currentUser;

    user.sendEmailVerification().then(function () {

    }).catch(function (error) {

    });
}

var bodyStyle = document.body.style;
bodyStyle.overflow = "hidden";

var mainDiv = document.createElement(`div`);
mainDiv.id = "mainDiv";
mainDiv.style.margin = "1vh 0.1vw";
mainDiv.style.textAlign = "center";
document.body.appendChild(mainDiv);

var backgroundDiv = document.createElement(`div`);
backgroundDiv.id = "backgroundDiv";
backgroundDiv.style.margin = "0";
backgroundDiv.style.paddingBottom = "45vh";
backgroundDiv.style.background = "#bbbbbb";
backgroundDiv.style.textAlign = "center";
document.getElementById("mainDiv").appendChild(backgroundDiv);

var firebaseCreateUserButton = document.createElement(`button`);
firebaseCreateUserButton.innerHTML = "Create user";
firebaseCreateUserButton.id = "createUserButton";
firebaseCreateUserButton.style.cssFloat = "right";
firebaseCreateUserButton.style.marginTop = "0.5vh";
firebaseCreateUserButton.style.marginRight = "0.5vw";
firebaseCreateUserButton.style.fontSize = "1.4vw";
firebaseCreateUserButton.onclick = createUserInFirebase;
document.getElementById("backgroundDiv").appendChild(firebaseCreateUserButton);

var firebaseLogOutButton = document.createElement(`button`);
firebaseLogOutButton.innerHTML = "Log out ";
firebaseLogOutButton.id = "logOutInput";
firebaseLogOutButton.style.cssFloat = "right";
firebaseLogOutButton.style.marginTop = "0.5vh";
firebaseLogOutButton.style.marginRight = "0.5vw";
firebaseLogOutButton.style.fontSize = "1.4vw";
firebaseLogOutButton.onclick = logOutOfFirebase;
document.getElementById("backgroundDiv").appendChild(firebaseLogOutButton);

var firebaseLogInButton = document.createElement(`button`);
firebaseLogInButton.innerHTML = "Log in";
firebaseLogInButton.id = "logInInput";
firebaseLogInButton.style.cssFloat = "right";
firebaseLogInButton.style.marginTop = "0.5vh";
firebaseLogInButton.style.marginRight = "0.5vw";
firebaseLogInButton.style.fontSize = "1.4vw";
firebaseLogInButton.onclick = logInToFirebase;
document.getElementById("backgroundDiv").appendChild(firebaseLogInButton);

var firebaseAuthenticationButton = document.createElement(`button`);
firebaseAuthenticationButton.innerHTML = "Send verification";
firebaseAuthenticationButton.id = "verificationButton";
firebaseAuthenticationButton.style.cssFloat = "right";
firebaseAuthenticationButton.style.marginTop = "0.5vh";
firebaseAuthenticationButton.style.marginRight = "0.5vw";
firebaseAuthenticationButton.style.fontSize = "1.4vw";
firebaseAuthenticationButton.onclick = send_verification;
document.getElementById("backgroundDiv").appendChild(firebaseAuthenticationButton);

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

var userparaDiv = document.createElement(`div`);
userparaDiv.innerHTML = "Not logged in";
userparaDiv.id = "user_para";
userparaDiv.style.margin = "0";
userparaDiv.style.padding = "5vh 0";
userparaDiv.style.fontSize = "20px";
document.getElementById("backgroundDiv").appendChild(userparaDiv);

var passwordDiv = document.createElement(`div`);
passwordDiv.innerHTML = "Password: ";
passwordDiv.id = "passwordDiv";
passwordDiv.style.margin = "0";
passwordDiv.style.padding = "5vh 0";
document.getElementById("backgroundDiv").appendChild(passwordDiv);

var passwordInput = document.createElement(`input`);
passwordInput.placeholder = "Password";
passwordInput.id = "passwordInput";
passwordInput.style.marginLeft = "1vw";
passwordInput.value = "abc123";
passwordInput.type = "password";
document.getElementById("passwordDiv").appendChild(passwordInput);

var firebaseInitButton = document.createElement(`button`);
firebaseInitButton.innerHTML = "Change firebase info";
firebaseInitButton.id = "InitButton";
firebaseInitButton.style.margin = "0 0.5vw";
firebaseInitButton.style.fontSize = "1.4vw";
firebaseInitButton.onclick = initFirebase;
document.getElementById("backgroundDiv").appendChild(firebaseInitButton);

var variableInput = document.createElement(`input`);
variableInput.placeholder = "Input data";
variableInput.id = "variableInput";
variableInput.style.marginRight = "1vw";
variableInput.style.width = "7vw";
document.getElementById("backgroundDiv").appendChild(variableInput);

var firebaseInfoButton = document.createElement(`button`);
firebaseInfoButton.innerHTML = "See firebase info";
firebaseInfoButton.id = "usernameInput";
firebaseInfoButton.style.margin = "0 0.5vw";
firebaseInfoButton.style.fontSize = "1.4vw";
firebaseInfoButton.onclick = testFirebase;
document.getElementById("backgroundDiv").appendChild(firebaseInfoButton);

var infoDiv = document.createElement("div");
//infoDiv.innerHTML = testFirebase2();
infoDiv.id = "infoDiv";
infoDiv.style.margin = "1vh 0";
infoDiv.style.fontSize = "1.4vw";
document.getElementById("backgroundDiv").appendChild(infoDiv);