

function createHTMLElement(tag, attribute, name, text) {
    const element = document.createElement(tag);
    element.setAttribute(attribute, name);
    element.textContent = text;
    return element;
}

function clearElementContent(element) {
    document.getElementById(element).innerHTML = "";
}

function makeClassActive(button) {
    const buttons = document.querySelectorAll('button');
    const array = Array.from(buttons);
    const clickedBtn = document.getElementById(button);
    array.forEach(button => (button.classList.remove('buttonActive')));
    clickedBtn.classList.add('buttonActive');
}

export {createHTMLElement, clearElementContent, makeClassActive};