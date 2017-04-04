angular.module('InfamousCriminals')
  .service('CriminalsServices' , CriminalsServices);

CriminalsServices.$inject = ['$http'];

function CriminalsServices($http) {

  var vm = this;

  vm.getCriminals = function(){
       return $http
        .get('/criminals')
        .then(function(response){
          return response.data.criminals;
        });
      }
    vm.addCriminal = function(newCriminal){
      return $http
        .post('/criminals', newCriminal);
    }
    vm.deleteCriminal = function(criminal){
      return $http
        .delete("/criminals/" + criminal._id)
    }
}
