function housePainting(input) {
    const x = Number(input[0]);
    const y = Number(input[1]);
    const h = Number(input[2]);
    const redPaint = 4.3;
    const greenPaint = 3.4;
    const windowArea = 1.5 * 1.5;
    const entryArea = 1.2 * 2;
    let backSide = x * x;
    let totalGreenPaint = 0;
    let totalRedPaint = 0;
    const sideArea = x * y;
    totalGreenPaint = (2 * sideArea)- (2 * windowArea) + (2 * backSide) - entryArea;
    totalGreenPaint = totalGreenPaint / greenPaint;
    const triangleSide = x * y;
    const triangles = (x * h) / 2;
    totalRedPaint = 2 * triangleSide + 2 * triangles;
    totalRedPaint = totalRedPaint / redPaint;
    console.log(totalGreenPaint.toFixed(2));
    console.log(totalRedPaint.toFixed(2));
}
housePainting(["6","10","5.2"]);
housePainting(["10.25","15.45","8.88"]);