function specialNumbers(input) {
    let number = Number(input[0]);
    let result = '';
    for (let i = 1111; i < 9999; i++) {
        //convert number
        let convertedNumber = i.toString();
        //set default flag
        let isSpecial = true;
        for (let j = 0; j < convertedNumber.length; j++) {
            //convert to Number
            let divider = Number(convertedNumber[j]);
            //check numbers 
            if (number % divider !== 0) {
                isSpecial = false;
                break;
            }
            
        }
        //add number to result
        if (isSpecial) {
            result += convertedNumber+" ";
        }
    }
    console.log(result);
}
specialNumbers(["3"])
specialNumbers(["11"])
specialNumbers(["16"])