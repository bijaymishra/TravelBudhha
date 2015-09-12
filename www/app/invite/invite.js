
(function () {
    'use strict';

    angular.module('starter').controller('InviteCtrl', ['$scope','$state', InviteCtrl]);

    function InviteCtrl($scope,$state) {       
     
     $scope.skipBanners = function(){
     	$state.go('loginIntro');
     };   
    }
})();