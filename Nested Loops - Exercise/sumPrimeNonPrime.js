function sumPrimeNonPrime(input) {
  
  let sumPrime = 0;
  let sumNonPrime = 0;
  let line;
  while ((line = input.shift()) != "stop") {
    let number = Number(line);

    if (number < 0) {
      console.log(`Number is negative.`);
    } else {
      let isPrime = true;
      for (let i = 2; i < number; i++) {
        if (number % i === 0) {
          isPrime = false;
          break;
        }
      }

      if (isPrime) {
        sumPrime += number;
      } else {
        sumNonPrime += number;
      }
    }
  }
  console.log(`Sum of all prime numbers is: ${sumPrime}`);
  console.log(`Sum of all non prime numbers is: ${sumNonPrime}`);
}
sumPrimeNonPrime(["3", "9", "0", "7", "19", "4", "stop"]);
sumPrimeNonPrime(["30", "83", "33", "-1", "20", "stop"]);
