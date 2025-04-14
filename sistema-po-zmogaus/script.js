// Sistema po žmogaus - Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
  // Theme toggle functionality
  const themeToggle = document.querySelector('.theme-toggle');
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
  
  // Check for saved theme preference or use OS preference
  const currentTheme = localStorage.getItem('theme') || 
                      (prefersDarkScheme.matches ? 'dark' : 'light');
  
  // Apply the current theme
  if (currentTheme === 'dark') {
    document.body.classList.add('dark-theme');
  }
  
  // Toggle theme when button is clicked
  themeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
    
    // Save preference to localStorage
    const theme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
  });
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  
  // Mobile menu toggle (if needed in the future)
  const setupMobileMenu = () => {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.navbar__menu');
    
    if (mobileMenuToggle && navMenu) {
      mobileMenuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('navbar__menu--open');
        mobileMenuToggle.setAttribute(
          'aria-expanded', 
          navMenu.classList.contains('navbar__menu--open')
        );
      });
    }
  };
  
  // Add animation to feature cards
  const animateOnScroll = () => {
    const featureCards = document.querySelectorAll('.feature-card');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });
    
    featureCards.forEach(card => {
      observer.observe(card);
    });
  };
  
  // Initialize animations if IntersectionObserver is supported
  if ('IntersectionObserver' in window) {
    animateOnScroll();
  }
  
  // Add active state to current page in navigation
  const highlightCurrentPage = () => {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.navbar__item');
    
    navLinks.forEach(link => {
      const linkPath = link.getAttribute('href');
      if (linkPath === currentPath || 
          (linkPath !== '/' && currentPath.startsWith(linkPath))) {
        link.classList.add('navbar__item--active');
      }
    });
  };
  
  highlightCurrentPage();
});
