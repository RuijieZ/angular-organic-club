'use strict';

// Declare app level module which depends on filters, and services

angular.module('OPC', [ // OPC , short for organic planting club
  'ngRoute',
  'OPC.controllers',
  'OPC.filters',
  'OPC.services',
  'OPC.directives'
]).
config(function ($routeProvider, $locationProvider) {
  $routeProvider.
    when('/', {
      templateUrl: 'views/home.html',
      controller: 'AppCtrl'
    }).
    when('/index', {
      templateUrl: 'views/home.html',
      controller: 'AppCtrl'
    }).
    when('/about', {
      templateUrl: 'views/about.html',
      controller: 'AppCtrl'
    }).
    when('/contact', {
      templateUrl: 'views/contact.html',
      controller: 'AppCtrl'
    }).
    when('/login', {
      templateUrl: 'views/login.html',
      controller: 'AppCtrl'
    }).
    when('/register', {
      templateUrl: 'views/register.html',
      controller: 'AppCtrl'
    }).
    when('/app', {
      templateUrl: 'views/app.html',
      controller: 'app'
    });

  $locationProvider.html5Mode(true);
});
