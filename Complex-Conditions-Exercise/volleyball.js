function volleyball(input) {
    const year = input[0];
    const hollydays = Number(input[1]);
    const countWeekendsInHomeTown = Number(input[2]);
    const weekendInSofia = 48 - countWeekendsInHomeTown;
    let weekendGameInSofia = 0;
    let weekendGameInHollydays = 0;
    let totalGameWeekends = 0;

//     48 уикенда в годината, разделени по следния начин:
// ⦁	46 уикенда в София  46 * 3 / 4  34.5 съботни игри в София
// ⦁	2 уикенда в родния си град  2 недели  2 игри в неделя в родния град
// 5 празника:
// ⦁	5 * 2/3  3.333 игри в София в празничен ден
// Общо игри през уикенди и празници в София и в родния град: 34.5 + 2 + 3.333  39.833
// Годината е високосна:
// ⦁	Влади играе допълнителни 15% * 39.833  5.975 игри волейбол
// Общо игри през цялата година:
// ⦁	39.833 + 5.975 = 45.808 игри
// ⦁	Резултатът е 45 (закръгля се надолу)
weekendGameInSofia = weekendInSofia * (3.0 / 4);
weekendGameInHollydays = hollydays * (2.0 / 3);
totalGameWeekends = weekendGameInSofia + weekendGameInHollydays + countWeekendsInHomeTown;
if (year === "leap") {
    let additionalGames = totalGameWeekends * 15 / 100;
    totalGameWeekends += additionalGames;
}
console.log(`${Math.floor(totalGameWeekends)}`);

// ⦁	Пресметнете уикендите в София (48 минус уикендите в родния град). 
// Пресметнете броя игри в уикендите в София: умножете уикендите в София с (3.0 / 4). 
// Обърнете внимание, че трябва да се използва дробно деление (3.0 / 4), а не целочислено (3 / 4).
// ⦁	Пресметнете броя игри в родния град. Те са точно колкото са пътуванията до родния град.
// ⦁	Пресметнете броя игри в празничен ден. Те са броя празници умножени по (2.0 / 3).
// ⦁	Сумирайте броя на всички игри. Той е дробно число. Не бързайте да закръгляте още.
// ⦁	Ако годината е високосна, добавете 15% към общия брой игри.
// ⦁	Накрая закръглете надолу до най-близкото цяло число.

}
volleyball(["normal", "3", "2"]);
volleyball(["leap", "2", "3"]);
volleyball(["normal", "11", "6"]);
volleyball(["leap", "0", "1"]);
