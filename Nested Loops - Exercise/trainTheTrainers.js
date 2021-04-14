function trainTheTrainers(input) {
    let peoples = Number(input.shift());
    let finalScore = 0;
    let countTask = 0;
    let line;
    while ((line = input.shift()) != "Finish") {
        let task = line;
        let averageGrade = 0;
       
        for (let i = 0; i < peoples; i++) {
            let grade = Number(input.shift());
            averageGrade += grade;            
        }
        finalScore += averageGrade / peoples;
        console.log(`${task} - ${(averageGrade / peoples).toFixed(2)}.`);
        countTask++;
    }
    console.log(`Student's final assessment is ${(finalScore / countTask).toFixed(2)}.`)
}
trainTheTrainers(["2",
"While-Loop",
"6.00",
"5.50",
"For-Loop",
"5.84",
"5.66",
"Finish"])
trainTheTrainers(["3",
"Arrays",
"4.53",
"5.23",
"5.00",
"Lists",
"5.83",
"6.00",
"5.42",
"Finish"])
trainTheTrainers(["2",
"Objects and Classes",
"5.77",
"4.23",
"Dictionaries",
"4.62",
"5.02",
"RegEx",
"2.88",
"3.42",
"Finish"])
