function pipesInPool(input) {
  const pool = Number(input[0]);
  const pipeOne = Number(input[1]);
  const pipeTwo = Number(input[2]);
  const hours = Number(input[3]);
  let waterByPipeOne = hours * pipeOne;
  let waterByPipeTwo = hours * pipeTwo;
  let totalWater = waterByPipeOne + waterByPipeTwo;
  if (totalWater <= pool) {
    let percent = (totalWater / pool) * 100;
    let percentPipeOne = (waterByPipeOne / totalWater) * 100;
    let percentPipeTwo = (waterByPipeTwo / totalWater) * 100;
    console.log(
      `The pool is ${percent.toFixed(
        2
      )}% full. Pipe 1: ${percentPipeOne.toFixed(
        2
      )}%. Pipe 2: ${percentPipeTwo.toFixed(2)}%.`
    );
  } else if (totalWater > pool) {
    let diff = totalWater - pool;
    console.log(
      `For ${hours.toFixed(2)} hours the pool overflows with ${diff.toFixed(
        2
      )} liters.`
    );
  }
}
pipesInPool(["1000", "100", "120", "3"]);
pipesInPool(["100", "100", "100", "2.5"]);
