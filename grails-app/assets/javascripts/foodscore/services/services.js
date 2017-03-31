/*angular
    .module("foodscore")
    .factory('AuthInterceptor', function ($rootScope, $q, $window) {
  return {
     request: function (config) {
          config.headers = config.headers || {};
          if ($window.sessionStorage.token) {
              config.headers.Authorization = 'Bearer ' + $window.sessionStorage.token;
          }
          return config;
    },
    responseError: function (response) {
      $rootScope.$broadcast({
        401: 'auth-not-authenticated',
        403: 'auth-not-authorized',
        419: 'auth-session-timeout',
        440: 'auth-session-timeout'
      }[response.status], response);
      return $q.reject(response);
    }
  };
});

angular
    .module("foodscore").factory('AuthService', function ($http, Session) {
  var authService = {};
  var serviceBase = 'api/login';

  authService.login = function (credentials) {
    return $http
      .post(serviceBase, credentials)
      .then(function (res) {
          // login success.
        if(res.status === 200) {
            Session.create(res.data.username, res.data.roles);
            return res.data;
        }else{
            return null;
        }
      });
  };

  authService.isAuthenticated = function () {
    return !!Session.username;
  };

  authService.isAuthorized = function (authorizedRoles) {
    if (!angular.isArray(authorizedRoles)) {
      authorizedRoles = [authorizedRoles];
    }

    // Vérification des droits de l'utilisateur en fonction de son id.
    var isAuthorizedId = !username ?  true : Session.username === username;

    // Vérification des droits de l'utilisateur en fonction de son type.
    var isAuthorizedRole = authorizedRoles.indexOf('*') !== -1 || (authorizedRoles.indexOf(Session.roles[0]) !== -1 && authService.isAuthenticated());

    return (isAuthorizedId && isAuthorizedRole);
  };

  return authService;
});

angular
    .module("foodscore").service('Session', function () {
  this.create = function (username, roles) {
    this.username = username;
    this.roles = roles;
  };
  this.destroy = function () {
    this.username = null;
    this.roles = null;
  };
  return this;
});


*/