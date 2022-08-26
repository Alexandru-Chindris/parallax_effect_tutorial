let element = document.getElementById("moving");

window.addEventListener("scroll", function(){
    let ofset = window.pageYOffset;
    element.style.backgroundPositionY = ofset *0.7 + "px";
})