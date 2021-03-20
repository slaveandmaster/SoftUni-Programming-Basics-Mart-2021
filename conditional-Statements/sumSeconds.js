function sumSeconds(input) {
    const player = Number(input[0]);
    const player2 = Number(input[1]);
    const player3 = Number(input[2]);
    let totalSeconds = player + player2 + player3;
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    if (seconds < 10) {
        console.log(`${minutes}:0${seconds}`);
    }
    else {
        console.log(`${minutes}:${seconds}`);
    }
}
sumSeconds(["35", "45", "44"]);
