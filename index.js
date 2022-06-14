let displayText = document.getElementById("result");
displayText.value = "0";

let deleteButton = document.getElementById("delete");
let allClearButton = document.getElementById("clear");
let numButtons = document.querySelectorAll(".num");
let operatorButtons = document.querySelectorAll(".operator");
let dot = document.getElementById("dot");
let memorySaveButton = document.getElementById("ms");
let memoryRecallButton = document.getElementById("mr");
let memoryClearButton = document.getElementById("mc");
let memoryPlusButton = document.getElementById("mp");
let memoryMinusButton = document.getElementById("mm");
let changeSignButton = document.getElementById("signChange")
let percentButton = document.getElementById("percent");
let reciprocalButton = document.getElementById("reciprocal");
let sqrtButton = document.getElementById("sqrt");
let squaredButton = document.getElementById("sqrd");
let logXButton = document.getElementById("log");
let eXButton = document.getElementById("ex");
let lnXButton = document.getElementById("lnx");
let equalButton = document.getElementById("equal");



//functions to get and set values to the display

function getValue() {
    return parseFloat(displayText.value);
}

function getValueStr() {
    return displayText.value;
}

function setValueStr(value) {
    displayText.value += value;
}

function setValue(value) {
    displayText.value = parseFloat(value);
}


// Add event listener to buttons
numButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
        if (displayText.value == 0)
            setValue(event.target.innerText);
        else
            setValueStr(event.target.innerText);
    });
})

//Dot Button
dot.addEventListener("click", () => {
    if (!displayText.value.includes("."))
        setValueStr('.');
})

//Delete Button
deleteButton.addEventListener("click", () => {
    if (displayText.value == "") setValueStr("0");
    else
        displayText.value = displayText.value.slice(0, -1);
})

//All Clear Button
allClearButton.addEventListener("click", () => {
    if (getValue() == 0) {};
    setValue("0");
});

//MS Button
memorySaveButton.addEventListener("click", () => {
    window.localStorage.setItem("cache", getValue());
})

//MR Button
memoryRecallButton.addEventListener("click", () => {
    setValue(window.localStorage.getItem("cache"));
})

//MC Button
memoryClearButton.addEventListener("click", () => {
    window.localStorage.clear();
    setValueStr("0");
})

//M+ Button
memoryPlusButton.addEventListener("click", () => {
    let numTobeAppended = parseFloat(window.localStorage.getItem("cache") + getValue());
    window.localStorage.setItem("cache", numTobeAppended);
})

//M- Button
memoryMinusButton.addEventListener("click", () => {
    let numTobeDifferented = parseFloat(window.localStorage.getItem("cache") - getValue());
    window.localStorage.setItem("cache", numTobeDifferented);
})

// +/- Button
changeSignButton.addEventListener("click", () => {
    if (!displayText.value == "0")
        setValue(getValue() * -1);
})

// % Button
percentButton.addEventListener("click", () => {
    setValue(getValue() * 0.01);
})

// 1/X
reciprocalButton.addEventListener("click", () => {
    setValue(Math.pow(getValue(), -1));
})

// Sqrt(X) Button
sqrtButton.addEventListener("click", () => {
    setValue(Math.sqrt(getValue()));
})
// X squared Button
squaredButton.addEventListener("click", () => {
    setValue(Math.pow(getValue(), 2));
})

//log(x)
logXButton.addEventListener("click", () => {
    setValue(Math.log10(getValue()));
})

//e(x) Button
eXButton.addEventListener("click", () => {
    setValue(Math.exp(getValue()));
})

//ln(X) Button
lnXButton.addEventListener("click", () => {
    setValue(Math.log(getValue()));;
})



//declare global variables for further operations
let operator;
let valueInMem;
// Add event listeners to Operator Buttons
operatorButtons.forEach((button) => {
    button.addEventListener("click", () => {
        operator = event.target.innerText;
        valueInMem = getValue();
        setValue("0");
    });
})
//Add event Listner to Equal Button
equalButton.addEventListener("click", () => {
    let currentNum=getValue();
    console.log(valueInMem,currentNum,operator)
    let result;
    if (operator == "+") result= valueInMem + currentNum;
    else if (operator == "-") result= valueInMem - currentNum;
    else if (operator == "*") result= valueInMem * currentNum;
    else if (operator == "/") result= valueInMem / currentNum;
    setValue(result);
    valueInMem=0;
});