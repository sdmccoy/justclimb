//Get local storage for new user. must navigate to match me page first...
var storedprofilesArr = JSON.parse(localStorage.getItem('profilesArr'));
var body = document.getElementsByTagName('body')[0];

function populateNewUser(){
  var newSection = document.createElement('section');
  body.appendChild(newSection);
  for (var i = 0; i < storedprofilesArr.length; i++){
    var nameDiv = document.createElement('div');
    nameDiv.innerText = storedprofilesArr[i].name;
    newSection.appendChild(nameDiv);
    var contactDiv = document.createElement('div');
    contactDiv.innerText = storedprofilesArr[i].contact;
    newSection.appendChild(contactDiv);
    var gymDiv = document.createElement('div');
    gymDiv.innerText = storedprofilesArr[i].gymLocation;
    newSection.appendChild(gymDiv);
    var skillDiv = document.createElement('div');
    skillDiv.innerText = storedprofilesArr[i].skill;
    newSection.appendChild(skillDiv);
    var typeoneDiv = document.createElement('div');
    newSection.appendChild(typeoneDiv);
    if (storedprofilesArr[i].sportTR === true){
      typeoneDiv.innerText = 'SportTR';
    }
    var typetwoDiv = document.createElement('div');
    newSection.appendChild(typetwoDiv);
    if (storedprofilesArr[i].sportLead === true){
      typetwoDiv.innerText = 'SportLead';
    }
    var typethreeDiv = document.createElement('div');
    newSection.appendChild(typethreeDiv);
    if (storedprofilesArr[i].bouldering === true){
      typethreeDiv.innerText = 'Bouldering';
    }
  }
};

  //
  // var newDiv = document.createElement('div');
  // document
  // document.getElementById('profile-name').innerHTML = storedprofilesArr[0].name;
  // document.getElementById('gym-location').innerHTML = storedprofilesArr[0].gymLocation;
  // // document.getElementById('climbing-type').innerHTML = [].concat(newSportTR, newSportLead, newBouldering);
  // document.getElementById('grade').innerHTML = storedprofilesArr[0].skill;
  // document.getElementById('contact').innerHTML = storedprofilesArr[0].contact;
