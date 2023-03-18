import "./styles.css";

let counter = 0;
const root = document.getElementById("app");
const display = document.createElement("h2");
display.textContent = counter;

const incrementButton = document.createElement("button");
incrementButton.setAttribute("style", "width:120px;height:30px");
incrementButton.textContent = "+";
incrementButton.addEventListener("click", function () {
  display.textContent = Number(display.textContent) + 1;
});

const decrementButton = document.createElement("button");
decrementButton.setAttribute("style", "width:120px;height:30px");
decrementButton.textContent = "-";
decrementButton.addEventListener("click", function () {
  display.textContent = Number(display.textContent) - 1;
});

root.appendChild(display);
root.appendChild(incrementButton);
root.appendChild(decrementButton);
