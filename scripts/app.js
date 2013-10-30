'use strict';

angular.module('ngApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/main.html',
        controller: 'MainCtrl'
      })
      .when('/destination', {
        templateUrl: 'partials/destination.html',
        controller: 'DestinationCtrl'
      })
      .when('/booking', {
        templateUrl: 'partials/booking.html',
        controller: 'BookingCtrl'
      })
      .otherwise({
        redirectTo: '/',
      });
  });
