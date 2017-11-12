angular.module('linksPageController', [])
  .controller('linksController', function($scope, $http) {
    $scope.links = [
      {
        name: 'Google',
        link: 'http://www.google.com'
      },
      {
        name: 'Yahoo',
        link: 'http://www.yahoo.com'
      },
      {
        name: 'Facebook',
        link: 'http://www.facebook.com'
      }
    ];

    $http.get('https://dog.ceo/api/breeds/list').then(function(response) {
      $scope.dogs = response.data.message;
    }, function(err) {
      throw new Error(err);
    });
  });
