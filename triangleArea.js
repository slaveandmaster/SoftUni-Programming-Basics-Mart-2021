function triangleArea(input) {
    const side = Number(input[0]);
    const height = Number(input[1]);
    let result = 0;
    result = side * height / 2;
    console.log(result.toFixed(2));
}
triangleArea(["20", "30"]);