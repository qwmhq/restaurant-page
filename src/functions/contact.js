function loadContact() {
    let content = document.querySelector('div#content');
    let tabContent = document.createElement('div');
    let comingSoon = document.createElement('div');

    comingSoon.textContent = 'Contact page coming soon';
    comingSoon.classList.add('coming-soon');
    tabContent.setAttribute('id', 'tab-content');

    tabContent.appendChild(comingSoon);
    content.appendChild(tabContent);
}

export { loadContact };