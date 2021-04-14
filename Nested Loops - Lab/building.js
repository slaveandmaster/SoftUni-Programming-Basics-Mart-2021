function building(input) {
    let floors = Number(input[0]);
    let apartmentPerFloor = Number(input[1]);

    for (let i = floors; i > 0; i--) {
        let str = '';
        for (let j = 0; j < apartmentPerFloor; j++) {
            if (i === floors || floors === 1) {
                str += 'L'+i+j+' ';
            }
            else if (i % 2 === 0) {
                str += 'O'+i+j+' ';
            }
            else if (i % 2 !== 0) {
                str += 'A'+i+j+' ';
            }
        }
        console.log(str);
    }
}
building(["6", "4"]);
console.log("===============================");
building(["9", "5"]);
console.log("===============================");
building(["4", "4"]);
