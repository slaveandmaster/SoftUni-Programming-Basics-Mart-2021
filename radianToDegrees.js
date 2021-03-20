function radianToDegrees(input) {
    const radian = input[0];
    const degrees = Math.floor(radian * 180 / Math.PI);
    console.log(degrees);
}
radianToDegrees(["3.1416"]); //180