const input = document.querySelector("#validation-input");

const validLength = Number(input.getAttribute("data-length"));
console.log(validLength);
function onInputBlur(event) {
  console.log(event.currentTarget.value.length);
  if (event.currentTarget.value.length !== validLength) {
    input.classList.remove("valid");
    input.classList.add("invalid");
  } else {
    input.classList.remove("invalid");
    input.classList.add("valid");
  }
}

input.addEventListener("blur", onInputBlur);
