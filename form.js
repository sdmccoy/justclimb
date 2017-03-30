'use strict';

//takes the form input and creates a new profile and pushes in to the empty profilesArr
function newProfileFormSubmit(event) {
  event.preventDefault();
  var newName = newProfile.elements.username.value;
  var newLocation = newProfile.elements.gymlocation.value;
  if (newProfile.elements.sporttr.checked) {
    var newSportTR = true;
  } else {
    var newSportTR = false;
  }
  if (newProfile.elements.sportlead.checked) {
    var newSportLead = true;
  } else {
    var newSportLead = false;
  }
  if (newProfile.elements.bouldering.checked) {
    var newBouldering = true;
  } else {
    var newBouldering = false;
  }
  var newSkill = newProfile.elements.grade.value;
  var newContact = newProfile.elements.contact.value;
  matchGymLocation();
  matchSkill();
  matchSportTR();
  matchSportLead();
  matchBouldering();
  var creatingNewProfile = new Profile(newName, newLocation, newSportTR, newSportLead, newBouldering, newSkill);
  localStorage.setItem('creatingNewProfile', JSON.stringify(creatingNewProfile));
  localStorage.setItem('profilesArr', JSON.stringify(profilesArr));
  window.location = 'chart.html';
};

// identifies the user hit submit, then runs the newProfileFormSubmit function
var newProfile = document.getElementById('profile-form');
newProfile.addEventListener('submit', newProfileFormSubmit);
