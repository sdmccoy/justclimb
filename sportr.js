'use strict';

function matchSportTR() {
  if (newProfile.elements.sporttr.checked) {
    var newSportTR = true;
    // console.log(newSportTR);
    for (var i = 0; i < profilesArr.length; i++) {
      if (profilesArr[i].sportTR === newSportTR) {
        profilesArr[i].points += 2;
        console.log(profilesArr[i].points);
      }
    }
  }
  // console.log('sport tr');
  // console.log(profilesArr);
};
