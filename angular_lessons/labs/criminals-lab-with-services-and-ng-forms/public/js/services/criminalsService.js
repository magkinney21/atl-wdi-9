angular.module('InfamousCriminals')
<<<<<<< HEAD
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
=======
    .service('CriminalsService', CriminalsService);

CriminalsService.$inject = ['$http'];

function CriminalsService($http) {

    var vm = this;

    vm.getCriminals = function () {
        return $http
            .get('/criminals')
            .then(function(response){
                return response.data.criminals;
            });
    };

   vm.addCriminal = function (newCriminal) {
       return $http
           .post('/criminals', newCriminal);
   };

    vm.deleteCriminal = function (criminal) {
        return $http
                .delete("/criminals/" + criminal._id)
    };

>>>>>>> c1ba13c7fa4e87d2c0547a57d23dadaff121eeef
}
