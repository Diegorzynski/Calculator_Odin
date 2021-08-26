const numbers = Array.from(document.getElementsByClassName('numbers'));
numbers.forEach(el => el.addEventListener('click', assignNum));
let screen = document.getElementById('screen')
const operations = Array.from(document.getElementsByClassName('ops'));
operations.forEach(el => el.addEventListener('click', operation));
const equal = Array.from(document.getElementsByClassName('equal'));
equal.forEach(el => el.addEventListener('click', operate))

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

}
screen.innerText += e.target.id;
}


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
    screen.innerText = result;
};

