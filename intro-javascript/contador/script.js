const btnIncrement = document.getElementById("increment");
const btnDecrement = document.getElementById("decrement");
const currentNumberWrapper = document.querySelector("#currentNumber");

let currentNumber = 0;

btnIncrement.addEventListener("click", increment);
btnDecrement.addEventListener("click", decrement);

function increment() {
  currentNumber = currentNumber + 1;
  currentNumberWrapper.innerHTML = currentNumber;

  handleCurrentNumber(currentNumber);
  handleLimitCurrentNumber(currentNumber, 10);
}

function decrement() {
  currentNumber = currentNumber - 1;
  currentNumberWrapper.innerHTML = currentNumber;

  handleCurrentNumber(currentNumber);
  handleLimitCurrentNumber(currentNumber, 10);
}

function handleLimitCurrentNumber(current, limit) {
  if (current >= limit) {
    btnIncrement.setAttribute("disabled", "disabled");
    alert("chegamos ao limite " + limit + "!");

    return;
  }
  btnIncrement.removeAttribute("disabled");
}

function handleCurrentNumber(currentNumber = 0) {
  if (currentNumber === 0 || currentNumber < 0) {
    btnDecrement.setAttribute("disabled", "disabled");

    return;
  }
  btnDecrement.removeAttribute("disabled");
}

window.onload = function () {
  handleCurrentNumber();
};
