function graduationpt2(input) {
    let classes = 1;
    let averageGrade = 0;
    let fails = 0;
    let name = input[0];
    let index = 1;
    let grade = input[index];

    while (classes <= 12) {
        if (grade >= 4) {
            classes++;
            averageGrade += Number(grade);
        }
        else if (grade < 4) {
            fails++;
        }
        if (fails >= 2) {
            console.log(`${name} has been excluded at ${classes} grade`)
            return;
        }
        index++;
        grade = input[index];
    }
    averageGrade = averageGrade / 12;
    console.log(`${name} graduated. Average grade: ${averageGrade.toFixed(2)}`)
}

graduationpt2(["Gosho", 
"5",
"5.5",
"6",
"5.43",
"5.5",
"6",
"5.55",
"5",
"6",
"6",
"5.43",
"5"])

graduationpt2(["Mimi", 
"5",
"6",
"5",
"6",
"5",
"6",
"6",
"2",
"3"])