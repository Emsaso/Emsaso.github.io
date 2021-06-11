var flexItem = document.getElementsByClassName("flex-item");

setInterval(function test() {
    var random = Math.floor(Math.random() * 9);
    flexItem[random].style.backgroundColor =
        "rgb(" + getColor() +
        ", " + getColor() +
        ", " + getColor() + ")";
}, 500);

function getColor() {
    var color = Math.floor(Math.random() * 256);
    return color
}
