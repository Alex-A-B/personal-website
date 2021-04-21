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

window.addEventListener("scroll", function(event) {
  if (body.scrollTop > navigation.getBoundingClientRect().bottom) {
    // when the scroll's y is bigger than the nav's y set class to fixednav
    navigation.className = "fixednav"
  } else { // Overwise set the class to staticnav
    navigation.className = "staticnav"
  }
});

// Projects event listeners

var projectOne = document.getElementsByClassName("project-one")

projectOne.addEventListener("mouseover", function(event) 
   {
      projectOne.style,width = "400px";
      projectOne.style.height = "400px";
      projectOne.style.alignItem = "center";
      projectOne.style.backgroundImage = "radial-gradient(rgb(10, 150, 150), rgb(160, 34, 199))";
    });

projectOne.addEventListener("mouseout", function(event) {
      projectOne.style,width = "";
      projectOne.style.height = "";
      projectOne.style.alignItem = "";
      projectOne.style.backgroundImage = "";
 });