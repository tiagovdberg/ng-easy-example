(function() {
	angular.module('ngEasyExample').run(function(Template) {
		Template.addMenu({text: "Persons", path: "/persons"});
	});
	angular.module('ngEasyExample').easyController({
		controller : PersonsController,
		controllerName : 'PersonsController',
		initialStatus: 'getPersons',
		status: {
			'getPersons':{},
			'getPerson':{},
			'editPerson':{},
			'addPerson':{},
			'savePerson':{},
		},
		messages: {
			'ng-easy-example/persons/persons.html.form.$error.*' : 'Erro genérico de um campo sem nome.'
		}
	});

	function PersonsController() {
		var self = this;
		self.init();
		//self.$$votz = "votz";

	}
})();
