function cinema(input) {
    const type = input[0];
    const rows = Number(input[1]);
    const cols = Number(input[2]);
    let price = 0;
    if (type === "Premiere") {
        price = (rows * cols) * 12;
        console.log(`${price.toFixed(2)} leva`)
    }
    else if (type === "Normal") {
        price = (rows * cols) * 7.5;
        console.log(`${price.toFixed(2)} leva`)
    }
    else if (type === "Discount") {
        price = (rows * cols) * 5;
        console.log(`${price.toFixed(2)} leva`)
    }
}
cinema(["Premiere", "10", "12"]);
cinema(["Normal", "21", "13"]);
cinema(["Discount", "12", "30"]);
