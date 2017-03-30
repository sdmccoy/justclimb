'use strict';
//Get local storage for new user. must navigate to match me page first...
var storedprofilesArr = JSON.parse(localStorage.getItem('profilesArr'));
var profileSection = document.getElementById('profile-info');
var picturesArr = ['Assets/Images/profile_Images/Andrew_Johnson.jpg', 'Assets/Images/profile_Images/Andrew_McGuiness.jpg', 'Assets/Images/profile_Images/Anthony_Sparks.jpg', 'Assets/Images/profile_Images/Brad_Mcarthur.jpg', 'Assets/Images/profile_Images/Brad_Montegna.jpg', 'Assets/Images/profile_Images/Bryan_Cantrell.jpg', 'Assets/Images/profile_Images/Grayson_O\'neill.jpg', 'Assets/Images/profile_Images/Jason_Dempsey', 'Assets/Images/profile_Images/Jenna_Twanbly', 'Assets/Images/profile_Images/Jenna_Twanbly',];

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
