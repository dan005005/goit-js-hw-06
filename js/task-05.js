const input = document.querySelector("#name-input");
const stringName = document.querySelector("#name-output");

input.addEventListener("input", onImputChange);

function onImputChange(event) {
  if (event.currentTarget.value !== "") {
    stringName.textContent = event.currentTarget.value;
  } else {
    stringName.textContent = "Anonymous";
  }
}
