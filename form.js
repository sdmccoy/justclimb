'use strict';

function hideResetButtonFunc() { //Match me "Click to find your Match! button hide function"
  var hideForm = document.getElementById('clickSet');
  if (hideForm.style.visibility === 'hidden') {
    hideForm.style.visibility = 'visible';
  } else {
    hideForm.style.visibility = 'hidden';
  }
}
