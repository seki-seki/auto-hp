// Main JavaScript - Pattern C: Dynamic & Impactful

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu Toggle
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const nav = document.querySelector('.nav');
  const navLinks = document.querySelectorAll('.nav a');

  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
      mobileMenuToggle.classList.toggle('active');
      nav.classList.toggle('active');
      document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenuToggle.classList.remove('active');
        nav.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));

      if (target) {
        const headerOffset = 75;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // Intersection Observer for fade-in animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -80px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  // Observe all elements with fade-in class
  document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
  });

  // Current year in footer
  const currentYearElement = document.getElementById('current-year');
  if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
  }

  // Parallax effect for hero section (subtle)
  const hero = document.querySelector('.hero');
  if (hero) {
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const parallaxSpeed = 0.4;
      hero.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
    });
  }

  // Business card dynamic hover effect
  const businessCards = document.querySelectorAll('.business-card');
  businessCards.forEach(card => {
    card.addEventListener('mousemove', function(e) {
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;

      this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px) scale(1.02)`;
    });

    card.addEventListener('mouseleave', function() {
      this.style.transform = '';
    });
  });

  // Add active state to current navigation item
  const currentLocation = window.location.href;
  navLinks.forEach(link => {
    if (link.href === currentLocation) {
      link.style.background = 'linear-gradient(90deg, var(--color-primary), var(--color-accent))';
    }
  });

  // Scroll progress indicator
  const createScrollProgress = () => {
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
      position: fixed;
      top: var(--header-height);
      left: 0;
      width: 0;
      height: 4px;
      background: linear-gradient(90deg, var(--color-primary), var(--color-accent));
      z-index: 9999;
      transition: width 0.1s ease-out;
    `;
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      progressBar.style.width = scrolled + '%';
    });
  };

  createScrollProgress();

  // Scroll to top button with dynamic styling
  const createScrollToTopButton = () => {
    const button = document.createElement('button');
    button.innerHTML = '↑';
    button.className = 'scroll-to-top';
    button.style.cssText = `
      position: fixed;
      bottom: 30px;
      right: 30px;
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
      color: white;
      border: none;
      font-size: 28px;
      font-weight: bold;
      cursor: pointer;
      opacity: 0;
      visibility: hidden;
      transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
      z-index: 999;
      box-shadow: 0 8px 20px rgba(231, 76, 60, 0.4);
    `;

    document.body.appendChild(button);

    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 500) {
        button.style.opacity = '1';
        button.style.visibility = 'visible';
      } else {
        button.style.opacity = '0';
        button.style.visibility = 'hidden';
      }
    });

    button.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });

    button.addEventListener('mouseenter', () => {
      button.style.transform = 'scale(1.15) rotate(10deg)';
      button.style.boxShadow = '0 12px 28px rgba(231, 76, 60, 0.5)';
    });

    button.addEventListener('mouseleave', () => {
      button.style.transform = 'scale(1) rotate(0deg)';
      button.style.boxShadow = '0 8px 20px rgba(231, 76, 60, 0.4)';
    });
  };

  createScrollToTopButton();

  // Random animation for hero gradient background
  const animateHeroGradient = () => {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    let hue = 0;
    setInterval(() => {
      hue = (hue + 1) % 360;
      // Subtle color shift effect (optional, can be disabled)
      // hero.style.filter = `hue-rotate(${hue * 0.1}deg)`;
    }, 100);
  };

  // animateHeroGradient(); // Uncomment to enable

  // Dynamic text effect for hero title
  const heroTitle = document.querySelector('.hero-title');
  if (heroTitle) {
    const text = heroTitle.textContent;
    heroTitle.innerHTML = text.split('').map((char, i) =>
      `<span style="display:inline-block; animation: letterPop 0.5s ease-out ${i * 0.05}s both;">${char === ' ' ? '&nbsp;' : char}</span>`
    ).join('');

    const style = document.createElement('style');
    style.textContent = `
      @keyframes letterPop {
        0% {
          opacity: 0;
          transform: translateY(20px) scale(0.8);
        }
        50% {
          transform: translateY(-5px) scale(1.1);
        }
        100% {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
      }
    `;
    document.head.appendChild(style);
  }

  // Console welcome message
  console.log(
    '%cGAIA LLC - Pattern C: Dynamic & Impactful',
    'font-size: 24px; font-weight: bold; background: linear-gradient(135deg, #E74C3C, #F39C12); -webkit-background-clip: text; color: transparent;'
  );
  console.log('%cValue Creation - 価値創造', 'font-size: 16px; color: #E74C3C;');
  console.log('%cExperience the dynamic design!', 'font-size: 12px; color: #F39C12;');
});
