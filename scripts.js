
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
  
    if (mobileMenuBtn && navLinks) {
      mobileMenuBtn.addEventListener('click', function() {
        mobileMenuBtn.classList.toggle('active');
        navLinks.classList.toggle('active');
      });
    }
  
    // Values carousel
    const valuesCarousel = document.getElementById('valuesCarousel');
    const prevValueBtn = document.getElementById('prevValue');
    const nextValueBtn = document.getElementById('nextValue');
  
    if (valuesCarousel && prevValueBtn && nextValueBtn) {
      const scrollAmount = 320; // Width of card + gap
  
      prevValueBtn.addEventListener('click', function() {
        valuesCarousel.scrollBy({
          left: -scrollAmount,
          behavior: 'smooth'
        });
      });
  
      nextValueBtn.addEventListener('click', function() {
        valuesCarousel.scrollBy({
          left: scrollAmount,
          behavior: 'smooth'
        });
      });
    }
  
    // Story sharing modal
    const shareStoryBtn = document.getElementById('shareStoryBtn');
    const storyModal = document.getElementById('storyModal');
    const closeModal = document.querySelector('.close-modal');
    const storyForm = document.getElementById('storyForm');
  
    if (shareStoryBtn && storyModal) {
      shareStoryBtn.addEventListener('click', function() {
        storyModal.classList.add('active');
      });
  
      if (closeModal) {
        closeModal.addEventListener('click', function() {
          storyModal.classList.remove('active');
        });
      }
  
      // Click outside to close
      window.addEventListener('click', function(event) {
        if (event.target === storyModal) {
          storyModal.classList.remove('active');
        }
      });
  
      // Form submission handling
      if (storyForm) {
        storyForm.addEventListener('submit', function(event) {
          event.preventDefault();
          
          // In a real application, you would send this data to a server
          alert('Thank you for sharing your story! It will be reviewed and added to our collection.');
          
          storyForm.reset();
          storyModal.classList.remove('active');
        });
      }
    }
  
    // Story read more and listen buttons
    const readMoreBtns = document.querySelectorAll('.read-more');
    const listenBtns = document.querySelectorAll('.listen');
  
    if (readMoreBtns.length > 0) {
      readMoreBtns.forEach(btn => {
        btn.addEventListener('click', function() {
          const storyTitle = this.closest('.story-content').querySelector('h3').textContent;
          alert(`Full story for "${storyTitle}" would open here.`);
        });
      });
    }
  
    if (listenBtns.length > 0) {
      listenBtns.forEach(btn => {
        btn.addEventListener('click', function() {
          const storyTitle = this.closest('.story-content').querySelector('h3').textContent;
          alert(`Audio version of "${storyTitle}" would play here.`);
        });
      });
    }
  });
  