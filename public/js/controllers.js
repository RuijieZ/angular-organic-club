'use strict';

/* Controllers */

angular.module('OPC.controllers', []).
  controller('AppCtrl', function ($scope, $http, $routeParams, launchService) {
      console.log('app control is launching');
      // $scope.$on('$routeChangeSuccess', function() {
      //     launchService.loadUserInfo($scope, $routeParams);
      // });
  }).
  controller('MyCtrl1', function ($scope) {
    // write Ctrl here

  }).
  controller('MyCtrl2', function ($scope) {
    // write Ctrl here

  });
