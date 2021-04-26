function courierExpress(input) {
  const packageInKg = Number(input[0]);
  const typeService = input[1];
  const distanceInKm = Number(input[2]);
  let delivery = 0;
  let price = 0;
  let overpricing = 0;
  let priceTransport = 0;
  let overpricingKm = 0;
  let totalOverpriceing = 0;
  let total = 0;
  switch (typeService) {
    case "standard":
      delivery = 3;
      if (packageInKg >= 90 && packageInKg < 150) {
        price = 0.2;
        total = distanceInKm * price;
      } else if (packageInKg >= 40 && packageInKg < 90) {
        price = 0.15;
        total = distanceInKm * price;
      } else if (packageInKg >= 10 && packageInKg < 40) {
        price = 0.1;
        total = distanceInKm * price;
      } else if (packageInKg > 1 && packageInKg < 10) {
        price = 0.05;
        total = distanceInKm * price;
      } else if (packageInKg < 1) {
        price = 0.03;
        total = distanceInKm * price;
      }
      break;
    case "express":
      delivery = 1;
      if (packageInKg >= 90 && packageInKg < 150) {
        price = 0.2;
        priceTransport = distanceInKm * price; 
        overpricing = price * 1 / 100;
        overpricingKm = packageInKg * overpricing;
        totalOverpriceing = distanceInKm * overpricingKm;
        total = priceTransport + totalOverpriceing;
      } else if (packageInKg >= 40 && packageInKg < 90) {
        price = 0.15;
        priceTransport = distanceInKm * price;
        overpricing = price * 2 / 100;
        overpricingKm = packageInKg * overpricing;
        totalOverpriceing = distanceInKm * overpricingKm;
        total = priceTransport + totalOverpriceing;
      } else if (packageInKg >= 10 && packageInKg < 40) {
        price = 0.1;
        priceTransport = distanceInKm * price;
        overpricing = price * 5 / 100;
        overpricingKm = packageInKg * overpricing;
        totalOverpriceing = distanceInKm * overpricingKm;
        total = priceTransport + totalOverpriceing;
      } else if (packageInKg > 1 && packageInKg < 10) {
        price = 0.05;
        priceTransport = distanceInKm * price;
        overpricing = price * 40 / 100;
        overpricingKm = packageInKg * overpricing;
        totalOverpriceing = distanceInKm * overpricingKm;
        total = priceTransport + totalOverpriceing;
      } else if (packageInKg < 1) {
        price = 0.03;
        priceTransport = distanceInKm * price;
        overpricing = price * 80 / 100;
        overpricingKm = packageInKg * overpricing;
        totalOverpriceing = distanceInKm * overpricingKm;
        total = priceTransport + totalOverpriceing;
      }
      break;
    default:
      break;
  }

  console.log(
    `The delivery of your shipment with weight of ${packageInKg.toFixed(3)} kg. would cost ${total.toFixed(2)} lv.`
  );
}
courierExpress(["1.5", "standard", "100"]);
courierExpress(["87", "express", "130"]);
courierExpress(["20", "standard", "349"]);
