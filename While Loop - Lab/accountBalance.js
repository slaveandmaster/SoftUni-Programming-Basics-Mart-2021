function accountBalance(input) {
    let index = 0;
    let money = input[index];
    let totalMoney = 0;
    while (money !== "NoMoreMoney") {
        let myMoney = Number(input[index]);
        if (myMoney < 0) {
            console.log(`Invalid operation!`);
            break;
        }
        totalMoney += Number(money);
        console.log(`Increase: ${myMoney.toFixed(2)}`);
        index++;
        money = input[index];
    }
    console.log(`Total: ${totalMoney.toFixed(2)}`);
}
accountBalance(["5.51", 
"69.42",
"100",
"NoMoreMoney"])
accountBalance(["120",
"45.55",
"-150"])