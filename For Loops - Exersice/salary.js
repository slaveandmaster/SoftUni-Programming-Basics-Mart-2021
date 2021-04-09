function salary(input) {
  let num = Number(input[0]);
  let payment = Number(input[1]);
  const sites = input.slice(2);
  for (let index = 0; index <= num; index++) {
    const element = sites[index];
    if (payment <= 0) {
      console.log(`You have lost your salary.`);
      return;
    }
    if (element === "Facebook") {
      payment -= 150;
    } else if (element === "Instagram") {
      payment -= 100;
    } else if (element === "Reddit") {
      payment -= 50;
    }
  }
  console.log(payment);
}

salary([
  "10",
  "750",
  "Facebook",
  "Dev.bg",
  "Instagram",
  "Facebook",
  "Reddit",
  "Facebook",
  "Facebook",
]);
salary(["3", "500", "Github.com", "Stackoverflow.com", "softuni.bg"]);
salary(["3", "500", "Facebook", "Stackoverflow.com", "softuni.bg"]);
