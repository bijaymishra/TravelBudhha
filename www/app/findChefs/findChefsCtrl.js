(function () {
    'use strict';

    angular.module('starter').controller('findChefsCtrl', ['$scope','$ionicSideMenuDelegate', findChefsCtrl]);

    function findChefsCtrl($scope,$ionicSideMenuDelegate) {       
        $scope.toggleRightSideMenu = function() {
			    $ionicSideMenuDelegate.toggleRight();
			    
			  };
    }
})();