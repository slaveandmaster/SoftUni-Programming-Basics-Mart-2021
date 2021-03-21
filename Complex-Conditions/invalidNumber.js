function invalidNumber(input) {
    const num = Number(input[0]);
    // Дадено число е валидно, ако е в диапазона [100…200] или е 0.
    // Да се напише функция, която приема аргумент  цяло число, и печата "invalid" ако въведеното число не е валидно. 
    if (num >= 100 && num <= 200 || num === 0) {
            
    }
    else {
        console.log("invalid");
    }
}
invalidNumber(["75"]);
invalidNumber(["150"]);
invalidNumber(["220"]);
invalidNumber(["-1"]);
invalidNumber(["100"]);
invalidNumber(["200"]);
invalidNumber(["0"]);