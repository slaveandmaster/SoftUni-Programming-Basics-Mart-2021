function suppliesForSchool(input) {
    const countPacketPen = Number(input[0]) * 5.80;
    const countPacketMarkers = Number(input[1]) * 7.20;
    const liters = Number(input[2]) * 1.20;
    const discount = Number(input[3]);
    let total = countPacketPen + countPacketMarkers + liters;
    total = total - (total * discount / 100);

    console.log(total.toFixed(3));


}
suppliesForSchool(["2", "3", "2.5", "25"]);
suppliesForSchool(["4", "2", "5", "13"]);
