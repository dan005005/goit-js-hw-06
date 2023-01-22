let counterValue = 0;
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const counter = document.querySelector("#value");

decrementBtn.addEventListener("click", counterValueReduce);
incrementBtn.addEventListener("click", counterValueIncrease);

function counterValueReduce() {
  counterValue -= 1;
  counter.textContent = counterValue;
}

function counterValueIncrease() {
  counterValue += 1;
  counter.textContent = counterValue;
}
