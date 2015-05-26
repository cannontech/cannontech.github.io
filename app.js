/**
 * Created by erics-mac on 5/25/15.
 */
'use strict';

var app = angular.module('midwest', []);

app.controller('MainController', ['$scope', function($scope){

  $scope.message = 'Midwest Software Solutions, Inc.';
}]);