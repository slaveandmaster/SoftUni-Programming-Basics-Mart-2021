function excursion(input) {
  const nightPrice = 20;
  const card = 1.6;
  const ticket = 6;
  const countPeople = Number(input[0]);
  const countNights = Number(input[1]);
  const countCards = Number(input[2]);
  const countTickets = Number(input[3]);
  let total = 0;
  total = countNights * nightPrice + countCards * card + countTickets * ticket;
  total = total * countPeople;
  total = total + (total * 25 / 100);
  console.log(total.toFixed(2));
}

excursion(["20", "14", "30", "6"]);
excursion(["131", "9", "33", "46"]);
