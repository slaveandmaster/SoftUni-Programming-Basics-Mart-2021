function multiplicationTable() {
    for (let i = 1; i <= 10; i++) {
        const number = i;
        for (let j = 1; j <= 10; j++) {
            const multiplayer = j;
            console.log(`${number} * ${multiplayer} = ${number * multiplayer}`);
        }
    }
}
multiplicationTable()