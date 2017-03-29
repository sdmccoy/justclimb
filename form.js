'use strict';

var formHidden = document.getElementById('profile-form').style.visibility = 'hidden';

function showFormAfterClick() {
  document.getElementById('profile-form').style.visibility = 'visible';
};

var buttonReset = document.getElementById('reset-points');
buttonReset.addEventListener('click', showFormAfterClick);
