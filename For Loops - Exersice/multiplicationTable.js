function multiplicationTable(input) {
    let multiplayer = Number(input[0]);
    for (let index = 1; index <= 10; index++) {
        console.log(index + " * " + multiplayer + " = " + index * multiplayer +"");
        
    }
}
multiplicationTable(["5"]);