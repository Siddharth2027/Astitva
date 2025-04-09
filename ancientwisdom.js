
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle (from scripts.js)
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
          const sectionElement = document.getElementById(system);
          
          if (sectionElement) {
            // Smooth scroll to the section
            sectionElement.scrollIntoView({
              behavior: 'smooth'
            });
            
            // Add highlight animation to the section
            sectionElement.classList.add('highlight');
            
            // Remove the highlight class after animation completes
            setTimeout(() => {
              sectionElement.classList.remove('highlight');
            }, 1500);
          }
        });
        
        // Add hover effect
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
      // Function to check if an element is in viewport
      function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
      }
      
      // Function to handle scroll and reveal sections in viewport
      function revealSections() {
        wisdomSections.forEach(section => {
          if (isInViewport(section) && !section.classList.contains('revealed')) {
            section.classList.add('revealed');
          }
        });
      }
      
      // Check on load
      revealSections();
      
      // Check on scroll
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
      // Function to check if an element is in viewport
      function isElementInView(element) {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        
        // Element is partially visible
        return (
          rect.top <= windowHeight * 0.8 && 
          rect.bottom >= windowHeight * 0.2
        );
      }
      
      // Function to animate quotes when they come into view
      function animateQuotes() {
        quotes.forEach(quote => {
          if (isElementInView(quote) && !quote.classList.contains('animated')) {
            quote.classList.add('animated');
          }
        });
      }
      
      // Initial check
      animateQuotes();
      
      // Check on scroll
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
  