function sumOfTwoNumbers(input) {
  const begin = Number(input[0]);
  const end = Number(input[1]);
  const magicNumber = Number(input[2]);
  let counter = 0;
  let isTrue = false;
  for (let i = begin; i <= end; i++) {
    const num1 = i;
    let sum = 0;
    for (let j = begin; j <= end; j++) {
      counter++;
      const num2 = j;
      sum = num1 + num2;
      if (sum === magicNumber) {
        console.log(
          `Combination N:${counter} (${num1} + ${num2} = ${magicNumber})`
        );
        isTrue = true;
        break;
      }
    }
    if (isTrue) {
      break;
    }
  }
  if (isTrue === false) {
    console.log(`${counter} combinations - neither equals ${magicNumber}`);
  }
}
sumOfTwoNumbers(["1", "10", "5"]);
sumOfTwoNumbers(["23", "24", "20"]);
sumOfTwoNumbers(["88",
"888",
"1000"])
sumOfTwoNumbers(["88",
"888",
"2000"])
