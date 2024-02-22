let numbers = document.querySelectorAll(".number");
let outputArea = document.querySelector(".output");
let positiveNegative = document.querySelector(".negativepositive");
let clearButton = document.querySelector("#clear");
let addButton = document.querySelector("#add");
let subtractButton = document.querySelector("#subtract");
let multiplyButton = document.querySelector("#multiply");
let divisionButton = document.querySelector("#divide");
let equalsButton = document.querySelector("#equals");
let outputUpper = document.querySelector(".output-upper");
let backSpace = document.querySelector("#backspace")
let decimalButton = document.querySelector(".decimal");
outputArea.textContent = "0";
let inputArr = [];

function calculate(operator, inputText1, inputText2) {
    let input1;
    let input2;
    let error = "Error! Division by Zero"
    if (inputText1.includes(".")){
        input1 = parseFloat(inputText1)
    }
    else {input1 = parseInt(inputText1)}
    
    if (inputText2.includes(".")){
        input2 = parseFloat(inputText2)
    }
    else {input2 = parseInt(inputText2)}
    
    switch (operator) {
        case "+":
            return input1 + input2;
            break
        case "-":
            return input1 - input2;
            break
        case "x":
            return input1 * input2;
            break
        case "÷":
            if (input2 == 0) {
                return error
            }
            else {return input1/input2}
    }
    

}

for (let number of numbers) {
    number.addEventListener("click", () => {
        if (outputArea.textContent == '0'){
            outputArea.textContent = number.textContent
        }
        else{
        outputArea.textContent += number.textContent;
}})
}

decimalButton.addEventListener("click", () => {
    let num = outputArea.textContent;
    if (!num.includes(".")){
        outputArea.textContent += "."
    }
})

positiveNegative.addEventListener("click", () => {
    let output = outputArea.textContent;
    let outputArr = output.split("");
    if (outputArr[0] != "-"){
        outputArr.unshift("-");
        outputArea.textContent = "";
        for (let element of outputArr) {
            outputArea.textContent += element
        }
        
    }
    else if (outputArea.textContent[0] == "-"){
        outputArr.shift();
        outputArea.textContent = "";
        for (let element of outputArr) {
            outputArea.textContent += element
        }
        }
})

clearButton.addEventListener("click", () => {
    outputArea.textContent = "0";
    outputUpper.textContent ="";
    inputArr = [];
})

addButton.addEventListener("click", () => {
    if (inputArr.length == 0) {
        if (outputArea.textContent == ""){
            inputArr.push("0");
        }
        else {inputArr.push(outputArea.textContent)}
        inputArr.push("+");
        outputArea.textContent = "0";
        outputUpper.textContent = inputArr[0] + " " + inputArr[1]
    }
    else if (inputArr.length == 2) {
        if (outputArea.textContent == ""){
            inputArr.push("0");
        }
        else {inputArr.push(outputArea.textContent)}
        outputArea.textContent = calculate(inputArr[1], inputArr[0], inputArr[2]);
        if (outputArea.textContent == "Error! Division by Zero"){
            inputArr = [];
            outputArea.textContent = "Error! Division by Zero";
            outputArea.textContent = "0"
        }
        else {
        inputArr = [];
        inputArr.push(outputArea.textContent);
        inputArr.push("+");
        outputUpper.textContent = inputArr[0] + " " + inputArr[1];
        outputArea.textContent = "0"
    }}
})

subtractButton.addEventListener("click", () => {
    if (inputArr.length == 0) {
        if (outputArea.textContent == ""){
            inputArr.push("0");
        }
        else {inputArr.push(outputArea.textContent)}
        inputArr.push("-");
        outputArea.textContent = "0";
        outputUpper.textContent = inputArr[0] + " " + inputArr[1]
    }
    else if (inputArr.length == 2) {
        if (outputArea.textContent == ""){
            inputArr.push("0");
        }
        else {inputArr.push(outputArea.textContent)}
        outputArea.textContent = calculate(inputArr[1], inputArr[0], inputArr[2]);
        if (outputArea.textContent == "Error! Division by Zero"){
            inputArr = [];
            outputArea.textContent = "Error! Division by Zero";
            outputArea.textContent = "0"
        }
        else {
        inputArr = [];
        inputArr.push(outputArea.textContent);
        inputArr.push("-");
        outputUpper.textContent = inputArr[0] + " " + inputArr[1];
        outputArea.textContent = "0"
    }}
})

multiplyButton.addEventListener("click", () => {
    if (inputArr.length == 0) {
        if (outputArea.textContent == ""){
            inputArr.push("0");
        }
        else {inputArr.push(outputArea.textContent)}
        inputArr.push("x");
        outputArea.textContent = "0";
        outputUpper.textContent = inputArr[0] + " " + inputArr[1]
    }
    else if (inputArr.length == 2) {
        if (outputArea.textContent == ""){
            inputArr.push("0");
        }
        else {inputArr.push(outputArea.textContent)}
        outputArea.textContent = calculate(inputArr[1], inputArr[0], inputArr[2]);
        if (outputArea.textContent == "Error! Division by Zero"){
            outputUpper.textContent = "Error! Division by Zero";
            outputArea.textContent ="0";
            inputArr = []
        }
        else{
        inputArr = [];
        inputArr.push(outputArea.textContent);
        inputArr.push("x");
        outputUpper.textContent = inputArr[0] + " " + inputArr[1];
        outputArea.textContent = "0"
    }}}
)

divisionButton.addEventListener("click", () => {
    if (inputArr.length == 0) {
        if (outputArea.textContent == ""){
            inputArr.push("0");
        }
        else {inputArr.push(outputArea.textContent)}
        inputArr.push("÷");
        outputArea.textContent = "0";
        outputUpper.textContent = inputArr[0] + " " + inputArr[1]
    }
    else if (inputArr.length == 2) {
        if (outputArea.textContent == ""){
            inputArr.push("0");
        }
        else {inputArr.push(outputArea.textContent)}
        outputArea.textContent = calculate(inputArr[1], inputArr[0], inputArr[2]);
        if (outputArea.textContent == "Error! Division by Zero"){
            outputUpper.textContent = "Error! Division by Zero";
            outputArea.textContent ="0";
            inputArr = []
        }
        else{
        inputArr = [];
        inputArr.push(outputArea.textContent);
        inputArr.push("÷");
        outputUpper.textContent = inputArr[0] + " " + inputArr[1];
        outputArea.textContent = "0"
    }}}
)

backSpace.addEventListener("click", () => {
    if (outputArea.textContent != "0"){
    let arr = (outputArea.textContent).split("");
    arr.pop();
    if (arr.length != 0){
    let newText = ""
    for (let element of arr){
        newText += element
    }
    outputArea.textContent = newText}
    else {outputArea.textContent = "0"}
}})

equalsButton.addEventListener("click", () => {
    if (outputArea.textContent = "") {
        inputArr.push(inputArr[0]);
        let result = calculate(inputArr[1], inputArr[0], inputArr[2]);
        let symbol = inputArr[1]
        inputArr = [];
        inputArr.push(result);
        inputArr.push(symbol);
        outputUpper.textContent = inputArr[0] + " " + inputArr[1]
    }
})

for (let num of numbers) {
    document.addEventListener("keydown", e => {
        if (e.key == num.textContent){
            if (outputArea.textContent == "0"){
            outputArea.textContent = num.textContent
        }
        else {outputArea.textContent += num.textContent}
        }
    })
}

document.addEventListener("keydown", e => {
    let contentArr = (outputArea.textContent).split("");
    if (contentArr.length != 1){
        if (e.key == 'Backspace') {
            contentArr.pop();
            outputArea.textContent =""
            for (let character of contentArr){
                outputArea.textContent += character
            }}}
    else if ((contentArr.length == 1) && (contentArr[0] != "0")){
        if (e.key == "Backspace") {
            contentArr.pop();
            contentArr.push("0");
            outputArea.textContent ="0"
        }
    }
    }
)

document.addEventListener("keydown", e => {
    if (e.key == '.') {
        if (!(outputArea.textContent).includes('.')){
                outputArea.textContent += "."
            }
        }
    }
)


document.addEventListener("keydown", e => {
    if (e.key == '+'){
    if (inputArr.length == 0) {
        if (outputArea.textContent == ""){
            inputArr.push("0");
        }
        else {inputArr.push(outputArea.textContent)}
        inputArr.push("+");
        outputArea.textContent = "0";
        outputUpper.textContent = inputArr[0] + " " + inputArr[1]
    }
    else if (inputArr.length == 2) {
        if (outputArea.textContent == ""){
            inputArr.push("0");
        }
        else {inputArr.push(outputArea.textContent)}
        outputArea.textContent = calculate(inputArr[1], inputArr[0], inputArr[2]);
        if (outputArea.textContent == "Error! Division by Zero"){
            inputArr = [];
            outputArea.textContent = "Error! Division by Zero";
            outputArea.textContent = "0"
        }
        else {
        inputArr = [];
        inputArr.push(outputArea.textContent);
        inputArr.push("+");
        outputUpper.textContent = inputArr[0] + " " + inputArr[1];
        outputArea.textContent = "0"
    }}}
})

document.addEventListener("keydown", e => {
    if (e.key == '-'){
    if (inputArr.length == 0) {
        if (outputArea.textContent == ""){
            inputArr.push("0");
        }
        else {inputArr.push(outputArea.textContent)}
        inputArr.push("-");
        outputArea.textContent = "0";
        outputUpper.textContent = inputArr[0] + " " + inputArr[1]
    }
    else if (inputArr.length == 2) {
        if (outputArea.textContent == ""){
            inputArr.push("0");
        }
        else {inputArr.push(outputArea.textContent)}
        outputArea.textContent = calculate(inputArr[1], inputArr[0], inputArr[2]);
        if (outputArea.textContent == "Error! Division by Zero"){
            inputArr = [];
            outputArea.textContent = "Error! Division by Zero";
            outputArea.textContent = "0"
        }
        else {
        inputArr = [];
        inputArr.push(outputArea.textContent);
        inputArr.push("-");
        outputUpper.textContent = inputArr[0] + " " + inputArr[1];
        outputArea.textContent = "0"
    }}
}})

document.addEventListener("keydown", e => {
    if (e.key == "x"){
    if (inputArr.length == 0) {
        if (outputArea.textContent == ""){
            inputArr.push("0");
        }
        else {inputArr.push(outputArea.textContent)}
        inputArr.push("x");
        outputArea.textContent = "0";
        outputUpper.textContent = inputArr[0] + " " + inputArr[1]
    }
    else if (inputArr.length == 2) {
        if (outputArea.textContent == ""){
            inputArr.push("0");
        }
        else {inputArr.push(outputArea.textContent)}
        outputArea.textContent = calculate(inputArr[1], inputArr[0], inputArr[2]);
        if (outputArea.textContent == "Error! Division by Zero"){
            outputUpper.textContent = "Error! Division by Zero";
            outputArea.textContent ="0";
            inputArr = []
        }
        else{
        inputArr = [];
        inputArr.push(outputArea.textContent);
        inputArr.push("x");
        outputUpper.textContent = inputArr[0] + " " + inputArr[1];
        outputArea.textContent = "0"
    }}}}
)

document.addEventListener("keydown", e => {
    if (e.key == "/"){
    if (inputArr.length == 0) {
        if (outputArea.textContent == ""){
            inputArr.push("0");
        }
        else {inputArr.push(outputArea.textContent)}
        inputArr.push("÷");
        outputArea.textContent = "0";
        outputUpper.textContent = inputArr[0] + " " + inputArr[1]
    }
    else if (inputArr.length == 2) {
        if (outputArea.textContent == ""){
            inputArr.push("0");
        }
        else {inputArr.push(outputArea.textContent)}
        outputArea.textContent = calculate(inputArr[1], inputArr[0], inputArr[2]);
        if (outputArea.textContent == "Error! Division by Zero"){
            outputUpper.textContent = "Error! Division by Zero";
            outputArea.textContent ="0";
            inputArr = []
        }
        else{
        inputArr = [];
        inputArr.push(outputArea.textContent);
        inputArr.push("÷");
        outputUpper.textContent = inputArr[0] + " " + inputArr[1];
        outputArea.textContent = "0"
    }}}}
)

document.addEventListener("keydown", e => {
    if (e.key == "="){
    if (outputArea.textContent == "") {
        inputArr.push(inputArr[0]);
        let result = calculate(inputArr[1], inputArr[0], inputArr[2]);
        let symbol = inputArr[1]
        inputArr = [];
        inputArr.push(result);
        inputArr.push(symbol);
        outputUpper.textContent = inputArr[0] + " " + inputArr[1]
    }
    else {inputArr.push(outputArea.textContent);
        console.log(inputArr)
        let result = calculate(inputArr[1], inputArr[0], inputArr[2]);
        inputArr = [];
        inputArr.push(result)
        outputUpper.textContent = result
        outputArea.textContent = ""
       
}
}})