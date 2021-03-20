function timeAfterMinutes(input) {
    let hours = Number(input[0]);
    let minutes = Number(input[1]);
    let timeAfterMinutes = minutes + 15;
    if (timeAfterMinutes > 59) {
        hours++;
        minutes = timeAfterMinutes - 60;
        if ( minutes < 10) {
            minutes = '0' + minutes;
        }
        if(hours > 23 ){
            hours = 0; 
        }
    }
    else {
        minutes = minutes + 15;
    }
    console.log(`${hours}:${minutes}`);
}
timeAfterMinutes(["1", "46"]);
timeAfterMinutes(["0", "01"]);
timeAfterMinutes(["23", "59"]);
timeAfterMinutes(["11", "08"]);
timeAfterMinutes(["12", "49"]);