const nameOutput = document.querySelector('#name-output');

const nameInput = document.querySelector('#name-input');

nameOutput.textContent = 'Anonymus';

nameInput.addEventListener('input', (e) => {
    if (!e.currentTarget.value) {
        nameOutput.textContent = 'Anonymus';
    } else {
        nameOutput.textContent = `${e.currentTarget.value}`;
    }
});