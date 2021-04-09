function sequence2k(input) {
    const num = Number(input[0]);
    let nextNumber = 1;
    while (nextNumber <= num) {
        console.log(nextNumber);
        nextNumber = 2 * nextNumber + 1;
    
    }
}
sequence2k(["3"]);
sequence2k(["8"]);
sequence2k(["17"]);
sequence2k(["31"])
