function dayofWeek(input) {
  const day = Number(input[0]);
  switch (day) {
    case 1:
      console.log("Monday");
      break;
    case 2:
      console.log("Tuesday");
      break;
    case 3:
      console.log("Wednesday");
      break;
    case 4:
      console.log("Thursday");
      break;
    case 5:
      console.log("Friday");
      break;
    case 6:
      console.log("Saturday");
      break;
    case 7:
      console.log("Sunday");
      break;
     default:
      console.log("Error");
      break;
  }
}
dayofWeek(["1"]);
dayofWeek(["2"]);
dayofWeek(["3"]);
dayofWeek(["4"]);
dayofWeek(["5"]);
dayofWeek(["6"]);
dayofWeek(["7"]);
