function maxNumber(input) {
    let index = 0;
    let num = input[index];
    let maxNumber = Number.MIN_SAFE_INTEGER;

    while (num !== "Stop") {
        let digit = Number(num);
        if (digit > maxNumber) {
            maxNumber = digit;
        }
        index++;
        num = input[index];
    }
    console.log(maxNumber);
}
maxNumber(["100",
"99",
"80",
"70",
"Stop"])
maxNumber(["-10",
"20",
"-30",
"Stop"])
maxNumber(["45",
"-20",
"7",
"99",
"Stop"])
maxNumber(["999",
"Stop"])