function workout(input) {
  const trainingDays = Number(input.shift());
  let kmInFirstDay = Number(input.shift());
  let sum = kmInFirstDay;
  for (let i = 0; i < trainingDays; i++) {
    let next = Number(input.shift());
    kmInFirstDay = kmInFirstDay + (kmInFirstDay * next / 100);
    sum +=kmInFirstDay;
  }
  if (sum >= 1000) {
    diff = sum - 1000;
    diff = Math.ceil(diff);
      console.log(`You've done a great job running ${diff} more kilometers!`)
  }
  else if (sum < 1000) {
    diff = 1000 - sum;
    diff = Math.ceil(diff);
      console.log(`Sorry Mrs. Ivanova, you need to run ${diff} more kilometers`)
  }

}
workout(["5", "30", "10", "15", "20", "5", "12"]);
workout(["4", "100", "30", "50", "60", "80"]);
