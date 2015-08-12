'use strict';

/**
 * @ngdoc overview
 * @name webappApp
 * @description
 * # webappApp
 *
 * Main module of the application.
 */
angular
  .module('webappApp', [
    'ngResource',
    'ngRoute',
    'ngMask',
    'currencyMask'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/TipoVeiculo', {
        templateUrl: 'views/TipoVeiculo.html',
        controller: 'TipoVeiculoCtrl',
        controllerAs: 'TipoVeiculo'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
