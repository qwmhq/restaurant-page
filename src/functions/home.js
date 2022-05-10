function loadHome() {

    const content = document.querySelector('div#content');

    let tabContent = document.createElement('div');
    let hero = document.createElement('div');
    let heroH1 = document.createElement('h1');
    let heroP = document.createElement('p');
    let imgAttribution = document.createElement('div');

    heroH1.textContent = 'Lorem ipsum dolor sit amet, consectetur.';
    heroP.textContent = 'Fusce volutpat laoreet.';
    imgAttribution.innerHTML = 'Photo by <a href="https://unsplash.com/@cant89?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Davide Cantelli</a> on <a href="https://unsplash.com/s/photos/food?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>';

    tabContent.setAttribute('id', 'tab-content');
    hero.classList.add('hero');
    imgAttribution.classList.add('img-attribution');

    hero.appendChild(heroH1);
    hero.appendChild(heroP);

    tabContent.appendChild(hero);
    tabContent.appendChild(imgAttribution);

    content.append(tabContent);
}   

export { loadHome };