var i = 1;

function myFunction() {
    var x = document.getElementById(`picture${i}`);
    var m = document.getElementById(`div${y}`);
    x.style.display = "none";
    i++;
    if (i > 10) {
        for (let y = 10; y > 0; y--) {
            var z = document.getElementById(`picture${y}`);
            var m = document.getElementById(`div${y}`);
            z.style.display = "block";
            m.innerHTML = "block";
        }
        console.log(x, m, i);
    }
}