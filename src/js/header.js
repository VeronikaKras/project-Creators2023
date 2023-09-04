// import bodyScrollLock from 'body-scroll-lock';

// MOBILE MENU
(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');
  const links = document.querySelectorAll('.js-link');
  const toggleMenu = () => {
    console.log('first');
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');
    const scrollLockMethod = !isMenuOpen
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
    // bodyScrollLock[scrollLockMethod](document.body);
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);
  links.forEach(function (link) {
    link.addEventListener('click', toggleMenu);
  });
  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    // bodyScrollLock.enableBodyScroll(document.body);
  });
})();

// Зміна кнопок на мобільному меню
const openMenuBtn = document.querySelector('.js-open-menu');
const closeMenuBtn = document.querySelector('.js-close-menu');

openMenuBtn.addEventListener('click', () => {
  openMenuBtn.classList.add('is-open');
  closeMenuBtn.classList.add('is-open');
});

closeMenuBtn.addEventListener('click', () => {
  openMenuBtn.classList.remove('is-open');
  closeMenuBtn.classList.remove('is-open');
});

// Функція, яка встановлює/знімає клас "active" для елементів
function setActiveClassForCurrentPage() {
  let currentPagePath = window.location.pathname;

  let desktopPagesWithBackground = {
    '/shopping.html': 'header-shopping-link',
    '/index.html': 'header-home-link',
  };

  for (const page in desktopPagesWithBackground) {
    if (currentPagePath === page) {
      document
        .getElementById(desktopPagesWithBackground[page])
        .classList.add('header-active');
    } else {
      document
        .getElementById(desktopPagesWithBackground[page])
        .classList.remove('header-active');
    }
  }
}

window.addEventListener('load', setActiveClassForCurrentPage);
window.addEventListener('popstate', setActiveClassForCurrentPage);
