const angular = require('angular');
require('angular-ui-router');

angular
  .module('criminals', ['ui.router'])
  .config(uiRouterSetup)

//this will be pasted into a router.js file
uiRouterSetup.$inject = ['$stateProvider', '$urlRouterProvider'];
function uiRouterSetup($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      template: '<home></home>'
      // template: '<h1>Home</h1><a ui-sref="about">About</a>'
    })
    .state('about', {
      url:'/about',
      template:'<about></about>'
      // template:'<h1>About</h1><a ui-sref="home">Home</a>'
    })
    .state('criminals',{
      url:'/criminals',
      template:'<criminals></criminals>'
    })
    .state('newCriminal', {
      url:'/criminals/new',
      template:'<criminals-new><criminals-new>'
    })
    .state('criminalsShow', {
      url:'/criminals/:criminalId',
      template:'<criminals-show></criminals-show>'
    });

    $urlRouterProvider.otherwise('/');
}

