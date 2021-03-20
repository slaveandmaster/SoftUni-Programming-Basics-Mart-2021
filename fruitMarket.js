function solve(input) {
  let totalMoney = 0;
  const strawsberryPrice = Number(input[0]);
  const bananasInKilograms = Number(input[1]);
  const orangesInKilograms = Number(input[2]);
  const raspberryInKilograms = Number(input[3]);
  const strawberryInKilograms = Number(input[4]);

  const raspberryPrice = strawsberryPrice / 2;
  const orangesPrice = raspberryPrice - (0.4 * raspberryPrice);
  const banansPrice = raspberryPrice - (0.8 * raspberryPrice);

  const totalRaspberrySum = raspberryPrice * raspberryInKilograms;
  const totalOrangesSum = orangesInKilograms * orangesPrice;
  const totalBanansSum = bananasInKilograms * banansPrice;
  const totalStrawsberrySum = strawberryInKilograms * strawsberryPrice;
  totalMoney =
    totalBanansSum + totalOrangesSum + totalRaspberrySum + totalStrawsberrySum;
  console.log(totalMoney);
}
solve(["48", "10", "3.3", "6.5", "1.7"]);
solve(["63.5", "3.57", "6.35", "8.15", "2.5"]);
Math.floor()