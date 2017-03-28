'use strict';
console.log(newProfile.elements.sporttr.checked);
function matchSportTR() {
  if (newProfile.elements.sporttr.checked) {
    newProfile.elements.sporttr.value = true;
    var newSportTR = newProfile.elements.sporttr.value;
    console.log(newSportTR);
  } else {
    newProfile.elements.sporttr.value = false;
    var newSportTR = newProfile.elements.sporttr.value;
    console.log(newSportTR);
  }
  for (var i = 0; i < profilesArr.length; i++) {
    // console.log(newSportTR);
    // console.log(profilesArr[i].sportTR);
    if (profilesArr[i].sportTR === newSportTR) {
      console.log(newSportTR);
      profilesArr[i].points += 2;
    } else {
      console.log(newSportTR);
      profilesArr[i].points += 0;
    }
  }
  console.log(profilesArr);
};
// matchSportTR()
//
// function matchSportLead() {
//   var newSportLead = newProfile.elements.sportlead.value;
//   console.log(newSportLead);
//   if (newProfile.elements.sportlead.checked) {
//     newProfile.elements.sportlead.value = 'true';
//   } else {
//     newProfile.elements.sportlead.value = 'false';
//   }
//   for (var i = 0; i < profilesArr.length; i++) {
//     if (profilesArr[i].sportLead === newSportLead) {
//       profilesArr[i].points += 2;
//     } else {
//       profilesArr[i].points += 0;
//     }
//   }
// };
// // matchSportLead();
//
// function matchBouldering() {
//   var newBouldering = newProfile.elements.bouldering.value;
//   console.log(newBouldering);
//   if (newProfile.elements.bouldering.checked) {
//     newProfile.elements.bouldering.value = 'true';
//   } else {
//     newProfile.elements.bouldering.value = 'false';
//   }
//   for (var i = 0; i < profilesArr.length; i++) {
//     if (profilesArr[i].bouldering === newBouldering) {
//       profilesArr[i].points += 2;
//     } else {
//       profilesArr[i].points += 0;
//     }
//   }
// };
// matchSportTR();

//newProfile var is global on app.js
newProfile.addEventListener('submit', matchSportTR);
// newProfile.addEventListener('submit', matchSportLead);
// newProfile.addEventListener('submit', matchBouldering);
