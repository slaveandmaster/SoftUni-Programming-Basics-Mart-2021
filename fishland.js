function fishland(input) {
    const scumriaPrice = Number(input[0]);
    const tzatzaPrice = Number(input[1]);
    const palamudInKg = Number(input[2]);
    const safridInKg = Number(input[3]);
    const midiInKg = Number(input[4]);

    const palamudPrice = scumriaPrice + scumriaPrice * 0.6;
    const safridPrice = tzatzaPrice + tzatzaPrice * 0.8;
    const midiPrice = 7.50;
    let total = 0;
    total = (palamudInKg * palamudPrice) + (safridInKg * safridPrice) + (midiInKg * midiPrice);
    console.log(total.toFixed(2)); 

    
}
fishland(["5.55",
    "3.57",
    "4.3",
    "3.6",
    "7"])