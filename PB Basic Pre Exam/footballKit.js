function footballKit(input) {
 const shirtPrice = Number(input[0]);
 const totalTargetSumWin = Number(input[1]);
 let shortsPrice = shirtPrice * 0.75;
 let socksPrice = shortsPrice * 0.20;
 let trainers = (shirtPrice + shortsPrice) * 2;
 let total = 0;
 total = shirtPrice + shortsPrice + socksPrice + trainers;
 total = total * 0.85; 
 
 if (total >= totalTargetSumWin) {
     console.log("Yes, he will earn the world-cup replica ball!");
     console.log(`His sum is ${total.toFixed(2)} lv.`);
 }
 else {
     console.log(`No, he will not earn the world-cup replica ball.`);
     console.log(`He needs ${(totalTargetSumWin - total).toFixed(2)} lv. more.`);
 }
}
footballKit(["25",
"100"]);
footballKit(["55",
"310"])
footballKit(["59.99",
"500"])