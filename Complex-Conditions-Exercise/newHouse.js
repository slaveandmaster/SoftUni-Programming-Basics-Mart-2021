function newHouse(input) {
  const typeFlower = input[0];
  const countFlower = Number(input[1]);
  const budget = Number(input[2]);
  let price = 0;
  //Решение с условни конструкции
  //⦁	Вид цветя - текст с възможности - "Roses", "Dahlias", "Tulips", "Narcissus", "Gladiolus
  //   if (typeFlower === "Roses") {
  //     if (countFlower > 80) {
  //       price = countFlower * 5;
  //       price = price * 0.9;
  //     } else {
  //       price = countFlower * 5;
  //     }
  //   } else if (typeFlower === "Dahlias") {
  //     if (countFlower > 90) {
  //       price = countFlower * 3.8;
  //       price = price * 0.85;
  //     } else {
  //       price = countFlower * 3.8;
  //     }
  //   } else if (typeFlower === "Tulips") {
  //     if (countFlower > 80) {
  //       price = countFlower * 2.8;
  //       price = price * 0.85;
  //     } else  {
  //       price = countFlower * 2.8;
  //     }
  //   } else if (typeFlower === "Narcissus") {
  //     if (countFlower < 120) {
  //       price = countFlower * 3;
  //       price = price + price * 0.15;
  //     } else {
  //       price = countFlower * 3;
  //     }
  //   } else if (typeFlower === "Gladiolus") {
  //     if (countFlower < 80) {
  //       price = countFlower * 2.5;
  //       price = price + price * 0.2;
  //     } else {
  //       price = countFlower * 2.5;
  //     }
  //   }

  switch (typeFlower) {
    case "Roses":
      if (countFlower > 80) {
        price = (countFlower * 5) * 0.9;
        //price = price * 0.9;
      } else {
        price = countFlower * 5;
      }
      break;
    case "Dahlias":
      if (countFlower > 90) {
        price = (countFlower * 3.8) * 0.85;
        //price = price * 0.85;
      } else {
        price = countFlower * 3.8;
      }
      break;
    case "Tulips":
      if (countFlower > 80) {
        price = (countFlower * 2.8) * 0.85;
        //price = price * 0.85;
      } else  {
        price = countFlower * 2.8;
      }
      break;
    case "Narcissus":
      if (countFlower < 120) {
        price = countFlower * 3 + (countFlower * 3) * 0.15;
        //price = price + price * 0.15;
      } else {
        price = countFlower * 3;
      }
      break;
    case "Gladiolus":
      if (countFlower < 80) {
        price = countFlower * 2.5 + (countFlower * 2.5) * 0.2;
        //price = price + price * 0.2;
      } else {
        price = countFlower * 2.5;
      }
      break;
    default:
      break;
  }

  if (price > budget) {
    console.log(
      `Not enough money, you need ${(price - budget).toFixed(2)} leva more.`
    );
  } else 
    console.log(
      `Hey, you have a great garden with ${countFlower} ${typeFlower} and ${(
        budget - price
      ).toFixed(2)} leva left.`
    );
  
}
newHouse(["Roses", "55", "250"]);
newHouse(["Tulips", "88", "260"]);
newHouse(["Narcissus", "119", "360"]);
