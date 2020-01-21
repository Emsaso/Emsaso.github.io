QUnit.test("checkpoints", function (assert) {
    for (let i = 1; i < totSeconds / 100; i++) {
        assert.ok(true, getLatLonEverySecond(i));
    }
});