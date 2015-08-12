'use strict';

angular.module('webappApp').factory('TicketDAO', function($resource) {
	return $resource('api/ticket/:id',{},{
		closeTicket:{method:'PUT'}
	});
});


