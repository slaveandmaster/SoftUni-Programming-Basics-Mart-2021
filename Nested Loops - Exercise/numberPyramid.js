function numberPyramid(input) {
  const n = Number(input[0]);
  let currentLine = 1;
  let flag = false;
  for (let i = 1; i <= n; i++) {
    let str = " ";
    for (let k = 1; k <= i; k++) {
      if (currentLine > n) {
        flag = true;
        break;
      }
      str += currentLine + " ";
      currentLine++;
    }
    console.log(str);
    if (flag) {
      break;
    }
  }
}
numberPyramid(["7"]);
