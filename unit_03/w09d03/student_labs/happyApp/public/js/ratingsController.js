angular.module('HappyApp', [])
  .controller('RatingsController', RatingsController);
  .controller('addRating', addRatingController);

  function RatingsController(){

        this.all = [
          {mood: "happy", today:false},
          {mood: "ehh", today:true},
          {mood: "angry", today:false}
        ];
      function addRating(){
          this.all = [
          {mood: "1", today:false},
          {mood: "0", today:false},
          {mood: "-1", today:false}
        ];
      }
  }
