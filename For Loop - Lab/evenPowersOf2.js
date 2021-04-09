function evenPowersOf2(params) {
    const power = Number(params);
    let num = 1;
    for (let index = 0; index <= power; index+=2) {
        console.log(num);
        num = num * 2 * 2;
        
        
    }
}

evenPowersOf2(["4"]);