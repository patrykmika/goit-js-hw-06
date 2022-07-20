const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatoes',
  'Herbs',
  'Condiments',
];

const body = document.body;

const list = body.querySelector('#ingredients');

const tableOfItems = [];

ingredients.forEach(element => {
  const item = document.createElement('li');
  item.classList.add("item")
  item.textContent = element;

  tableOfItems.push(item);
})

list.append(...tableOfItems);

console.log(list);