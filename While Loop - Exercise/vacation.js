function vacation(input) {
  const neededMoney = Number(input[0]);
  let myMoney = Number(input[1]);
  let days = 0;
  let spendDays = 0;
  let index = 2;
  let command = input[index];
  let cash = Number(input[index + 1]);
  while (true) {
    if (command === "spend") {
      spendDays++;
      days++;
      if (cash > myMoney) {
        myMoney = 0;
      } else {
        myMoney -= cash;
      }
    } else if (command === "save") {
      spendDays = 0;
      myMoney += cash;
      days++;
    }
    if (spendDays === 5) {
      console.log(`You can't save the money.`);
      console.log(`${days}`);
      break;
    } 
    if (myMoney >= neededMoney) {
      console.log(`You saved the money for ${days} days.`);
      break;
    }
    index += 2;
    command = input[index];
    cash = Number(input[index + 1]);
  }
}
vacation(["2000", "1000", "spend", "1200", "save", "2000"]);
vacation([
  "110",
  "60",
  "spend",
  "10",
  "spend",
  "10",
  "spend",
  "10",
  "spend",
  "10",
  "spend",
  "10",
]);
vacation([
  "250",
  "150",
  "spend",
  "50",
  "spend",
  "50",
  "save",
  "100",
  "save",
  "100",
]);
