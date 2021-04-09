function fishingBoat(input) {
  const budget = Number(input[0]);
  const season = input[1];
  const countFisherMan = Number(input[2]);
  let price = 0;

  //     Цената зависи от сезона:
  // ⦁	Цената за наем на кораба през пролетта е  3000 лв.
  // ⦁	Цената за наем на кораба през лятото и есента е  4200 лв.
  // ⦁	Цената за наем на кораба през зимата е  2600 лв.
  // В зависимост от броя си групата ползва отстъпка:
  // ⦁	Ако групата е до 6 човека включително  –  отстъпка от 10%.
  // ⦁	Ако групата е от 7 до 11 човека включително  –  отстъпка от 15%.
  // ⦁	Ако групата е от 12 нагоре  –  отстъпка от 25%.
  // Рибарите ползват допълнително 5% отстъпка ако са четен брой освен ако не е есен - тогава нямат допълнителна отстъпка.

  switch (season) {
    case "Spring":
      price = 3000;
      break;
    case "Summer":
    case "Autumn":
      price = 4200;
      break;
    case "Winter":
      price = 2600;
      break;
    default:
      break;
  }
  if (countFisherMan <= 6) {
    price *= 0.9;
  } else if (countFisherMan <= 11) {
    price *= 0.85;
  } else if (countFisherMan > 12) {
    price *= 0.75;
  }

  if (countFisherMan % 2 === 0 && season !== "Autumn") {
    price *= 0.95;
  }

  // Изход
  // Да се отпечата на конзолата един ред:
  // ⦁	Ако бюджетът е достатъчен:
  // "Yes! You have {останалите пари} leva left."
  if (budget >= price) {
    console.log(`Yes! You have ${(budget - price).toFixed(2)} leva left.`);
  } else {
    console.log(
      `Not enough money! You need ${(price - budget).toFixed(2)} leva.`
    );
  }
  // ⦁	Ако бюджетът НЕ Е достатъчен:
  // "Not enough money! You need {сумата, която не достига} leva."
  // Сумите трябва да са форматирани с точност до два знака след десетичната запетая.
}
fishingBoat(["3000", "Summer", "11"]);
fishingBoat(["3600", "Autumn", "6"]);
fishingBoat(["2000", "Winter", "13"]);
