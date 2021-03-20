function swimmingRecords(input) {
  const swimmingRecord = Number(input[0]);
  const distanceInMeters = Number(input[1]);
  const metersPerSeconds = Number(input[2]);

  //изчисление колко трябва да преплува
  let totalTimeDistance = distanceInMeters * metersPerSeconds;
  //изчислване на допълнително време за всеки 15 метра
  let additionalTime = Math.floor(distanceInMeters / 15) * 12.5;
  //Общо време и проверка дали е по-добро от св. рекорд или не
  totalTimeDistance += additionalTime;
  if (totalTimeDistance < swimmingRecord) {
    console.log(
      `Yes, he succeeded! The new world record is ${totalTimeDistance.toFixed(
        2
      )} seconds.`
    );
  }
  if (totalTimeDistance >= swimmingRecord) {
    console.log(
      `No, he failed! He was ${(totalTimeDistance - swimmingRecord).toFixed(
        2
      )} seconds slower.`
    );
  }
}
//swimmingRecords(["10464", "1500", "20"]);
swimmingRecords(["55555.67", "3017", "5.03"]);
