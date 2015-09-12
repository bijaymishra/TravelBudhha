
(function () {
    'use strict';

    angular.module('starter').controller('HomeTabCtrl', ['$scope','$ionicSideMenuDelegate', HomeTabCtrl]);

    function HomeTabCtrl($scope,$ionicSideMenuDelegate) {       
        $scope.toggleRightSideMenu = function() {
			    $ionicSideMenuDelegate.toggleRight();
			    
			  };
    }
})();