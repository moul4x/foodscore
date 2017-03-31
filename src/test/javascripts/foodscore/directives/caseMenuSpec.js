describe("foodscore module", function() {
    var scope;

    beforeEach(angular.mock.module("foodscore", function() {
    }));

    beforeEach(angular.mock.inject(function($rootScope) {
        scope = $rootScope.$new();
    }));

    describe("caseMenu directive", function() {

        var element;

        beforeEach(angular.mock.inject(function ($compile) {
            element = angular.element('<div case-menu></div>');
            $compile(element)(scope);
            scope.$digest();
        }));

        it("should be tested", function() {
            expect(true).toEqual(false);
        });

    });

});