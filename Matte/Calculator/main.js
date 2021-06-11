var storedValue = document.getElementById("stored-value");
var currentValue = document.getElementById("current-value");
var oldValue = 0;
var newValue = 0;
var finalValue = 0;
var sumValue = 0;
storedValue.innerHTML = oldValue;
currentValue.innerHTML = newValue;
var symbol;
function addSign(sign) {
    switch (sign) {
        case "C":
            storedValue.innerHTML = 0;
            newValue = 0;
            currentValue.innerHTML = newValue;
            symbol = "C";
            break;
        case "+/-":
            newValue *= -1;
            currentValue.innerHTML = newValue;
            break;
        case "/":
        case "*":
        case "-":
        case "+":
        case "%":
        case "!":
            if (oldValue > 0) {
                getEquation();
                sumValue = oldValue;
            }
            storedValue.innerHTML = finalValue;
            currentValue.innerHTML = 0;
            handleSymbol(sign);
            break;
        case "=":
            getEquation()
            break;
        default:
            newValue == 0 ? newValue = sign : newValue += sign;
            currentValue.innerHTML = newValue;
            break;
    }
}

function handleSymbol(Symbol) {
    oldValue = newValue;
    if (sumValue > 0) {
        oldValue = sumValue;
    }
    storedValue.innerHTML = `${oldValue} ${Symbol} `;
    newValue = 0;
    symbol = Symbol;
}
function getEquation() {
    oldValue = parseFloat(oldValue);
    newValue = parseFloat(newValue);
    switch (symbol) {
        case "/":
            finalValue = oldValue / newValue;
            break;
        case "*":
            finalValue = oldValue * newValue;
            break;
        case "-":
            finalValue = oldValue - newValue;
            break;
        case "+":
            finalValue = oldValue + newValue;
            break;
        case "%":
            finalValue = oldValue % newValue;
            break;
        case "!":
            let factorialNumber = oldValue;
            let totalFactorialValue = 1;
            while (factorialNumber > 1) {
                totalFactorialValue *= factorialNumber
                factorialNumber--;
            }
            finalValue = totalFactorialValue;
            break
        case "C":
            console.log("cleared");
            break;
        default:
            console.log("Something unexpected happened");
            break;
    }
    // storedValue.innerHTML = "&nbsp;";
    if (finalValue % 1 == 0) {
        currentValue.innerHTML = finalValue;
    } else if (finalValue % 1 != 0 && finalValue != undefined) {
        let length;
        let decimalAmount = finalValue % 1;
        console.log(decimalAmount);
        for (let i = 0; i < decimalAmount.toString().length - 1; i++) {
            length = i;
            if (length > 8) {
                length = 8;
            }
        }
        console.log(length + " desimal tall");
        currentValue.innerHTML = finalValue.toFixed(length);
    }
    oldValue = finalValue;
    storedValue.innerHTML = oldValue;
}