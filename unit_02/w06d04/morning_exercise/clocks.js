var calculate = function(hourhand, minutehand) {
if (hourhand > 12 ||  hourhand < 0 || minutehand < 0 || minutehand > 59) {
return("out of range ")

var hourToMinute = (hourhand * 5 ) + (minutehand / 12);
var minutes = minutehand;

if (hourToMinute > 60) {hourToMinute -= 60}

};
var angle;

if( hourToMinute )
// DO NOT EDIT BELOW THIS LINE //
module.exports = {
  calculate: calculate
};
