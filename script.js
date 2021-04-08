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