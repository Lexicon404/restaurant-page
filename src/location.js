import {createHTMLElement, clearElementContent, makeClassActive} from "./factory";
import {locationData} from "./data";


function loadLocation() {
    clearElementContent('main');
    makeClassActive('locationButton');
    const location = createHTMLElement('div', 'id', 'location');
    const address = createHTMLElement('div', 'id', 'address', locationData.address);
    const phone = createHTMLElement('div', 'id', 'phone', locationData.phone);
    location.appendChild(address);
    location.appendChild(phone);
    main.appendChild(location);
}


export default loadLocation;