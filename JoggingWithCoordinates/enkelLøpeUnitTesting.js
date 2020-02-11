let trailData = [{
        lat: 50.00001,
        lon: 50.00001
    },
    {
        lat: 50.00002,
        lon: 50.00002
    },
    {
        lat: 50.00003,
        lon: 50.00003
    },
];
let raceData = [{
        time: 0,
        location: {
            lat: 50.00001,
            lon: 50.00001
        }
    },
    {
        time: 20,
        location: {
            lat: 50.000005,
            lon: 50.000005
        }
    },
];

function estimateAndGuess(seconds) {
    let estimatedPosition = getLatLonTest(trailData, raceData, seconds);
    let guessedPosition = [
        trailData[0].lat + ((raceData[1].location.lat - raceData[0].location.lat) * seconds / raceData[1].time),
        trailData[0].lon + ((raceData[1].location.lon - raceData[0].location.lon) * seconds / raceData[1].time)
    ]
    return [estimatedPosition, guessedPosition]
}

QUnit.test("current position", function (assert) {
    let seconds = 10;
    let estimatedPosition = estimateAndGuess(seconds)[0],
        guessedPosition = estimateAndGuess(seconds)[1];
    assert.equal(estimatedPosition[0], guessedPosition[0], `lat: ${estimatedPosition[0]} = ${guessedPosition[0]}`);
    assert.equal(estimatedPosition[1], guessedPosition[1], `lon: ${estimatedPosition[1]} = ${guessedPosition[1]}`);
    assert.equal(seconds, seconds, `seconds: ${seconds}`);
});

QUnit.test("current position", function (assert) {
    let seconds = 30;
    let estimatedPosition = estimateAndGuess(seconds)[0],
        guessedPosition = estimateAndGuess(seconds)[1];
    assert.equal(estimatedPosition[0], guessedPosition[0], `lat: ${estimatedPosition[0]} = ${guessedPosition[0]}`);
    assert.equal(estimatedPosition[1], guessedPosition[1], `lon: ${estimatedPosition[1]} = ${guessedPosition[1]}`);
    assert.equal(seconds, seconds, `seconds: ${seconds}`);
});

QUnit.test("current position", function (assert) {
    let seconds = 40;
    let estimatedPosition = estimateAndGuess(seconds)[0],
        guessedPosition = estimateAndGuess(seconds)[1];
    assert.equal(estimatedPosition[0], guessedPosition[0], `lat: ${estimatedPosition[0]} = ${guessedPosition[0]}`);
    assert.equal(estimatedPosition[1], guessedPosition[1], `lon: ${estimatedPosition[1]} = ${guessedPosition[1]}`);
    assert.equal(seconds, seconds, `seconds: ${seconds}`);
});

QUnit.test("current position", function (assert) {
    let seconds = 400;
    let estimatedPosition = estimateAndGuess(seconds)[0],
        guessedPosition = estimateAndGuess(seconds)[1];
    assert.equal(estimatedPosition[0], guessedPosition[0], `lat: ${estimatedPosition[0]} = ${guessedPosition[0]}`);
    assert.equal(estimatedPosition[1], guessedPosition[1], `lon: ${estimatedPosition[1]} = ${guessedPosition[1]}`);
    assert.equal(seconds, seconds, `seconds: ${seconds}`);
});

QUnit.test("current position", function (assert) {
    let seconds = 500;
    let estimatedPosition = estimateAndGuess(seconds)[0],
        guessedPosition = estimateAndGuess(seconds)[1];
    assert.equal(estimatedPosition[0], guessedPosition[0], `lat: ${estimatedPosition[0]} = ${guessedPosition[0]}`);
    assert.equal(estimatedPosition[1], guessedPosition[1], `lon: ${estimatedPosition[1]} = ${guessedPosition[1]}`);
    assert.equal(seconds, seconds, `seconds: ${seconds}`);
});

QUnit.test("current position", function (assert) {
    let seconds = 4000;
    let estimatedPosition = estimateAndGuess(seconds)[0],
        guessedPosition = estimateAndGuess(seconds)[1];
    assert.equal(estimatedPosition[0], guessedPosition[0], `lat: ${estimatedPosition[0]} = ${guessedPosition[0]}`);
    assert.equal(estimatedPosition[1], guessedPosition[1], `lon: ${estimatedPosition[1]} = ${guessedPosition[1]}`);
    assert.equal(seconds, seconds, `seconds: ${seconds}`);
});

QUnit.test("current position", function (assert) {
    let seconds = 10000;
    let estimatedPosition = estimateAndGuess(seconds)[0],
        guessedPosition = estimateAndGuess(seconds)[1];
    assert.equal(estimatedPosition[0], guessedPosition[0], `lat: ${estimatedPosition[0]} = ${guessedPosition[0]}`);
    assert.equal(estimatedPosition[1], guessedPosition[1], `lon: ${estimatedPosition[1]} = ${guessedPosition[1]}`);
    assert.equal(seconds, seconds, `seconds: ${seconds}`);
});

QUnit.test("current position", function (assert) {
    let seconds = 40000;
    let estimatedPosition = estimateAndGuess(seconds)[0],
        guessedPosition = estimateAndGuess(seconds)[1];
    assert.equal(estimatedPosition[0], guessedPosition[0], `lat: ${estimatedPosition[0]} = ${guessedPosition[0]}`);
    assert.equal(estimatedPosition[1], guessedPosition[1], `lon: ${estimatedPosition[1]} = ${guessedPosition[1]}`);
    assert.equal(seconds, seconds, `seconds: ${seconds}`);
});

QUnit.test("current position", function (assert) {
    let seconds = 50000;
    let estimatedPosition = estimateAndGuess(seconds)[0],
        guessedPosition = estimateAndGuess(seconds)[1];
    assert.equal(estimatedPosition[0], guessedPosition[0], `lat: ${estimatedPosition[0]} = ${guessedPosition[0]}`);
    assert.equal(estimatedPosition[1], guessedPosition[1], `lon: ${estimatedPosition[1]} = ${guessedPosition[1]}`);
    assert.equal(seconds, seconds, `seconds: ${seconds}`);
});

QUnit.test("current position", function (assert) {
    let seconds = 999999;
    let estimatedPosition = estimateAndGuess(seconds)[0],
        guessedPosition = estimateAndGuess(seconds)[1];
    assert.equal(estimatedPosition[0], guessedPosition[0], `lat: ${estimatedPosition[0]} = ${guessedPosition[0]}`);
    assert.equal(estimatedPosition[1], guessedPosition[1], `lon: ${estimatedPosition[1]} = ${guessedPosition[1]}`);
    assert.equal(seconds, seconds, `seconds: ${seconds}`);
});