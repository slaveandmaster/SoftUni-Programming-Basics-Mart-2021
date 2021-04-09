function leapYears(input) {
    const leapYear = Number(input[0]);
    const endYear = Number(input[1]);
    for (let index = leapYear; index <= endYear; index+=4) {
        console.log(index);
        
    }
}
leapYears(["2020", "2032"]);
