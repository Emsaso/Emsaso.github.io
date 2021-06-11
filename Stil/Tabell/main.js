
/*
 * Her er oppgaven være å fjerne tilfeldige navn, og legge til ekte navn
 * med input bokser.
 * 
 * Dere kan også prøve å legge til en redigerings knapp på hvert felt   
 */


var table = document.getElementById("table");

var alphabet = ["a", "b", "c", "d", "e", "f",
    "g", "h", "i", "j", "k", "l", "m", "n", "o",
    "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "æ", "ø", "å"];

var dummyDatabase = [
    { first: "Emil", middle: "Emilius", last: "Emiliensen" },
    { first: "Geir", middle: "Geirud", last: "Geirson" },
    { first: "Olav", middle: "Olaf", last: "Olavfsen" },
    { first: "Knut", middle: "Knutlav", last: "Knutsen" },
];

for (let p = 0; p < dummyDatabase.length; p++) {
    const person = dummyDatabase[p];
    addDummyFromStart(person.first, person.middle, person.last);

}


function addDummyFromStart(f, m, l) {
    document.getElementById("first-name").value = f;
    document.getElementById("middle-name").value = m;
    document.getElementById("last-name").value = l;
    insertPerson();
}


function insertPerson() {
    if (document.getElementById("first-name").value != "" &&
        // document.getElementById("middle-name").value != "" &&
        document.getElementById("last-name").value != "") {

        var row = document.createElement("tr");
        table.appendChild(row);

        var id = document.createElement("td");
        id.innerHTML = table.children.length - 1;
        row.appendChild(id);

        var fName = document.createElement("td");
        fName.innerHTML = document.getElementById("first-name").value;
        document.getElementById("first-name").value = "";
        row.appendChild(fName);

        var mName = document.createElement("td");
        mName.innerHTML = document.getElementById("middle-name").value;
        document.getElementById("middle-name").value = "";
        row.appendChild(mName);

        var lName = document.createElement("td");
        lName.innerHTML = document.getElementById("last-name").value;
        document.getElementById("last-name").value = "";
        row.appendChild(lName);

        var edit = document.createElement("td");
        edit.innerHTML = "/";
        edit.style.backgroundColor = "green";
        edit.addEventListener("click", editRow);
        row.appendChild(edit);

        var remove = document.createElement("td");
        remove.innerHTML = "X";
        remove.style.backgroundColor = "red";
        remove.addEventListener("click", removeRow);
        row.appendChild(remove);

        var container = document.getElementById("input-container");
        var changeBtn = document.getElementById("change-button");
        if (changeBtn) {
            container.removeChild(changeBtn);
        }
        document.getElementById("first-name").focus();
    } 
    else if (document.getElementById("first-name").value == "") document.getElementById("first-name").focus();
    // else if (document.getElementById("middle-name").value == "") document.getElementById("middle-name").focus();
    else document.getElementById("last-name").focus();

}

function randomLength(offset) {
    return Math.floor(Math.random() * 10) + offset;
}

function randomNameGenerator() {
    return Math.floor(Math.random() * alphabet.length);
}

function removeRow() {
    table.deleteRow(this.parentElement.firstChild.innerHTML);
    var getRow = document.getElementsByTagName("tr");
    for (let row = 1; row < getRow.length; row++) {
        getRow[row].firstChild.innerHTML = row;
    }
}

function editRow() {
    var container = document.getElementById("input-container");
    var row = this.parentElement;
    var fName = row.children[1];
    var mName = row.children[2];
    var lName = row.children[3];
    document.getElementById("first-name").value = fName.innerHTML;
    document.getElementById("middle-name").value = mName.innerHTML;
    document.getElementById("last-name").value = lName.innerHTML;
    var changeBtn = document.createElement("button");
    changeBtn.innerHTML = "Change";
    changeBtn.id = "change-button";
    changeBtn.backgroundColor = "green";
    changeBtn.addEventListener("click", function () {
        acceptEdit(fName, mName, lName)
    });
    if (container.children.length < 5) {
        container.prepend(changeBtn);
    }
    document.getElementById("first-name").focus();
}

function acceptEdit(f, m, l) {
    f.innerHTML = document.getElementById("first-name").value;
    m.innerHTML = document.getElementById("middle-name").value;
    l.innerHTML = document.getElementById("last-name").value;

    document.getElementById("first-name").value = "";
    document.getElementById("middle-name").value = "";
    document.getElementById("last-name").value = "";

    var container = document.getElementById("input-container");
    var changeBtn = document.getElementById("change-button");
    container.removeChild(changeBtn);
}