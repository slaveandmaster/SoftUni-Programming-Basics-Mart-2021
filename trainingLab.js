function trainingLab(input) {
    const w = Number(input[1]);
    const h = Number(input[0]);
    const coridor = 100;
    const workPlace = 70;
    let total =0;
    let placesByWidth = (w * 100) - coridor;
    let totalPlacesByWidth = Math.floor(placesByWidth / workPlace);
    let placesByHeigth = h * 100;
    let totalPlacesByHeight = Math.floor(placesByHeigth / 120);
    total = totalPlacesByHeight * totalPlacesByWidth - 3;
    console.log(total);
}
trainingLab(["15","8.9"]);
trainingLab(["8.4","5.2"]);