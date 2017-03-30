'use strict';

var gradeArr = ['5.5 - 5.7 / V0', '5.8 - 5.9 / V1', '5.10a - 5.10b / V2', '5.10c - 5.10d / V3', '5.11a - 5.11b / V4', '5.11c - 5.11d / V5', '5.12a - 5.12b / V6', '5.12c - 5.12d / V7', '5.13a - 5.13b / V8', '5.13c - 5.13d / V9'];
var typeArr = ['Sport TR', 'Sport Lead', 'Bouldering'];
var locationArr = ['Vertical World Seattle', 'Vertical World Redmond', 'Stone Gardens Seattle', 'Stone Gardens Bellevue', 'Seattle Bouldering Project'];
var profilesArr = [];

function generateDBProfiles() {
  var aJohnson = new Profile('Andrew Johnson', 'Vertical World Seattle', true, false, false, '5.5 - 5.7 / V0', 'andrew@johnson.com', 'Assets/profile_Images/Andrew_Johnson.jpg');
  var aMcguine = new Profile('Andrew McGuine', 'Vertical World Redmond', false, true, false, '5.10a - 5.10b / V2', 'andrew@mcguine.com', 'Assets/profile_Images/Andrew_McGuiness.jpg');
  var aSparks = new Profile('Anthony Sparks', 'Stone Gardens Seattle', false, true, false, '5.10c - 5.10d / V3', 'anthony@sparks.com', 'Assets/profile_Images/Anthony_Sparks.jpg');
  var bMcarthur = new Profile('Brad Mcarthur', 'Stone Gardens Bellevue', true, false, false, '5.11a - 5.11b / V4', 'brad@mcarthur.com', 'Assets/profile_Images/Brad_Mcarthur.jpg');
  var bMontegna = new Profile('Brad Montegna', 'Seattle Bouldering Project', false, false, true, '5.12c - 5.12d / V7', 'brad@montegna', 'Assets/profile_Images/Brad_Montegna.jpg');
  var bCantrell = new Profile('Bryan Cantrell', 'Vertical World Redmond', true, true, false, '5.13c - 5.13d / V9', 'bryan@cantrell.com', 'Assets/profile_Images/Bryan_Cantrell.jpg');
  var gOneill = new Profile('Grayson O\'neill', 'Seattle Bouldering Project', false, false, true, '5.11c - 5.11d / V5', 'grayson@oneill.com', 'Assets/profile_Images/Grayson_O\'neill.jpg');
  var jDempsey = new Profile('Jason Dempsey', 'Vertical World Seattle', true, true, false, '5.12a - 5.12b / V6', 'jason@dempsey.com', 'Assets/profile_Images/Jason_Dempsey.jpg');
  var jTwanbly = new Profile('Jenna Twanbly', 'Stone Gardens Seattle', true, false, true, '5.12c - 5.12d / V7', 'jenna@twanbly.com', 'Assets/profile_Images/Jenna_Twanbly.jpg');
  var jSmythe = new Profile('Jon Smythe', 'Vertical World Redmond', true, false, false, '5.5 - 5.7 / V0', 'jon@smythe.com', 'Assets/profile_Images/Jon_Smythe.jpg');
  var jMartinez = new Profile('Jose Martinez', 'Stone Gardens Bellevue', true, true, false, '5.10a - 5.10b / V2', 'jose@martinez.com', 'Assets/profile_Images/Jose_Martinez.jpg');
  var lAndrews = new Profile('Lance Andrews', 'Seattle Bouldering', false, false, true, '5.11a - 5.11b / V4', 'lance@andrews.com', 'Assets/profile_Images/Lance_Andrews.jpg');
  var lBordain = new Profile('Leslie Bordain', 'Vertical World Seattle', true, true, true, '5.10c - 5.10d / V3', 'lance@bordain.com', 'Assets/profile_Images/Leslie_Bordain.jpg');
  var mLindell = new Profile('Marcus Lindell', 'Stone Gardens Seattle', true, true, false, '5.11c - 5.11d / V5', 'marcus@lindell.com', 'Assets/profile_Images/Marcus_Lindell.jpg');
  var mRyan = new Profile('Mike Ryan', 'Vertical World Redmond', false, true, false, '5.13c - 5.13d / V9', 'mike@ryan.com', 'Assets/profile_Images/Mike_Ryan.jpg');
  var mLaughlin = new Profile('Milo Laughlin', 'Seattle Bouldering Project', false, false, true, '5.11a - 5.11b / V4', 'milo@laughlin.com', 'Assets/profile_Images/Milo_Laughlin.jpg');
  var nJohson = new Profile('Neil Johnson', 'Stone Gardens Bellevue', true, false, false, '5.10a - 5.10b / V2', 'neil@johnson.com', 'Assets/profile_Images/Neil_Johnson.jpg');
  var rGarafalo = new Profile('Reid Garafalo', 'Vertical World Seattle', true, true, false, '5.12c - 5.12d / V7', 'reid@garafalo.com', 'Assets/profile_Images/Reid_Garafalo.jpg');
  var tLundell = new Profile('Teddy Lundell', 'Stone Gardens Seattle', true, false, true, '5.8 - 5.9 / V1', 'teddy@lundell.com', 'Assets/profile_Images/Teddy_Lundell.jpg');
  var tJanko = new Profile('Tony Janko', 'Vertical World Redmond', true, true, true, '5.11c - 5.11d / V5', 'tony@janko.com', 'Assets/profile_Images/Tony_Janko.jpg');
};

var resetPoints = document.getElementById('reset-points');
var name = document.getElementById('name');
var gymLocation = document.getElementById('gymLocation');
var grade = document.getElementById('grade');
var contact = document.getElementById('contact');

profilesArrToLocalStorage();
//function to put the users form input into local storage
function profilesArrToLocalStorage(){
  if (JSON.parse(localStorage.getItem('profilesArr'))) {
    profilesArr = JSON.parse(localStorage.getItem('profilesArr'));
  } else {
    generateDBProfiles();
  }
};

function Profile(name, gymLocation, sportTR, sportLead, bouldering, skill, contact, image) {
  this.name = name;
  this.gymLocation = gymLocation;
  this.sportTR = sportTR;
  this.sportLead = sportLead;
  this.bouldering = bouldering;
  this.skill = skill;
  this.contact = contact;
  this.image = image;
  this.points = 0;
  profilesArr.push(this);
};
localStorage.setItem('profilesArr', JSON.stringify(profilesArr));

function clearScore(event) {
  event.preventDefault();
  for(var i = 0; i < profilesArr.length; i++) {
    profilesArr[i].points = 0;
    localStorage.clear(profilesArr[i].points);
  }
};

resetPoints.addEventListener('click', clearScore);
