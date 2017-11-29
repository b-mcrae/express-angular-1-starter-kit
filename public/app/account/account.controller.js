import angular from 'angular';

export default angular.module('accountPageController', [])
  .controller('accountController', function($scope, $http) {
    $scope.userInfo = {
      name: 'Brian',
      birthDate: '1/1/2017',
      gender: 'M'
    };

    $scope.saveFormData = function() {
      if ($scope.formData.userName) $scope.userInfo.name = $scope.formData.userName;
      if ($scope.formData.userBirthDate) $scope.userInfo.birthDate = $scope.formData.userBirthDate;
      if ($scope.formData.gender) $scope.userInfo.gender = $scope.formData.gender;
    };
  });
