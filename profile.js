//Get local storage for new user.
var storedprofilesArr = JSON.parse(localStorage.getItem('profilesArr'));

function populateNewUser(){
  document.getElementById('profile-name').innerHTML = newName;
  document.getElementById('gym-location').innerHTML = newLocation;
  document.getElementById('climbing-type').innerHTML = [].concat(newSportTR, newSportLead, newBouldering);
  document.getElementById('grade').innerHTML = newSkill;
  document.getElementById('contact').innerHTML = newContact;
}
