'use strict';

function matchBouldering() {
  if (newProfile.elements.bouldering.checked) {
    var newBouldering = true;
    // console.log(newSportTR);
    for (var i = 0; i < profilesArr.length; i++) {
      if (profilesArr[i].bouldering === newBouldering) {
        profilesArr[i].points += 2;
        // console.log(profilesArr[i].points);
      }
    }
  }
  // console.log('bouldering');
  // console.log(profilesArr);
};
