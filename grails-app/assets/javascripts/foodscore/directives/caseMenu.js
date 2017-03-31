//= wrapped

angular
    .module("foodscore")
    .directive("caseMenu", function caseMenu($location) {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: '/foodscore/caseMenu.html',
        scope: {
            menu : '=?',
            date : '=',
            typeMenuId: '=?'
        },
        controller: //['$scope','$location',
            function CaseMenuController($scope, $location) {

            var vm = this;
            vm.points = 0;

            init();

            function init() {
                // Attendre chargement du menu
                $scope.$watch('menu', function(menu) {
                    if(menu) {
                        angular.forEach(menu.menusAliments, function (menuAliment) {
                            vm.points += menuAliment.aliment.points * menuAliment.coefficient;
                        });
                    }
                });
            }

            vm.goToMenu = function(menuId){
                $location.path("/menus/"+menuId);
            }

            vm.newMenu = function(date,typeMenuId){
                $location.path("/newMenu").search({date: date, typeMenu: typeMenuId})
            }

        },//],
        controllerAs: 'caseMenuController'

    };


});