CriminalsShowController.$inject = ['$stateParams' ,'CriminalsService' ];
//all http calls live inside of services
//stateParams gets the currett state
function CriminalsShowController($stateParams ,CriminalsService){
  const vm = this;

  vm.current = {};
  //set default values

  activate();

  function activate() {
    loadCurrentCriminal();
  }
  function loadCurrentCriminal(){
    console.log($stateParams);
    CriminalsService
      .loadCurrent($stateParams.criminalId)
      //comes from url in app.js
      .then(function resolve(response){
        vm.current = response.data.criminal;
      });
  }
}
module.exports = CriminalsShowController;
