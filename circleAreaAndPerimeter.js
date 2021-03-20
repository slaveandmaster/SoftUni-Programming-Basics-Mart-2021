function circleAreaAndPerimeters(input) {
    const r = Number(input[0]);
    const perimeter = (2 * Math.PI) * r;
    const areaCircle = Math.PI *( r*r);
    console.log(`${areaCircle.toFixed(2)}`);
    console.log(`${perimeter.toFixed(2)}`);
   
    
}
circleAreaAndPerimeters(["3"]);
circleAreaAndPerimeters(["4.5"]);