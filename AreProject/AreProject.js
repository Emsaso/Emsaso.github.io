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

var mainDiv = document.createElement(`div`);
mainDiv.id = "mainDiv";
mainDiv.style.margin = "1vh 0.1vw";
mainDiv.style.textAlign = "center";
document.body.appendChild(mainDiv);

var backgroundDiv = document.createElement(`div`);
backgroundDiv.id = "backgroundDiv";
backgroundDiv.style.margin = "0";
backgroundDiv.style.background = "#ffffff";
backgroundDiv.style.textAlign = "center";
document.getElementById("mainDiv").appendChild(backgroundDiv);

var titleDiv = document.createElement(`img`);
titleDiv.style.marginTop = "10vh";
titleDiv.src = "images/logo.png";
titleDiv.id = "titleDiv";
titleDiv.style.width = "25%";
titleDiv.style.height = "25%";
document.getElementById("backgroundDiv").appendChild(titleDiv);

//var usernameDiv = document.createElement(`div`);
//usernameDiv.innerHTML = "Username: ";
//usernameDiv.id = "usernameDiv";
//usernameDiv.style.margin = "0";
//usernameDiv.style.padding = "5vh 0";
//document.getElementById("backgroundDiv").appendChild(usernameDiv);

//var usernameInput = document.createElement(`input`);
//usernameInput.placeholder = "Username";
//usernameInput.id = "usernameInput";
//usernameInput.style.marginLeft = "1vw";
//usernameInput.value = "emil@getacademy.no";
//document.getElementById("usernameDiv").appendChild(usernameInput);

//var userparaDiv = document.createElement(`div`);
//userparaDiv.innerHTML = "Not logged in";
//userparaDiv.id = "user_para";
//userparaDiv.style.margin = "0";
//userparaDiv.style.padding = "5vh 0";
//userparaDiv.style.fontSize = "20px";
//document.getElementById("backgroundDiv").appendChild(userparaDiv);

//var passwordDiv = document.createElement(`div`);
//passwordDiv.innerHTML = "Password: ";
//passwordDiv.id = "passwordDiv";
//passwordDiv.style.margin = "0";
//passwordDiv.style.padding = "5vh 0";
//document.getElementById("backgroundDiv").appendChild(passwordDiv);

//var passwordInput = document.createElement(`input`);
//passwordInput.placeholder = "Password";
//passwordInput.id = "passwordInput";
//passwordInput.style.marginLeft = "1vw";
//passwordInput.value = "abc123";
//passwordInput.type = "password";
//document.getElementById("passwordDiv").appendChild(passwordInput);

//var firebaseForgotPassButton = document.createElement(`div`);
//firebaseForgotPassButton.innerHTML = "Forgot password?";
//firebaseForgotPassButton.id = "forgotPass";
//firebaseForgotPassButton.style.margin = "auto";
//firebaseForgotPassButton.style.fontSize = "8vw";
//firebaseForgotPassButton.style.color = "#ffffff";
//firebaseForgotPassButton.style.display = "block";
//firebaseForgotPassButton.style.backgroundColor = "#bebebe";
//firebaseForgotPassButton.onclick = forgotPass;
//document.getElementById("backgroundDiv").appendChild(firebaseForgotPassButton);

var spaceGenerator = document.createElement(`div`);
spaceGenerator.id = "spaceGenerator";
spaceGenerator.style.marginTop = "20vh";
document.getElementById("backgroundDiv").appendChild(spaceGenerator);

var firebaseLogInButton = document.createElement(`div`);
firebaseLogInButton.innerHTML = "Log in";
firebaseLogInButton.id = "logInInput";
firebaseLogInButton.style.margin = "auto";
//firebaseLogInButton.style.marginTop = "32vh";
firebaseLogInButton.style.marginLeft = "7vw";
firebaseLogInButton.style.marginRight = "2vw";
firebaseLogInButton.style.cssFloat = "left";
firebaseLogInButton.style.width = "40vw";
firebaseLogInButton.style.padding = "2.5vh 0";
firebaseLogInButton.style.borderRadius = "20px";
firebaseLogInButton.style.fontSize = "5vw";
firebaseLogInButton.style.fontFamily = "Helvetica";
firebaseLogInButton.style.color = "#ffffff";
firebaseLogInButton.style.display = "block";
firebaseLogInButton.style.backgroundColor = "#bebebe";
firebaseLogInButton.onclick = logInToFirebase;
document.getElementById("backgroundDiv").appendChild(firebaseLogInButton);

var firebaseCreateUserButton = document.createElement(`div`);
firebaseCreateUserButton.innerHTML = "Sign up";
firebaseCreateUserButton.id = "createUserButton";
firebaseCreateUserButton.style.margin = "auto";
//firebaseCreateUserButton.style.marginTop = "32vh";
firebaseCreateUserButton.style.marginRight = "7vw";
firebaseCreateUserButton.style.marginLeft = "2vw";
firebaseCreateUserButton.style.cssFloat = "right";
firebaseCreateUserButton.style.width = "40vw";
firebaseCreateUserButton.style.padding = "2.5vh 0";
firebaseCreateUserButton.style.borderRadius = "20px";
firebaseCreateUserButton.style.fontSize = "5vw";
firebaseCreateUserButton.style.fontFamily = "Helvetica";
firebaseCreateUserButton.style.color = "#ffffff";
firebaseCreateUserButton.style.display = "block";
firebaseCreateUserButton.style.backgroundColor = "#bebebe";
firebaseCreateUserButton.onclick = createUserInFirebase;
document.getElementById("backgroundDiv").appendChild(firebaseCreateUserButton);

var firebaseLogOutButton = document.createElement(`button`);
firebaseLogOutButton.innerHTML = "Log out ";
firebaseLogOutButton.id = "logOutInput";
firebaseLogOutButton.style.margin = "auto";
firebaseLogOutButton.style.fontSize = "8vw";
firebaseLogOutButton.style.display = "none";
firebaseLogOutButton.onclick = logOutOfFirebase;
document.getElementById("backgroundDiv").appendChild(firebaseLogOutButton);

var firebaseAuthenticationButton = document.createElement(`button`);
firebaseAuthenticationButton.innerHTML = "Send verification";
firebaseAuthenticationButton.id = "verificationButton";
firebaseAuthenticationButton.style.display = "none";
firebaseAuthenticationButton.style.margin = "auto";
firebaseAuthenticationButton.style.fontSize = "8vw";
firebaseAuthenticationButton.onclick = send_verification;
document.getElementById("backgroundDiv").appendChild(firebaseAuthenticationButton);

var firebaseEnterAnonButton = document.createElement(`div`);
firebaseEnterAnonButton.innerHTML = "Or enter without log in";
firebaseEnterAnonButton.id = "EnterAnon";
firebaseEnterAnonButton.style.marginTop = "30vh";
firebaseEnterAnonButton.style.paddingTop = "5vh";
firebaseEnterAnonButton.style.textAlign = "center";
firebaseEnterAnonButton.style.cssFloat = "bottom";
firebaseEnterAnonButton.style.fontSize = "3vw";
firebaseEnterAnonButton.style.fontFamily = "Helvetica";
firebaseEnterAnonButton.style.color = "#000000";
firebaseEnterAnonButton.style.display = "block";
//firebaseEnterAnonButton.onclick = EnterAnonFirebase;
document.getElementById("backgroundDiv").appendChild(firebaseEnterAnonButton);