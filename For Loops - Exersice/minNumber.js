function minNumber(input) {
  let num = Number(input[0]);
  const numbers = input.slice(1);
  let min = Number.MAX_SAFE_INTEGER;
  for (let index = 0; index <= numbers.length; index++) {
      const element = Number(numbers[index]);
    if (element < min) {
      min = element;
    }
  }
  console.log(min);
}

minNumber(["2", "100", "99"]);
minNumber(["3", "-10", "20", "-30"]);
minNumber(["4", "45", "-20", "7", "99"]);
minNumber(["1", "999"]);
minNumber(["2", "-1", "-2"]);
