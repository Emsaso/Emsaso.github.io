QUnit.test("current position", function (assert) {
    let trailData = [
        {lat: 50.00001, lon: 50.00001},
        {lat: 50.00002, lon: 50.00002},
        {lat: 50.00003, lon: 50.00003},
    ];
    let raceData = [
        {time: 0, location: {lat: 50.00001, lon: 50.00001}},
        {time: 20, location: {lat: 50.000005, lon: 50.000005}},
    ];
    let seconds = 30;
    let estimatedPosition = getLatLonTest(trailData, raceData, seconds);
    let guessedPosition = [50.0000025, 50.0000025];
    assert.equal(estimatedPosition[0], 50.0000025, `Estimated latitude (${estimatedPosition[0]}) is the same as guessed latitude (${guessedPosition[0]})`);
    assert.equal(estimatedPosition[1], 50.0000025, `Estimated longitude (${estimatedPosition[1]}) is the same as guessed longitude (${guessedPosition[1]})`);
});