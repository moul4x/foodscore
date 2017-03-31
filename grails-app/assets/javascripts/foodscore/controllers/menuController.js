//= wrapped

angular
    .module("foodscore")
    .controller("MenuController", MenuController);

function MenuController(Menu, TypeMenu, $location, $stateParams) {

    moment.locale('fr');

    var vm = this;

    vm.typesMenus = TypeMenu.list();
    vm.joursSemaine = [];
    var jour = null;

    vm.today = moment().format('DD/MM/YYYY');

    init();

    function init(){

        jour = $stateParams.date ? moment($stateParams.date,'DD/MM/YYYY').toDate() : new Date();

        for(var i = 0; i < 7; i++){
            vm.joursSemaine.push(moment(jour).startOf('week').add(i,'days').format('DD/MM/YYYY'));
        }
    }

    vm.menus = Menu.list({userId: 1, date: moment(new Date()).format('DD/MM/YYYY')}, function(){
    });

    vm.getMenu = function(date, typeMenuId) {
        var menu =  _.find(vm.menus, function(menu) {
            var menuDate = moment(menu.date).format('DD/MM/YYYY');
            return menuDate == date && menu.typeMenu.id == typeMenuId;
        });
        return menu;
    }

    vm.getJourLibelle = function(date){
        return moment(date,'DD/MM/YYYY').format('dddd');
    }

    vm.previousWeek = function(){
        var date = moment(jour).add(-1,'weeks').format('DD/MM/YYYY');
        $location.path("/menus").search({date: date});
    }

    vm.nextWeek = function(){
        var date = moment(jour).add(1,'weeks').format('DD/MM/YYYY');
        $location.path("/menus").search({date: date});
    }

    vm.totalJour = function(jourDate){
        var points = 0
        var menusDate = _.filter(vm.menus, function(menu) {
            return moment(menu.date).format('DD/MM/YYYY') == jourDate;
        });
        angular.forEach(menusDate, function (menu) {
            angular.forEach(menu.menusAliments, function (menuAliment) {
                points += menuAliment.aliment.points * menuAliment.coefficient;
            });
        });
        return points;
    }

}