function copy() {
    navigator.clipboard.writeText("_experiment#1956");
}

var expanded = false

function reveal() {
    var arrow = document.getElementById("content-infobox-cloaks-banner-arrow-image")
    var logo = document.getElementById("content-infobox-cloaks-banner-text-title-image")
    var description = document.getElementById("content-infobox-cloaks-banner-text-description")
    var summary = document.getElementById("content-infobox-cloaks-expanded-summary")
    var box = document.getElementById("content-infobox-cloaks")
    var links = document.getElementById("content-infobox-cloaks-expanded-links")
    if (expanded == true) {
        arrow.style.animation = "rotateNeg90 0.5s";
        description.style.animation = "opacity100 0.5s"
        summary.style.animation = "opacity0 0.5s"
        box.style.animation = "height100 0.5s"
        logo.style.animation = "rotateNeg360 0.5s"
        arrow.parentElement.style.cursor = "auto"
        arrow.parentElement.onclick = ""
        summary.hidden = true
        links.hidden = true
        setTimeout(function() {
            arrow.style.transform = "translateY(50%) rotate(-90deg)";
            arrow.parentElement.style.cursor = "pointer"
            box.style.height = "100px"
            description.hidden = false
            arrow.parentElement.onclick = reveal
            logo.style.animation = ""
        }, 500)
        expanded = false
    }
    else {
        arrow.style.animation = "rotate0 0.5s";
        summary.style.animation = "opacity100 0.25s"
        box.style.animation = "height230 0.5s"
        logo.style.animation = "rotate360 0.5s"
        description.hidden = true
        arrow.parentElement.style.cursor = "auto"
        arrow.parentElement.onclick = ""
        setTimeout(function() {
            arrow.style.transform = "translateY(50%) rotate(0deg)";
            arrow.parentElement.style.cursor = "pointer"
            arrow.style.right = "11px"
            box.style.height = "230px"
            summary.hidden = false
            links.hidden = false
            arrow.parentElement.onclick = reveal
            logo.style.animation = ""
        }, 500)
        expanded = true
    }
}