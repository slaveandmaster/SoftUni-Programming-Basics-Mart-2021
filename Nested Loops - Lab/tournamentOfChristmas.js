function tournamentOfChristmas(input) {
  let totalMoney = 0;
  let days = Number(input.shift());
  let sportName;
  let status;
  let totalWins = 0;
  let totalLoses = 0;
  for (let i = 1; i <= days; i++) {
    let charityMoney = 0;
    let winCounter = 0;
    let loseCounter = 0;
    //get sport
    sportName = input.shift();

    while (sportName != "Finish") {
      //get status
      status = input.shift();
      if (status === "win") {
        winCounter++;
        charityMoney += 20;
      } else {
        loseCounter++;
        charityMoney += 0;
      }
      sportName = input.shift();
    }
    totalWins += winCounter;
    totalLoses += loseCounter;
    //check day wins
    if (winCounter > loseCounter) {
      charityMoney += charityMoney * 0.1;
      totalMoney += charityMoney;
    } else {
      totalMoney += charityMoney;
    }
  }
  //check total wins
  if (totalWins > totalLoses) {
    totalMoney += totalMoney * 0.2;
    console.log(
      `You won the tournament! Total raised money: ${totalMoney.toFixed(2)}`
    );
  } else {
    console.log(
      `You lost the tournament! Total raised money: ${totalMoney.toFixed(2)}`
    );
  }
}
tournamentOfChristmas([
  "2",
  "volleyball",
  "win",
  "football",
  "lose",
  "basketball",
  "win",
  "Finish",
  "golf",
  "win",
  "tennis",
  "win",
  "badminton",
  "win",
  "Finish",
]);
tournamentOfChristmas([
  "3",
  "darts",
  "lose",
  "handball",
  "lose",
  "judo",
  "win",
  "Finish",
  "snooker",
  "lose",
  "swimming",
  "lose",
  "squash",
  "lose",
  "table tennis",
  "win",
  "Finish",
  "volleyball",
  "win",
  "basketball",
  "win",
  "Finish",
]);
