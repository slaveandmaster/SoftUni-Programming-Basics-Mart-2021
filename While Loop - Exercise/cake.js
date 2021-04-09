function cake(input) {
    let width = Number(input[0]);
    let heigth = Number(input[1]);
    let cakeSize = width * heigth;
    let cake = 0;
    let index = 2;
    let line = input[index];
    let isEnough = true;
    while (line !== "STOP") {
        cake = cake + Number(input[index]);
        if (cake >= cakeSize) {
            isEnough = false;
            break;
        }
        index++;
        line = input[index];
    }
    if (isEnough === false) {
        console.log(`No more cake left! You need ${ cake - cakeSize} pieces more.`);    
    }
    else {
        console.log(`${cakeSize - cake} pieces are left.`)
    }
}
cake(["10",
"10",
"20",
"20",
"20",
"20",
"21"])
cake(["10",
"2",
"2",
"4",
"6",
"STOP"])