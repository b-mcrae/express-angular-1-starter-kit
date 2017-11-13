angular.module('accountPageController', [])
  .controller('accountController', function($scope, $http) {
    $scope.saveFormData = function() {
      console.log('yay');
    };
  });
