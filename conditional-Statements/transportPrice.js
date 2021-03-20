function transportPrice(input) {
    const km = Number(input[0]);
    const dayState = input[1];
    let price = 0;
    if (km >= 100) {
        price = 0.06 * km;
        console.log(`${price.toFixed(2)}`);
    }
    else if(km >= 20) {
        price = 0.09 * km;
        console.log(`${price.toFixed(2)}`);
    }
    else if (km < 20 ) {
        if (dayState === "night") {
            price = (0.90 * km) + 0.70;
            console.log(price.toFixed(2));           
        }
        else {
            price = (0.79 * km) + 0.70;
            console.log(price.toFixed(2));
        }
    }
}
transportPrice(["5","day"]);
transportPrice(["7","night"]);
transportPrice(["25","day"]);
transportPrice(["180","night"]);