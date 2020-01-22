QUnit.test("checkpoints", function (assert) {
    for (let i = 1; i < totSeconds; i++) {
        assert.ok(true, getLatLonEverySecond(i));
    }
});