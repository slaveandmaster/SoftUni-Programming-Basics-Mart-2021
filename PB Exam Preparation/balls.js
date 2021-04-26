function balls(input) {
    const countBalls = Number(input.shift());
    let redBalls = 0;
    let orange = 0;
    let yellow = 0;
    let white = 0;
    let black = 0;
    let other = 0;
    let counterDevide = 0;
    let points = 0;
    for (let i = 0; i < countBalls; i++) {
        let ball = input[i];
        if (ball === "red") {
            redBalls++;
            points += 5;
        }
        else if (ball === "orange") {
            orange++;
            points +=10;
        }
        else if (ball === "yellow") {
            yellow++;
            points +=15;
        }
        else if (ball === "white") {
            white++;
            points +=20;
        }
        else if (ball === "black") {
            black++;
            points = Math.floor(points / 2);
        }
        else {
            other++;

        }
        
    }
    console.log(`Total points: ${points}`);
    console.log(`Points from red balls: ${redBalls}`);
    console.log(`Points from orange balls: ${orange}`);
    console.log(`Points from yellow balls: ${yellow}`);
    console.log(`Points from white balls: ${white}`);
    console.log(`Other colors picked: ${other}`);
    console.log(`Divides from black balls: ${black}`);
}
balls(["3",
"white",
"black",
"pink"])
balls(["5",
"red",
"red",
"ddd",
"ddd",
"ddd"])
