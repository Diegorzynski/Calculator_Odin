const numbers = Array.from(document.getElementsByClassName('numbers'));
numbers.forEach(el => el.addEventListener('click', assignNum));
let screen = document.getElementById('screen')
const operations = Array.from(document.getElementsByClassName('ops'));
operations.forEach(el => el.addEventListener('click', operation));
const equal = Array.from(document.getElementsByClassName('equal'));
equal.forEach(el => el.addEventListener('click', finish));
const clear = Array.from(document.getElementsByClassName('clear'))
clear.forEach( el => el.addEventListener('click', empty));
const del = Array.from(document.getElementsByClassName('del'))
del.forEach( el => el.addEventListener('click', backSpace));

let firstNum = null;
let secondNum = null;
let operator = '';


function assignNum(e){ 
screen.innerText += e.target.id;
if(operator.length == 0) {
    firstNum == null ? firstNum = e.target.id : firstNum += e.target.id
} else {
    secondNum == null ? secondNum = e.target.id : secondNum += e.target.id;
   }
};


function operation(e){
if(operator.length == 0){
operator = e.target.id;
} else {
 setTimeout(() => { // call operate first only then reassign the operator
    operator = e.target.id},300);
    operate();
  }
screen.innerText += e.target.id;
};


function operate(){
    result = '';
    firstNum = parseInt(firstNum, 10);
    secondNum = parseInt(secondNum, 10);
    if(operator == '+' || operator == '-') {
       result = operator == '+' ? firstNum + secondNum : firstNum - secondNum;
    } else if (operator == '*' || operator == '/') {
        result = operator == '*' ? firstNum * secondNum : firstNum / secondNum;
    }
    firstNum = result;
    secondNum = null;
    screen.innerText = result;
     
};

function finish(){ // if equal was used do the math then clear the operator
    operate();
    operator = '';
};

function empty(){
    firstNum = null;
    secondNum = null;
    operator = '';
    screen.innerText = '';
};

function backSpace(){
    let backspace = Array.from(screen.innerText)
    let remov = screen.innerText.length -1;
    backspace[remov] = '';
    screen.innerText = backspace.toString().replace(/,/g,'')
};


