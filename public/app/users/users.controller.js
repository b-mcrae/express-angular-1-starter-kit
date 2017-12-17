import angular from 'angular';

export default angular.module('usersPageController', [])
  .controller('usersController', function($scope, $http) {
    $http.get('http://localhost:3000/api/users').then(function(response) {
      $scope.users = response.data;
    }, function(err) {
      throw new Error(err);
    });
  });
