'use strict';
// location function is working.

function matchGymLocation(){
  var elGymLocation = newProfile.elements.gymlocation.value;
  for (var i = 0; i < profilesArr.length - 1; i++) {
    var matching = profilesArr[i].gymLocation.includes(elGymLocation);
    if (matching) {
      profilesArr[i].points += 6;
    }
  }
};
