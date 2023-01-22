const generalList = document.querySelector("#categories");
console.log(`Number of categories: ${generalList.children.length}`);

const itemsOfGeneralList = document.querySelectorAll(".item");
itemsOfGeneralList.forEach((item) => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`);
});
