'use strict';

var gradeArr = ['5.5 - 5.7 / V0', '5.8 - 5.9 / V1', '5.10a - 5.10b / V2', '5.10c - 5.10d / V3', '5.11a - 5.11b / V4', '5.11c - 5.11d / V5', '5.12a - 5.12b / V6', '5.12c - 5.12d / V7', '5.13a - 5.13b / V8', '5.13c - 5.13d / V9'];
var typeArr = ['Sport TR', 'Sport Lead', 'Bouldering'];
var locationArr = ['Vertical World Seattle', 'Vertical World Redmond', 'Stone Gardens Seattle', 'Stone Gardens Bellevue', 'Seattle Bouldering Project'];
var profilesArr = [];
var globalPoints = [];

var aJohnson = new Profile('Andrew Johnson', 'Vertical World Seattle', true, false, false, '5.5 - 5.7 / V0', 'andrew@johnson.com');
var aMcguine = new Profile('Andrew McGuine', 'Vertical World Redmond', false, true, false, '5.10a - 5.10b / V2', 'andrew@mcguine.com');
var aSparks = new Profile('Anthony Sparks', 'Stone Gardens Seattle', false, true, false, '5.10c - 5.10d / V3', 'anthony@sparks.com');
var bMcarthur = new Profile('Brad Mcarthur', 'Stone Gardens Bellevue', true, false, false, '5.11a - 5.11b / V4', 'brad@mcarthur.com');
var bMontegna = new Profile('Brad Montegna', 'Seattle Bouldering Project', false, false, true, '5.12c - 5.12d / V7', 'brad@montegna');
var bCantrell = new Profile('Bryan Cantrell', 'Vertical World Redmond', true, true, false, '5.13c - 5.13d / V9', 'bryan@cantrell.com');
var gOneill = new Profile('Grayson O\'neill', 'Seattle Bouldering Project', false, false, true, '5.11c - 5.11d / V5', 'grayson@oneill.com');
var jDempsey = new Profile('Jason Dempsey', 'Vertical World Seattle', true, true, false, '5.12a - 5.12b / V6', 'jason@dempsey.com');
var jTwanbly = new Profile('Jenna Twanbly', 'Stone Gardens Seattle', true, false, true, '5.12c - 5.12d / V7', 'jenna@twanbly.com');
var jSmythe = new Profile('Jon Smythe', 'Vertical World Redmond', true, false, false, '5.5 - 5.7 / V0', 'jon@smythe.com');
var jMartinez = new Profile('Jose Martinez', 'Stone Gardens Bellevue', true, true, false, '5.10a - 5.10b / V2', 'jose@martinez.com');
var lAndrews = new Profile('Lance Andrews', 'Seattle Bouldering', false, false, true, '5.11a - 5.11b / V4', 'lance@andrews.com');
var lBordain = new Profile('Leslie Bordain', 'Vertical World Seattle', true, true, true, '5.10c - 5.10d / V3', 'lance@bordain.com');
var mLindell = new Profile('Marcus Lindell', 'Stone Gardens Seattle', true, true, false, '5.11c - 5.11d / V5', 'marcus@lindell.com');
var mRyan = new Profile('Mike Ryan', 'Vertical World Redmond', false, true, false, '5.13c - 5.13d / V9', 'mike@ryan.com');
var mLaughlin = new Profile('Milo Laughlin', 'Seattle Bouldering Project', false, false, true, '5.11a - 5.11b / V4', 'milo@laughlin.com');
var nJohson = new Profile('Neil Johnson', 'Stone Gardens Bellevue', true, false, false, '5.10a - 5.10b / V2', 'neil@johnson.com');
var rGarafalo = new Profile('Reid Garafalo', 'Vertical World Seattle', true, true, false, '5.12c - 5.12d / V7', 'reid@garafalo.com');
var tLundell = new Profile('Teddy Lundell', 'Stone Gardens Seattle', true, false, true, '5.8 - 5.9 / V1', 'teddy@lundell.com');
var tJanko = new Profile('Tony Janko', 'Vertical World Redmond', true, true, true, '5.11c - 5.11d / V5', 'tony@janko.com');

var resetPoints = document.getElementById('reset-points');
var name = document.getElementById('name');
var gymLocation = document.getElementById('gymLocation');
var grade = document.getElementById('grade');
var contact = document.getElementById('contact');

function Profile(name, gymLocation, sportTR, sportLead, bouldering, skill, contact) {
  this.name = name;
  this.gymLocation = gymLocation;
  this.sportTR = sportTR;
  this.sportLead = sportLead;
  this.bouldering = bouldering;
  this.skill = skill;
  this.contact = contact;
  this.points = 0;
  profilesArr.push(this);
  globalPoints.push(this.points);
};

//takes the form input and creates a new profile and pushes in to the empty profilesArr
function newProfileFormSubmit(event) {
  event.preventDefault();
  console.log('event test');
  var newName = newProfile.elements.username.value;
  console.log(newName);
  var newLocation = newProfile.elements.gymlocation.value;
  console.log(newLocation);
  if (newProfile.elements.sporttr.checked) {
    var newSportTR = true;
  } else {
    var newSportTR = false;
  }
  console.log(newSportTR);
  if (newProfile.elements.sportlead.checked) {
    var newSportLead = true;
  } else {
    var newSportLead = false;
  }
  console.log(newSportLead);
  if (newProfile.elements.bouldering.checked) {
    var newBouldering = true;
  } else {
    var newBouldering = false;
  }
  console.log(newBouldering);
  var newSkill = newProfile.elements.grade.value;
  console.log(newSkill);
  // var newContact = newProfile.elements.contact.value;
  matchGymLocation();
  matchSkill();
  matchSportTR();
  matchSportLead();
  matchBouldering();
  this.points = 0;
  var creatingNewProfile = new Profile(newName, newLocation, newSportTR, newSportLead, newBouldering, newSkill);
};

// identifies the user hit submit, then runs the newProfileFormSubmit function
var newProfile = document.getElementById('profile-form');
newProfile.addEventListener('submit', newProfileFormSubmit);

//function to put the users form input into local storage
function newProfileToLocalStorage(){
  localStorage.setItem('profilesArr', JSON.stringify(profilesArr));
};

newProfileToLocalStorage();
// filling user data into profile page.
// function changeName(){
// }
// changeName();
// console.log(changeName());
// var profileName = document.getElementById('profile-name');
// profileName.innertext = 'My new text!';
// profileName.innertext = 'newName';
