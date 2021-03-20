function trapecoidArea(input) {
    //Формулата за лице на трапец е (b1 + b2) * h / 2.
    const sideA  = Number(input[0]);
    const sideB  = Number(input[1]);
    const height  = Number(input[2]);
    let result = 0;
    result = (sideA + sideB) * height / 2;
    console.log(result.toFixed(2));
}
trapecoidArea(["8","13","7"]);