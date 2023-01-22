const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");
const newItem = [];
for (const obj of ingredients) {
  const item = document.createElement("li");
  item.textContent = obj;
  item.classList.add("item");

  newItem.push(item);
}
list.append(...newItem);
