function sumNumbers(input) {
    let num = Number(input[0]);
    let index = 1;
    let nextNumber = Number(input[index]);
    let sum = 0;
    while (sum < num) {
        sum = sum + nextNumber;
        index++;
        nextNumber = Number(input[index]);
    }
    console.log(sum);
}
sumNumbers(["100",
"10",
"20",
"30",
"40"])
sumNumbers(["20",
"1",
"2",
"3",
"4",
"5",
"6"])