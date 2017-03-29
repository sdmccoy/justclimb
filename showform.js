'use strict';

var formHidden = document.getElementById('profile-form').style.visibility = 'hidden';

function showFormAfterClick() {
  document.getElementById('reset-points').style.visibility = 'hidden';
  document.getElementById('profile-form').style.visibility = 'visible';
};

var buttonReset = document.getElementById('reset-points');
buttonReset.addEventListener('click', showFormAfterClick);
