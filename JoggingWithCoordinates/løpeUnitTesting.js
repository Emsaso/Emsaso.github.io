let experience = calculateProwess("pro");
let weather = calculateRain("clearWeather");
let selectedDocument = gpx;
getDocument(selectedDocument);

QUnit.test("1224 seconds", function (assert) {
    let chosenAmountOfSecondsSinceStartOfRace = 1224;
    let glloShort = getLatLonOnce(chosenAmountOfSecondsSinceStartOfRace, experience, weather);
    let fakeCoordinates = [59.562591337378706, 10.187718992465209];
    assert.deepEqual(fakeCoordinates, glloShort, `${fakeCoordinates} = ${glloShort}`);
});
QUnit.test("12345 seconds", function (assert) {
    let chosenAmountOfSecondsSinceStartOfRace = 12345;
    let glloShort = getLatLonOnce(chosenAmountOfSecondsSinceStartOfRace, experience, weather);
    let fakeCoordinates = [59.46732131827842, 10.228052257186379];
    assert.deepEqual(fakeCoordinates, glloShort, `${fakeCoordinates} = ${glloShort}`);
});
QUnit.test("23456 seconds", function (assert) {
    let chosenAmountOfSecondsSinceStartOfRace = 23456;
    let glloShort = getLatLonOnce(chosenAmountOfSecondsSinceStartOfRace, experience, weather);
    let fakeCoordinates = [59.38100622857414, 10.30912294356253];
    assert.deepEqual(fakeCoordinates, glloShort, `${fakeCoordinates} = ${glloShort}`);
});
QUnit.test("34567 seconds", function (assert) {
    let chosenAmountOfSecondsSinceStartOfRace = 34567;
    let glloShort = getLatLonOnce(chosenAmountOfSecondsSinceStartOfRace, experience, weather);
    let fakeCoordinates = [59.30596760554281, 10.406569288176955];
    assert.deepEqual(fakeCoordinates, glloShort, `${fakeCoordinates} = ${glloShort}`);
});