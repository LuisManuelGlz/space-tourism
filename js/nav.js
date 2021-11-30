const navHamburger = document.querySelector('#navHamburger');
const navClose = document.querySelector('#navClose');
const navSide = document.querySelector('#navSide');

navHamburger.addEventListener('click', () => {
  navSide.classList.toggle('nav-closed');
});

navClose.addEventListener('click', () => {
  navSide.classList.toggle('nav-closed');
});
