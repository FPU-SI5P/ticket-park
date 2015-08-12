'use strict';

/**
 * @ngdoc function
 * @name webappApp.controller:MainCtrl
 * @description # MainCtrl Controller of the webappApp
 */
angular.module('webappApp')
		.controller(
				'MainCtrl',
				function($scope, $interval, TicketDAO, TipoVeiculo) {
					$scope.tickets = [];
					$scope.ticket = {
						placa : 'BMW-2015',
						desconto : 0.0
					};
					$scope.tipoVeiculos = TipoVeiculo.query(function(result) {
						$scope.ticket.tipoVeiculo = result[0];
					});

					$scope.add = function() {
						TicketDAO.save($scope.ticket, function() {
							$scope.reset();
						});
					};

					$scope.reset = function() {
						$scope.tickets = {};
						$scope.loadAll();
						$scope.tipo = $scope.tipoVeiculos[0];
					};

					$scope.loadAll = function() {
						TicketDAO.query(function(result) {
							$scope.tickets = []
							angular.forEach(result, function(item) {
								$scope.tickets.push(new Ticket(item));
							});
						});
					}
					$scope.loadAll();

					$scope.checkout = function() {
						var index = $scope.tickets.indexOf($scope.ticket)
						if (index != -1) {
							$scope.tickets.splice(index, 1);
						}
					}
					$scope.prepareToCheckout = function(ticketd) {
						$scope.ticket = ticketd;
					}

					$interval(function() {
						$scope.$$phase || $scope.$apply();
					}, 1000);

					function Ticket(item) {
						this.placa = item.placa;
						this.tipoVeiculo = item.tipoVeiculo;
						this.entrada = new Date();
						this.desconto = 0;
						this.tempo = function() {
							return new Date() - this.entrada;
						};
						this.horas = function() {
							return parseInt(Math
									.floor(this.tempo() / 1000 / 60 / 60) + 1);
						};
						this.valor = function() {
							return this.horas() * this.tipoVeiculo.valor;
						};
					}
				});