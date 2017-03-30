'use strict';
//Get local storage for new user. must navigate to match me page first...
var storedprofilesArr = JSON.parse(localStorage.getItem('profilesArr'));
var profileSection = document.getElementById('profile-info');

function populateNewUser(){
  for (var i = 0; i < storedprofilesArr.length; i++){
    var newSection = document.createElement('section');
    newSection.className = 'userSection';
    profileSection.appendChild(newSection);
    var nameDiv = document.createElement('div');
    nameDiv.className = 'profileDiv';
    nameDiv.innerText = 'Name: ' + storedprofilesArr[i].name;
    newSection.appendChild(nameDiv);
    var contactDiv = document.createElement('div');
    contactDiv.className = 'profileDiv';
    contactDiv.innerText = 'Email: ' + storedprofilesArr[i].contact;
    newSection.appendChild(contactDiv);
    var gymDiv = document.createElement('div');
    gymDiv.className = 'profileDiv';
    gymDiv.innerText = 'Gym Location: ' + storedprofilesArr[i].gymLocation;
    newSection.appendChild(gymDiv);
    var skillDiv = document.createElement('div');
    skillDiv.className = 'profileDiv';
    skillDiv.innerText = 'Skill Level: ' + storedprofilesArr[i].skill;
    newSection.appendChild(skillDiv);
    var typeUL = document.createElement('ul');
    typeUL.className = 'typeUL';
    newSection.appendChild(typeUL);
    typeUL.innerText = 'Climbing Type: ';
    if (storedprofilesArr[i].sportTR === true){
      var typeOneLI = document.createElement('li');
      newSection.appendChild(typeOneLI);
      typeOneLI.innerText = 'SportTR';
    }
    if (storedprofilesArr[i].sportLead === true){
      var typeTwoLI = document.createElement('li');
      newSection.appendChild(typeTwoLI);
      typeTwoLI.innerText = 'SportLead';
    }
    if (storedprofilesArr[i].bouldering === true){
      var typeThreeLI = document.createElement('li');
      newSection.appendChild(typeThreeLI);
      typeThreeLI.innerText = 'Bouldering';
    }
  }
};

populateNewUser();

  //
  // var newDiv = document.createElement('div');
  // document
  // document.getElementById('profile-name').innerHTML = storedprofilesArr[0].name;
  // document.getElementById('gym-location').innerHTML = storedprofilesArr[0].gymLocation;
  // // document.getElementById('climbing-type').innerHTML = [].concat(newSportTR, newSportLead, newBouldering);
  // document.getElementById('grade').innerHTML = storedprofilesArr[0].skill;
  // document.getElementById('contact').innerHTML = storedprofilesArr[0].contact;
