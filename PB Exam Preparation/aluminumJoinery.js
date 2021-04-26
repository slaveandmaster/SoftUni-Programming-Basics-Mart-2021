function aluminumJoinery(input) {
  const countJoinery = Number(input[0]);
  const typeJoinery = input[1];
  const delivery = input[2];
  let discount = 0;
  let price = 0;
  switch (typeJoinery) {
    case "90X130":
      price = 110 * countJoinery;
      break;
    case "100X150":
      price = 140 * countJoinery;
      break;
    case "130X180":
      price = 190 * countJoinery;
      break;
    case "200X300":
      price = 250 * countJoinery;
      break;

    default:
      break;
  }
 
  if (countJoinery > 60 && typeJoinery === "90X130") {
    discount = 0.08;
    price = price - price * discount;
  } else if (countJoinery > 30 && typeJoinery === "90X130") {
    discount = 0.05;
    price = price - price * discount;
  } else if (countJoinery > 80 && typeJoinery === "100X150") {
    discount = 0.1;
    price = price - price * discount;
  } else if (countJoinery > 40 && typeJoinery === "100X150") {
    discount = 0.06;
    price = price - price * discount;
  } else if (countJoinery > 50 && typeJoinery === "130X180") {
    discount = 0.12;
    price = price - price * discount;
  } else if (countJoinery > 20 && typeJoinery === "130X180") {
    discount = 0.07;
    price = price - price * discount;
  } else if (countJoinery > 50 && typeJoinery === "200X300") {
    discount = 0.14;
    price = price - price * discount;
  } else if (countJoinery > 20 && typeJoinery === "200X300") {
    discount = 0.09;
    price = price - price * discount;
  } else if (countJoinery < 10) {
    console.log("Invalid order");
    return;
  }
  if (delivery === "With delivery") {
    price += 60;
    if (countJoinery > 99) {
        price = price - price * 0.04;
    }
    console.log(`${price.toFixed(2)} BGN`);
  } 
  else {
    if (countJoinery > 99) {
        price = price - price * 0.04;
    }
    console.log(`${price.toFixed(2)} BGN`);
  }
}
aluminumJoinery(["40", "90X130", "Without delivery"]);
aluminumJoinery(["105", "100X150", "With delivery"]);
aluminumJoinery(["2", "130X180", "With delivery"]);
