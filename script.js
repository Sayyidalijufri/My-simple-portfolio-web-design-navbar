const menuToggle = document.querySelector(`#menu-toggle input`)
const nav = document.querySelector('nav ul');
const body = document.querySelector('body');
const menuspan = document.querySelectorAll('#menu-toggle span')
const menulink = document.querySelectorAll('nav ul li a')


menuToggle.addEventListener('click', function() {
    nav.classList.toggle('active');
    body.classList.toggle('scroll-lock');
});

menulink.forEach((link) => link.addEventListener('click', () => {
  nav.classList.remove('active');
  body.classList.remove('scroll-lock');
  document.querySelector('#nav #menu-toggle input').checked = false;
}));

function myFunction(x) {
  if (x.matches) { // If media query matches
    body.classList.remove('scroll-lock');
  }
  else if (nav.classList.contains('active')){
    body.classList.add('scroll-lock');
  }
}

var x = window.matchMedia("(min-width: 467px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes