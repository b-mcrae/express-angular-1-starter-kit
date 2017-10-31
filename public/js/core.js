angular.module('mainApp', ['ui.router', 'mainPageController'])
  .config(function($stateProvider) {
    var helloState = {
      name: 'hello',
      url: '/hello',
      templateUrl: 'views/hello.html'
    }

    var aboutState = {
      name: 'about',
      url: '/about',
      templateUrl: 'views/about.html'
    }

    $stateProvider.state(helloState);
    $stateProvider.state(aboutState);
  });
