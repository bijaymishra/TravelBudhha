(function () {
    'use strict';

    angular.module('starter').controller('MenuController', ['$scope','$ionicSideMenuDelegate', MenuController]);
        

 function MenuController($scope, $ionicSideMenuDelegate) {
      $scope.toggleLeft = function() {
        $ionicSideMenuDelegate.toggleLeft();
      };
    };

    
})();



