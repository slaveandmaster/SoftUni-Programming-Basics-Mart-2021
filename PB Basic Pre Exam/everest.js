function everest(input) {
  let isSleeping = input.shift();
  let meters = Number(input.shift());
  let beginInMeters = 5364;
  let counterDays = 1;

//   if (isSleeping === "Yes") {
//     counterDays++;
//   }
  let isClimbing = false;
  //   while (isSleeping !== "END") {
  //     if (isSleeping === "Yes") {
  //       counterDays++;
  //       beginInMeters += meters;
  //     } else if (isSleeping === "No") {
  //       beginInMeters += meters;
  //     }
  //     //beginInMeters += meters;
  //     if (beginInMeters >= 8848) {
  //         isClimbing = true;
  //       break;
  //     }
  //     else if (counterDays === 5) {
  //         break;
  //     }

  //     isSleeping = input.shift();
  //     meters = Number(input.shift());
  //   }
  //   if (isClimbing) {
  //     console.log(`Goal reached for ${counterDays} days!`);
  //   } else {
  //     console.log(`Failed!`);
  //     console.log(`${beginInMeters}`);
  //   }
  while (isSleeping !== "END") {
    if (isSleeping === "Yes") {
      counterDays++;
    }
    
    if (beginInMeters >= 8848) {
      isClimbing = true;
      break;
    } else if (counterDays > 5) {
      break;
    }
    beginInMeters += meters;
    isSleeping = input.shift();
    meters = Number(input.shift());
  }
  if (isClimbing) {
    console.log(`Goal reached for ${counterDays} days!`);
  }
 else {
        console.log(`Failed!`);
        console.log(`${beginInMeters}`);
      }
}
everest(["Yes", "1254", "Yes", "1402", "No", "250", "Yes", "635"]);
everest(["Yes", "1000", "Yes", "945", "No", "1200", "END"]);
everest(["Yes", "535", "Yes", "849", "Yes", "499", "Yes", "400", "Yes", "500"]);
everest(["Yes", "700", "END"]);
