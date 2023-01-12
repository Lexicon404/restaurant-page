import {createHTMLElement, clearElementContent, makeClassActive} from "./factory";
import {homeData} from "./data";


function loadHome() {
    clearElementContent('main');
    makeClassActive('homeButton')
    const home = createHTMLElement('div', 'id', 'home');
    const name = createHTMLElement('p', 'class', 'title', homeData.title);
    const brief = createHTMLElement('p', 'class', 'brief', homeData.brief);
    home.appendChild(name);
    home.appendChild(brief);
    main.appendChild(home);
}


export default loadHome;