function readMark(input) {
    let mark = Number(input[0]);
    if (mark >= 5.50) {
        console.log(`Excellent!`)
    }
    
}
readMark(["6"]);
readMark(["5"]);
readMark(["5.50"]);
readMark(["5.49"]);