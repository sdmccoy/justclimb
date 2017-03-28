'use strict';

function matchSportTR() {
  var newSportTR = true;
  for (var i = 0; i < profilesArr.length; i++) {
    if (profilesArr[i].sportTR === newSportTR) {
      profilesArr[i].points += 2;
    } else {
      profilesArr[i].points += 0;
    }
  }
};
matchSportTR();

function matchSportLead() {
  var newSportLead = true;
  for (var i = 0; i < profilesArr.length; i++) {
    if (profilesArr[i].sportLead === newSportLead) {
      profilesArr[i].points += 2;
    } else {
      profilesArr[i].points += 0;
    }
  }
};
matchSportLead();

function matchBouldering() {
  var newBouldering = true;
  for (var i = 0; i < profilesArr.length; i++) {
    if (profilesArr[i].bouldering === newBouldering) {
      profilesArr[i].points += 2;
    } else {
      profilesArr[i].points += 0;
    }
  }
};
matchSportTR();
