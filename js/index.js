let counter = document.querySelector("#counter");
let plusElem = document.querySelector('#plus');
let minusElem = document.querySelector('#minus');
let resetCounter = document.querySelector('#reset');
let increaseBy = document.querySelector('#increaseby');
let startFrom = document.querySelector('#startfrom');
let incrementer = 1;

plusElem.addEventListener("click", ()=> {
  counter.innerHTML = +counter.innerHTML+incrementer;
});

minusElem.addEventListener("click", ()=> {
  counter.innerHTML = +counter.innerHTML-incrementer;
});

resetCounter.addEventListener("click", ()=> {
  let reset = confirm("Are you sure you want to reset the counter?");
  if(reset == true) {
    counter.innerHTML = 0;
    increaseBy.innerHTML = "INCREASE BY: 1";
    startFrom.innerHTML = "START FROM: 0";
    incrementer = 1;
  }
});

increaseBy.addEventListener("click", ()=> {
  let a = +prompt("Write the base number to increase the counter:", 1);
  if(isFinite(a) && a != null && a != '') {
    incrementer = a;
    increaseBy.innerHTML = "INCREASE BY: " + a;
  }
  else {
    alert("Please write a number");
  }
});

startFrom.addEventListener("click", ()=> {
  let b = +prompt ("Write the number you want to start from:");
  if(isFinite(b) && b != null && b != '') {
    counter.innerHTML = b;
    startFrom.innerHTML = "START FROM: " + b;
  }
  else {
    alert("Please write a number");
  }
});
