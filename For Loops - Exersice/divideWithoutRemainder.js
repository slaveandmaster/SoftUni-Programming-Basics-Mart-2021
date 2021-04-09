function divideWithoutRemainder(input) {
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    const num = Number(input[0]);
    const numbers = input.slice(1);
    for (let index = 0; index < numbers.length; index++) {
        const element = numbers[index];
        if (element % 2 === 0) {
            p1++;
        }
        if (element % 3 === 0) {
            p2++;
        }
        if (element % 4 === 0) {
            p3++;
        }
    }
    console.log(`${(p1 / num * 100).toFixed(2)}%`);
    console.log(`${(p2 / num * 100).toFixed(2)}%`);
    console.log(`${(p3 / num * 100).toFixed(2)}%`);
}
divideWithoutRemainder(["10",
"680",
"2",
"600",
"200",
"800",
"799",
"199",
"46",
"128",
"65"])
divideWithoutRemainder(["3",
"3",
"6",
"9"])
