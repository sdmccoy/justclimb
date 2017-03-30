'use strict';
//Get local storage for new user. must navigate to match me page first...
var storedprofilesArr = JSON.parse(localStorage.getItem('profilesArr'));
var profileSection = document.getElementById('profile-info');
var picturesArr = ['Assets/profile_Images/Andrew_Johnson.jpg', 'Assets/profile_Images/Andrew_McGuiness.jpg', 'Assets/profile_Images/Anthony_Sparks.jpg', 'Assets/profile_Images/Brad_Mcarthur.jpg', 'Assets/profile_Images/Brad_Montegna.jpg', 'Assets/profile_Images/Bryan_Cantrell.jpg', 'Assets/profile_Images/Grayson_O\'neill.jpg', 'Assets/profile_Images/Jason_Dempsey.jpg', 'Assets/profile_Images/Jenna_Twanbly.jpg', 'Assets/profile_Images/Jon_Smythe.jpg', 'Assets/profile_Images/Jose_Martinez.jpg', 'Assets/profile_Images/Lance_Andrews.jpg', 'Assets/profile_Images/Leslie_Bordain.jpg', 'Assets/profile_Images/Marcus_Lindell.jpg', 'Assets/profile_Images/Mike_Ryan.jpg', 'Assets/profile_Images/Milo_Laughlin.jpg', 'Assets/profile_Images/Neil_Johnson.jpg', 'Assets/profile_Images/Reid_Garafalo.jpg', 'Assets/profile_Images/Teddy_Lundell.jpg', 'Assets/profile_Images/Tony_Janko.jpg'];

function populateNewUser(){
  for (var i = 0; i < storedprofilesArr.length; i++){
    var newSection = document.createElement('section');
    newSection.className = 'userSection';
    profileSection.appendChild(newSection);
    var pictureImg = document.createElement('img');
    pictureImg.setAttribute('src', picturesArr[i]);
    pictureImg.className = 'pictureImg';
    newSection.appendChild(pictureImg);
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
