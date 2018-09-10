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

function preCreateUserInFirebase() {
    usernameInput.style.visibility = "visible";
    passwordInput.style.visibility = "visible";
    firebaseForgotPassButton.style.visibility = "visible";
    firebaseForgotPassButton.style.display = "block";
    firebaseLogOutButton.style.display = "none";
    preLogInButton.style.display = "none";
    firebaseLogInButton.style.display = "none";
    preCreateUserButton.style.display = "none";
    firebaseCreateUserButton.style.display = "block";
}

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
            firebaseCreateUserButton.style.display = "none";
            firebaseLogInButton.style.display = "block";
        });

    }

}

function chargeMode() {
    enterChargeModeButton.style.display = "none";
    useChargeTimeButton.style.display = "block";
    stopChargeTimeButton.style.display = "block";
    addChargeTimeButton.style.display = "block";
    lightDiv.style.visibility = "visible";
}

var charges = 10;

function useCharge() {
    lightDiv.style.backgroundColor = "green";
    charges--;
    lightDiv.innerHTML = charges;
}

function stopCharge() {
    lightDiv.style.backgroundColor = "red";
}

function addCharge() {
    charges++;
    lightDiv.innerHTML = charges;
}

function preLogInToFirebase() {
    usernameInput.style.visibility = "visible";
    passwordInput.style.visibility = "visible";
    firebaseForgotPassButton.style.visibility = "visible";
    firebaseLogOutButton.style.display = "none";
    preLogInButton.style.display = "none";
    firebaseLogInButton.style.display = "block";
    preCreateUserButton.style.display = "none";
    firebaseCreateUserButton.style.display = "none";
    firebaseForgotPassButton.style.display = "block";
}

function logInToFirebase() {
    var email = document.getElementById("usernameInput").value;
    var password = document.getElementById("passwordInput").value;

    usernameInput.style.visibility = "hidden";
    passwordInput.style.visibility = "hidden";
    firebaseForgotPassButton.style.visibility = "hidden";
    enterChargeModeButton.style.display = "block";
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

        useChargeTimeButton.style.display = "block";
        addChargeTimeButton.style.display = "block";
        if (email_verified != false) {

            document.getElementById("verificationButton").style.display = "none";
            console.log("Verified = OK");
        } else {

            document.getElementById("verificationButton").style.display = "block";
        }
    }, (1000));
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
    preLogInButton.style.display = "block";
    preCreateUserButton.style.display = "block";
    firebaseForgotPassButton.style.display = "block";
    useChargeTimeButton.style.display = "none";
    stopChargeTimeButton.style.display = "none";
    addChargeTimeButton.style.display = "none";
    lightDiv.style.visibility = "hidden";
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
titleDiv.style.marginTop = "15vh";
titleDiv.src = "images/logo.png";
titleDiv.id = "titleDiv";
titleDiv.style.width = "75%";
titleDiv.style.height = "75%";
document.getElementById("backgroundDiv").appendChild(titleDiv);

var usernameDiv = document.createElement(`div`);
usernameDiv.innerHTML = "";
usernameDiv.id = "usernameDiv";
usernameDiv.style.margin = "0";
usernameDiv.style.padding = "2vh 0";
document.getElementById("backgroundDiv").appendChild(usernameDiv);

var usernameInput = document.createElement(`input`);
usernameInput.placeholder = "Username";
usernameInput.id = "usernameInput";
usernameInput.style.fontSize = "300%";
usernameInput.style.visibility = "hidden";
usernameInput.style.marginLeft = "1vw";
usernameInput.style.paddingLeft = "3vw";
usernameInput.style.borderRadius = "20px";
//usernameInput.value = "emil@getacademy.no";
document.getElementById("usernameDiv").appendChild(usernameInput);

var passwordDiv = document.createElement(`div`);
passwordDiv.innerHTML = "";
passwordDiv.id = "passwordDiv";
passwordDiv.style.margin = "0";
passwordDiv.style.padding = "2vh 0";
document.getElementById("backgroundDiv").appendChild(passwordDiv);

var passwordInput = document.createElement(`input`);
passwordInput.placeholder = "Password";
passwordInput.id = "passwordInput";
passwordInput.style.fontSize = "300%";
passwordInput.style.visibility = "hidden";
passwordInput.style.marginLeft = "1vw";
passwordInput.style.paddingLeft = "3vw";
passwordInput.style.borderRadius = "20px";
//passwordInput.value = "abc123";
passwordInput.type = "password";
document.getElementById("passwordDiv").appendChild(passwordInput);

var firebaseForgotPassButton = document.createElement(`div`);
firebaseForgotPassButton.innerHTML = "Forgot password?";
firebaseForgotPassButton.id = "forgotPass";
firebaseForgotPassButton.style.visibility = "hidden";
firebaseForgotPassButton.style.margin = "auto";
firebaseForgotPassButton.style.fontSize = "5vw";
firebaseForgotPassButton.style.textDecoration = "underline";
firebaseForgotPassButton.style.display = "block";
firebaseForgotPassButton.onclick = forgotPass;
document.getElementById("backgroundDiv").appendChild(firebaseForgotPassButton);

var userparaDiv = document.createElement(`div`);
userparaDiv.innerHTML = "Not logged in";
userparaDiv.id = "user_para";
userparaDiv.style.margin = "0";
userparaDiv.style.padding = "2vh 0";
userparaDiv.style.fontSize = "3vw";
document.getElementById("backgroundDiv").appendChild(userparaDiv);

var lightDiv = document.createElement(`div`);
lightDiv.innerHTML = charges;
lightDiv.style.visibility = "hidden";
lightDiv.style.padding = "2vw";
lightDiv.style.backgroundColor = "blue";
lightDiv.style.color = "yellow";
lightDiv.style.fontSize = "5vw";
document.getElementById("backgroundDiv").appendChild(lightDiv);

var enterChargeModeButton = document.createElement(`button`);
enterChargeModeButton.innerHTML = "Charge";
enterChargeModeButton.id = "chargeModeButton";
enterChargeModeButton.style.display = "none";
enterChargeModeButton.style.margin = "auto";
enterChargeModeButton.style.width = "80vw";
enterChargeModeButton.style.padding = "2.5vh 0";
enterChargeModeButton.style.borderRadius = "20px";
enterChargeModeButton.style.fontSize = "5vw";
enterChargeModeButton.style.fontFamily = "Helvetica";
enterChargeModeButton.style.color = "#ffffff";
enterChargeModeButton.style.backgroundColor = "#bebebe";
enterChargeModeButton.onclick = chargeMode;
document.getElementById("backgroundDiv").appendChild(enterChargeModeButton);

var useChargeTimeButton = document.createElement(`button`);
useChargeTimeButton.innerHTML = "Use charge";
useChargeTimeButton.id = "useChargeButton";
useChargeTimeButton.style.display = "none";
useChargeTimeButton.style.margin = "auto";
useChargeTimeButton.style.width = "80vw";
useChargeTimeButton.style.padding = "2.5vh 0";
useChargeTimeButton.style.borderRadius = "20px";
useChargeTimeButton.style.fontSize = "3vw";
useChargeTimeButton.style.fontSize = "5vw";
useChargeTimeButton.style.fontFamily = "Helvetica";
useChargeTimeButton.style.color = "#ffffff";
useChargeTimeButton.style.backgroundColor = "#bebebe";
useChargeTimeButton.onclick = useCharge;
document.getElementById("backgroundDiv").appendChild(useChargeTimeButton);

var stopChargeTimeButton = document.createElement(`button`);
stopChargeTimeButton.innerHTML = "Stop charging";
stopChargeTimeButton.id = "stopChargeButton";
stopChargeTimeButton.style.display = "none";
stopChargeTimeButton.style.margin = "auto";
stopChargeTimeButton.style.width = "80vw";
stopChargeTimeButton.style.padding = "2.5vh 0";
stopChargeTimeButton.style.borderRadius = "20px";
stopChargeTimeButton.style.fontSize = "3vw";
stopChargeTimeButton.style.fontSize = "5vw";
stopChargeTimeButton.style.fontFamily = "Helvetica";
stopChargeTimeButton.style.color = "#ffffff";
stopChargeTimeButton.style.backgroundColor = "#bebebe";
stopChargeTimeButton.onclick = stopCharge;
document.getElementById("backgroundDiv").appendChild(stopChargeTimeButton);

var addChargeTimeButton = document.createElement(`button`);
addChargeTimeButton.innerHTML = "Add charge";
addChargeTimeButton.id = "addChargeButton";
addChargeTimeButton.style.display = "none";
addChargeTimeButton.style.margin = "auto";
addChargeTimeButton.style.width = "80vw";
addChargeTimeButton.style.padding = "2.5vh 0";
addChargeTimeButton.style.borderRadius = "20px";
addChargeTimeButton.style.fontSize = "3vw";
addChargeTimeButton.style.fontSize = "5vw";
addChargeTimeButton.style.fontFamily = "Helvetica";
addChargeTimeButton.style.color = "#ffffff";
addChargeTimeButton.style.backgroundColor = "#bebebe";
addChargeTimeButton.onclick = addCharge;
document.getElementById("backgroundDiv").appendChild(addChargeTimeButton);

var firebaseAuthenticationButton = document.createElement(`button`);
firebaseAuthenticationButton.innerHTML = "Send verification";
firebaseAuthenticationButton.id = "verificationButton";
firebaseAuthenticationButton.style.display = "none";
firebaseAuthenticationButton.style.margin = "auto";
firebaseAuthenticationButton.style.width = "80vw";
firebaseAuthenticationButton.style.padding = "2.5vh 0";
firebaseAuthenticationButton.style.borderRadius = "20px";
firebaseAuthenticationButton.style.fontSize = "3vw";
firebaseAuthenticationButton.style.fontSize = "5vw";
firebaseAuthenticationButton.style.fontFamily = "Helvetica";
firebaseAuthenticationButton.style.color = "#ffffff";
firebaseAuthenticationButton.style.backgroundColor = "#bebebe";
firebaseAuthenticationButton.onclick = send_verification;
document.getElementById("backgroundDiv").appendChild(firebaseAuthenticationButton);

var preLogInButton = document.createElement(`div`);
preLogInButton.innerHTML = "Log in";
preLogInButton.id = "logInInput";
preLogInButton.style.margin = "auto";
//preLogInButton.style.marginTop = "32vh";
preLogInButton.style.marginLeft = "7vw";
preLogInButton.style.marginRight = "2vw";
preLogInButton.style.cssFloat = "left";
preLogInButton.style.width = "40vw";
preLogInButton.style.padding = "2.5vh 0";
preLogInButton.style.borderRadius = "20px";
preLogInButton.style.fontSize = "5vw";
preLogInButton.style.fontFamily = "Helvetica";
preLogInButton.style.color = "#ffffff";
preLogInButton.style.display = "block";
preLogInButton.style.backgroundColor = "#bebebe";
preLogInButton.onclick = preLogInToFirebase;
document.getElementById("backgroundDiv").appendChild(preLogInButton);

var firebaseLogInButton = document.createElement(`div`);
firebaseLogInButton.innerHTML = "Log in";
firebaseLogInButton.id = "logInInput";
firebaseLogInButton.style.display = "none";
firebaseLogInButton.style.margin = "auto";
//firebaseLogInButton.style.marginTop = "32vh";
firebaseLogInButton.style.width = "80vw";
firebaseLogInButton.style.padding = "2.5vh 0";
firebaseLogInButton.style.borderRadius = "20px";
firebaseLogInButton.style.fontSize = "5vw";
firebaseLogInButton.style.fontFamily = "Helvetica";
firebaseLogInButton.style.color = "#ffffff";
firebaseLogInButton.style.backgroundColor = "#bebebe";
firebaseLogInButton.onclick = logInToFirebase;
document.getElementById("backgroundDiv").appendChild(firebaseLogInButton);

var preCreateUserButton = document.createElement(`div`);
preCreateUserButton.innerHTML = "Sign up";
preCreateUserButton.id = "createUserButton";
preCreateUserButton.style.margin = "auto";
//preCreateUserButton.style.marginTop = "32vh";
preCreateUserButton.style.marginRight = "7vw";
preCreateUserButton.style.marginLeft = "2vw";
preCreateUserButton.style.cssFloat = "right";
preCreateUserButton.style.width = "40vw";
preCreateUserButton.style.padding = "2.5vh 0";
preCreateUserButton.style.borderRadius = "20px";
preCreateUserButton.style.fontSize = "5vw";
preCreateUserButton.style.fontFamily = "Helvetica";
preCreateUserButton.style.color = "#ffffff";
preCreateUserButton.style.display = "block";
preCreateUserButton.style.backgroundColor = "#bebebe";
preCreateUserButton.onclick = preCreateUserInFirebase;
document.getElementById("backgroundDiv").appendChild(preCreateUserButton);

var firebaseCreateUserButton = document.createElement(`div`);
firebaseCreateUserButton.innerHTML = "Sign up";
firebaseCreateUserButton.id = "createUserButton";
firebaseCreateUserButton.style.margin = "auto";
//firebaseCreateUserButton.style.marginTop = "32vh";
firebaseCreateUserButton.style.marginRight = "7vw";
firebaseCreateUserButton.style.marginLeft = "2vw";
firebaseCreateUserButton.style.cssFloat = "right";
firebaseCreateUserButton.style.width = "80vw";
firebaseCreateUserButton.style.padding = "2.5vh 0";
firebaseCreateUserButton.style.borderRadius = "20px";
firebaseCreateUserButton.style.fontSize = "5vw";
firebaseCreateUserButton.style.fontFamily = "Helvetica";
firebaseCreateUserButton.style.color = "#ffffff";
firebaseCreateUserButton.style.display = "none";
firebaseCreateUserButton.style.backgroundColor = "#bebebe";
firebaseCreateUserButton.onclick = createUserInFirebase;
document.getElementById("backgroundDiv").appendChild(firebaseCreateUserButton);

var firebaseLogOutButton = document.createElement(`button`);
firebaseLogOutButton.innerHTML = "Log out ";
firebaseLogOutButton.id = "logOutInput";
firebaseLogOutButton.style.margin = "auto";
firebaseLogOutButton.style.fontSize = "5vw";
firebaseLogOutButton.style.display = "none";
firebaseLogOutButton.style.width = "40vw";
firebaseLogOutButton.style.padding = "2.5vh 0";
firebaseLogOutButton.style.borderRadius = "20px";
firebaseLogOutButton.style.fontFamily = "Helvetica";
firebaseLogOutButton.style.color = "#ffffff";
firebaseLogOutButton.style.backgroundColor = "#bebebe";
firebaseLogOutButton.onclick = logOutOfFirebase;
document.getElementById("backgroundDiv").appendChild(firebaseLogOutButton);

var firebaseEnterAnonButton = document.createElement(`div`);
firebaseEnterAnonButton.innerHTML = "Or enter without log in";
firebaseEnterAnonButton.id = "EnterAnon";
firebaseEnterAnonButton.style.marginTop = "10vh";
firebaseEnterAnonButton.style.paddingTop = "10vh";
firebaseEnterAnonButton.style.textAlign = "center";
firebaseEnterAnonButton.style.textDecoration = "underline";
firebaseEnterAnonButton.style.cssFloat = "bottom";
firebaseEnterAnonButton.style.fontSize = "3vw";
firebaseEnterAnonButton.style.fontFamily = "Helvetica";
firebaseEnterAnonButton.style.color = "#000000";
firebaseEnterAnonButton.style.display = "block";
//firebaseEnterAnonButton.onclick = EnterAnonFirebase;
document.getElementById("backgroundDiv").appendChild(firebaseEnterAnonButton);