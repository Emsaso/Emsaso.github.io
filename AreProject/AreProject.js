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
function initFirebase(test, divamount) {
    db.collection("main").doc("test").set({
        divamount: 31
    });
}

var bodyStyle = document.body.style;

var mainDiv = document.createElement(`div`);
mainDiv.innerHTML = "Hello";
mainDiv.id = "mainDiv";
mainDiv.style.margin = "1vh 1vw";
mainDiv.style.background = "grey";
mainDiv.style.borderRadius = "1em";
mainDiv.style.textAlign = "center";
document.body.appendChild(mainDiv);

var secondDiv = document.createElement(`div`);
secondDiv.innerHTML = "Hello";
secondDiv.id = "secondDiv";
secondDiv.style.background = "red";
secondDiv.style.textAlign = "center";
document.getElementById("mainDiv").appendChild(secondDiv);

var thirdDiv = document.createElement(`div`);
thirdDiv.innerHTML = "Hello";
thirdDiv.id = "thirdDiv";
thirdDiv.style.background = "blue";
thirdDiv.style.borderRadius = "1em";
thirdDiv.style.textAlign = "center";
document.getElementById("secondDiv").appendChild(thirdDiv);

var fourthDiv = document.createElement(`div`);
fourthDiv.innerHTML = "Hello";
fourthDiv.id = "fourthDiv";
fourthDiv.style.background = "green";
fourthDiv.style.borderRadius = "1em";
fourthDiv.style.textAlign = "center";
document.getElementById("thirdDiv").appendChild(fourthDiv);

var fifthDiv = document.createElement(`div`);
fifthDiv.innerHTML = "Hello";
fifthDiv.id = "fifthDiv";
fifthDiv.style.background = "yellow";
fifthDiv.style.borderRadius = "1em";
fifthDiv.style.textAlign = "center";
document.getElementById("fourthDiv").appendChild(fifthDiv);

var sixthDiv = document.createElement(`div`);
sixthDiv.innerHTML = "Hello";
sixthDiv.id = "sixthDiv";
sixthDiv.style.background = "purple";
sixthDiv.style.borderRadius = "1em";
sixthDiv.style.textAlign = "center";
document.getElementById("fifthDiv").appendChild(sixthDiv);

var seventhDiv = document.createElement(`div`);
seventhDiv.innerHTML = "Hello";
seventhDiv.id = "seventhDiv";
seventhDiv.style.background = "pink";
seventhDiv.style.borderRadius = "1em";
seventhDiv.style.textAlign = "center";
document.getElementById("sixthDiv").appendChild(seventhDiv);

for (var i = 0; i <= 100/*divamount*/; i++) {
    var eighthDiv = document.createElement(`div`);
    eighthDiv.innerHTML = `Hello ${i / 100}`;
    eighthDiv.id = "eighthDiv";
    eighthDiv.style.background = "black";
    eighthDiv.style.borderRadius = "1em";
    eighthDiv.style.textAlign = "center";
    eighthDiv.style.color = "white";
    eighthDiv.style.fontSize = "4.9px";
    document.getElementById("seventhDiv").appendChild(eighthDiv);
}