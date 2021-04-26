function barcodeGenerator(input) {
    const numOne = input[0];
    const numTwo = input[1];
    let result = '';
    // for (let i = numOne; i < numTwo; i++) {
    //     const element = i.toString();
    //     isEven = true;
    //     for (let j = 0; j < element.length; j++) {
    //         let num = Number(element[j]);
    //         if (num % 2 == 0) {
    //             isEven = false;
    //             break;
    //         }
            
    //     }
    //     if (isEven === true) {
    //         result += element +" ";
    //     }
    // }
    // console.log(result);
    for (let i = numOne[0]; i <= numTwo[0]; i++) {
        for (let j = numOne[1]; j <= numTwo[1]; j++) {
            for (let k = numOne[2]; k <= numTwo[2]; k++) {
                for (let n = numOne[3]; n <= numTwo[3]; n++) {
                    if ((Number(i) % 2 !== 0) && (Number(j) % 2 !== 0) && (Number(k) % 2 !== 0) && (Number(n) % 2 !== 0)) {
                        let num = `${i}${j}${k}${n}`;
                        result += num+" ";
                    }
                    
                }
                
            }
            
        }
        
    }
    console.log(result);
}
console.log("==============================");
barcodeGenerator(["2345", "6789"]);
console.log("==============================");
barcodeGenerator(["3256", "6579"]);
console.log("==============================");
barcodeGenerator(["1365", "5877"]);
