
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
var firebase = firebase.firestore();
const settings = { timestampsInSnapshots: true };
db.settings(settings);
var databaseId;


var apekatt = document.createElement(`MonkeyCat`);
apekatt.innerHTML = "Apekatt";
document.getElementById("mainDiv").appendChild(apekatt);

