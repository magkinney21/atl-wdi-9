angular
	.module('criminals')
	.service('CriminalsService', CriminalsService);

CriminalsService.$inject = ['$http'];

function CriminalsService($http) {
	const self = this;

	// WHAT THIS SERVICE DOES / HAS AVAILABLE TO CALL
	self.loadAll = loadAll;
	self.loadCurrent = loadCurrent;
	self.addCriminal = addCriminal;
	self.deleteCriminal= deleteCriminal;


	// HOW IT DOES STUFF
	function loadAll() {
		return $http.get('/api/criminals');
    //we know all our backend routes will be api
	}
	function loadCurrent(id) {
		return $http.get('api/criminals/' + id);

	}
	function addCriminal(newCriminal){
		return $http.post('api/criminals', newCriminal);
	}
	function deleteCriminal(id) {
		return $http.delete('/api/criminals/' + id);
	}
}
//stateparams does not working services if you put in
//side of a service it will get lost so in out controller
//thats why we inject it there
