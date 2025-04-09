
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
  
    // Epic tabs navigation
    const epicTabs = document.querySelectorAll('.epic-tab');
    const epicContents = document.querySelectorAll('.epic-content');
  
    if (epicTabs.length > 0) {
      epicTabs.forEach(tab => {
        tab.addEventListener('click', function() {
          // Remove active class from all tabs
          epicTabs.forEach(t => t.classList.remove('active'));
          
          // Add active class to clicked tab
          this.classList.add('active');
          
          // Get the epic ID to show
          const epicToShow = this.getAttribute('data-epic');
          
          // Hide all epic contents
          epicContents.forEach(content => {
            content.classList.remove('active');
          });
          
          // Show the selected epic content
          const selectedEpic = document.getElementById(epicToShow);
          if (selectedEpic) {
            selectedEpic.classList.add('active');
            
            // Smooth scroll to epic content
            selectedEpic.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        });
      });
    }
  
    // Character card hover effects
    const characterCards = document.querySelectorAll('.character-card');
    
    if (characterCards.length > 0) {
      characterCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
          this.classList.add('hover');
        });
        
        card.addEventListener('mouseleave', function() {
          this.classList.remove('hover');
        });
      });
    }
  
    // Trivia card reveal animation
    const triviaCards = document.querySelectorAll('.trivia-card');
    
    if (triviaCards.length > 0) {
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
      
      // Function to handle scroll and reveal cards in viewport
      function revealTriviaCards() {
        triviaCards.forEach(card => {
          if (isInViewport(card) && !card.classList.contains('revealed')) {
            card.classList.add('revealed');
          }
        });
      }
      
      // Initial check for cards in viewport
      revealTriviaCards();
      
      // Check on scroll
      window.addEventListener('scroll', revealTriviaCards);
    }
  
    // "Read More" links for folk tales
    const readMoreLinks = document.querySelectorAll('.read-more');
    
    if (readMoreLinks.length > 0) {
      readMoreLinks.forEach(link => {
        link.addEventListener('click', function(e) {
          e.preventDefault();
          const storyTitle = this.parentElement.querySelector('h4').textContent;
          alert(`Full collection of "${storyTitle}" stories would open here.`);
        });
      });
    }
  });
  