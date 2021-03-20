function harvest(input) {
  const area = Number(input[0]);
  const grapesPerMeter = Number(input[1]);
  const grapesForWine = Number(input[2]);
  const countWorkers = Number(input[3]);
  const totalGrapes = area * grapesPerMeter;
  const wineBottles = (0.4 * totalGrapes) / 2.5;
  if (wineBottles >= grapesForWine) {
    const leftWine = Math.ceil(wineBottles - grapesForWine);
    const winePerWorkers = Math.ceil(leftWine / countWorkers);
    console.log(`Good harvest this year! Total wine: ${Math.floor(wineBottles)} liters.`);
    console.log(
      `${leftWine} liters left -> ${winePerWorkers} liters per person.`
    );
  } else {
    const leftWine = Math.floor(grapesForWine - wineBottles);
    console.log(
      `It will be a tough winter! More ${leftWine} liters wine needed.`
    );
  }
}

harvest(["650", "2", "175", "3"]);
harvest(["1020", "1.5", "425", "4"]);
