// function matchSkill() {
//   for(i = 0; i < profilesArr.length; i++) {
//     if (aJohnson.skill === profilesArr[i]) {
//       aJohnson.points += 2;
//     } else if (aJohnson.skill -= profilesArr[i - 1]){
//       aJohnson.points += 2;
//     }
//     else if (aJohnson.skill += profilesArr[i + 1]) {
//       aJohnson.points += 2;
//     }
//     else {
//       aJohnson.points += 0;
//     }
//   }
// };

function matchSkill() {
  for(i = 0; i < profilesArr.length; i++) {
    if (profilesArr[i].skill.match(aJohnson.skill)) {
      aJohnson.point = +2;
    }
  }
};
