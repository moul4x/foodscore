//= wrapped

angular
    .module("foodscore")
    .controller("AlimentController", AlimentController);

function AlimentController(Aliment, Famille, Unite) {
    var vm = this;

    vm.famille = null;
    vm.familles = Famille.list({}, function (res) {
    });
    vm.unites = Unite.list();
    vm.aliments = Aliment.list();

    vm.newAliment = new Aliment();

    vm.save = function() {
        vm.newAliment.$save({}, function(res) {
            vm.aliments.push(res);
            vm.newAliment = new Aliment();
            sweetAlert("Sauvegarde effectuée");
        });
    };

    vm.delete = function(aliment) {
        aliment.$delete({}, function() {
            sweetAlert("Suppression effectuée");
            var idx = vm.aliments.indexOf(aliment);
            vm.aliments.splice(idx, 1);
        });
    };

    vm.update = function(aliment) {
        aliment.$update({}, function(){
            sweetAlert("Sauvegarde effectuée");
        });
    };

    vm.filtreFamille = function(aliment) {
        if(vm.famille) {
            return aliment.famille.id == vm.famille.id;
        }else{
            return false;
        }
    }
}