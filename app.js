'use strict';

var gradeArr = ['5.5 - 5.7 / V0', '5.8 - 5.9 / V1', '5.10a - 5.10b / V2', '5.10c - 5.10d / V3', '5.11a - 5.11b / V4', '5.11c - 5.11d / V5', '5.12a - 5.12b / V6', '5.12c - 5.12d / V7', '5.13a - 5.13b / V8', '5.13c - 5.13d / V9'];
var typeArr = ['Sport TR', 'Sport Lead', 'Boulder'];
var locationArr = ['VW Seattle', 'VW Redmond', 'SG Seattle', 'SG Bellevue', 'SBP', 'Everett'];
var profilesArr = [];

var

function Profile(name, location, type, skill, contact) {
  this.name = name;
  this.location = location;
  this.type = type;
  this.skill = skill;
  this.contact = contact;
}
