
const navTriggerEl = document.querySelector('.hamburger');
const navEl = document.querySelector('.nav')
const contentEl = document.querySelector('.content')
const hamburgerBarsEL = document.getElementsByTagName('span')

const toggleNav = () => {
    
    navTriggerEl.addEventListener('click', () =>{
        navEl.classList.add('open')
        contentEl.classList.add('shift')
    })
}

toggleNav()