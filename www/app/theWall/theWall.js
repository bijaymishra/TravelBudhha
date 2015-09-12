
(function () {
    'use strict';

    angular.module('starter').controller('theWallCtrl', ['$scope','$ionicModal', theWallCtrl]);

    function theWallCtrl($scope,$ionicModal) {

    $ionicModal.fromTemplateUrl('app/theWall/updateWall.html', {
    scope: $scope,
    animation: 'slide-in-up'
	  }).then(function(modal) {	
	    $scope.modal = modal;
	  });       
     $scope.openModal = function() {
    $scope.modal.show();
  };
  $scope.closeModal = function() {
    $scope.modal.hide();
  };   
    }
})();