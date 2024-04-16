const hamburgerMenu = document.querySelector('.hamburger-area')

const hamburger = document.querySelector('.hamburger-menu')

console.log(hamburgerMenu);

hamburger.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('full')
})