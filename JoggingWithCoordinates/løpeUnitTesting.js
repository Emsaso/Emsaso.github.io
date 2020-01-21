QUnit.test("hello test", function (assert) {
    for (let i = 0; i < trekPoints.length - 2; i++) {
        assert.ok(true, getLatLonEverySecond(i));
    }
});