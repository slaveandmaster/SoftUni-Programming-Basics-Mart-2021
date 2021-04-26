function changeBureau(input) {
  const bitcoin = Number(input[0]) * 1168;
  const chineseJoan = Number(input[1]) * 0.15;
  const commision = Number(input[2]);
  const euro = 1.95;
  let total = bitcoin + chineseJoan * 1.76;
  total = (total / euro);
  total = total - (total * commision / 100);

  console.log(total.toFixed(2));
}
changeBureau(["1", "5", "5"]);
changeBureau(["20", "5678", "2.4"]);
changeBureau(["7", "50200.12", "3"]);
