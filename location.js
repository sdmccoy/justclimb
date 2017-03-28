'use strict';
// its not getting the value from the form input !!!
// working on gymlocation match formula

function matchGymLocation(){
  for (var i = 0; i < profilesArr.length; i++) {
    var newLocation = newProfile.elements.gymlocation;
    var matching = profilesArr[i].location.includes(newLocation);
    if (matching) {
      profilesArr[i].points += 6;
    } else {
      profilesArr[i].points += 0;
    }
  }
};

var elGymLocation = document.getElementById('gym-location');
elGymLocation.addEventListener('submit', matchGymLocation);
