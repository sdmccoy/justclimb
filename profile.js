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
    nameDiv.className = 'titles';
    nameDiv.innerText = 'Name';
    newSection.appendChild(nameDiv);
    var nameDiv = document.createElement('div');
    nameDiv.className = 'profileDiv';
    nameDiv.innerText = storedprofilesArr[i].name;
    newSection.appendChild(nameDiv);
    var contactDiv = document.createElement('div');
    contactDiv.className = 'titles';
    contactDiv.innerText = 'Email';
    newSection.appendChild(contactDiv);
    var contactDiv = document.createElement('div');
    contactDiv.className = 'profileDiv';
    contactDiv.innerText = storedprofilesArr[i].contact;
    newSection.appendChild(contactDiv);
    var gymDiv = document.createElement('div');
    gymDiv.className = 'titles';
    gymDiv.innerText = 'Gym';
    newSection.appendChild(gymDiv);
    var gymDiv = document.createElement('div');
    gymDiv.className = 'profileDiv';
    gymDiv.innerText = storedprofilesArr[i].gymLocation;
    newSection.appendChild(gymDiv);
    var skillDiv = document.createElement('div');
    skillDiv.className = 'titles';
    skillDiv.innerText = 'Skill Level';
    newSection.appendChild(skillDiv);
    var skillDiv = document.createElement('div');
    skillDiv.className = 'profileDiv';
    skillDiv.innerText = storedprofilesArr[i].skill;
    newSection.appendChild(skillDiv);
    var typeDiv = document.createElement('div');
    typeDiv.className = 'titles';
    typeDiv.innerText = 'Climbing Type';
    newSection.appendChild(typeDiv);
    if (storedprofilesArr[i].sportTR === true){
      var sportTRDiv = document.createElement('div');
      newSection.appendChild(sportTRDiv);
      sportTRDiv.className = 'profileDiv';
      sportTRDiv.innerText = 'Sport Top Rope';
    }
    if (storedprofilesArr[i].sportLead === true){
      var sportLeadDiv = document.createElement('div');
      newSection.appendChild(sportLeadDiv);
      sportLeadDiv.className = 'profileDiv';
      sportLeadDiv.innerText = 'Sport Lead';
    }
    if (storedprofilesArr[i].bouldering === true){
      var boulderingDiv = document.createElement('div');
      newSection.appendChild(boulderingDiv);
      boulderingDiv.className = 'profileDiv';
      boulderingDiv.innerText = 'Bouldering';
    }
  }
};

populateNewUser();
