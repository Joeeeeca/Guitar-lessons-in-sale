window.onresize = screen;
window.onload = screen;

function screen () {
  myWidth =  window.innerWidth;

  document.getElementById("size").innerHTML = "Width : " + myWidth + "px";
}


var navLinks = document.getElementById("navLinks");
    
function showMenu(){
navLinks.style.right = "0px";

}

function hideMenu(){
navLinks.style.right = "-500px";
}