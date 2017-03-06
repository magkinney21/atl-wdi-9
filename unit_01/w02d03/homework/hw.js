/// Data & Core Business Logic ///
const Stopwatch = {
  tickClock: function(){
    if (Stopwatch.isRunning) {
      setTimeout(Stopwatch.tickClock, 10);
      Stopwatch.advanceTenMillisecs();
      AppController.handleClockTick();
    }
  },
  isRunning: false,
  mins: 0,
  secs: 0,
  millisecs: 0,
  laps: [],
  // DO NOT EDIT ABOVE THIS LINE
  advanceTenMillisecs: function(){
    Stopwatch.millisecs += 10;
    if (Stopwatch.millisecs >= 1000) {
      Stopwatch.millisecs -= 1000;
      Stopwatch.secs++;
    }
    if (Stopwatch.secs >= 60) {
      Stopwatch.secs -= 60;
      Stopwatch.mins++;
    }
  },
  reset: function(){
    Stopwatch.mins = 0;
    Stopwatch.secs = 0;
    Stopwatch.millisecs = 0;
    Stopwatch.laps = [];
  },
  start: function(){
    if (!Stopwatch.isRunning) {
      Stopwatch.isRunning = true;
      Stopwatch.tickClock();
    }
  },
  stop: function(){
    Stopwatch.isRunning = false;
  },
};

/// User Interface ///
const ViewEngine = {
  updateTimeDisplay: function(mins, secs, millisecs){
    document.getElementById('millisecs').innerHTML = ViewHelpers.zeroFill(millisecs/10, 2);
    document.getElementById('secs').innerHTML = ViewHelpers.zeroFill(secs, 2);
    document.getElementById('mins').innerHTML = ViewHelpers.zeroFill(mins, 2);
    },
//I was unable to successfully merge my Jquery within in the code
//... had to vanilla it up with just javascript .. eyeroll .. -__-!
//
    }
const ViewHelpers = {
  zeroFill: function(number, length){
    var str = number.toString();
    let numZeroes = Math.max(length - str.length, 0);
    for( var i = 0; i < (length - str.length); i++){
      str = '0' + str;
    }
    return str;
  },
};

/// Top-Level Application Code ///
const AppController = {
  handleClockTick: function(){
    ViewEngine.updateTimeDisplay(Stopwatch.mins, Stopwatch.secs, Stopwatch.millisecs);
  },
  handleClickStart: function() {
    if (!Stopwatch.isRunning) { Stopwatch.start(); }
  },

  handleClickStopReset: function(){
    if (Stopwatch.isRunning) {
      Stopwatch.stop();
    } else {
      Stopwatch.reset();
      ViewEngine.updateTimeDisplay(0, 0, 0);
    }
  }
};

window.onload = function(){
  // Attach AppController methods to the DOM as event handlers here.
  document.getElementById('start').onclick = AppController.handleClickStart;
  document.getElementById('stop').onclick = AppController.handleClickStopReset;
};

