function agencyProfit(input) {
  const airCompany = input[0];
  const adaultTickets = Number(input[1]);
  const kidsTicket = Number(input[2]);
  let adultPriceTicket = Number(input[3]);
  const priceService = Number(input[4]);

  let totalSum = 0;
  let kidsTicketPrice = adultPriceTicket - (adultPriceTicket * 0.7);
  adultPriceTicket = adultPriceTicket + priceService;
  totalSum =
    adaultTickets * adultPriceTicket + kidsTicket * (kidsTicketPrice + priceService);
  console.log(
    `The profit of your agency from ${airCompany} tickets is ${(
      totalSum * 0.2
    ).toFixed(2)} lv.`
  );
}
//agencyProfit(["WizzAir", "15", "5", "120", "40"]);
agencyProfit(["Ryanair", "60", "23", "158.96", "39.12"]);
