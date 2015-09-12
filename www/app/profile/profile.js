(function () {
    'use strict';

    angular.module('starter').controller('ProfileTabCtrl', ['$scope','$state','$rootScope','$ionicHistory', ProfileTabCtrl]);
    

    function ProfileTabCtrl($scope,$state,$rootScope,$ionicHistory) {       
        //alert("Profile");
        $scope.login = function(){
     	$state.go('tabs.home');
     		};
     	$rootScope.$ionicGoBack = function() {
    $ionicHistory.goBack();
    
        };		
      }
})();