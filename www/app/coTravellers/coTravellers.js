
(function () {
    'use strict';

    angular.module('starter').controller('coTravellersCtrl', ['$scope','$state','$ionicSideMenuDelegate', coTravellersCtrl]);

    function coTravellersCtrl($scope,$state,$ionicSideMenuDelegate) {    
      
        $scope.toggleLeftSideMenu = function() {
			    $ionicSideMenuDelegate.toggleRight();
			    
			  };
    }
})();


  