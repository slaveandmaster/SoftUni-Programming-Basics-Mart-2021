function toysOrder(input) {
  //const prices for products
  const puzzlePrice = 2.6;
  const speakingDoll = 3;
  const bear = 4.1;
  const minion = 8.2;
  const truck = 2;
  let spendMoney = 0;
  let totalCountOrders = 0;
  let sum = 0;
  let discount = 0;
  let totalPrice = 0;
  //inputs
  const priceTrip = Number(input[0]);
  const countPuzzles = Number(input[1]);
  const countDolls = Number(input[2]);
  const countBears = Number(input[3]);
  const countMinions = Number(input[4]);
  const countTrucks = Number(input[5]);

  totalCountOrders =
    countPuzzles + countDolls + countBears + countMinions + countTrucks;
  sum =
    countPuzzles * puzzlePrice +
    countDolls * speakingDoll +
    countBears * bear +
    countMinions * minion +
    countTrucks * truck;
  //check for discount
  if (totalCountOrders >= 50) {
    discount = sum * 0.25;
    totalPrice = sum - discount;
  } else {
    totalPrice = sum;
  }
  let rent = totalPrice * 0.1;
  spendMoney = totalPrice - rent;
  //check for trip
  if (spendMoney >= priceTrip) {
    console.log(`Yes! ${(spendMoney - priceTrip).toFixed(2)} lv left.`);
  } else {
    console.log(
      `Not enough money! ${(priceTrip - spendMoney).toFixed(2)} lv needed.`
    );
  }
}
toysOrder(["40.8", "20", "25", "30", "50", "10"]);
toysOrder(["320", "8", "2", "5", "5", "1"]);
