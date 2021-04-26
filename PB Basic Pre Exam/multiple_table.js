function multiplyTable(input) {
  let number = Number(input[0]);
  let lastNumber =  number %  10;
  let middleNumber = number / 10 % 10;
  let firstNumber = number / 10 / 10 % 10; 
  for (let i = 1; i <= lastNumber; i++) {
      for (let j = 1; j <= middleNumber; j++) {
          for (let k = 1; k <= firstNumber; k++) {
              console.log(`${i} * ${j} * ${k} = ${i*j*k};`);
              
          }
          
      }
      
  }
}
multiplyTable(["324"]);
multiplyTable(["222"])