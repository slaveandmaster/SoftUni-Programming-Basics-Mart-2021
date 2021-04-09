function factorial(input) {
    const num = Number(input[0]);
    let sum = 1;
    for (let index = 1; index <= num; index++) {
        sum *= index;
        
    }
    console.log(sum)
}
factorial(["8"]);