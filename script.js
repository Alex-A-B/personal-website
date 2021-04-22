/* commenting out as not in use at present
/* rock dodger game scripts

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
*/

// JS footer insert
// ***** still needed? *****

const h2 = document.createElement('h2');
h2.textContent = "This content added by JavaScript.";

document.querySelector('div#principal').appendChild(h2);

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

// Header flexbox events

const theAvatar = document.querySelector("img.avatar-img");

theAvatar.addEventListener("mouseover", function(event) {
  theAvatar.style.width = "200px";
  });

theAvatar.addEventListener("mouseout", function(event){
  theAvatar.style.width = "";
  });


// Projects event listeners

const projectOne = document.querySelector("div.projects.project-one");
const projectTwo = document.querySelector("div.projects.project-two");
const projectThree = document.querySelector("div.projects.project-three");

projectOne.addEventListener("mouseover", function(event) {
      projectOne.style.backgroundImage = "radial-gradient(rgb(10, 150, 150), rgb(160, 34, 199))";
    });

projectOne.addEventListener("mouseout", function(event) {
      projectOne.style.backgroundImage = "";
 });

 projectTwo.addEventListener("mouseover", function(event) {
  projectTwo.style.backgroundImage = "radial-gradient(rgb(10, 150, 150), rgb(160, 34, 199))";
});

projectTwo.addEventListener("mouseout", function(event) {
  projectTwo.style.backgroundImage = "";
});

projectThree.addEventListener("mouseover", function(event) {
  projectThree.style.backgroundImage = "radial-gradient(rgb(10, 150, 150), rgb(160, 34, 199))";
});

projectThree.addEventListener("mouseout", function(event) {
  projectThree.style.backgroundImage = "";
});