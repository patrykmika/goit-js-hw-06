function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const create = document.querySelector("button[data-create]");
const destroy = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");
const input = document.querySelector("input");

const createBoxes = (amount) => {
  const size = 30;

  const box = document.createElement("div");

  box.style.width = `${size + amount * 10}px`;
  box.style.height = `${size + amount * 10}px`;
  box.style.background = getRandomHexColor();
  box.style.display = "flex";

  boxes.append(box);
};

const destroyBoxes = () => {
  boxes.textContent = "";
  input.value = "";
};

create.addEventListener("click", () => {
  const inputValue = document.querySelector("input").value;

  for (let i = 1; i <= inputValue; i++) {
    createBoxes(i);
  }
});

destroy.addEventListener("click", () => destroyBoxes());