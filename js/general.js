// Menu responsive
const burgerIcon = document.querySelector('#navbarMenu');
const navbarMenu = document.querySelector('#navbar-item');

burgerIcon.addEventListener('click', () =>{
    navbarMenu.classList.toggle('is-active')
})