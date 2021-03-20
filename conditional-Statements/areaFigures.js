function area(input) {
    const figure = input[0];
    let result = 0;
    if (figure === "square") {
        let sideLength = Number(input[1]);
        result = sideLength * sideLength;
    }
    if (figure === "rectangle") {
        const sideA = Number(input[1]);
        const sideB = Number(input[2]);
        result = sideA * sideB;
    }
    if (figure === "circle") {
        const r = Number(input[1]);
        result = Math.PI * ( r * r );
    }
    if (figure === "triangle") {
        const sideLength = Number(input[1]);
        const heigth = Number(input[2]);
        result = (sideLength * heigth) / 2;
    }
    console.log(`${result.toFixed(3)}`);
}
area(["square", "5"]);
area(["rectangle", "5", "2.5"]);
area(["circle", "6"]);
area(["triangle", "4.5", "20"]);
