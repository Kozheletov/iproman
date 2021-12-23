'use strict';

window.addEventListener('load', () => {
  const menuButton = document.querySelector('.js-menu-button');
  const menuNav = document.querySelector('.js-site-nav');
  const readMoreButton = document.querySelector('.js-read-more');
  const readMoreDotters = document.querySelector('.js-about__dotters');
  const aboutFullText = document.querySelector('.js-full-text');

  menuButton.addEventListener('click', (event) => {
    event.preventDefault();
    menuNav.classList.toggle('menu-hide');
  });

  readMoreButton.addEventListener('click', (event) => {
    event.preventDefault();
    readMoreDotters.classList.toggle('hide');
    aboutFullText.classList.toggle('show-inline');
    readMoreButton.textContent = readMoreButton.textContent === 'Читать далее' ? 'Свернуть' : 'Читать далее';
  });
});
