(function() {
	angular.module('ngEasyExample').easyController({
		//controller : PersonsController,
		controllerName : 'PersonsController',
		initialStatus: 'getPersons',
		status: {
			'getPersons':{},
			'getPerson':{},
			'editPerson':{},
			'addPerson':{},
			'savePerson':{},
		}
	});

/*
	function PersonsController() {
		var self = this;
		self.init();
	}
*/
})();
