angular.module('mainApp', ['ui.router', 'homePageController'])
  .config(function($stateProvider) {
    var homeState = {
      name: 'home',
      url: '',
      templateUrl: 'views/home.html'
    }

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

    $stateProvider.state(homeState);
    $stateProvider.state(helloState);
    $stateProvider.state(aboutState);
  });
