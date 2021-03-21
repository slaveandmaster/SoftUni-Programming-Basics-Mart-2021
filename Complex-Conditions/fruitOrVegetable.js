function fruitOrVegetable(input) {
  const product = input[0];
  // ⦁	Плодовете "fruit" имат следните възможни стойности:  banana, apple, kiwi, cherry, lemon и grapes
  // ⦁	Зеленчуците "vegetable" имат следните възможни стойности:  tomato, cucumber, pepper и carrot
  if (
    product === "banana" ||
    product === "apple" ||
    product === "kiwi" ||
    product === "cherry" ||
    product === "lemon" ||
    product === "grapes"
  ) {
    console.log("fruit");
  } else if (
    product === "tomato" ||
    product === "cucumber" ||
    product === "pepper" ||
    product === "carrot"
  ) {
      console.log("vegetable");
  }
  else {
      console.log("unknown");
  }
}
fruitOrVegetable(["banana"]);
fruitOrVegetable(["apple"]);
fruitOrVegetable(["tomato"]);
fruitOrVegetable(["water"]);
