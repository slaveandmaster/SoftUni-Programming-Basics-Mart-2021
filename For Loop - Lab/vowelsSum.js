function vowelsSum(input) {
  const word = input[0];
  let sum = 0;
  for (let index = 0; index < word.length; index++) {
    let letter = word[index];
    switch (letter) {
      case "a":
          sum +=1;
        break;
      case "e":
        sum +=2;
        break;
      case "i":
        sum +=3;
        break;
      case "o":
        sum +=4;
        break;
      case "u":
        sum +=5;
        break;
      default:
        break;
    }
  }
  console.log(sum);
}
vowelsSum(["bamboo"]);