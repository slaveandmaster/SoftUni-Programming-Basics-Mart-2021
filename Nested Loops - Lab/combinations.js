function combinations(input) {
  let counter = 0;
  let number = Number(input[0]);

  for (let i = 0; i <= number; i++) {
    const num1 = i;
    for (let j = 0; j <= number; j++) {
      const num2 = j;
      for (let k = 0; k <= number; k++) {
        const num3 = k;
        let sum = 0
        sum = num1 + num2 + num3;
        if (sum === number) {
          counter++;
        }
      }
    }
  }
  console.log(counter);
}
combinations(["5"]);