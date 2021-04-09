function operationsBetweenNumbers(input) {
  const numOne = Number(input[0]);
  const numTwo = Number(input[1]);
  const operator = input[2];
  let result = 0;
  let oddOrEven;
  // Напишете функция, която получава  две цели числа (N1 и N2) и оператор,
  // с който да се извърши дадена математическа операция с тях. Възможните
  // операции са: Събиране(+), Изваждане(-), Умножение(*), Деление(/) и Модулно деление(%).
  // При събиране, изваждане и умножение на конзолата трябва да се отпечатат резултата и дали той е четен или нечетен.
  //  При обикновеното деление – резултата. При модулното деление – остатъка.
  //  Трябва да се има предвид, че делителят може да е равен на 0(нула), а на нула не се дели.
  //  В този случай трябва да се отпечата специално съобщениe.
  // Вход
  // Приемат се 3 аргумента,:
  // ⦁	N1 – цяло число в интервала [0...40 000]
  // ⦁	N2 – цяло число в интервала [0...40 000]
  // ⦁	Оператор – един символ измежду: "+", "-", "*", "/", "%"
  switch (operator) {
    case "+":
      result = numOne + numTwo;
      oddOrEven = result % 2 === 0 ? "even" : "odd";
      console.log(`${numOne} ${operator} ${numTwo} = ${result} - ${oddOrEven}`);
      break;
    case "-":
      result = numOne - numTwo;
      oddOrEven = result % 2 === 0 ? "even" : "odd";
      console.log(`${numOne} ${operator} ${numTwo} = ${result} - ${oddOrEven}`);
      break;
    case "*":
      result = numOne * numTwo;
      oddOrEven = result % 2 === 0 ? "even" : "odd";
      console.log(`${numOne} ${operator} ${numTwo} = ${result} - ${oddOrEven}`);
      break;
    case "/":
      if (numTwo === 0) {
        console.log(`Cannot divide ${numOne} by zero`);
      } else {
        result = numOne / numTwo;
        console.log(`${numOne} ${operator} ${numTwo} = ${result.toFixed(2)}`);
      }
      break;
    case "%":
      if (numTwo === 0) {
        console.log(`Cannot divide ${numOne} by zero`);
      } else {
        result = numOne % numTwo;
        console.log(`${numOne} ${operator} ${numTwo} = ${result}`);
      }
      break;
    default:
      break;
  }
}
operationsBetweenNumbers(["10", "12", "+"]);
operationsBetweenNumbers(["10", "1", "-"]);
operationsBetweenNumbers(["7", "3", "*"]);
operationsBetweenNumbers(["123", "12", "/"]);
operationsBetweenNumbers(["10", "3", "%"]);
operationsBetweenNumbers(["112", "0", "/"]);
operationsBetweenNumbers(["10", "0", "%"]);
