document.addEventListener('DOMContentLoaded', function() {
  // Set current year in footer
  document.getElementById('year').textContent = new Date().getFullYear();

  // Mobile navigation toggle
  const navToggle = document.getElementById('navToggle');
  const nav = document.getElementById('siteNav');
  
  navToggle.addEventListener('click', function() {
    this.classList.toggle('active');
    nav.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
  });

  // Close mobile menu when clicking on a link
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('active');
      nav.classList.remove('active');
      document.body.classList.remove('no-scroll');
    });
  });

  // Header scroll effect
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Typewriter effect
  const typewriter = document.querySelector('.typewriter');
  if (typewriter) {
    const text = typewriter.getAttribute('data-text');
    let i = 0;
    const speed = 50;
    
    function typeWriter() {
      if (i < text.length) {
        typewriter.innerHTML = text.substring(0, i+1) + '<span class="cursor">|</span>';
        i++;
        setTimeout(typeWriter, speed);
      } else {
        typewriter.innerHTML = text + '<span class="cursor">|</span>';
      }
    }
    
    setTimeout(typeWriter, 1000);
  }

  // Animate elements on scroll
  const animateOnScroll = function() {
    const cards = document.querySelectorAll('.card-entrance');
    
    cards.forEach((card, index) => {
      const cardTop = card.getBoundingClientRect().top;
      const delay = card.dataset.delay || 0;
      
      if (cardTop < window.innerHeight - 100) {
        setTimeout(() => {
          card.style.animationDelay = `${delay}s`;
          card.classList.add('animate');
        }, index * 100);
      }
    });
  };
  
  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll(); // Run once on load
});