const numbers = Array.from(document.getElementsByClassName('numbers'));
numbers.forEach(el => el.addEventListener('click', showOnScreen));
let initial_screen = document.getElementById('screen')

let firstNum = null;


function showOnScreen(e){ //shows on screesna and assign to input to be later divided into different numbers
initial_screen.innerHTML += e.target.id;
if(firstNum == null) {
    firstNum = e.target.id;
} else {
    firstNum += e.target.id;
   }
};


function operate(operator,num_1, num_2){


}

function add(){

}

function subtract(){

}

function multiply(){

}

function divide(){

}