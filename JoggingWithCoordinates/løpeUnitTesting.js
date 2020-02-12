let experience = calculateProwess("pro");
let weather = calculateRain("clearWeather");
let selectedDocument = gpx;
getDocument(selectedDocument);

QUnit.test("1224 seconds", function (assert) {
    let chosenAmountOfSecondsSinceStartOfRace = 1224;
    let glloShort = getLatLonOnce(chosenAmountOfSecondsSinceStartOfRace, experience, weather);
    let fakeCoordinates = [59.5625919447851,10.18771916865797]; 
    assert.equal(fakeCoordinates, glloShort, fakeCoordinates == glloShort);
    assert.deepEqual(fakeCoordinates, glloShort, fakeCoordinates == glloShort);
});
QUnit.test("12345 seconds", function (assert) {
    let chosenAmountOfSecondsSinceStartOfRace = 12345;
    let glloShort = getLatLonOnce(chosenAmountOfSecondsSinceStartOfRace, experience, weather);
    let fakeCoordinates = [59.46732148875834,10.228051380002926]; 
    assert.equal(fakeCoordinates, glloShort, fakeCoordinates == glloShort);
    assert.deepEqual(fakeCoordinates, glloShort, fakeCoordinates == glloShort);
});
QUnit.test("23456 seconds", function (assert) {
    let chosenAmountOfSecondsSinceStartOfRace = 23456;
    let glloShort = getLatLonOnce(chosenAmountOfSecondsSinceStartOfRace, experience, weather);
    let fakeCoordinates = [59.381012898441334,10.309122682239586]; 
    assert.equal(fakeCoordinates, glloShort, fakeCoordinates == glloShort);
    assert.deepEqual(fakeCoordinates, glloShort, fakeCoordinates == glloShort);
});
QUnit.test("34567 seconds", function (assert) {
    let chosenAmountOfSecondsSinceStartOfRace = 34567;
    let glloShort = getLatLonOnce(chosenAmountOfSecondsSinceStartOfRace, experience, weather);
    let fakeCoordinates = [59.30597157542984,10.406561770154166]; 
    assert.equal(fakeCoordinates, glloShort, fakeCoordinates == glloShort);
    assert.deepEqual(fakeCoordinates, glloShort, fakeCoordinates == glloShort);
});