'use strict';

// working on gymlocation match formula

var gymLocationArray = ['Vertical World Seattle', 'Vertical World Redmond', 'Stone Gardens Seattle', 'Stone Gardens Bellevue', 'Seattle Bouldering Project'];

function MatchGymLocation(){

  if (elGymLocation) {
    for (var i = 0; i < elgprofilesArr.length; i++) {
      elGymLocation.match(profilesArr[i].location);

    }
  }
};

// trying a different if true statement.
function MatchGymLocation(){
  for (var i = 0; i < elgprofilesArr.length; i++) {
    var isMatch = elGymLocation.match(profilesArr[i].location);
    if (isMatch) {
      profilesArr[i].points.push(this.points+6);
    } else {
      this.points+0;
      }
  }
};

var elGymLocation = document.getElementById('gym-location');
elGymLocation.addEventListener('submit', MatchGymLocation);
