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

ingredients.forEach(element => {
  const item = document.createElement('li');
  item.classList.add("item")
  item.textContent = element;

  list.append(item);
})

console.log(list);