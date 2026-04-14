const burgerButton = document.querySelector('.burger-btn');
const menu = document.querySelector('.nav-items');

if (burgerButton && menu) {
  const closeMenu = () => {
    burgerButton.classList.remove('is-open');
    menu.classList.remove('is-open');
    burgerButton.setAttribute('aria-expanded', 'false');
    burgerButton.setAttribute('aria-label', 'Open menu');
  };

  const openMenu = () => {
    burgerButton.classList.add('is-open');
    menu.classList.add('is-open');
    burgerButton.setAttribute('aria-expanded', 'true');
    burgerButton.setAttribute('aria-label', 'Close menu');
  };

  burgerButton.addEventListener('click', () => {
    if (menu.classList.contains('is-open')) {
      closeMenu();
      return;
    }

    openMenu();
  });

  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      closeMenu();
    }
  });
}
