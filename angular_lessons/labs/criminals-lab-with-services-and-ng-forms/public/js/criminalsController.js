angular.module('InfamousCriminals')
.controller('CriminalsController', CriminalsController);

CriminalsController.$inject = ['CriminalsServices'];


function CriminalsController(CriminalsServices){
  var vm = this;
  vm.all = [];
  vm.addCriminal = addCriminal;
  vm.newCriminal = {};
  vm.getCriminals = getCriminals;
  vm.deleteCriminal = deleteCriminal;

  getCriminals();
  function getCriminals(){
    CriminalsServices.getCriminals().then(function (criminalsData) {
      vm.all = criminalsData;
    });
  }
  function addCriminal(){
    CriminalsServices.addCriminal(vm.newCriminal).then(function(){
        vm.getCriminals();
          vm.newCriminal = {};

    });
  }
    function deleteCriminal(criminal){
      CriminalsServices.deleteCriminal(criminal)
      .then(function(response){
        var index = vm.all.indexOf(criminal);
        vm.all.splice(index, 1);
    });
  }
}
