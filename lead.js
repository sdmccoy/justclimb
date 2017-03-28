'use strict';

function matchSportLead() {
  if (newProfile.elements.sportlead.checked) {
    var newSportLead = true;
    // console.log(newSportLead);
    for (var i = 0; i < profilesArr.length; i++) {
      if (profilesArr[i].sportLead === newSportLead) {
        profilesArr[i].points += 2;
        // console.log(profilesArr[i].points);
      }
    }
  }
  // console.log('sport lead');
  // console.log(profilesArr);
};
// newProfile.addEventListener('submit', matchSportLead);
