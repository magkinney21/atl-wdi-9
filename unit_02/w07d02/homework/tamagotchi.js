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

 this.start = function(){
    console.log("Starting " + this.name);
    var self = this;
    this.hungerTimer = setInterval(function() {
      self.cry();
    }, 6000);
    this.yawnTimer = setInterval(function() {
      self.yawn();
    }, 10000);
    this.sickTimer = setInterval(function() {
      self.puke();
    }, 25000);
  };
    }
  this.stop = function(){
    console.log("Stopping timers for: " + this.name);
    clearInterval(this.hungerTimer);
    clearInterval(this.yawnTimer);
    clearInterval(this.sickTimer);
  }

};

//create new Tamagotchis
var oneTamagotchi = new Tamagotchi("Cactus Angel", "Cactus");
var twoTamagotchi = new Tamagotchi("Babytchi", "ShiroBabytchi");
var threeTamagotchi = new Tamagotchi("Mametchi", "Mame");
var fourTamagotchi = new Tamagotchi("Kuchipatchi", "Kuchi");

//test out your Tamagotchies below via console.logs
console.log(oneTamagotchi);
console.log(twoTamagotchi);

//Invoke methods on the constructed objects:
oneTamagotchi.cry();
twoTamagotchi.cry();

oneTamagotchi.puke();
twoTamagotchi.puke();

oneTamagotchi.yawn();
twoTamagotchi.yawn();
