console.log('tamagotchi file is loaded');

//your constructor function here
var Tamagotchis = function(name, creatureType) {
  this.name = name;
  this.creatureType = creatureType;
  this.foodInTummy = 10;
  this.restedness = 10;
  this.health = 10 ;
  this.cry = Tamagotchis.foodInTummy.reduce(function(accumulator, v) {
  return accumulator - v;}, 10);
  console.log(this.name + 'WAHHH', + 'has this much food in tummy = ', sum);

};
  this.puke = Tamagotchis.health.reduce(function(accumulator, v) {
  return accumulator - v;}, 10);
  console.log(this.name + ' has current health = ', +   sum);

};
this.yawn = Tamagotchis.restedness.reduce(function(accumulator, v) {
  return accumulator - v;}, 10);
  console.log(this.name + ' has current restedness of = ',+  sum);

};



//create new Tamagotchis
var oneTamagotchi = new Tamagotchi("Cactus Angel", "Cactus");
var twoTamagotchi = new Tamagotchi("Babytchi", "ShiroBabytchi");
var oneTamagotchi = new Tamagotchi("Mametchi", "Mame");
var twoTamagotchi = new Tamagotchi("Kuchipatchi", "Kuchi");

//test out your Tamagotchies below via console.logs
console.log(oneTamagotchi);
console.log(twoTamagotchi);

//Invoke methods on the constructed objects:
oneTamagotchi.cry();
twoTamagotchi.cry();
