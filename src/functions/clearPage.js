function clearPage() {
    
    const tabContent = document.querySelector('#tab-content');
    tabContent.parentNode.removeChild(tabContent);

}

export {clearPage};