function movie(input) {
    const budget = Number(input[0]);
    const statistics = Number(input[1]);
    const clothesPrice = Number(input[2]);
    let sum = 0;
    let moneyForMovie = 0;
    let discount = 0;
    let totalMoney = 0;
    //пресмятане на парите необходими за филма
    moneyForMovie = budget * 0.10;
    // пресмятане парите непбходими за дрехи за всички статисти
    let clothesMoney = clothesPrice * statistics
    //проверка за отстъпка
    if (statistics > 150) {
        clothesMoney = clothesMoney - ( clothesMoney * 0.10);
    }
    //сумиране на всички разходи
    totalMoney = moneyForMovie + clothesMoney;
    //проверка дали парите са достатъчни за започване на филма
    if (totalMoney <= budget) {
        //отпечатване на резултат
        console.log("Action!");
        console.log(`Wingard starts filming with ${(budget - totalMoney).toFixed(2)} leva left.`)
    }
    else {
        //отпечатване на резултат
        console.log("Not enough money!");
        console.log(`Wingard needs ${(totalMoney - budget).toFixed(2)} leva more.`)
    }

}
movie(["20000", "120", "55.5"]);
movie(["15437.62", "186", "57.99"]);
movie(["9587.88", "222", "55.68"]);
