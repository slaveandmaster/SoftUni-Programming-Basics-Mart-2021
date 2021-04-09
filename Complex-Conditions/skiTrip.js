function skiTrip(input) {
  // ⦁	"room for one person" – 18.00 лв за нощувка
  // ⦁	"apartment" – 25.00 лв за нощувка
  // ⦁	"president apartment" – 35.00 лв за нощувка
  const days = Number(input[0]);
  const room = input[1];
  const grade = input[2];
  const countNigths = days - 1;
  let price = 0;

  switch (room) {
    case "room for one person":
      price = 18 * countNigths;
      break;
    case "apartment":
      price = 25 * countNigths;
      if (countNigths < 10) {
        price = price - price * 0.3;
      } else if (countNigths >= 10 && countNigths <= 15) {
        price = price - price * 0.35;
      } else if (countNigths > 15) {
        price = price - price * 0.5;
      }
      break;
    case "president apartment":
      price = 35 * countNigths;
      if (countNigths < 10) {
        price = price - price * 0.1;
      } else if (countNigths >= 10 && countNigths <= 15) {
        price = price - price * 0.15;
      } else if (countNigths > 15) {
        price = price - price * 0.2;
      }
      break;
    default:
      break;
  }

  //   След престоя, оценката на Атанас за услугите на хотела може да е позитивна (positive) или негативна (negative) .
  //    Ако оценката му е позитивна, към цената с вече приспаднатото намаление Атанас добавя 25% от нея.
  //    Ако оценката му е негативна приспада от цената 10%.
  if (grade === "positive") {
    //TODO
    price += price * 0.25;
    console.log(`${price.toFixed(2)}`);
  } else if (grade === "negative") {
    //TODO
    price -= price * 0.1;
    console.log(`${price.toFixed(2)}`);
  }
}
skiTrip(["14", "apartment", "positive"]);
skiTrip(["30", "president apartment", "negative"]);
skiTrip(["12", "room for one person", "positive"]);
skiTrip(["2", "apartment", "positive"]);
