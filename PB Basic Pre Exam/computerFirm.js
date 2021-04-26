function computerFirm(input) {
  const numberComputers = Number(input.shift());
  const orders = input.slice(0).map(Number);
  let total = 0;
  let average = 0;
  for (let i = 0; i < orders.length; i++) {
    const element = orders[i];
    let raiting = element % 10;
    average += raiting;
    let posibleOrders = Math.floor(element / 10);
    switch (raiting) {
      case 2:
        total += posibleOrders * 0;
        break;
      case 3:
        total += posibleOrders * 0.5;
        break;
      case 4:
        total += posibleOrders * 0.7;
        break;
      case 5:
        total += posibleOrders * 0.85;
        break;
      case 6:
        total += posibleOrders * 1;
        break;
      default:
        break;
    }
  }
  console.log(total.toFixed(2));
  console.log((average / numberComputers).toFixed(2));
}
computerFirm(["3", "103", "103", "103"]);
computerFirm(["5", "122", "156", "202", "214", "185"]);
computerFirm(["2", "204", "206"]);
