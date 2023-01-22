function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  generalDiv: document.querySelector("#controls"),
  input: document.querySelector("input"),
  createBtn: document.querySelector("[data-create]"),
  destroyBtn: document.querySelector("[data-destroy"),
  boxes: document.querySelector("#boxes"),
};

refs.createBtn.addEventListener("click", onCreateBox);
refs.destroyBtn.addEventListener("click", onDestroyBox);
function onCreateBox(amount) {
  amount = refs.input.value;
  const divContent = [];
  for (let i = 1; i <= amount; i += 1) {
    let box = `<div class="box-${i} styleBox"></div>`;
    divContent.push(box);
  }

  const markup = divContent.join("");
  refs.boxes.insertAdjacentHTML("beforeend", markup);

  for (let i = 0; i < amount; i += 1) {
    refs.boxes.children[i].style.backgroundColor = getRandomHexColor();
    refs.boxes.children[i].style.width = 30 + 10 * i + "px";
    refs.boxes.children[i].style.height = 30 + 10 * i + "px";
    refs.boxes.children[i].textContent = `${i + 1}`;
  }

  refs.input.value = "";
}

function onDestroyBox() {
  refs.boxes.innerHTML = "";
}
