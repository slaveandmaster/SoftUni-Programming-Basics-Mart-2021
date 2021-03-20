function checkNumber(input) {
    const number = Number(input[0]);
    if (number < 100) {
        console.log(`Less than 100`);
    }
    if(number >= 100 && number <= 200) {
        console.log(`Between 100 and 200`);
    }
    if (number > 200) {
        console.log(`Greater than 200`);
    }
}
checkNumber(["95"]);
checkNumber(["120"]);
checkNumber(["210"]);
