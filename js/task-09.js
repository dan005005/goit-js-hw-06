const body = document.querySelector("body");
const colorBtn = document.querySelector(".change-color");
const span = document.querySelector(".color");

colorBtn.addEventListener("click", onChangeColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
function onChangeColor(event) {
  body.style.backgroundColor = getRandomHexColor();
  span.textContent = body.style.backgroundColor;
}
