//= wrapped
//= require /angular/angular
//= require /angular/angular-resource
//= require /angular/angular-ui-router
//= require /angular/angular-ui-router
//= require_self
//= require_tree services
//= require_tree controllers
//= require_tree directives
//= require_tree domain
//= require_tree /foodscore/templates

angular.module('foodscore', [
        'ngResource',
         'ui.router'
    ])
    .factory('authInterceptor', function ($rootScope, $window) {
        return {
            request: function (config) {
                config.headers = config.headers || {};
                if ($window.sessionStorage.token) {
                    config.headers.Authorization = 'Bearer ' + $window.sessionStorage.token;
                }
                return config;
             }
        };
    })
    .config(function($stateProvider, $urlRouterProvider, $httpProvider) {

    // function to check the authentication //
    /*var Auth = ["$q", "authService", function ($q, authService) {
        authService.fillAuthData;
        if (authService.authentication.isAuth) {
            return $q.when(authService.authentication);
        } else {
            return $q.reject({ authenticated: false });
        }
    }];*/

    $httpProvider.interceptors.push('authInterceptor');

    $urlRouterProvider.otherwise('/login');

    $stateProvider
        .state('login', {
            url: '/login',
            templateUrl: '/foodscore/login.html',
            controller: 'LoginController as loginController'
        })
        .state('aliments', {
            url: '/aliments',
            templateUrl: '/foodscore/aliments.html',
            controller: 'AlimentController as alimentController'
        })
        .state('menus', {
            url: '/menus?date',
            templateUrl: '/foodscore/menus.html',
            controller: 'MenuController as menuController'
        })
        .state('menu', {
            url: '/menus/:id',
            templateUrl: '/foodscore/details-menu.html',
            controller: 'DetailsMenuController as detailsMenuController'
        })
        .state('newMenu', {
            url: '/newMenu?date&typeMenu',
            templateUrl: '/foodscore/details-menu.html',
            controller: 'DetailsMenuController as detailsMenuController'
        })
        .state('administration', {
            url: '/administration',
            templateUrl: '/foodscore/administration.html',
            controller: 'AdministrationController as administrationController'
        })

});
