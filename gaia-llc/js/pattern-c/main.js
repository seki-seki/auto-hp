// Pattern C JavaScript

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu Toggle
  const menuToggle = document.getElementById('menuToggle');
  const mainNav = document.getElementById('mainNav');

  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('active');
      mainNav.classList.toggle('active');
    });

    // Close menu when clicking nav links
    const navLinks = mainNav.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        mainNav.classList.remove('active');
      });
    });
  }

  // Smooth Scroll for Anchor Links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');

      // Skip if href is just "#"
      if (href === '#') return;

      e.preventDefault();
      const target = document.querySelector(href);

      if (target) {
        const headerOffset = 80;
        const elementPosition = target.offsetTop;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // Parallax Effect for Hero Background
  const heroBackground = document.querySelector('.hero-background');

  if (heroBackground) {
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * 0.5;
      heroBackground.style.transform = `skewY(-6deg) translateY(${rate}px)`;
    });
  }

  // Intersection Observer for Fade-In Animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0) scale(1)';
      }
    });
  }, observerOptions);

  // Observe business features
  const businessFeatures = document.querySelectorAll(
    '.business-feature-large, .business-feature-medium, .business-feature-small'
  );

  businessFeatures.forEach((feature, index) => {
    feature.style.opacity = '0';
    feature.style.transform = 'translateY(30px) scale(0.95)';
    feature.style.transition = `opacity 0.8s ease-out ${index * 0.1}s, transform 0.8s ease-out ${index * 0.1}s`;
    observer.observe(feature);
  });

  // Observe other sections
  const sections = document.querySelectorAll('.feature-split, .message-asymmetric, .info-diagonal');
  sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(40px)';
    section.style.transition = 'opacity 1s ease-out, transform 1s ease-out';
    observer.observe(section);
  });

  // Parallax effect for feature split sections
  const featureSplitVisuals = document.querySelectorAll('.feature-split-visual');

  window.addEventListener('scroll', () => {
    featureSplitVisuals.forEach(visual => {
      const rect = visual.getBoundingClientRect();
      const scrolled = window.pageYOffset;

      if (rect.top < window.innerHeight && rect.bottom > 0) {
        const rate = (scrolled - visual.offsetTop) * 0.3;
        visual.style.transform = `translateY(${rate}px)`;
      }
    });
  });

  // Diagonal blocks rotation on hover
  const infoBlocks = document.querySelectorAll('.info-block');

  infoBlocks.forEach(block => {
    block.addEventListener('mouseenter', () => {
      block.style.transition = 'transform 0.3s ease-out';
      block.style.transform = 'rotate(0deg) scale(1.02)';
    });

    block.addEventListener('mouseleave', () => {
      const rotation = block.classList.contains('info-block-mission') ? '-2deg' : '2deg';
      block.style.transform = `rotate(${rotation}) scale(1)`;
    });
  });
});
