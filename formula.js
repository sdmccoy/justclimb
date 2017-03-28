function clearScore(event) {
  event.preventDefault();
  for(var i = 0; i < profilesArr.length; i++) {
    profilesArr[i].points = 0;
    localStorage.clear(profilesArr[i].points);
  }
};

resetPoints.addEventListener('click', clearScore);
