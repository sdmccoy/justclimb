'use strict';

//takes the form input and creates a new profile and pushes in to the empty profilesArr
function newProfileFormSubmit(event) {
  event.preventDefault();
  console.log('event test');
  var newName = newProfile.elements.username.value;
  console.log(newName);
  var newLocation = newProfile.elements.gymlocation.value;
  console.log(newLocation);
  if (newProfile.elements.sporttr.checked) {
    var newSportTR = true;
  } else {
    var newSportTR = false;
  }
  console.log(newSportTR);
  if (newProfile.elements.sportlead.checked) {
    var newSportLead = true;
  } else {
    var newSportLead = false;
  }
  console.log(newSportLead);
  if (newProfile.elements.bouldering.checked) {
    var newBouldering = true;
  } else {
    var newBouldering = false;
  }
  console.log(newBouldering);
  var newSkill = newProfile.elements.grade.value;
  console.log(newSkill);
  console.log('before points', profilesArr);
  // var newContact = newProfile.elements.contact.value;
  matchGymLocation();
  matchSkill();
  matchSportTR();
  matchSportLead();
  matchBouldering();
  // this.points = 0;
  console.log('aftr points', profilesArr);
  var creatingNewProfile = new Profile(newName, newLocation, newSportTR, newSportLead, newBouldering, newSkill);
  localStorage.setItem('creatingNewProfile', JSON.stringify(creatingNewProfile));
  console.log(creatingNewProfile);
  console.log(localStorage);
  localStorage.setItem('profilesArr', JSON.stringify(profilesArr));
  window.location = 'chart.html';
};

// identifies the user hit submit, then runs the newProfileFormSubmit function
var newProfile = document.getElementById('profile-form');
newProfile.addEventListener('submit', newProfileFormSubmit);
