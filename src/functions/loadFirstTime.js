import { loadHome } from "./home";

function loadFirstTime() {
    
    const content = document.querySelector('div#content');
    
    let header = document.createElement('div');
    let logo = document.createElement('div');
    let headerLinks = document.createElement('ul');
    let homeLink = document.createElement('li');
    let contactLink = document.createElement('li');
    let menuLink = document.createElement('li');

    logo.textContent = 'THE FOOD PLACE';
    homeLink.textContent = 'HOME';
    contactLink.textContent = 'CONTACT';
    menuLink.textContent = 'MENU';

    header.classList.add('header');
    logo.classList.add('logo');
    headerLinks.classList.add('header-links');
    homeLink.classList.add('current-tab');

    homeLink.setAttribute('data-tab', 'home');
    contactLink.setAttribute('data-tab', 'contact');
    menuLink.setAttribute('data-tab', 'menu');    

    header.appendChild(logo);
    header.appendChild(headerLinks);

    headerLinks.appendChild(homeLink);
    headerLinks.appendChild(contactLink);
    headerLinks.appendChild(menuLink);

    content.appendChild(header);

    loadHome();

}

export { loadFirstTime };