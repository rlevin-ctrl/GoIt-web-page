import { handleSubscription } from './js/services/subscriptions.js';
import { mobileMenuRefs, refs } from './js/constants/refs.js';
import { handleScrollForScrollTopBtn, scrollToTop } from './js/services/scroll.js';
import { setActiveLink } from './js/utils/setActiveNavLink.js';

import * as mobileMenu from './js/sharedComponents/mobile-menu.js';
import { init } from './js/partials/filters.js';
import './js/partials/rating-modal.js';
import './js/services/modal.js';

import { changeInteranlLinksBaseURL } from './js/config/internalLinksHandler.js';
import { renderQuoteOfTheDay } from './js/sharedComponents/quoteOfTheDay.js';
import { renderFavoritesItems } from './js/services/favorites.js';

function main() {
  changeInteranlLinksBaseURL();

  renderQuoteOfTheDay();

  document.addEventListener('DOMContentLoaded', () => {
    const path = window.location.pathname;

    if (path === '/' || path === '/your-energy/') {
      init();
    }

    if (path === '/favorites' || path === '/your-energy/favorites') {
      renderFavoritesItems();
    }

    setActiveLink();

    const subscribeForm = document.querySelector('#subscribe-form');
    if (subscribeForm) {
      subscribeForm.addEventListener('submit', async event => {
        event.preventDefault();
        try {
          const email = subscribeForm.email.value;
          await handleSubscription(email);
          subscribeForm.reset();
        } catch (error) {
          console.log(error);
        }
      });
    }
  });

  mobileMenuRefs.burgerButton.addEventListener('click', mobileMenu.openMobileMenu);
  mobileMenuRefs.closeButton.addEventListener('click', mobileMenu.closeMenu);
  mobileMenuRefs.backdrop.addEventListener('click', mobileMenu.handleBackdropClick);
  document.addEventListener('keydown', mobileMenu.handleEscapeKey);
  mobileMenuRefs.navLinks.forEach(link =>
    link.addEventListener('click', mobileMenu.handleNavLinkClick)
  );

  window.addEventListener('scroll', handleScrollForScrollTopBtn);
  refs.scrollToTopBtn.addEventListener('click', scrollToTop);
}

main();
