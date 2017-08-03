var HealthData = require("nativescript-health-data").HealthData;
var healthData = new HealthData();

describe("greet function", function() {
    it("exists", function() {
        expect(healthData.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(healthData.greet()).toEqual("Hello, NS");
    });
});