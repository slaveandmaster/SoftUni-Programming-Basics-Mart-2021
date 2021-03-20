function totalBonus(input) {
    let totalBonus = 0;
    const point = Number(input[0]);

    if (point <= 100) {
        totalBonus += 5;
    }
    else if(point > 1000) {
        let points = point * 0.10;
        totalBonus += points;
    }
    else {
        let points = point * 0.20;
        totalBonus += points;
    }
    //additional bonus points
    if (point % 2 == 0) {
        totalBonus +=1;
    }
    else if(point % 10 == 5) {
        totalBonus += 2;
    }

    console.log(`${totalBonus}`);
    console.log(`${totalBonus + point}`);
}
totalBonus(["20"]);
totalBonus(["175"]);
totalBonus(["15875"]);