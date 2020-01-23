// QUnit.test("checkpoints", function (assert) {
//     // for (let i = 1; i < totSeconds - 150; i++) {
//         for (let i = 1; i < 10; i++) {
//         assert.ok(true, getLatLonEverySecond(i));
//     }
// });
QUnit.test("1224 seconds", function (assert) {
    let chosenAmountOfSecondsSinceStartOfRace = 1224;
    assert.ok(true, getLatLonOnce(chosenAmountOfSecondsSinceStartOfRace));
});
QUnit.test("1337 seconds", function (assert) {
    let chosenAmountOfSecondsSinceStartOfRace = 1337;
    assert.ok(true, getLatLonOnce(chosenAmountOfSecondsSinceStartOfRace));
});
QUnit.test("6969 seconds", function (assert) {
    let chosenAmountOfSecondsSinceStartOfRace = 6969;
    assert.ok(true, getLatLonOnce(chosenAmountOfSecondsSinceStartOfRace));
});
QUnit.test("2020 seconds", function (assert) {
    let chosenAmountOfSecondsSinceStartOfRace = 2020;
    assert.ok(true, getLatLonOnce(chosenAmountOfSecondsSinceStartOfRace));
});
QUnit.test("12345 seconds", function (assert) {
    let chosenAmountOfSecondsSinceStartOfRace = 12345;
    assert.ok(true, getLatLonOnce(chosenAmountOfSecondsSinceStartOfRace));
});
QUnit.test("2468 seconds", function (assert) {
    let chosenAmountOfSecondsSinceStartOfRace = 2468;
    assert.ok(true, getLatLonOnce(chosenAmountOfSecondsSinceStartOfRace));
});