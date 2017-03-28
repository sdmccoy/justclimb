function clearScore() {
  for(var i = 0; i < profilesArr.length; i++) {
    profilesArr[i].points = 0;
  }
}

clearBtn.addEventListener('click', clearScore);
