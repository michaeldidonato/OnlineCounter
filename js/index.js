let resetCounter = document.querySelector('#reset');
let increaseBy = document.querySelector('#increaseby');
let startFrom = document.querySelector('#startfrom');
let incrementer = 1;

// Creation of the Counter from JavaScript
let mainDiv = document.querySelector('.container');
let counter = document.createElement('h2');
counter.innerHTML = 0;
let titleCounter = document.querySelector('h1');
titleCounter.insertAdjacentElement('afterend',counter);
counter.setAttribute('class','counter');
counter.setAttribute('id','counter');

//Creation of Buttons +/-
let divButtons = document.createElement('div');
divButtons.setAttribute('class','plus-minus');
counter.insertAdjacentElement('afterend',divButtons);

let minusElem = document.createElement('button');
minusElem.innerHTML = "-";
divButtons.appendChild(minusElem);
minusElem.setAttribute('class','button');
minusElem.setAttribute('id','minus');

let plusElem = document.createElement('button');
plusElem.innerHTML = "+";
divButtons.appendChild(plusElem);
plusElem.setAttribute('class','button');
plusElem.setAttribute('id','plus');

console.log(mainDiv);

//Functions and events
plusElem.addEventListener("click", ()=> {
  counter.innerHTML = +counter.innerHTML+incrementer;
});

minusElem.addEventListener("click", ()=> {
  counter.innerHTML = +counter.innerHTML-incrementer;
});

resetCounter.addEventListener("click", ()=> {
  let reset = confirm("Are you sure you want to reset counter and settings?");
  if(reset == true) {
    counter.innerHTML = 0;
    increaseBy.innerHTML = "INCREASE BY: 1";
    startFrom.innerHTML = "START FROM: 0";
    incrementer = 1;
  }
});

increaseBy.addEventListener("click", ()=> {
  let a = +prompt("Write the base number to increase the counter:", 1);
  if(isFinite(a) && a !== null && a != '') {
    incrementer = a;
    increaseBy.innerHTML = "INCREASE BY: " + a;
  }
  else {
    alert("Please write a valid number");
  }
});

startFrom.addEventListener("click", ()=> {
  let b = +prompt ("Write the number you want to start from:", 0);
  if(isFinite(b) && b !== null && b != '') {
    counter.innerHTML = b;
    startFrom.innerHTML = "START FROM: " + b;
  }
  else if (b === 0 || b === null) {
    let zeroOrNull = confirm("Do you want to reset the counter?");
    if (zeroOrNull == true){
      counter.innerHTML = b;
      startFrom.innerHTML = "START FROM: " + b;
    }
  }
  else {
    alert("Please write a number");
  }
});
