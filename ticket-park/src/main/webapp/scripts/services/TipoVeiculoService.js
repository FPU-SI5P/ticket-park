'use strict';

angular.module('webappApp')
    .factory('TipoVeiculo', function ($resource) {
        return $resource('api/tipoveiculo/:id');
    });