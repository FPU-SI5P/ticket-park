'use strict';

/**
 * @ngdoc function
 * @name webappApp.controller:AboutCtrl
 * @description # AboutCtrl Controller of the webappApp
 */
angular.module('webappApp').controller('TipoVeiculoCtrl',
		function($scope, TipoVeiculo) {

			$scope.tipoVeiculos = [];
			$scope.tipoVeiculo = {};

			$scope.salve = function(tipoVeiculo) {
				TipoVeiculo.save(tipoVeiculo, function() {
					$scope.reset();
				});
			};
			
			$scope.remove = function(tipoVeiculo) {
				TipoVeiculo.remove(tipoVeiculo, function() {
					$scope.loadAll();
				});
			};

			$scope.reset = function() {
				$scope.tipoVeiculo = {};
				$scope.loadAll();
			};

			$scope.loadAll = function() {
				TipoVeiculo.query(function(result) {
					$scope.tipoVeiculos = result;
				});
			}
			$scope.loadAll();

		});