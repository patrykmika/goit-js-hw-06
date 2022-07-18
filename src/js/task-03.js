const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const body = document.body;

const gallery = body.querySelector(".gallery");

images.forEach((image) => {
  const imageHtml = document.createElement("li");

  const tagImg = `<img src = "${image.url}", alt = "${image.alt}", width = "500px"></img>`;

  imageHtml.insertAdjacentHTML("afterbegin", tagImg);

  gallery.append(imageHtml);
});

gallery.style.display = 'grid';
gallery.style.gridTemplateColumns = 'repeat(3, 1fr)';
gallery.style.gap = '10px';
gallery.style.gridAutoRows = 'minmax(100px, auto)';

let indexGrid = 0;
const gridClass = ["one", "two", "three"];

const imgs = gallery.querySelectorAll('li');
imgs.forEach((e) => {
  e.classList.add(gridClass[indexGrid]);
  indexGrid += 1;
  //console.log(e);
})

const one = gallery.querySelector('.one');
one.style.gridColumn = '1/3';
one.style.gridRow = '1';

const two = gallery.querySelector('.two');
two.style.gridColumn = '3/4';
two.style.gridRow = '2/6';

const three = gallery.querySelector('.three');
three.style.gridColumn = '1.5';
three.style.gridRow = '3/5';

console.log(gallery);
