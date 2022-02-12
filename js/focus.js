const isMouseDown = false; // в примере будет работать только для 1ой кнопки
const button = document.querySelector('button');
button.addEventListener('mousedown', () => (isMouseDown = true));
button.addEventListener('mouseup', () => (isMouseDown = false));
button.addEventListener('focus', () => {
    if (isMouseDown) {
      button.blur();
    }
})
