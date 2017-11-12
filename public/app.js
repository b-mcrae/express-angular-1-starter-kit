angular.module('mainApp', ['ui.router', 'navbar', 'homePageController', 'linksPageController'])
  .config(function($locationProvider, $stateProvider) {
    $locationProvider.html5Mode(true);
    var homeState = {
      name: 'home',
      url: '/',
      templateUrl: 'app/home/home.template.html'
    }

    var linksState = {
      name: 'links',
      url: '/links',
      templateUrl: 'app/links/links.template.html'
    }

    var aboutState = {
      name: 'about',
      url: '/about',
      templateUrl: 'app/about/about.template.html'
    }

    $stateProvider.state(homeState);
    $stateProvider.state(linksState);
    $stateProvider.state(aboutState);
  });
