import '../bower_components/bootstrap/dist/js/bootstrap.min.js';

// TODO: Figure out how to import these.
// import '../bower_components/jquery/dist/jquery.min.js';
// import angular from '../bower_components/angular/angular.js';
// import uirouter from '../bower_components/angular-ui-router/release/angular-ui-router.js';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import navbar from './components/navbar/navbar.component.js';
import homePageController from './app/home/home.controller.js';
import linksPageController from './app/links/links.controller.js';
import accountPageController from './app/account/account.controller.js';
import usersPageController from './app/users/users.controller.js';
import userPageController from './app/user/user.controller.js';

angular.module('mainApp', [uirouter, 'navbar', 'homePageController', 'linksPageController', 'accountPageController', 'usersPageController', 'userPageController'])
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

    var accountState = {
      name: 'account',
      url: '/account',
      templateUrl: 'app/account/account.template.html'
    }

    var usersState = {
      name: 'users',
      url: '/users',
      templateUrl: 'app/users/users.template.html'
    }

    var userState = {
      name: 'user',
      url: '/user/{id}',
      templateUrl: 'app/user/user.template.html'
    }

    $stateProvider.state(homeState);
    $stateProvider.state(linksState);
    $stateProvider.state(aboutState);
    $stateProvider.state(accountState);
    $stateProvider.state(usersState);
    $stateProvider.state(userState);
  });
