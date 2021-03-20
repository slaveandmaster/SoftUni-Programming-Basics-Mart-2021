function sleepyTomCat(input) {
  const countRelaxDay = Number(input[0]);
  const workDays = 365 - countRelaxDay;
  const totalSleepingHours = workDays * 63 + countRelaxDay * 127;
  const normYearSleeping = 30000;
  if (totalSleepingHours > normYearSleeping) {
    let diff = totalSleepingHours - normYearSleeping;
    const minutes = diff % 60;
    diff -= minutes;
    const hours = diff / 60;
    console.log(
      `Tom will run away\n ${hours} hours and ${minutes} minutes more for play`
    );
  } else if (normYearSleeping > totalSleepingHours) {
    let diff = normYearSleeping - totalSleepingHours;
    const minutes = diff % 60;
    diff -= minutes;
    const hours = diff / 60;
    console.log(
      `Tom sleeps well\n ${hours} hours and ${minutes} minutes less for play`
    );
  }
}
sleepyTomCat(["20"]);
sleepyTomCat(["113"]);
