(function () {
    'use strict';

    angular.module('starter').controller('NotificationTabCtrl', ['$scope','$ionicSideMenuDelegate', NotificationTabCtrl]);
    
    function NotificationTabCtrl($scope,$ionicSideMenuDelegate) {       
         $scope.showRightMenu = function () {
    $ionicSideMenuDelegate.toggleRight();
  };  
    
      }
})();