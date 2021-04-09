function moving(input) {
    const width = Number(input[0]);
    const long = Number(input[1]);
    const height = Number(input[2]);
    let index = 3;
    let command = input[index];
    const totalArea = width * long * height;
    let totalBoxArea = 0;

    while (command !== "Done") {
        totalBoxArea += Number(command);
        if (totalBoxArea > totalArea) {
            console.log(`No more free space! You need ${totalBoxArea - totalArea} Cubic meters more.`);
            break;
        }
        index++;
        command = input[index];    
    }
     if (totalArea >= totalBoxArea) {
        console.log(`${totalArea - totalBoxArea} Cubic meters left.`);
    }
}
moving(["10", 
"10",
"2",
"20",
"20",
"20",
"20",
"122"])

moving(["10",
"1",
"2",
"4",
"6",
"Done"])