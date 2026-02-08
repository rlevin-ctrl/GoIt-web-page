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

  const normalize = path => path.replace(/\/index\.html$/, "/");

  links.forEach(link => {
    const linkPath = getPathnameFromHref(link);

    if (linkPath && normalize(linkPath) === normalize(currentPath)) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
};
