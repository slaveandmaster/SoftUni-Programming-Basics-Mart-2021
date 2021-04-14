function cinemaTickets(input) {
  let movie = input.shift();
  let places = Number(input.shift());
  let students = 0;
  let standard = 0;
  let kids = 0;
  let totalTickets = 0;
  let studentTickets = 0;
  let standardTickets = 0;
  let kidsTickets = 0;
  while (movie !== "Finish") {
    let sum = 0;
    while (sum < places) {
        //get ticket
      typeTicket = input.shift();
      if (typeTicket === "End") {
        break;
      } else if (typeTicket === "standard") {
        standard++;
        sum++;
      } else if (typeTicket === "student") {
        students++;
        sum++;
      } else if (typeTicket === "kid") {
        kids++;
        sum++;
      }
    }
    totalTickets += sum;
    let inPercent = (sum / places) * 100;
    //sum = 0;
    console.log(`${movie} - ${inPercent.toFixed(2)}% full.`);
    //next movie
    movie = input.shift();
    //next capacity
    places = Number(input.shift());
  }
  studentTickets = (students / totalTickets) * 100;
  standardTickets = (standard / totalTickets) * 100;
  kidsTickets = (kids / totalTickets) * 100;
  console.log(`Total tickets: ${totalTickets}`);
  console.log(`${studentTickets.toFixed(2)}% student tickets.`);
  console.log(`${standardTickets.toFixed(2)}% standard tickets.`);
  console.log(`${kidsTickets.toFixed(2)}% kids tickets.`);
}
cinemaTickets([
  "Taxi",
  "10",
  "standard",
  "kid",
  "student",
  "student",
  "standard",
  "standard",
  "End",
  "Scary Movie",
  "6",
  "student",
  "student",
  "student",
  "student",
  "student",
  "student",
  "Finish",
]);
cinemaTickets([
  "The Matrix",
  "20",
  "student",
  "standard",
  "kid",
  "kid",
  "student",
  "student",
  "standard",
  "student",
  "End",
  "The Green Mile",
  "17",
  "student",
  "standard",
  "standard",
  "student",
  "standard",
  "student",
  "End",
  "Amadeus",
  "3",
  "standard",
  "standard",
  "standard",
  "Finish",
]);
