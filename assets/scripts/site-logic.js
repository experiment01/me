var array = ["BEGINNER PROGRAMMER", "HIGH SCHOOL STUDENT", "EMPTY BANK ACCOUNT", "CAT ENTHUSIAST", "ALWAYS TIRED", "GEEK", "MASTER PROCRASTINATOR", "COMEDIC GENIUS", "CLOAKS+ MANAGER", "LOVER OF CLICKY KEYBOARDS", "AMATEUR VIDEO EDITOR"];
var intervalID = window.setInterval(myCallback, 5000 * array.length);
var description = document.getElementById("description")

function myCallback() {
    array.forEach(function (item, index) {
      setTimeout(function () {
        description.innerHTML = item
      }, index * 5000);
    });
}