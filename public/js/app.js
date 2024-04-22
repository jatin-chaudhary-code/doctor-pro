const header = document.querySelector('header.header')
window.addEventListener('scroll', () => {
    if(pageYOffset != 0){
        header.classList.add('sticky-header')
    }
    else{
        header.classList.remove('sticky-header')
    }
})

const openBtn = document.querySelector('.navbar .hamburger-menu')
const closeBtn = document.querySelector('.navbar .nav-items .nav-close-btn')
const navItems = document.querySelector('.navbar .nav-items');

openBtn.addEventListener('click', () => {
    if(navItems.classList.contains('show-nav')){
        navItems.classList.remove('show-nav')
    }else{
        navItems.classList.add('show-nav')
    }
})
closesBtn.addEventListener('click', () => {
    if(navItems.classList.contains('show-nav')){
        navItems.classList.remove('show-nav')
    }else{
        navItems.classList.add('show-nav')
    }
})