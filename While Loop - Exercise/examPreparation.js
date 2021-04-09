function examPreparation(input) {
  const badGrades = Number(input[0]);
  let badCounter = 0;
  let goodGrades = 0;
  let lastTask = "";
  let solvedTask = 0;
  let index = 1;
  let task = input[index];
  let sum = 0;
  while (badCounter <= badGrades) {
    lastTask = input[index];
    let grade = Number(input[index + 1]);
    if (grade > 4) {
      goodGrades++;
      solvedTask++;
      sum += grade;
    } else if (grade <= 4) {
      badCounter++;
      solvedTask++;
      sum += grade;
    }
    if (task === "Enough") {
      sum = sum / (goodGrades + badCounter);
      console.log(`Average score: ${sum.toFixed(2)}`);
      console.log(`Number of problems: ${solvedTask}`);
      console.log(`Last problem: ${input[index - 2]}`);
      break;
    }
    if (badCounter === badGrades) {
        console.log(`You need a break, ${badGrades} poor grades.`);
        break;
      }
    index +=2;
    task = input[index];
  }
  
}
examPreparation([
  "3",
  "Money",
  "6",
  "Story",
  "4",
  "Spring Time",
  "5",
  "Bus",
  "6",
  "Enough",
]);
examPreparation(["2", "Income", "3", "Game Info", "6", "Best Player", "4"]);
