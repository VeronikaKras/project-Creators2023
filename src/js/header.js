// додавання background-color
// document.addEventListener('DOMContentLoaded', function () {
//   const currentURL = window.location.pathname;

//   const links = document.querySelectorAll('.header-item-link');

//   for (const link of links) {
//     if (link.getAttribute('href') === currentURL) {
//       link.classList.add('active-link');
//     } else {
//       link.classList.remove('active-link');
//     }
//   }
// });



// MOBILE MENU
(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');
const toggleIcon = () => {
  openMenuBtn.classList.toggle('is-open');
  openMenuBtn
    .querySelector('.mobile-button-menu-icon-togle')
    .classList.toggle('hidden');
  openMenuBtn
    .querySelector('.mobile-button-menu-icon-close-menu')
    .classList.toggle('hidden');
};


  const toggleMenu = () => {
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


  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
    toggleIcon();
  });
})();
