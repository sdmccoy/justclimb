//Working function. Need to add event handlers
function matchSkillTEST() {
  for (var i = 0; i < gradeArr.length; i++) {
    var newSkill = '5.8 - 5.9 / V1';
    var findGradeInArr = gradeArr[i].includes(newSkill);
    if (findGradeInArr) {
      var middleGrade = gradeArr[i];
      var leftGrade = gradeArr[i - 1];
      var rightGrade = gradeArr[i + 1];
      console.log(middleGrade);
      console.log(leftGrade);
      console.log(rightGrade);
      for (var i = 0; i < profilesArr.length; i++) {
        var matchmiddleGradeToObjects = profilesArr[i].skill.includes(middleGrade);
        var matchleftGradeToObjects = profilesArr[i].skill.includes(leftGrade);
        var matchrightGradeToObjects = profilesArr[i].skill.includes(rightGrade);
        // console.log();
        if (matchmiddleGradeToObjects || matchleftGradeToObjects || matchrightGradeToObjects) {
          profilesArr[i].points += 2;
          console.log(aJohnson.points);
        }
      }
    }
  }
};