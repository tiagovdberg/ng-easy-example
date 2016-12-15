(function() {
	angular.module('ngEasyExample').run(function(Template) {
		Template.addMenu({text: "Persons", path: "/persons"});
	});
	angular.module('ngEasyExample').easyController({
		controllerName : 'PersonsController',
		initialStatus: 'showStart',
		status: {
			'showStart' :{},
			'getPersons':{},
			'getPersonsAgain':{
				templateUrl: '/persons.html',
				loading: 'getPersonsAgain',
				serviceUrl: '/persons',
				statusOnSuccess: 'getPersons'
			},
			'savePerson':{}
		},
		messages: {
			'ng-easy-example/persons/persons.html.form.$error.*' : 'Erro genérico de um campo sem nome.'
		}
	});
})();
