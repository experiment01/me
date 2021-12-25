function copy() {
    navigator.clipboard.writeText("_experiment#1956");
}

var expanded = false

function reveal() {
    var arrow = document.getElementById("content-infobox-cloaks-banner-arrow-image")
    var description = document.getElementById("content-infobox-cloaks-banner-text-description")
    var summary = document.getElementById("content-infobox-cloaks-summary")
    var box = document.getElementById("content-infobox-cloaks")
    if (expanded == true) {
        arrow.style.animation = "rotateNeg90 0.5s";
        summary.style.animation = "opacity0 0.5s"
        box.style.animation = "height100 0.5s"
        setTimeout(function() {
            arrow.style.transform = "translateY(50%) rotate(-90deg)";
            description.hidden = false
            summary.hidden = true
            box.style.height = "100px"
        }, 500)
        expanded = false
    }
    else {
        arrow.style.animation = "rotate0 0.5s";
        summary.style.animation = "opacity100 0.5s"
        box.style.animation = "height500 0.5s"
        setTimeout(function() {
            arrow.style.transform = "translateY(50%) rotate(0deg)";
            arrow.style.right = "11px"
            description.hidden = true
            summary.hidden = false
            box.style.height = "500px"
        }, 500)
        expanded = true
    }
}