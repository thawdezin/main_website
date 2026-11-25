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
      const step = card ? card.getBoundingClientRect().width + 16 : carousel.clientWidth * 0.8;
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

document.querySelectorAll('.copy-button').forEach((button) => {
  const originalLabel = button.textContent;
  button.addEventListener('click', async () => {
    const value = button.dataset.copy;
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      const field = document.createElement('textarea');
      field.value = value;
      field.setAttribute('readonly', '');
      field.style.position = 'fixed';
      field.style.opacity = '0';
      document.body.appendChild(field);
      field.select();
      document.execCommand('copy');
      field.remove();
    }
    button.textContent = '✓ Copied';
    button.classList.add('copied');
    const status = button.closest('section')?.querySelector('.copy-status') || document.querySelector('.copy-status');
    if (status) status.textContent = `${value} copied to clipboard`;
    clearTimeout(button.resetTimer);
    button.resetTimer = setTimeout(() => {
      button.textContent = originalLabel;
      button.classList.remove('copied');
    }, 1800);
  });
});
