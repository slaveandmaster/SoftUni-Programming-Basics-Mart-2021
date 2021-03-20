function pets(input) {
    const days = Number(input[0]);
    const foodsInKg = Number(input[1]);
    const dogFoodsPerDay = Number(input[2]);
    const catFoodsPerDay = Number(input[3]);
    let turtleFoodInGrams = Number(input[4]);
    turtleFoodInGrams = turtleFoodInGrams / 1000;
    let allFoods = 0;
    allFoods = (dogFoodsPerDay * days) + (catFoodsPerDay * days) + (turtleFoodInGrams  * days);
    if (foodsInKg >= allFoods) {
        let diff = Math.floor(foodsInKg - allFoods);
        console.log(`${diff} kilos of food left.`);
    }
    else {
        let diff = Math.ceil(allFoods - foodsInKg);
        console.log(`${diff} more kilos of food are needed.`)
    }

}
pets(["2",
    "10",
    "1",
    "1",
    "1200"])
pets(["5",
    "10",
    "2.1",
    "0.8",
    "321"])