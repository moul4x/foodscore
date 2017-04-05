//= wrapped

angular
    .module("foodscore")
    .controller("LoginController", LoginController);

function LoginController($location, $rootScope, $window, $http, User, $stateParams) {
    var vm = this;

    vm.authenticated = false;
    vm.user = {};

    if($stateParams.logout === 'true'){
        $window.sessionStorage.token = null;
        $window.sessionStorage.userId = null;
    }

    vm.login = function () {

        $http.post('/api/login', {
            username: vm.user.username,
            password: vm.user.password
        }).then(function (response) {
            vm.authenticated = true;
            $window.sessionStorage.token = response.data.access_token;
            User.list({username: response.data.username}, function(users){
                var user = users[0];
                $window.sessionStorage.userId = user.id
                $location.path('/menus').search({});
            });
        });
    };
}