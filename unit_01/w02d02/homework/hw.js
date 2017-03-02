// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.

var timerUI = {
  drawNumericDisplay: function(timerValue){
    document.getElementById("numeric-display").text = timerValue;
  },


  drawProgressBars: function(timerValue){
    document.getElementsByClassName("progress-bar")[0].style.width = 100 - timerValue + "%";
  },


  drawLitFuses: function(timerValue){
    document.getElementsByClassName("unburnt")[0].style.width = timerValue - 2 + "%";
    document.getElementsByClassName("burnt")[0].style.width = 100 - timerValue + "%";
  },


  drawCrawlers: function(timerValue){
    var crawler = document.getElementsByClassName("crawler")[0];
    crawler.style.marginLeft = (100 - timerValue) * 10 + "px";
  }
};
