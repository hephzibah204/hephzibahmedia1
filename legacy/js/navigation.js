// Hephzibah Media - Main JS
document.addEventListener('DOMContentLoaded', () => {
  const nav = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');

  // Sticky Scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });

  // Mobile Toggle
  if (hamburger) {
    hamburger.addEventListener('click', () => {
      nav.classList.toggle('open');
    });
  }

  // Mobile Submenu Toggle
  const navItemsWithSub = document.querySelectorAll('.nav-links > li');
  navItemsWithSub.forEach(item => {
    const link = item.querySelector('a');
    const mega = item.querySelector('.mega-menu');
    
    if (mega && window.innerWidth <= 992) {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        item.classList.toggle('active');
      });
    }
  });
});
