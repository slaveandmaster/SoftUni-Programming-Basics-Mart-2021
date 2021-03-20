function convertMetrics(input) {
    let numberForConvert = Number(input[0]);
    let inputMetric = input[1];
    let outputMetric = input[2];
    let result = 0;

    if (inputMetric == "mm" && outputMetric == "m") {
        result += numberForConvert / 1000;
    }
    else if ( inputMetric == "m" && outputMetric == "cm"){
        result += numberForConvert * 100;
    }
    else if ( inputMetric == "cm" && outputMetric == "mm") {
        result += numberForConvert * 10;
    }
    else if ( inputMetric == "cm" && outputMetric == "m") {
        result += numberForConvert / 100;
    }
    else if ( inputMetric == "m" && outputMetric == "mm") {
        result += numberForConvert * 1000;
    }
    else if ( inputMetric == "mm" && outputMetric == "cm") {
        result += numberForConvert / 10;
    }
    console.log(`${result.toFixed(3)}`);

}
convertMetrics(["12","mm","m"]);
convertMetrics(["150","m","cm"]);
convertMetrics(["45","cm","mm"]);
