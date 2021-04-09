function hotelRoom(input) {
  const month = input[0];
  const nigths = Number(input[1]);
  let studioPrice = 0;
  let aparatmentPrice = 0;
  let discount = 0;
  let appDiscount = 0;
  // Вход
  // Получават се 2 аргумента:
  // ⦁	 месецът – May, June, July, August, September или October
  // ⦁	броят на нощувките – цяло число в интервала [0 … 200]
  // Изход
  // Да се отпечатат на конзолата 2 реда:
  // ⦁	На първия ред: “Apartment: {цена за целият престой} lv.”
  // ⦁	На втория ред: “Studio: {цена за целият престой} lv.”
  // Цената за целия престой форматирана с точност до два знака след десетичната запетая.
  switch (month) {
    case "May":
    case "October":
      studioPrice = 50;
      aparatmentPrice = 65;
      break;
    case "June":
    case "September":
      studioPrice = 75.2;
      aparatmentPrice = 68.7;
      break;
    case "July":
    case "August":
      studioPrice = 76;
      aparatmentPrice = 77;
      break;
    default:
      break;
  }
  if (nigths > 7 && nigths <= 14 && (month === "May" || month === "October")) {
      discount = 0.95;
  }
  else if (nigths > 14 && (month === "May" || month === "October")) {
      discount = 0.7;
  }
  else if (nigths > 14 && (month === "June" || month === "September")) {
      discount = 0.8;
  }

  if (nigths > 14) {
      appDiscount = 0.9;
  }
  aparatmentPrice = appDiscount !== 0 ? (nigths * aparatmentPrice * appDiscount) : aparatmentPrice * nigths;
  studioPrice = discount !== 0 ? (nigths * studioPrice * discount) : studioPrice * nigths;
  console.log(`Apartment: ${(aparatmentPrice).toFixed(2)} lv.`)
  console.log(`Studio: ${(studioPrice).toFixed(2)} lv.`)
}
hotelRoom(["May", "15"]);
hotelRoom(["June", "14"]);
hotelRoom(["August", "20"]);
