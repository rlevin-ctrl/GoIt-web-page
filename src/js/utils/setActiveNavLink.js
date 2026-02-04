export const getPathnameFromHref = link => {
  const href = link.getAttribute('href');

  if (!href || href.startsWith('#')) {
    return null;
  }

  try {
    const url = new URL(href, window.location.origin);
    return url.pathname;
  } catch (e) {
    return null;
  }
};

export const setActiveLink = () => {
  const links = document.querySelectorAll('.nav-link');
  const currentPath = window.location.pathname;

  links.forEach(link => {
    const linkPath = getPathnameFromHref(link);

    if (linkPath && linkPath === currentPath) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
};
