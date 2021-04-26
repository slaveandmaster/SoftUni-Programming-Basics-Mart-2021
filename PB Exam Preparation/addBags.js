function addBags(input) {
  const price = Number(input[0]);
  const kgPerLuggage = Number(input[1]);
  const days = Number(input[2]);
  const countLuggage = Number(input[3]);
  let tax = 0;
  let sum = 0;
  if (kgPerLuggage > 20) {
    tax = price;
  } else if (kgPerLuggage >= 10 && kgPerLuggage <= 20) {
    tax = price * 0.5;
  } else if (kgPerLuggage > 0) {
    tax = price * 0.2;
  }
  // tax = tax / countLuggage;
  if (days > 30) {
    sum = tax + tax * 0.1;
  } else if (days >= 7 && days <= 30) {
    sum = tax + tax * 0.15;
  } else if (days > 0) {
    sum = tax + tax * 0.4;
  }
  console.log(
    `The total price of bags is: ${(sum * countLuggage).toFixed(2)} lv.`
  );
}
addBags(["30", "18", "15", "2"]);
addBags(["25.50", "5", "36", "6"]);
addBags(["63.80", "23", "3", "1"]);
