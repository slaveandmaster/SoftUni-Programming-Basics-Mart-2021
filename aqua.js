function solve(input) {
    let howManyLiters = 0;
    const lengthInCm = Number(input[0]);
    const heightInCm = Number(input[1]);
    const weigthInCm = Number(input[2]);
    let percent = Number(input[3]);

    const aqua = lengthInCm * heightInCm * weigthInCm;
    const totalLiters = aqua * 0.001;
    percent = percent * 0.01;
    howManyLiters = totalLiters*(1-percent);
    console.log(howManyLiters);

}
solve(["85", "75", "47", "17"]);
solve(["105",
"77",
"89",
"18.5"])

