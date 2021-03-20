function vegetables(input) {
    const priceForKg = Number(input[0]);
    const priceForKgFruits = Number(input[1]);
    const totalKgVegetables = Number(input[2]);
    const totalKgFruits = Number(input[3]);
    let sum = 0;
    const valuteEuroToBg = 1.94;
    sum = (priceForKg * totalKgVegetables) + (priceForKgFruits * totalKgFruits);
    console.log(`${(sum / valuteEuroToBg).toFixed(2)}`);

}
vegetables(["0.194", "19.4", "10", "10"]);
