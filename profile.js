//Get local storage for new user. must navigate to match me page first...
var storedprofilesArr = JSON.parse(localStorage.getItem('profilesArr'));
var body = document.getElementsByTagName('body')[0];

function populateNewUser(){
  for (i = 0; i < storedprofilesArr; i++)
  var newDiv = document.createElement('div');
  document
  document.getElementById('profile-name').innerHTML = storedprofilesArr[0].name;
  document.getElementById('gym-location').innerHTML = storedprofilesArr[0].gymLocation;
  // document.getElementById('climbing-type').innerHTML = [].concat(newSportTR, newSportLead, newBouldering);
  document.getElementById('grade').innerHTML = storedprofilesArr[0].skill;
  document.getElementById('contact').innerHTML = storedprofilesArr[0].contact;
}
