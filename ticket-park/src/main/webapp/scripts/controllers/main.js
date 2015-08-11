'use strict';

/**
 * @ngdoc function
 * @name webappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the webappApp
 */
angular.module('webappApp')
  .controller('MainCtrl', function($scope, $interval) {
    $scope.tickets = [];
    $scope.tipoVeiculos = [{
      descricao: "Passeio",
      valor: 2.5
    }, {
      descricao: "Moto",
      valor: 1.5
    }];
    $scope.placa = 'HIG-0114';
    $scope.tipo = $scope.tipoVeiculos[0];
    $scope.ticket = {desconto:0.0};

    $scope.add = function() {
      if ($scope.placa != '') {
        $scope.tickets.push(new Ticket($scope.placa, $scope.tipo));
        $scope.placa = '';
        $scope.tipo = $scope.tipoVeiculos[0];
      }
    }
    $scope.checkout = function() {
      var index = $scope.tickets.indexOf($scope.ticket)
      if (index  != -1) {
        $scope.tickets.splice(index , 1);
      }
    }
    $scope.prepareToCheckout = function(ticketd) {
      $scope.ticket = ticketd;
    }
    $interval(function() {
       $scope.$$phase || $scope.$apply();
    }, 1000);

    function Ticket(placa, tipo) {
      this.placa = placa;
      this.tipo = tipo;
      this.date = new Date();
      this.desconto = 0;
      this.tempo = function() {
        return new Date() - this.date;
      };
      this.horas = function() {
        return parseInt(Math.floor(this.tempo() / 1000 / 60 / 60) + 1);
      };
      this.valor = function() {
        return this.horas() * this.tipo.valor;
      };
    }

  });
