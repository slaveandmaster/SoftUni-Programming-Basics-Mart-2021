function convertToFahrenheit(input) {
    const celsius = Number(input[0]);
    let result = 0;
    result = (celsius * 1.8) + 32;
    console.log(result.toFixed(2));

}
convertToFahrenheit(["25"]);
convertToFahrenheit(["0"]);
convertToFahrenheit(["-5.5"]);
convertToFahrenheit(["32.3"]);