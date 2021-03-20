function fuelTank(input) {
  const type = input[0];
  const litersOfFuel = Number(input[1]);
  if (type === "Diesel") {
    if (litersOfFuel >= 25) {
      console.log(`You have enough ${type.toLowerCase()}.`);
    } else {
      console.log(`Fill your tank with ${type.toLowerCase()}!`);
    }
  } else if (type === "Gasoline") {
    if (litersOfFuel >= 25) {
      console.log(`You have enough ${type.toLowerCase()}.`);
    } else {
      console.log(`Fill your tank with ${type.toLowerCase()}!`);
    }
  } else if (type === "Gas") {
    if (litersOfFuel >= 25) {
      console.log(`You have enough ${type.toLowerCase()}.`);
    } else {
      console.log(`Fill your tank with ${type.toLowerCase()}!`);
    }
  } else if (type !== "Diesel" || type !== "Gas" || type !== "Gasoline") {
    console.log(`Invalid fuel!`);
  }
}
fuelTank(["Diesel", "10"]);
fuelTank(["Gasoline", "40"]);
fuelTank(["Gas", "25"]);
fuelTank(["Kerosene", "200"]);
