console.log('tamagotchi file is loaded');

//your constructor function here
var Tamagotchis = function(name, creatureType) {
  this.name = name;
  this.creatureType = creatureType;
  this.foodInTummy = 10;
  this.restedness = 10;
  this.health = 10 ;

  this.cry = Tamagotchis.reduce(function(accumulator, v) {
  return accumulator - v;}, 10);
  console.log('WAHHH', + 'food in tummy', sum);

};
var oneTamagotchi = new Tamagotchi();
var twoTamagotchi = new Tamagotchi();

oneTamagotchi.cry();
twoTamagotchi.cry();



//create new Tamagotchis


//test out your Tamagotchies below via console.logs
