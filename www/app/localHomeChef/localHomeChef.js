
(function () {
    'use strict';

    angular.module('starter').controller('localHomeChefCtrl', ['$scope', localHomeChefCtrl]);

    function localHomeChefCtrl($scope) {       
     
     $scope.doSomething = function(){
     	alert("Reset Done");
     };   
    }
})();