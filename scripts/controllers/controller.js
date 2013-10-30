'use strict';

angular.module('ngApp')
    .controller('MainCtrl', function ($scope) {
    	
    })
    .controller('ListCtrl', function($scope) {
    	$scope.destination = [
            'Bangkok',
            'Bintan',
            'Phuket',
            'Samui',
            'Sanya'
        ];

        $scope.close = function() {
        	console.log('closing',$(window).width());

        	$("#sidebar-detail").addClass("hide");
            $("#contents").addClass("hwidth");

            $scope.listBook = false;
            $scope.listDest = false;
        };

        console.log('local', $scope);
    })
    .controller('BookingCtrl', function($scope) {
  
    })
    .controller('DestinationCtrl', function($scope) {
  
    });
  