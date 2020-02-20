window.setInterval(repeatEverySecond, 1000);
let startTime = Date.now();

function repeatEverySecond() {
    let secondsSinceStart = Math.floor((Date.now() - startTime) / 1000);
    let experience = calculateProwess("pro");
    let weather = calculateRain("clearWeather");
    let result = getLatLonOnce(secondsSinceStart, experience, weather);

    QUnit.test("seconds", function (assert) {
        assert.deepEqual(`${result[0]}, ${result[1]}, ${secondsSinceStart}`);
    });
}