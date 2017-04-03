angular.module('InfamousCriminals')
.controller('CriminalsController', CriminalsController);

CriminalsController.inject = ['$http'];

function CriminalsController($http){
  var vm = this;
  vm.all = [];
  vm.addCriminal = addCriminal;
  vm.newCriminal = {};

  getCriminals();
  function getCriminals(){
    $http
      .get('/criminals')
      .then(function(response){
        vm.all = response.data.criminals;
      });
    }

}
