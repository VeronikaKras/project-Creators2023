import '../css/styles.css';
import '../css/header.css';
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
    bodyScrollLock[scrollLockMethod](document.body);
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
    bodyScrollLock.enableBodyScroll(document.body);
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

document.addEventListener('DOMContentLoaded', () => {
  const homePage = document.getElementById('header-home-link');
  const shoppingPage = document.getElementById('header-shopping-link');
  const mobileHomePage = document.getElementById('mobile-home-link');
  const mobileShoppingPage = document.getElementById('mobile-shopping-link');

  const currentURL = window.location.href; // отримуємо поточний URL сторінки

  const setActivePage = () => {
    if (currentURL.includes('index.html') || currentURL.endsWith('/')) {
      homePage.classList.add('header-active');
      shoppingPage.classList.remove('header-active');
      mobileHomePage.classList.add('header-active');
      mobileShoppingPage.classList.remove('header-active');
    } else if (currentURL.includes('shopping')) {
      shoppingPage.classList.add('header-active');
      homePage.classList.remove('header-active');
      mobileShoppingPage.classList.add('header-active');
      mobileHomePage.classList.remove('header-active');
    } else {
      homePage.classList.remove('header-active');
      shoppingPage.classList.remove('header-active');
      mobileHomePage.classList.remove('header-active');
      mobileShoppingPage.classList.remove('header-active');
    }
  };

  // Викликаємо функцію при завантаженні сторінки та при поточному URL
  setActivePage();
});
