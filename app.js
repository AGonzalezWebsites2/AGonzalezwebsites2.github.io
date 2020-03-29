document.getElementById('one').addEventListener('click', numPressed)
document.getElementById('two').addEventListener('click', numPressed)
document.getElementById('three').addEventListener('click', numPressed)
document.getElementById('four').addEventListener('click', numPressed)
document.getElementById('five').addEventListener('click', numPressed)
document.getElementById('six').addEventListener('click', numPressed)
document.getElementById('seven').addEventListener('click', numPressed)
document.getElementById('eight').addEventListener('click', numPressed)
document.getElementById('nine').addEventListener('click', numPressed)
document.getElementById('zero').addEventListener('click', numPressed)
document.getElementById('decimal').addEventListener('click', numPressed)

document.getElementById('add').addEventListener('click', numPressed)
document.getElementById('subtract').addEventListener('click', numPressed)
document.getElementById('multiply').addEventListener('click', numPressed)
document.getElementById('divide').addEventListener('click', numPressed)
document.getElementById('percentage').addEventListener('click', numPressed)
document.getElementById('equals').addEventListener('click', numPressed)

document.getElementById('reset').addEventListener('click', reset)

var display = document.getElementById('display')

function numPressed(e) {
    collectInfo(e.target.value);
    console.log("async back")


}

var values = [];
var expression;
//initiated from numPressed to update display
function collectInfo(x) {
    //if an expression, save value to expression 
    if (x == "*" || x == "/" || x == "+" || x == "-") {
        expression = x; 
        console.log(expression)
        updateDisplay(expression, "expression")
        return
    } 
    
    //if =, invoke equals() with first numbers, expression and second set of numbers 
    if (x == "=") {
        console.log('equals pressed')
        equals(leftNumbers, expression, combinedNumbers)
        return
    }

    values.push(x);
    console.log(values);
    combinedNumbers = values.join("");

    updateDisplay(combinedNumbers, "numbers")
}

//updates calc display
var leftNumbers;
var rightNumbers;
function updateDisplay(x, type){
    //if number, update inner html
    if (type == "numbers") {
        display.innerHTML = "<h1>"+x+"</h1>";
    //if expression, save first set of numbers to leftNumbers, reset values and then update inner html
    } else if (type == "expression") {   
    leftNumbers = combinedNumbers;
    values = [];
    display.innerHTML = "<h1>"+x+"</h1>";
    }
}

//calculates to find result, then shows result on display
var result;
function equals(a, b, c) {
    a = parseFloat(a, 10)
    c = parseFloat(c, 10)

    if (b == "+") {
        result = a + c;
        display.innerHTML = "<h1>"+result+"</h1>";
        combinedNumbers = result;
    } if (b == "-") {
        result = a - c;
        display.innerHTML = "<h1>"+result+"</h1>";
        combinedNumbers = result;
    } if (b == "/") {
        result = a / c;
        display.innerHTML = "<h1>"+result+"</h1>";
        combinedNumbers = result;
    } if (b == "*") {
        result = a * c;
        display.innerHTML = "<h1>"+result+"</h1>";
        combinedNumbers = result;
    }
}


function reset() {
    values = [];
    display.innerHTML = "<h1>0</h1>";
}