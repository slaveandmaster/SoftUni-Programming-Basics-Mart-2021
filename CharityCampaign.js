function solve(input) {
    let sum = 0;
    const cakePrices = 45;
    const wafflesPrice = 5.8;
    const pancakePrice = 3.20;
    const dayCampaing = Number(input[0]);
    const countCooks = Number(input[1]);
    const totalCakes = Number(input[2]);
    const totalWaffles = Number(input[3]);
    const totalPancakes = Number(input[4]);

    const totalCakesMoney = cakePrices * totalCakes;
    const totalWafflesMoney = wafflesPrice * totalWaffles;
    const totalPancakeMoney = pancakePrice * totalPancakes;
    let sumPerDay = (totalCakesMoney + totalWafflesMoney + totalPancakeMoney) * countCooks;
    sum = sumPerDay * dayCampaing;

    console.log(`${sum - (sum / 8)}`);

}
solve(["23", "8", "14", "30", "16"]);
