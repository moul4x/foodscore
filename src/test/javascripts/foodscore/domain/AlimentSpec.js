describe("foodscore module", function() {
    var $httpBackend;

    beforeEach(angular.mock.module("foodscore", function() {
    }));

    beforeEach(angular.mock.inject(function(_$httpBackend_) {
        $httpBackend = _$httpBackend_;
    }));

    afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    describe("Aliment domain", function() {

        var Aliment;

        beforeEach(angular.mock.inject(function(_Aliment_) {
            Aliment = _Aliment_;
        }));

        it("should be tested", function() {
            expect(true).toEqual(false);
        });

    });

});
