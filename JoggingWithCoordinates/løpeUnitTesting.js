let experience = calculateProwess("pro");
let weather = calculateRain("clearWeather");
let selectedDocument = gpx;
getDocument(selectedDocument);

QUnit.test("1224 seconds", function (assert) {
    let chosenAmountOfSecondsSinceStartOfRace = 1224;
    assert.ok(true, getLatLonOnce(chosenAmountOfSecondsSinceStartOfRace, experience, weather));
});
QUnit.test("12345 seconds", function (assert) {
    let chosenAmountOfSecondsSinceStartOfRace = 12345;
    assert.ok(true, getLatLonOnce(chosenAmountOfSecondsSinceStartOfRace, experience, weather));
});
QUnit.test("23456 seconds", function (assert) {
    let chosenAmountOfSecondsSinceStartOfRace = 23456;
    assert.ok(true, getLatLonOnce(chosenAmountOfSecondsSinceStartOfRace, experience, weather));
});
QUnit.test("34567 seconds", function (assert) {
    let chosenAmountOfSecondsSinceStartOfRace = 34567;
    assert.ok(true, getLatLonOnce(chosenAmountOfSecondsSinceStartOfRace, experience, weather));
});