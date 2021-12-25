var array = ["AMATEUR VIDEO EDITOR", "HIGH SCHOOL STUDENT", "EMPTY BANK ACCOUNT", "CAT LOVER", "BEGINNER PROGRAMMER", "ALWAYS TIRED", "CLOAKS+ MANAGER", "LOVER OF CLICKY KEYBOARDS"];
var description = document.getElementById("header-description")
var interval = 5000 // in milliseconds (1000ms = 1s)
var splitString = []

var intervalID = window.setInterval(textCycle, interval * array.length);

function textCycle() {
  console.log("test")
    array.forEach(function (item, index) {
      setTimeout(function() {
        description.innerHTML = item
      }, index * interval);
    });
}

textCycle()