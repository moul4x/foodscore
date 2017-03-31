describe("foodscore module", function() {
    var scope;

    beforeEach(angular.mock.module("foodscore", function() {
    }));

    beforeEach(angular.mock.inject(function($rootScope) {
        scope = $rootScope.$new();
    }));

    describe("AlimentController", function() {

        var ctrl;

        beforeEach(angular.mock.inject(function($controller) {
            ctrl = $controller("AlimentController", {});
        }));

        it("should be tested", function() {
            expect(true).toEqual(false);
        });

    });

});
