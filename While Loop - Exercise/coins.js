function coins(input) {
  let coin = Number(input[0]);
  let counter = 0;
  let convertedCoin = Math.round(coin * 100);
  while (convertedCoin !== 0) {
    if (convertedCoin >= 200) {
      //counter++;
      convertedCoin -= 200;
    } else if (convertedCoin >= 100) {
      //counter++;
      convertedCoin -= 100;
    } else if (convertedCoin >= 50) {
      //counter++;
      convertedCoin -= 50;
    } else if (convertedCoin >= 20) {
      //counter++;
      convertedCoin -= 20;
    } else if (convertedCoin >= 10) {
      //counter++;
      convertedCoin -= 10;
    } else if (convertedCoin >= 5) {
      //counter++;
      convertedCoin -= 5;
    } else if (convertedCoin >= 2) {
      //counter++;
      convertedCoin -= 2;
    } else if (convertedCoin >= 1) {
      // counter++;
      convertedCoin -= 1;
    }
    counter++;
  }
  console.log(counter);
}
coins(["1.23"]);
coins(["2"]);
coins(["0.56"]);
coins(["2.73"]);
