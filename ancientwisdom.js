document.addEventListener('DOMContentLoaded', function() {
  console.log('ancientwisdom.js loaded'); // Test script loading

  // Mobile menu toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');

  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', function() {
      mobileMenuBtn.classList.toggle('active');
      navLinks.classList.toggle('active');
    });
  }

  // Knowledge system card navigation
  const knowledgeSystemCards = document.querySelectorAll('.knowledge-system-card');
  
  if (knowledgeSystemCards.length > 0) {
    knowledgeSystemCards.forEach(card => {
      card.addEventListener('click', function() {
        const system = this.getAttribute('data-system');
        console.log('Clicked card with data-system:', system);
        const sectionElement = document.getElementById(system);
        console.log('Target section:', sectionElement);
        
        // Remove active class from all cards
        knowledgeSystemCards.forEach(c => c.classList.remove('active'));
        // Add active class to the clicked card
        this.classList.add('active');
        
        if (sectionElement) {
          sectionElement.scrollIntoView({ behavior: 'smooth' });
          sectionElement.classList.add('highlight');
          sectionElement.classList.add('revealed'); // Force reveal on click
          setTimeout(() => {
            sectionElement.classList.remove('highlight');
          }, 1500);
        } else {
          console.log('Section not found for:', system);
        }
      });
      
      // Hover effect
      card.addEventListener('mouseenter', function() {
        this.classList.add('hover');
      });
      
      card.addEventListener('mouseleave', function() {
        this.classList.remove('hover');
      });
    });
  }

  // Interactive dosha flowchart
  const doshaCards = document.querySelectorAll('.dosha-card');
  
  if (doshaCards.length > 0) {
    doshaCards.forEach(card => {
      card.addEventListener('mouseenter', function() {
        doshaCards.forEach(c => c.classList.remove('active'));
        this.classList.add('active');
      });
    });
  }

  // Reveal animations for wisdom content
  const wisdomSections = document.querySelectorAll('.wisdom-section');
  
  if (wisdomSections.length > 0) {
    function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      return (
        rect.top < windowHeight && // Top is above bottom of viewport
        rect.bottom > 0 // Bottom is below top of viewport
      );
    }
    
    function revealSections() {
      wisdomSections.forEach(section => {
        if (isInViewport(section) && !section.classList.contains('revealed')) {
          section.classList.add('revealed');
        }
      });
    }
    
    revealSections();
    window.addEventListener('scroll', revealSections);
  }

  // Eight limbs of yoga interaction
  const limbElements = document.querySelectorAll('.limb');
  
  if (limbElements.length > 0) {
    limbElements.forEach(limb => {
      limb.addEventListener('mouseenter', function() {
        this.classList.add('expanded');
      });
      
      limb.addEventListener('mouseleave', function() {
        this.classList.remove('expanded');
      });
    });
  }

  // Interactive Quote Animation
  const quotes = document.querySelectorAll('.quote');
  
  if (quotes.length > 0) {
    function isElementInView(element) {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      return (
        rect.top <= windowHeight * 0.8 && 
        rect.bottom >= windowHeight * 0.2
      );
    }
    
    function animateQuotes() {
      quotes.forEach(quote => {
        if (isElementInView(quote) && !quote.classList.contains('animated')) {
          quote.classList.add('animated');
        }
      });
    }
    
    animateQuotes();
    window.addEventListener('scroll', animateQuotes);
  }

  // Path card hover effect
  const pathCards = document.querySelectorAll('.path-card');
  
  if (pathCards.length > 0) {
    pathCards.forEach(card => {
      card.addEventListener('mouseenter', function() {
        this.classList.add('hover');
      });
      
      card.addEventListener('mouseleave', function() {
        this.classList.remove('hover');
      });
    });
  }
});