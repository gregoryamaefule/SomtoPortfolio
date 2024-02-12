// mobile functionalities

const mobileMenu = document.querySelector('#mobile-menu')
mobileMenu.addEventListener('click', handleMobileMenu)

const mobileNav = document.querySelector('.mobile-nav')

function handleMobileMenu(){
    mobileNav.style.display = 'block'

}
const closeMenuIcon = document.querySelector('#close-menu-icon')
closeMenuIcon.addEventListener('click', handleCloseMI)


function handleCloseMI(){
    mobileNav.style.display = 'none'

}
