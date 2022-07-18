const textInput = document.querySelector('#validation-input');

const dataLength = textInput.getAttribute('data-length');

textInput.addEventListener('blur', () => {
    const contentLength = textInput.value.length;
    console.log(contentLength);

    if (contentLength >= dataLength) {
        textInput.setAttribute('class', 'valid');
        } else {
            textInput.setAttribute('class', 'invalid');
        }
    });