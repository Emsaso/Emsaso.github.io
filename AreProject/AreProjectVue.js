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
        console.log(email, password);
        console.log(errorCode, errorMessage);

    });
    email = null;
    password = null;

    setTimeout(function () {
        var user = firebase.auth().currentUser;
        console.log(user);
        if (user !== null) {
            var email_id = user.email;
            var email_verified = user.emailVerified;
            document.getElementById("user_para").innerHTML =
                "Welcome User : " + email_id + "<br/> Verification status : " + email_verified;
            document.getElementById("backgroundDiv").style.background = "hotpink";
        }
    }, 700);
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
