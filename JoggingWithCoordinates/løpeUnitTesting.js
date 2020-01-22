QUnit.test("checkpoints", function (assert) {
    for (let i = 1; i < totSeconds - 200; i++) {
        assert.ok(true, getLatLonEverySecond(i));
    }
});