'use strict';

var gradeArr = ['5.5 - 5.7 / V0', '5.8 - 5.9 / V1', '5.10a - 5.10b / V2', '5.10c - 5.10d / V3', '5.11a - 5.11b / V4', '5.11c - 5.11d / V5', '5.12a - 5.12b / V6', '5.12c - 5.12d / V7', '5.13a - 5.13b / V8', '5.13c - 5.13d / V9'];
var typeArr = ['Sport TR', 'Sport Lead', 'Bouldering'];
var locationArr = ['Vertical World Seattle', 'Vertical World Redmond', 'Stone Gardens Seattle', 'Stone Gardens Bellevue', 'Seattle Bouldering Project'];
var profilesArr = [];

var aJohnson = new Profile('Andrew Johnson', 'Vertical World Seattle', true, false, false, '5.5 - 5.7 / V0', 'andrew@johnson.com');
var aMcguine = new Profile('Andrew McGuine', 'Vertical World Redmond', 'Sport Lead', '5.10a - 5.10b / V2', 'andrew@mcguine.com');
var aSparks = new Profile('Anthony Sparks', 'Stone Gardens Seattle', 'Sport Lead', '5.10c - 5.10d / V3', 'anthony@sparks.com');
var bMcarthur = new Profile('Brad Mcarthur', 'Stone Gardens Bellevue', 'Sport TR', '5.11a - 5.11b / V4', 'brad@mcarthur.com');
var bMontegna = new Profile('Brad Montegna', 'Seattle Bouldering Project', 'Bouldering', '5.12c - 5.12d / V7', 'brad@montegna');
var bCantrell = new Profile('Bryan Cantrell', 'Vertical World Redmond', true, true, false, '5.13c - 5.13d / V9', 'bryan@cantrell.com');
function Profile(name, location, type, skill, contact) {
  this.name = name;
  this.location = location;
  this.type = type;
  this.skill = skill;
  this.contact = contact;
}
