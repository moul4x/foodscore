//= wrapped

angular
    .module("foodscore")
    .controller("LoginController", LoginController);

function LoginController($location, $rootScope, $window, $http) {
    var vm = this;

    vm.authenticated = false;
    vm.user = {};

    vm.login = function () {

        $http.post('/api/login', {
            username: vm.user.username,
            password: vm.user.password
        }).then(function (response) {
            vm.authenticated = true;
            $window.sessionStorage.token = response.data.access_token;
            $location.path('/menus');
        });

       /* AuthService.login(vm.user).then(function (response) {
            console.log(response);
            if(response != null) {
                $window.sessionStorage.token = response.access_token;
                $rootScope.$broadcast('auth-login-success');
                $location.path('/menus');
            }
        });*/
    };
}