import './styles/style.css';
import { loadFirstTime } from './functions/loadFirstTime';
import { clearPage } from './functions/clearPage';
import { loadHome } from './functions/home';
import { loadMenu } from './functions/menu';
import { loadContact } from './functions/contact';

loadFirstTime();

let tabs = [];

tabs[0] = document.querySelector(`li[data-tab="home"]`);
tabs[1] = document.querySelector(`li[data-tab="contact"]`);
tabs[2] = document.querySelector(`li[data-tab="menu"]`);

let currentTab = tabs[0]

function tabSwitch() {
    currentTab.classList.remove('current-tab');
    currentTab = this;
    currentTab.classList.add('current-tab');
    clearPage();
    switch ( currentTab.getAttribute('data-tab') ) {
        case 'home':
            loadHome();
            break;
        case 'menu':
            loadMenu();
            break;
        case 'contact':
            loadContact();
            break;
    }
}

tabs.forEach(function(tab) { tab.addEventListener('click', tabSwitch)});