function journey(input) {
  const budget = Number(input[0]);
  const season = input[1];
  // ⦁	При 100лв. или по-малко – някъде в България
  // ⦁	Лято – 30% от бюджета
  // ⦁	Зима – 70% от бюджета
  // ⦁	При 1000лв. или по малко – някъде на Балканите
  // ⦁	Лято – 40% от бюджета
  // ⦁	Зима – 80% от бюджета
  // ⦁	При повече от 1000лв. – някъде из Европа
  // ⦁	При пътуване из Европа, независимо от сезона ще похарчи 90% от бюджета.
  switch (season) {
    case "summer":
        if (budget <= 100) {
            console.log(`Somewhere in Bulgaria`);
            console.log(`Camp - ${(budget * 0.3).toFixed(2)}`);
        }
        else if (budget <= 1000) {
            console.log(`Somewhere in Balkans`);
            console.log(`Camp - ${(budget * 0.4).toFixed(2)}`);
        }
        else if (budget > 1000) {
            console.log(`Somewhere in Europe`);
            console.log(`Hotel - ${(budget * 0.9).toFixed(2)}`);
        }
      break;
    case "winter":
        if (budget <= 100) {
            console.log(`Somewhere in Bulgaria`);
            console.log(`Hotel - ${(budget * 0.7).toFixed(2)}`);
        }
        else if (budget <= 1000) {
            console.log(`Somewhere in Balkans`);
            console.log(`Hotel - ${(budget * 0.8).toFixed(2)}`);
        }
        else if (budget > 1000) {
            console.log(`Somewhere in Europe`);
            console.log(`Hotel - ${(budget * 0.9).toFixed(2)}`);
        }
      break;
    default:
      break;
  }

  // Изход
  // На конзолата трябва да се отпечатат два реда.
  // ⦁	Първи ред – "Somewhere in [дестинация]" измежду "Bulgaria", "Balkans" и "Europe"
  // ⦁	Втори ред – "{Вид почивка} – {Похарчена сума}"
  // ⦁	Почивката може да е между "Camp" и "Hotel"
  // ⦁	Сумата трябва да е закръглена с точност до вторият знак след запетаята.
}
journey(["50", "summer"]);
journey(["75", "winter"]);
journey(["312", "summer"]);
journey(["678.53", "winter"]);
journey(["1500", "summer"]);
