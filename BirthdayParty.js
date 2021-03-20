function solve(input) {
  const rent = Number(input[0]);
  const cakePrice = rent * 0.2;
  const drinks = cakePrice - (cakePrice * 45 / 100);
  const animator = rent / 3 ;
  let sum = cakePrice + drinks + animator + rent;
  console.log(sum);  
}
solve((["2250"]));