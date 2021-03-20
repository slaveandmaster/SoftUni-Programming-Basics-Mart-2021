function scholarship(input) {
  const profit = Number(input[0]);
  const averageSuccess = Number(input[1]);
  const minWage = Number(input[2]);
  let scholarship = 0;
  let socialScholarship = 0;
  let isValidScholarShip = false;
  let isValidGradeScholarShip = false;
 // проверяваме дали дохода е по-малкък от мин. заплата и успехът да е по-голям от 4.50 
 //ако и двете условия са покритие сетваме флага на isValidScholarShip на true;
  if (profit < minWage && averageSuccess > 4.5) {
    isValidScholarShip = true;
    //изчислява ме стипендията
    socialScholarship = minWage * 0.35;
  }
  //проверяваме дали може да вземаме стипендия за отличен успех и сетваме флага isValidGradeScholarShip на true
  if (averageSuccess >= 5.5) {
    isValidGradeScholarShip = true;
    //изчислява ме стипендията
    scholarship = averageSuccess * 25;
  }
  //ако двата флага са ни false то студента няма да получава нито една стипендия
  if (isValidScholarShip === false && isValidGradeScholarShip === false) {
    console.log(`You cannot get a scholarship!`);
  } else if (socialScholarship > scholarship) {
    console.log(
      `You get a Social scholarship ${Math.floor(socialScholarship)} BGN`
    );
  } else {
    console.log(
      `You get a scholarship for excellent results ${Math.floor(
        scholarship
      )} BGN`
    );
  }
}
scholarship(["480.00", "4.60", "450.00"]);
scholarship(["300.00", "5.65", "420.00"]);
