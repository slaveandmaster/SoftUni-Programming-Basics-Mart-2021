function solve(input) {
    let sum = 0;
    let depositeValute = Number(input[0]);
    let depositPeriod = Number(input[1]);
    let gpr = Number(input[2]);
    let lihva = Number(depositeValute * gpr) / 100;
    let perMonth = Number(lihva / 12);
    sum = depositeValute +  ( depositPeriod * perMonth);
    console.log(sum);
}
solve(["200", "3", "5.7"]);
