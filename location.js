'use strict';

// working on gymlocation match formula

function matchGymLocation(){
  for (var i = 0; i < profilesArr.length; i++) {
    var newLocation = 'Seattle Bouldering Project';
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

//console testing without event. This works in the for loop. Add the event up top to test.

// function matchGymLocation(){
//   for (var i = 0; i < profilesArr.length; i++) {
//     var newLocation = 'Seattle Bouldering Project';
//     var matching = profilesArr[i].location.includes(newLocation);
//     if (matching) {
//       profilesArr[i].points += 6;
//     } else {
//       profilesArr[i].points += 0;
//     }
//   }
// };
