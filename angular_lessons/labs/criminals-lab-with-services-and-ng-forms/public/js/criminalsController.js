angular.module('InfamousCriminals')
.controller('CriminalsController', CriminalsController);

<<<<<<< HEAD
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
=======
CriminalsController.$inject = ['CriminalsService'];

function CriminalsController(CriminalsService){
  var self = this;
  self.all = [];
  self.addCriminal = addCriminal;
  self.newCriminal = {};
  self.getCriminals = getCriminals;
  self.deleteCriminal = deleteCriminal;

  getCriminals();
  function getCriminals(){
    CriminalsService.getCriminals().then(function (criminalsData) {
      self.all = criminalsData;
>>>>>>> c1ba13c7fa4e87d2c0547a57d23dadaff121eeef
    });
  }
  function addCriminal(){
<<<<<<< HEAD
    CriminalsServices.addCriminal(vm.newCriminal).then(function(){
        vm.getCriminals();
          vm.newCriminal = {};

    });
  }
    function deleteCriminal(criminal){
      CriminalsServices.deleteCriminal(criminal)
=======
   CriminalsService.addCriminal(self.newCriminal).then(function(){
     self.getCriminals();
       self.newCriminal = {};
   });
  }

  function deleteCriminal(criminal){
    CriminalsService.deleteCriminal(criminal)
>>>>>>> c1ba13c7fa4e87d2c0547a57d23dadaff121eeef
      .then(function(response){
        var index = vm.all.indexOf(criminal);
        vm.all.splice(index, 1);
    });
  }
}
