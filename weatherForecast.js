function weather(input) {
    const forecast = input[0];
    if (forecast === "sunny") {
        console.log(`It's warm outside!`);
    }
    else {
        console.log(`It's cold outside!`);
    }
}
weather(["sunny"]);
weather(["cloudy"]);
weather(["snowy"]);