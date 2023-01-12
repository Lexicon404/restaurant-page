import {createHTMLElement, clearElementContent, makeClassActive} from "./factory";
import {menuData} from "./data";

function loadMenu() {
    clearElementContent('main');
    makeClassActive('menuButton')
    const menu = createHTMLElement('div', 'id', 'menu');
    menuData.forEach(i => {
        const card = createHTMLElement('div', 'class', 'card');
        const title = createHTMLElement('div', 'class', 'title', i.title);
        const description = createHTMLElement('div', 'class', 'description', i.description);
        const price = createHTMLElement('div', 'class', 'price', i.price)
        main.appendChild(menu);
        menu.appendChild(card);
        card.appendChild(title);
        card.appendChild(description);
        card.appendChild(price);
    })

}

export default loadMenu;