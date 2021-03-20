function firm(input) {
    const neededHours = Number(input[0]);
    const dayForFirm = Number(input[1]);
    const countWorkersAddTime = Number(input[2]);
    
    const workTime = dayForFirm * 0.9 * 8 ;
    const additionalTime = dayForFirm * 2 * countWorkersAddTime;
    const totalHours = Math.floor(workTime + additionalTime);
    if (totalHours >= neededHours) {
        let timeDiff = totalHours - neededHours;
        console.log(`Yes!${timeDiff} hours left.`)
    }
    else  {
        let timeDiff = neededHours - totalHours;
        console.log(`Not enough time!${timeDiff} hours needed.`)
    } 
}
firm(["90","7","3"]);
firm(["99","3","1"]);
firm(["50","5","2"]);
