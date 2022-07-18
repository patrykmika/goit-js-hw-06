let counterValue = 0;

const decrementButton = document.querySelector('[data-action="decrement"]');

const decrement = ()=>{
    number.textContent = `${counterValue -= 1}`;
};

decrementButton.addEventListener('click', decrement);

const incrementButton = document.querySelector('[data-action="increment"]');

const increment = () => {
    number.textContent = `${counterValue += 1}`;
};

incrementButton.addEventListener('click', increment);

let number = document.querySelector('#value');
