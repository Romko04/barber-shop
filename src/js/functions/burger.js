import { disableScroll } from '../functions/disable-scroll';
import { enableScroll } from '../functions/enable-scroll';

(function(){
  console.log(document?.querySelectorAll('.nav__menu-item'));
  const menuItems = document?.querySelectorAll('.nav__body-items');
  const burger = document?.querySelector('.header__burger');
  const menu = document?.querySelector('.nav__body');

  burger?.addEventListener('click', (e) => {
    e.preventDefault()
    burger?.classList.toggle('active');
    menu?.classList.toggle('active');

    if (menu?.classList.contains('active')) {
      disableScroll();
    } else {
      enableScroll();
    }
  });

  // overlay?.addEventListener('click', () => {
  //   burger?.setAttribute('aria-expanded', 'false');
  //   burger?.setAttribute('aria-label', 'Открыть меню');
  //   burger.classList.remove('burger--active');
  //   menu.classList.remove('menu--active');
  //   enableScroll();
  // });

  menuItems?.forEach(el => {
    el.addEventListener('click', () => {
      burger.classList.remove('active');
      menu.classList.remove('active');
      enableScroll();
    });
  });
})();
