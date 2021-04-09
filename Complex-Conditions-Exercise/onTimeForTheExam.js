function onTimeForTheExam(input) {
  const examHour = Number(input[0]);
  const examMinutes = Number(input[1]);
  const arriveHour = Number(input[2]);
  const arriveMinutes = Number(input[3]);
  let minutesDiff = 0;
  let convertExamTime = examHour * 60 + examMinutes;
  let convertArriveTime = arriveHour * 60 + arriveMinutes;

  // Счита се, че студентът е дошъл навреме, ако е пристигнал в часа на изпита или до половин час преди това.
  // Ако е пристигнал по-рано повече от 30 минути, той е подранил.
  // Ако е дошъл след часа на изпита, той е закъснял.

  if (convertArriveTime > convertExamTime) {
    console.log(`Late`);
  } else if (convertExamTime - convertArriveTime <= 30) {
    console.log(`On time`);
  } else {
    console.log(`Early`);
  }
  let timeDiff = Math.abs(convertExamTime - convertArriveTime);
  let getMinutes = timeDiff % 60;
  if (convertExamTime - convertArriveTime > 0) {
    if (timeDiff < 60) {
      console.log(`${timeDiff} minutes before the start`);
    } else {
      if (getMinutes < 10) {
        console.log(
          `${Math.floor(timeDiff / 60)}:0${getMinutes} hours before the start `
        );
      } else {
        console.log(
          `${Math.floor(timeDiff / 60)}:${getMinutes} hours before the start `
        );
      }
    }
  } else if (convertArriveTime - convertExamTime > 0) {
    if (timeDiff < 60) {
      console.log(`${timeDiff} minutes after the start`);
    } else {
      if (getMinutes < 10) {
        console.log(
          `${Math.floor(timeDiff / 60)}:0${getMinutes} hours after the start `
        );
      } else {
        console.log(
          `${Math.floor(timeDiff / 60)}:${getMinutes} hours after the start `
        );
      }
    }
  }
}
onTimeForTheExam(["9", "30", "9", "50"]);
onTimeForTheExam(["9", "00", "8", "30"]);
onTimeForTheExam(["16", "00", "15", "00"]);
onTimeForTheExam(["9", "00", "10", "30"]);
onTimeForTheExam(["14", "00", "13", "55"]);
onTimeForTheExam(["11", "30", "8", "12"]);
onTimeForTheExam(["10", "00", "10", "00"]);
onTimeForTheExam(["11", "30", "10", "55"]);
onTimeForTheExam(["11", "30", "12", "29"]);
