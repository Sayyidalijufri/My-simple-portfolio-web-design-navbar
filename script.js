const menuToggle = document.querySelector(`#menu-toggle input`)
const nav = document.querySelector('nav ul');
const body = document.querySelector('body');


menuToggle.addEventListener('click', function() {
    nav.classList.toggle('active');
    body.classList.toggle('scroll-lock');
});