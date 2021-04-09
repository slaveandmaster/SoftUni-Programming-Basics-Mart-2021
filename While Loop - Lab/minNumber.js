function minNumber(input) {
    let index = 0;
    let num = input[index];
    let minNumber = Number.MAX_SAFE_INTEGER;
    while (num !== "Stop") {
        let digit = Number(num);
        if (digit < minNumber) {
            minNumber = digit;
        }
        index++;
        num = input[index];
    }
    console.log(minNumber);
}
minNumber(["100",
"99",
"80",
"70",
"Stop"])
minNumber(["-10",
"20",
"-30",
"Stop"])
minNumber(["45",
"-20",
"7",
"99",
"Stop"])
minNumber(["999",
"Stop"])