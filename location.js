'use strict';

// working on gymlocation match formula

var gymLocationArray = ['Vertical World Seattle', 'Vertical World Redmond', 'Stone Gardens Seattle', 'Stone Gardens Bellevue', 'Seattle Bouldering Project'];

function matchGymLocation(){
  for (var i = 0; i < profilesArr.length; i++) {
    var isMatch = elGymLocation.match(profilesArr[i].location);
    if (isMatch) {
      profilesArr[i].push(this.points + 6);
    } else {
      profilesArr[i].push(this.points + 0);
    }
  }
};

var elGymLocation = document.getElementById('gym-location');
elGymLocation.addEventListener('submit', matchGymLocation);

//console testing without event

var gymLocationArray = ['Vertical World Seattle', 'Vertical World Redmond', 'Stone Gardens Seattle', 'Stone Gardens Bellevue', 'Seattle Bouldering Project'];

function matchGymLocation(){
  for (var i = 0; i < profilesArr.length; i++) {
    var newLocation = 'Seattle Bouldering Project';
    var matching = profilesArr[i].location.includes(newLocation);
    if (matching) {
      profilesArr[i].points + 6;
    } else {
      profilesArr[i].points + 0;
    }
  }
};
