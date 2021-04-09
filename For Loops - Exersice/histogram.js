function histogram(input) {
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;
    const num = Number(input[0]);
    const numbers = input.slice(1);
    for (let index = 0; index < numbers.length; index++) {
        let element = Number(numbers[index]);
        if (element >= 800) {
            p5++;
        }
        else if (element >= 600) {
            p4++;
        }
        else if (element >= 400) {
            p3++;
        }
        else if(element >= 200) {
            p2++;
        }
        else if (element < 200) {
            p1++;
        }
        
    }
    console.log(`${(p1 / num * 100).toFixed(2)}%`);
    console.log(`${(p2 / num * 100).toFixed(2)}%`);
    console.log(`${(p3 / num * 100).toFixed(2)}%`);
    console.log(`${(p4 / num * 100).toFixed(2)}%`);
    console.log(`${(p5 / num * 100).toFixed(2)}%`);
}
histogram(["3", "1", "2", "999"]);
histogram(["7", "800", "801", "250", "199", "399", "599", "799"]);
histogram(["9", "367", "99", "200", "799", "999", "333", "555", "111", "9"]);
histogram([
  "14",
  "53",
  "7",
  "56",
  "180",
  "450",
  "920",
  "12",
  "7",
  "150",
  "250",
  "680",
  "2",
  "600",
  "200",
]);
