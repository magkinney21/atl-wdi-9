var words = ["Ho", "Chi", "Minh", "City", "was", "once", "known", "as", "Prey", "Nokor"];
words.map(function(words) {
var wordsToUp = String.prototype.toUpperCase.apply(words).split(",");
 console.log(wordsToUp);
});
var squareMe = [0, 1, 10, 24, 595];
var squares = squareMe.map(function(v) {
  return v * v;
});
 console.log(squares);

var arr = [8, 8, 8, 8, 8, 8, 8, 8];

var answer = [];

// arr.forEach(function(n) {
//   answer.average(n + 1);
// });

// console.log(answer)

var myOrder = [
["beef", "turkey", "chicken", "veggie"],
["cheese" , "pickles", "lettuce", "onion"],
["coke" , "sprite", "cola", "dew"]
] ;

var flag = 0
myOrder.forEach(function(order){
  order.forEach(function(item){
    if(flag === 1) {
      console.log(item);
    }
    flag++;
  })
  flag = 0;
})
