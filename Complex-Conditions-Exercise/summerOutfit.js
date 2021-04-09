function summerOutfit(input) {
  const celsius = Number(input[0]);
  const timeOfDay = input[1];
  let outfit;
  let shoes;

//   // време от денонощието - с възможности - "Morning", "Afternoon", "Evening"
  switch (timeOfDay) {
    case "Morning":
      if (celsius >= 10 && celsius <= 18) {
        outfit = "Sweatshirt";
        shoes = "Sneakers";
        console.log(
          `It's ${celsius} degrees, get your ${outfit} and ${shoes}.`
        );
      } else if (celsius > 18 && celsius <= 24) {
        outfit = "Shirt";
        shoes = "Moccasins";
        console.log(
          `It's ${celsius} degrees, get your ${outfit} and ${shoes}.`
        );
      } else if (celsius >= 25) {
        outfit = "T-Shirt";
        shoes = "Sandals";
        console.log(
          `It's ${celsius} degrees, get your ${outfit} and ${shoes}.`
        );
      }
      break;
    case "Afternoon":
      if (celsius >= 10 && celsius <= 18) {
        outfit = "Shirt";
        shoes = "Moccasins";
        console.log(
          `It's ${celsius} degrees, get your ${outfit} and ${shoes}.`
        );
      } else if (celsius > 18 && celsius <= 24) {
        outfit = "T-Shirt";
        shoes = "Sandals";
        console.log(
          `It's ${celsius} degrees, get your ${outfit} and ${shoes}.`
        );
      } else if (celsius >= 25) {
        outfit = "Swim Suit";
        shoes = "Barefoot";
        console.log(
          `It's ${celsius} degrees, get your ${outfit} and ${shoes}.`
        );
      }
      break;
    case "Evening":
      if (celsius >= 10 && celsius <= 18) {
        outfit = "Shirt";
        shoes = "Moccasins";
        console.log(
          `It's ${celsius} degrees, get your ${outfit} and ${shoes}.`
        );
      } else if (celsius > 18 && celsius <= 24) {
        outfit = "Shirt";
        shoes = "Moccasins";
        console.log(
          `It's ${celsius} degrees, get your ${outfit} and ${shoes}.`
        );
      } else if (celsius >= 25) {
        outfit = "Shirt";
        shoes = "Moccasins";
        console.log(
          `It's ${celsius} degrees, get your ${outfit} and ${shoes}.`
        );
      }
      break;
    default:
      break;
  }
// Вариант на задачата решана без суич 
//   if (celsius >= 10 && celsius <= 18) {
//     if (timeOfDay === "Morning") {
//       outfit = "Sweatshirt";
//       shoes = "Sneakers";
//       console.log(`It's ${celsius} degrees, get your ${outfit} and ${shoes}.`);
//     } else if (timeOfDay === "Afternoon" || timeOfDay === "Evening") {
//       outfit = "Shirt";
//       shoes = "Moccasins";
//       console.log(`It's ${celsius} degrees, get your ${outfit} and ${shoes}.`);
//     } 
//   } else if (celsius > 18 && celsius <= 24) {
//     if (timeOfDay === "Morning" || timeOfDay === "Evening") {
//       outfit = "Shirt";
//       shoes = "Moccasins";
//       console.log(`It's ${celsius} degrees, get your ${outfit} and ${shoes}.`);
//     } else if (timeOfDay === "Afternoon") {
//       outfit = "T-Shirt";
//       shoes = "Sandals";
//       console.log(`It's ${celsius} degrees, get your ${outfit} and ${shoes}.`);
//     } 
//   } else if (celsius >= 25) {
//     if (timeOfDay === "Morning") {
//       outfit = "T-Shirt";
//       shoes = "Sandals";
//       console.log(`It's ${celsius} degrees, get your ${outfit} and ${shoes}.`);
//     } else if (timeOfDay === "Afternoon") {
//       outfit = "Swim Suit";
//       shoes = "Barefoot";
//       console.log(`It's ${celsius} degrees, get your ${outfit} and ${shoes}.`);
//     } else if (timeOfDay === "Evening") {
//       outfit = "Shirt";
//       shoes = "Moccasins";
//       console.log(`It's ${celsius} degrees, get your ${outfit} and ${shoes}.`);
//     }
//   }
}

summerOutfit(["16", "Morning"]);
summerOutfit(["22", "Afternoon"]);
summerOutfit(["28", "Evening"]);
