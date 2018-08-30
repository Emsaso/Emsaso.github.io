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

function createUserInFirebase() {
    var email = document.getElementById("usernameInput").value;
    var password = document.getElementById("passwordInput").value;
    var user = firebase.auth().currentUser;

    if (user !== null) {

        console.log("user exists");

    } else {
        console.log("User created");
        firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
            document.getElementById("user_para").innerHTML =
                "<br/> User created! You can now log in.";
        });

    }

}

function logInToFirebase() {
    var email = document.getElementById("usernameInput").value;
    var password = document.getElementById("passwordInput").value;

    firebaseLogOutButton.style.display = "block";
    firebaseLogInButton.style.display = "none";
    firebaseCreateUserButton.style.display = "none";
    firebaseForgotPassButton.style.display = "none";

    firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        firebaseLogOutButton.style.display = "none";
        firebaseLogInButton.style.display = "block";
        firebaseCreateUserButton.style.display = "block";
        document.getElementById("user_para").innerHTML = "incorrect username / password";
        console.log(errorCode, errorMessage);
    });


    email = null;
    password = null;



    setTimeout(function () {
        var user = firebase.auth().currentUser;
        console.log(user);

        var email_id = user.email;
        var email_verified = user.emailVerified;

        if (user !== null) {

            document.getElementById("user_para").innerHTML =
                "Welcome User : " + email_id + "<br/> Verification status : " + email_verified;
            document.getElementById("backgroundDiv").style.background = "blue";
        }

        if (email_verified != false) {

            document.getElementById("verificationButton").style.display = "none";
            console.log("Verified = OK");
        } else {

            document.getElementById("verificationButton").style.display = "block";
        }
    }, (700));
}

function logOutOfFirebase() {
    firebase.auth().signOut().then(function () {
        // Sign-out successful.
    }).catch(function (error) {
        // An error happened.
    });
    document.getElementById("backgroundDiv").style.background = "#bbbbbb";
    document.getElementById("user_para").innerHTML = "Not logged in";
    document.getElementById("verificationButton").style.display = "none";
    firebaseLogOutButton.style.display = "none";
    firebaseLogInButton.style.display = "block";
    firebaseCreateUserButton.style.display = "block";
    firebaseForgotPassButton.style.display = "block";
}

function forgotPass() {
    var auth = firebase.auth();
    var email = document.getElementById("usernameInput").value;
    
    auth.sendPasswordResetEmail(email).then(function () {
        console.log("Email-sent");
        alert("Email has been sent to you with instructions.");
    }).catch(function (error) {
        console.log("Email not sent");
        alert("Wrong email!");
    });
}

function send_verification() {
    var user = firebase.auth().currentUser;

    user.sendEmailVerification().then(function () {

    }).catch(function (error) {

    });
    alert("Verification link has been sent to your email address.");
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
var titleDiv = document.createElement(`div`);
titleDiv.innerHTML = "ReNewGen";
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

var firebaseForgotPassButton = document.createElement(`button`);
firebaseForgotPassButton.innerHTML = "Forgot password?";
firebaseForgotPassButton.id = "forgotPass";
firebaseForgotPassButton.style.margin = "auto";
firebaseForgotPassButton.style.fontSize = "1.4vw";
firebaseForgotPassButton.style.display = "block";
firebaseForgotPassButton.onclick = forgotPass;
document.getElementById("backgroundDiv").appendChild(firebaseForgotPassButton);

var firebaseCreateUserButton = document.createElement(`button`);
firebaseCreateUserButton.innerHTML = "Create user";
firebaseCreateUserButton.id = "createUserButton";
firebaseCreateUserButton.style.margin = "auto";
firebaseCreateUserButton.style.cssfloat = "";
firebaseCreateUserButton.style.fontSize = "1.4vw";
firebaseCreateUserButton.style.display = "block";
firebaseCreateUserButton.onclick = createUserInFirebase;
document.getElementById("backgroundDiv").appendChild(firebaseCreateUserButton);

var firebaseLogOutButton = document.createElement(`button`);
firebaseLogOutButton.innerHTML = "Log out ";
firebaseLogOutButton.id = "logOutInput";
firebaseLogOutButton.style.margin = "auto";
firebaseLogOutButton.style.fontSize = "1.4vw";
firebaseLogOutButton.style.display = "none";
firebaseLogOutButton.onclick = logOutOfFirebase;
document.getElementById("backgroundDiv").appendChild(firebaseLogOutButton);

var firebaseLogInButton = document.createElement(`button`);
firebaseLogInButton.innerHTML = "Log in";
firebaseLogInButton.id = "logInInput";
firebaseLogInButton.style.margin = "auto";
firebaseLogInButton.style.fontSize = "1.4vw";
firebaseLogInButton.style.display = "block";
firebaseLogInButton.onclick = logInToFirebase;
document.getElementById("backgroundDiv").appendChild(firebaseLogInButton);

var firebaseAuthenticationButton = document.createElement(`button`);
firebaseAuthenticationButton.innerHTML = "Send verification";
firebaseAuthenticationButton.id = "verificationButton";
firebaseAuthenticationButton.style.display = "none";
firebaseAuthenticationButton.style.margin = "auto";
firebaseAuthenticationButton.style.fontSize = "1.4vw";
firebaseAuthenticationButton.onclick = send_verification;
document.getElementById("backgroundDiv").appendChild(firebaseAuthenticationButton);
