function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const bodyColor = document.querySelector("body");
const setColor = document.querySelector(".color");
const btnClick = document.querySelector(".change-color");
btnClick.addEventListener("click", () => {
  bodyColor.style.backgroundColor = getRandomHexColor();
  setColor.textContent = getRandomHexColor();
});
