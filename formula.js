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

function Profile(name, location, sportTR, sportLead, bouldering, skill, contact) {
  this.name = name;
  this.location = location;
  this.sportTR = sportTR;
  this.sportLead = sportLead;
  this.bouldering = bouldering;
  this.skill = skill;
  this.contact = contact;
  this.points = 0;
  profilesArr.push(this);
}
