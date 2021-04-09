function sumOfNumbers(params) {
    const num = params[0];
    let sum = 0;
    for (let index = 0; index < num.length; index++) {
        sum += Number(num[index]);
        
    }
    console.log(`The sum of the digits is:${sum}`)
}
sumOfNumbers(["564891"]);