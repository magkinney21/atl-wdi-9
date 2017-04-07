CriminalsNewController.$inject = ['$state', 'CriminalsService'];

function CriminalsNewController($state, CriminalsService ){
   const vm = this;

   vm.newCriminal = {};
   vm.addCriminal= addCriminal;



   function addCriminal() {
    CriminalsService
      .addCriminal(vm.newCriminal);
        vm.newCriminal = {};
        $state
        .go('criminals');
   }
}
module.exports = CriminalsNewController;
