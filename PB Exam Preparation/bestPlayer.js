function bestPlayer(input) {
  let command = input.shift();
  let goals = Number(input.shift());
  let player;
  let max = 0;
  while (command != "END") {
    //player = cmd;
    if (goals >= 10) {
      max = goals;
      player = command;
      break;
    } else if (goals > max) {
      max = goals;
      player = command;
    }
    command = input.shift();
    goals = Number(input.shift());
  }
  console.log(`${player} is the best player!`);
  if (max >= 3) {
    console.log(`He has scored ${max} goals and made a hat-trick !!!`);
  } else {
    console.log(`He has scored ${max} goals.`);
  }
}
bestPlayer(["Neymar", "2", "Ronaldo", "1", "Messi", "3", "END"]);
bestPlayer(["Silva", "5", "Harry Kane", "10"]);
bestPlayer(["Petrov", "2", "Drogba", "11"]);
bestPlayer(["Rooney", "1", "Junior", "2", "Paolinio", "2", "END"]);
bestPlayer(["Zidane", "1", "Felipe", "2", "Johnson", "4", "END"]);
