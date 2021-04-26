function hairSalon(input) {
  const target = Number(input.shift());
  let service = input.shift();
  let adult = input.shift();
  let price = 0;
  let sum = 0;
  while (service !== "closed") {
    switch (service) {
      case "haircut":
        if (adult === "mens") {
          price = 15;
        } else if (adult === "ladies") {
          price = 20;
        } else if (adult === "kids") {
          price = 10;
        }
        break;
      case "color":
        if (adult === "touch up") {
          price = 20;
        } else if (adult === "full color") {
          price = 30;
        }
        break;
      default:
        break;
    }
    sum += price;
    if (sum >= target) {
      break;
    }
    service = input.shift();
    adult = input.shift();
  }
  if (sum >= target) {
    console.log(`You have reached your target for the day!`);
    console.log(`Earned money: ${sum}lv.`);
  } else {
    console.log(`Target not reached! You need ${target - sum}lv. more `);
    console.log(`Earned money: ${sum}lv.`);
  }
}
hairSalon([
  "300",
  "haircut",
  "ladies",
  "haircut",
  "kids",
  "color",
  "touch up",
  "closed",
]);
hairSalon(["50", "color", "full color", "haircut", "ladies"]);
