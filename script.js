// rock dodger game scripts

const dodger = document.getElementById("dodger"); 

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  } 

document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
    if (e.key === "ArrowRight") {
      moveDodgerRight();
    }
  }); 
  
  function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    if (left <= 359) {
        dodger.style.left = `${left + 1}px`
    }
  }

// JS footer insert

const h2 = document.createElement('h2');
h2.textContent = "This content added by JavaScript.";

document.querySelector('div#principal').appendChild(h2);

// JS show preview on mousehover

// JS show/hide onClick

// this is yoinked from a jquery class - reverse engineer to a js version
/*
$(document).ready(function(){
$(".hide_menu").click(function(){
    $('#menu_div').css("display","none");
});

$(".show_menu").click(function(){
    $('#menu_div').css("display","initial");
});
});

*/

// Navigation bits

var body = document.getElementsByTagName("body")[0];
var navigation = document.getElementById("navigation");

window.addEventListener("scroll", function(evt) {
  if (body.scrollTop > navigation.getBoundingClientRect().bottom) {
    // when the scroll's y is bigger than the nav's y set class to fixednav
    navigation.className = "fixednav"
  } else { // Overwise set the class to staticnav
    navigation.className = "staticnav"
  }
});