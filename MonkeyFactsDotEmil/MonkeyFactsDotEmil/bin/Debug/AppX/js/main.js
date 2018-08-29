
function myFunction() {
    var i = 1;
    var x = document.getElementById(`picture${i}`);
    if (x.style.display === "none") {
        x.style.display = "block";
        i++;
    } else {
        x.style.display = "none";
    }
console.log(i);
}