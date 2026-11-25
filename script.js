const menuButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuButton?.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  navLinks.classList.toggle('open', !isOpen);
  document.body.classList.toggle('menu-open', !isOpen);
});

navLinks?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuButton?.setAttribute('aria-expanded', 'false');
    navLinks.classList.remove('open');
    document.body.classList.remove('menu-open');
  });
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll('.reveal').forEach((element, index) => {
  element.style.transitionDelay = `${Math.min(index % 4, 3) * 70}ms`;
  revealObserver.observe(element);
});

document.querySelectorAll('#year, #year-footer').forEach((element) => {
  element.textContent = new Date().getFullYear();
});

document.querySelectorAll('.store-carousel').forEach((carousel) => {
  const buttons = document.querySelectorAll(`[data-carousel="${carousel.id}"]`);
  const updateButtons = () => {
    buttons.forEach((button) => {
      const atStart = carousel.scrollLeft <= 2;
      const atEnd = carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth - 2;
      button.disabled = button.dataset.direction === 'prev' ? atStart : atEnd;
    });
  };

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const card = carousel.querySelector('.store-card');
      const step = card ? card.getBoundingClientRect().width + 18 : carousel.clientWidth * 0.8;
      carousel.scrollBy({
        left: button.dataset.direction === 'next' ? step : -step,
        behavior: 'smooth'
      });
    });
  });

  carousel.addEventListener('scroll', updateButtons, { passive: true });
  window.addEventListener('resize', updateButtons);
  updateButtons();
});
