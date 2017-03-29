'use strict';
var hideForm = document.getElementById('clickSet');
hideForm.style.visibility = 'hidden';
function hideResetButtonFunc() { //Match me "Click to find your Match! button hide function"
  if (hideForm.style.visibility === 'hidden') {
    hideForm.style.visibility = 'visible';
  }
}
