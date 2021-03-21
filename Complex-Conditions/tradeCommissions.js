function tradeCommissions(input) {
  let commissions = 0;
  const city = input[0];
  const sells = input[1];

  switch (city) {
    case "Sofia":
      if (0 <= sells && sells <= 500) {
        commissions = (sells * 5) / 100;
        console.log(commissions.toFixed(2));
      } else if (500 < sells && sells <= 1000) {
        commissions = (sells * 7) / 100;
        console.log(commissions.toFixed(2));
      } else if (1000 < sells && sells <= 10000) {
        commissions = (sells * 8) / 100;
        console.log(commissions.toFixed(2));
      } else if (sells > 10000) {
        commissions = (sells * 12) / 100;
        console.log(commissions.toFixed(2));
      }
      break;
    case "Varna":
      if (0 <= sells && sells <= 500) {
        commissions = (sells * 4.5) / 100;
        console.log(commissions.toFixed(2));
      } else if (500 < sells && sells <= 1000) {
        commissions = (sells * 7.5) / 100;
        console.log(commissions.toFixed(2));
      } else if (1000 < sells && sells <= 10000) {
        commissions = (sells * 10) / 100;
        console.log(commissions.toFixed(2));
      } else if (sells > 10000) {
        commissions = (sells * 13) / 100;
        console.log(commissions.toFixed(2));
      }
      break;
    case "Plovdiv":
      if (0 <= sells && sells <= 500) {
        commissions = (sells * 5.5) / 100;
        console.log(commissions.toFixed(2));
      } else if (500 < sells && sells <= 1000) {
        commissions = (sells * 8) / 100;
        console.log(commissions.toFixed(2));
      } else if (1000 < sells && sells <= 10000) {
        commissions = (sells * 12) / 100;
        console.log(commissions.toFixed(2));
      } else if (sells > 10000) {
        commissions = (sells * 14.5) / 100;
        console.log(commissions.toFixed(2));
      } else if (sells < 0) {
        console.log("error");
      }
      break;
    default:
      console.log("error");
      break;
  }
}
tradeCommissions(["Sofia", "1500"]);
tradeCommissions(["Plovdiv", "499.99"]);
tradeCommissions(["Varna", "3874.50"]);
tradeCommissions(["Kaspichan", "-50"]);
