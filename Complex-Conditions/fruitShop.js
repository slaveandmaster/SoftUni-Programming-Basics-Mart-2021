function fruitShop(input) {
    let price = 0;
    const fruit = input[0];
    const day = input[1];
    const quantity = Number(input[2]);

    if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday") {
        if (fruit === "banana") {
            price = 2.5 * quantity;
            console.log(price.toFixed(2));
        }
        else if (fruit === "apple") {
            price = 1.2 * quantity;
            console.log(price.toFixed(2));
        }
        else if (fruit === "orange") {
            price = 0.85 * quantity;
            console.log(price.toFixed(2));
        }
        else if (fruit === "grapefruit") {
            price = 1.45 * quantity;
            console.log(price.toFixed(2));
        }
        else if (fruit === "kiwi") {
            price = 2.7 * quantity;
            console.log(price.toFixed(2));
        }
        else if (fruit === "pineapple") {
            price = 5.5 * quantity;
            console.log(price.toFixed(2));
        }
        else if (fruit === "grapes") {
            price = 3.85 * quantity;
            console.log(price.toFixed(2));
        }
        else {
            console.log("error");
        }
    }
    else if (day === "Saturday" || day === "Sunday") {
        if (fruit === "banana") {
            price = 2.7 * quantity;
            console.log(price.toFixed(2));
        }
        else if (fruit === "apple") {
            price = 1.25 * quantity;
            console.log(price.toFixed(2));
        }
        else if (fruit === "orange") {
            price = 0.90 * quantity;
            console.log(price.toFixed(2));
        }
        else if (fruit === "grapefruit") {
            price = 1.60 * quantity;
            console.log(price.toFixed(2));
        }
        else if (fruit === "kiwi") {
            price = 3.00 * quantity;
            console.log(price.toFixed(2));
        }
        else if (fruit === "pineapple") {
            price = 5.6 * quantity;
            console.log(price.toFixed(2));
        }
        else if (fruit === "grapes") {
            price = 4.20 * quantity;
            console.log(price.toFixed(2));
        }
        else {
            console.log("error");
        }
    }
    else {
        console.log("error");
    }
}
fruitShop(["apple", "Tuesday", "2"]);
fruitShop(["orange", "Sunday", "3"]);
fruitShop(["kiwi", "Monday", "2.5"]);
fruitShop(["grapes", "Saturday", "0.5"]);
fruitShop(["tomato","Monday","0.5"])