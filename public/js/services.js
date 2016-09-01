'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('OPC.services', [])
.value('version', '0.1');

angular.module('OPC.services', [])
.factory('launchService', function() {

	function loadUserInfo($scope, $routeParams) {
		// set up user name first, and we will retrieve the rest of the infomation once the username is set
		var username = $routeParams.username;
		$scope.username = username;
	}
	return {
		'loadUserInfo': loadUserInfo,
	};
});