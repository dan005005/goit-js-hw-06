const text = document.querySelector("#text");
const fontSize = document.querySelector("#font-size-control");

function onChangeFontSize(event) {
  console.log(event.currentTarget.value);
  text.style.fontSize = event.currentTarget.value + "px";
}

fontSize.addEventListener("input", onChangeFontSize);
