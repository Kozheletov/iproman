'use strict';

window.addEventListener('load', () => {
  const menuButton = document.querySelector('.js-menu-button');
  const menuNav = document.querySelector('.js-site-nav');

  menuButton.addEventListener('click', (event) => {
    event.preventDefault();
    menuNav.classList.toggle('menu-hide');
  });
});
