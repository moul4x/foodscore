//= wrapped

angular
    .module("foodscore")
    .controller("DetailsMenuController", DetailsMenuController);

function DetailsMenuController(Menu, TypeMenu, Aliment, $stateParams, $location, User, $scope, $window) {

    var vm = this;

    vm.newAliment = null;

    vm.aliments = Aliment.list({},function(){
        // TODO: c'est moche faire dans une directive
        $( '#autocomplete' ).combobox();
    });
    vm.typesMenus = [];
    vm.totalPoints = 0;

    init();

    function init() {
        TypeMenu.list({}, function (list) {
            vm.typesMenus = list;
            // UPDATE
            if ($stateParams.id) {
                vm.menu = Menu.get({userId: $window.sessionStorage.userId, id: $stateParams.id});
            } else {
            // NEW
                var typeMenu = _.find(vm.typesMenus, {'id' : parseInt($stateParams.typeMenu) });
                var user = User.get({id: $window.sessionStorage.userId})
                vm.menu = new Menu({utilisateur: user, date: moment($stateParams.date,'DD/MM/YYYY').format('DD/MM/YYYY'), typeMenu: typeMenu, menusAliments : []});
            }

            $scope.$watch('detailsMenuController.menu.menusAliments', function(menusAliments) {
                calculTotalPoints(menusAliments);
            }, true);
        });
    }

    vm.save = function () {
        if (!vm.menu.id) {
            vm.menu.$save({userId: vm.menu.utilisateur.id}, function () {
                sweetAlert("Sauvegarde effectuée");
            });
        } else {
            vm.menu.date = moment(vm.menu.date).format('DD/MM/YYYY');
            vm.menu.$update({userId: vm.menu.utilisateur.id}, function(){
                sweetAlert("Sauvegarde effectuée");
            });
        }
    };

    vm.ajouterAliment = function () {
        if($('#autocomplete').val() && $('#autocomplete').val() != '?') {
            // TODO c'est moche faire directive
           vm.newAliment = _.find(vm.aliments, {'id': parseInt($('#autocomplete').val())});
            if (vm.aliments && vm.newAliment) {
                vm.menu.menusAliments.push({aliment: vm.newAliment, coefficient: 1});
                vm.newAliment = null;
                $('#autocomplete').val(null);
                $('.custom-combobox-input').val(null);
            }
        }
    }

    vm.supprimerAliment = function (aliment) {
        var idx = vm.menu.menusAliments.indexOf(aliment);
        vm.menu.menusAliments.splice(idx, 1);
    }

    vm.goToMenus = function () {
        $location.path("/menus");
    }

    function calculTotalPoints(menusAliments) {
        vm.totalPoints = 0;
        angular.forEach(menusAliments, function(menuAliment) {
            if(menuAliment.aliment) {
                vm.totalPoints += menuAliment.aliment.points * menuAliment.coefficient;
            }
        });
    }
}