function equalSumsEvenOddPosition(input) {
    const numberOne = Number(input[0]);
    const numberTwo = Number(input[1]);
    let line='';
    for (let i = numberOne; i <= numberTwo; i++) {
        let convertedNumber = i.toString();
        let sumOdd = 0;
        let sumEven = 0;
        for (let j = 0; j < convertedNumber.length; j++) {
            let numb = Number(convertedNumber[j]);
            if (j % 2 === 0) {
                sumEven+=numb;
            }
            else {
                sumOdd+=numb;
            }
            
        }
        if (sumOdd === sumEven) {
            line += `${convertedNumber} `
            
        }
        
    }
    console.log(line);
}
equalSumsEvenOddPosition(["100000",
"100050"]);
equalSumsEvenOddPosition(["123456",
"124000"]);
equalSumsEvenOddPosition(["299900",
"300000"])
equalSumsEvenOddPosition(["100115",
"100120"])


