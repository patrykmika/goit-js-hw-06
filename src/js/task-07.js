const element = document.querySelector('#font-size-control');

element.addEventListener(
    'click', () => {
        const text = document.querySelector("#text");

        const value = document.querySelector('#font-size-control');

        const valueOfElement = value.value;

        text.style.fontSize = `${valueOfElement}px`;
    });