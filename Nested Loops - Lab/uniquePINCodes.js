function uniquePINCodes(input) {
  const numberOne = Number(input[0]);
  const numberTwo = Number(input[1]);
  const numberThree = Number(input[2]);

  for (let i = 2; i <= numberOne; i++) {
    if (i % 2 === 0) {
      for (let j = 2; j <= numberTwo; j++) {
        if (j == 2 || j == 3 || j == 5 || j == 7) {
          for (let k = 2; k <= numberThree; k++) {
            if (k % 2 === 0) {
              console.log(`${i} ${j} ${k}`);
            }
          }
        }
      }
    }
  }
}
// uniquePINCodes(["3", "5", "5"]);
// uniquePINCodes(["8", "2", "8"]);

function combinationLetters(input) {
  const startLetter = input[0];
  const endLetter = input[1];
  const combinationLetter = input[2];
  let counter = 0;
  let result = "";
  //97 do 122
  for (let i = startLetter.charCodeAt(0); i <= endLetter.charCodeAt(0); i++) {
    let letterOne = String.fromCharCode(i);
    for (let j = startLetter.charCodeAt(0); j <= endLetter.charCodeAt(0); j++) {
      let letterTwo = String.fromCharCode(j);
      for (
        let k = startLetter.charCodeAt(0);
        k <= endLetter.charCodeAt(0);
        k++
      ) {
        let letterThree = String.fromCharCode(k);
        if (
          letterOne === combinationLetter ||
          letterTwo === combinationLetter ||
          letterThree === combinationLetter
        ) {
          continue;
        } else {
          counter++;
          let genLetters = letterOne + letterTwo + letterThree + " ";
          result += genLetters;
        }
      }
    }
  }
  console.log(`${result}${counter}`);
}
combinationLetters(["a", "c", "b"]);
combinationLetters(["f", "k", "h"]);
combinationLetters(["a", "c", "z"]);

function happyNumbers(input) {
  let N = Number(input[0]);
  let result = "";
  for (let i = 1; i <= 9; i++) {
    const digitOne = Number(i);
    for (let j = 1; j <= 9; j++) {
      const digitTwo = Number(j);
      for (let k = 1; k <= 9; k++) {
        const digitThree = Number(k);
        for (let m = 1; m <= 9; m++) {
          const digitFour = Number(m);
          if (
            digitOne + digitTwo === digitThree + digitFour &&
            N % (digitOne + digitTwo) === 0
          ) {
            result += `${digitOne}${digitTwo}${digitThree}${digitFour} `;
          }
        }
      }
    }
  }
  console.log(result);
}
happyNumbers(["3"]);
happyNumbers(["7"]);
happyNumbers(["24"]);

function carNumber(input) {
  const begin = Number(input[0]);
  const end = Number(input[1]);
  let result = "";
  for (let i = begin; i <= end; i++) {
    const digitOne = Number(i);
    for (let j = begin; j <= end; j++) {
      const digitTwo = Number(j);
      for (let k = begin; k <= end; k++) {
        const digitThree = Number(k);
        for (let m = begin; m <= end; m++) {
          const digitFour = Number(m);
          if (
            digitOne % 2 === 0 &&
            digitOne > digitFour &&
            (digitThree + digitTwo) % 2 === 0 &&
            digitFour % 2 !== 0
          ) {
            result += `${digitOne}${digitTwo}${digitThree}${digitFour} `;
          } else if (
            digitOne % 2 !== 0 &&
            digitOne > digitFour &&
            (digitThree + digitTwo) % 2 === 0 &&
            digitFour % 2 === 0
          ) {
            result += `${digitOne}${digitTwo}${digitThree}${digitFour} `;
          }
        }
      }
    }
  }
  console.log(result);
}
carNumber(["2", "3"]);
carNumber(["3", "5"]);
carNumber(["5", "8"]);

function wedding(input) {
  const counterMens = Number(input[0]);
  const counterWomens = Number(input[1]);
  const maxTable = Number(input[2]);
  let countTable = 0;
  let isFull = false;
  let result = "";
  for (let i = 1; i <= counterMens; i++) {
    for (let j = 1; j <= counterWomens; j++) {
      if (countTable >= maxTable) {
        isFull = true;
        break;
      }
      result += `(${i} <-> ${j}) `;
    }
    if (isFull) {
      break;
    }
  }
  console.log(result);
}
wedding(["2", "2", "6"]);
wedding(["2", "2", "3"]);
wedding(["5", "8", "40"]);

function weddingPlaces(input) {
  const lastSector = input[0];
  let rowsInFirstSector = Number(input[1]);
  const eventPlaces = Number(input[2]);
  let start = "A".charCodeAt(0);
  let count = 0;
  for (let i = start; i <= lastSector.charCodeAt(0); i++) {
    let firstLetter = String.fromCharCode(i);
    for (let k = 1; k <= rowsInFirstSector; k++) {
      let place = k % 2 === 0 ? eventPlaces + 2 : eventPlaces;
      for (let j = 97; j < 97 + place; j++) {
        letterThree = String.fromCharCode(j);
        count++;
        console.log(`${firstLetter}${k}${letterThree}`);
      }
    }
    rowsInFirstSector++;
  }
  console.log(count);
}
weddingPlaces(["B", "3", "2"]);
weddingPlaces(["C", "4", "2"]);

function goldMine(input) {
  let locations = Number(input.shift());

  for (let i = 0; i < locations; i++) {
    let goldPerDay = Number(input.shift());
    let countDiggDays = Number(input.shift());
    let averageGoldPerDay = 0;
    for (let j = 0; j < countDiggDays; j++) {
      let gold = Number(input.shift());
      averageGoldPerDay += gold;
    }
    averageGoldPerDay = averageGoldPerDay / countDiggDays;
    if (averageGoldPerDay >= goldPerDay) {
      console.log(
        `Good job! Average gold per day: ${averageGoldPerDay.toFixed(2)}.`
      );
    } else {
      console.log(
        `You need ${(goldPerDay - averageGoldPerDay).toFixed(2)} gold.`
      );
    }
    
  }
}

goldMine(["2", "10", "3", "10", "10", "10", "20", "2", "20", "10"]);
goldMine(["1", "5", "3", "10", "1", "3"]);

