angular.module('ThePresidentsApp')
  .controller('PresidentsController', PresidentsController);


  PresidentsController.$inject= ['$http'];
  function PresidentsController($http){
  var vm = this;


   vm.addPresident = addPresident;
   vm.all = [];
   vm.loadingAll = true;
   vm.newPresident = {};
   vm.deletePresident = deletePresident;

  activate();

  function activate() {
    loadAllPresidents();
  }

  //Todo: add presidents #create connection
  function addPresident(){
    console.log('Adding...');
    console.log(vm.newPresident);

    $http
      .post('/presidents', vm.newPresident)
      .then(function someName(response){
        vm.all.push(response.data.president);
        vm.newPresident= {};
      });
      // .catch(function catch(err){
      //   console.log(err);
      // });
  }
  function loadAllPresidents() {
      $http
  .get('/presidents')
  .then(function handelSuccess (response){
    vm.all =response.data.presidents;
    vm.loadingAll = false;
  }, function handelError(err) {
    vm.loadingAll = false;
   });
  }
  function deletePresident(index) {
    var id = vm.all[index]._id
      $http
  .delete('/presidents/' + id)

  .then(function (response){
  vm.all.splice(index, 1);
        });
    }
}

