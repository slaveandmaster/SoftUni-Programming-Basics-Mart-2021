function cleverLily(input) {
    const age = Number(input[0]);
    const washMachinePrice = Number(input[1]);
    const toysPrice = Number(input[2]);
    let sum = 0;
    let brotherSum = 0;
    let birthdayMoney = 10;
    let countToys = 0;
    for (let index = 1; index <= age; index++) {
        if (index % 2 == 0) {
            sum = sum + birthdayMoney;
            birthdayMoney +=10;
            brotherSum +=1;
        }
        else {
            countToys++;
        }
        
    }
    let totalSum = sum + countToys * toysPrice - brotherSum;
    if (totalSum >= washMachinePrice) {
        console.log(`Yes! ${(totalSum - washMachinePrice).toFixed(2)}`)
    }
    else {
        console.log(`No! ${(washMachinePrice - totalSum).toFixed(2)}`)
    }
}
cleverLily(["10", "170", "6"]);
cleverLily(["21", "1570.98", "3"]);