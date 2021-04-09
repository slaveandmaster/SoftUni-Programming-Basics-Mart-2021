function numbersDivisibleby9(input) {
    const numOne = Number(input[0]);
    const numTwo = Number(input[1]);
    let sum = 0;
    let numbers = [];
    for (let index = numOne; index <= numTwo; index++) {
        if (index % 9 == 0) {
            sum +=index;
            numbers.push(index);
        }
        
    }
    console.log(`The sum: ${sum}`)
    console.log(numbers.join("\n"));
}
numbersDivisibleby9(["100","200"]);