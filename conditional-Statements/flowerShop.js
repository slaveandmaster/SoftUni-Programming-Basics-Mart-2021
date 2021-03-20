function flowerShop(input) {
    const countMagnolia = Number(input[0]);
    const countZiumbiul = Number(input[1]);
    const countRoses = Number(input[2]);
    const countCactus = Number(input[3]);
    const presentPrice = Number(input[4]);
    let sum = 0;
    sum = countMagnolia * 3.25 + countZiumbiul * 4 + countRoses * 3.5 + countCactus * 8;
    sum = sum * 0.95;
    if (sum >= presentPrice) {
        let rest = Math.floor(sum - presentPrice);
        console.log(`She is left with ${rest} leva.`)
    }
    else {
        let needed = Math.ceil(presentPrice - sum);
        console.log(`She will have to borrow ${needed} leva.`)
    }
}
flowerShop(["2",
    "3",
    "5",
    "1",
    "50"])

flowerShop(["15",
    "7",
    "5",
    "10",
    "100"])