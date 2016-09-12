'use strict';

/* Controllers */

angular.module('OPC.controllers', []).
  controller('AppCtrl', function ($scope, $http, $routeParams, launchService) {
      console.log('app control is launching');
      // $scope.$on('$routeChangeSuccess', function() {
      //     launchService.loadUserInfo($scope, $routeParams);
      // });
      if (!$scope.indexContent) {
        $scope.indexContent= {};
      }
      $scope.indexContent.display = true;
  }).
  controller('app', function ($scope) {
    // write Ctrl here
    console.log('controller apps launching');

    // hide the oraganic title 
    $scope.indexContent.display = false;

    // set the ng-switch view to default
    $scope.view ='default';

  }).
  controller('MyCtrl2', function ($scope) {
    // write Ctrl here

  });
