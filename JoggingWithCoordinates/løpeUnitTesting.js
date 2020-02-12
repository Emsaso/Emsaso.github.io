let experience = calculateProwess("pro");
let weather = calculateRain("clearWeather");
let selectedDocument = gpx;
getDocument(selectedDocument);

QUnit.test("1224 seconds", function (assert) {
    let chosenAmountOfSecondsSinceStartOfRace = 1224;
    assert.equal([59.5625919447851,10.18771916865797], getLatLonOnce(chosenAmountOfSecondsSinceStartOfRace, experience, weather));
});
QUnit.test("12345 seconds", function (assert) {
    let chosenAmountOfSecondsSinceStartOfRace = 12345;
    assert.equal([59.46732148875834,10.228051380002926], getLatLonOnce(chosenAmountOfSecondsSinceStartOfRace, experience, weather));
});
QUnit.test("23456 seconds", function (assert) {
    let chosenAmountOfSecondsSinceStartOfRace = 23456;
    assert.equal([59.381012898441334,10.309122682239586], getLatLonOnce(chosenAmountOfSecondsSinceStartOfRace, experience, weather));
});
QUnit.test("34567 seconds", function (assert) {
    let chosenAmountOfSecondsSinceStartOfRace = 34567;
    assert.equal([59.30597157542984,10.406561770154166], getLatLonOnce(chosenAmountOfSecondsSinceStartOfRace, experience, weather));
});