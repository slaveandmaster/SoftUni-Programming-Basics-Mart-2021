function solve(input) {
    const pages = Number(input[0]);
    const pagesPerHour = Number(input[1]);
    const daysForReading = Number(input[2]);
    let totalBookTime  = pages / pagesPerHour;
    let result = totalBookTime / daysForReading;
    console.log(result);
}
readBooks(["212", "20", "2"]);
readBooks((["432",
"15",
"4"]))
