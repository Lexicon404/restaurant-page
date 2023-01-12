import './style.css';
import {createHTMLElement} from './factory.js';
import loadHome from './home.js';
import loadMenu from './menu.js';
import loadLocation from './location.js';


const content = document.getElementById('content');



function loadNav() {
    const nav = createHTMLElement('div', 'id', 'nav');
    const homeButton = createHTMLElement('button', 'id', 'homeButton', 'HOME');
    const menuButton = createHTMLElement('button', 'id', 'menuButton', 'MENU');
    const locationButton = createHTMLElement('button', 'id', 'locationButton', 'LOCATION');
    homeButton.addEventListener('click', loadHome);
    menuButton.addEventListener('click', loadMenu);
    locationButton.addEventListener('click', loadLocation);

    content.appendChild(nav);
    nav.appendChild(homeButton);
    nav.appendChild(menuButton);
    nav.appendChild(locationButton);
}

function loadMain() {
    const main = createHTMLElement('div', 'id', 'main');
    content.appendChild(main);
    main.textContent = 'this is main container'
}


function loadFooter() {
    const footer = createHTMLElement('div', 'id', 'footer');
    content.appendChild(footer);
    footer.textContent = 'Site made for Odin Restaurant Page exercise 2022'

}

loadNav();
loadMain();
loadFooter();

