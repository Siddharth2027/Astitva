
document.addEventListener('DOMContentLoaded', function() {
    // Timeline navigation
    const eraBtns = document.querySelectorAll('.era-btn');
    const eraContents = document.querySelectorAll('.era-content');
    const prevEraBtn = document.getElementById('prevEra');
    const nextEraBtn = document.getElementById('nextEra');
    
    let activeIndex = 0;
    const totalEras = eraBtns.length;
  
    // Function to update active era
    function updateActiveEra(index) {
      // Remove active class from all era buttons and contents
      eraBtns.forEach(btn => btn.classList.remove('active'));
      eraContents.forEach(content => content.classList.remove('active'));
      
      // Add active class to current era button and content
      eraBtns[index].classList.add('active');
      eraContents[index].classList.add('active');
      
      // Update active index
      activeIndex = index;
    }
  
    // Add click event listeners to era buttons
    if (eraBtns.length > 0) {
      eraBtns.forEach((btn, index) => {
        btn.addEventListener('click', function() {
          updateActiveEra(index);
        });
      });
    }
  
    // Navigate to previous era
    if (prevEraBtn) {
      prevEraBtn.addEventListener('click', function() {
        let newIndex = activeIndex - 1;
        if (newIndex < 0) {
          newIndex = totalEras - 1; // Loop to the end
        }
        updateActiveEra(newIndex);
      });
    }
  
    // Navigate to next era
    if (nextEraBtn) {
      nextEraBtn.addEventListener('click', function() {
        let newIndex = activeIndex + 1;
        if (newIndex >= totalEras) {
          newIndex = 0; // Loop to the beginning
        }
        updateActiveEra(newIndex);
      });
    }
  
    // Create sample content for other eras
    createSampleEraContent();
  });
  
  // Function to create sample content for other eras
  function createSampleEraContent() {
    const timelineSlider = document.querySelector('.timeline-slider');
    if (!timelineSlider) return;
  
    // Define eras for sample content
    const eras = [
      { id: 'mauryan', title: 'Mauryan Empire', period: '322 BCE - 185 BCE' },
      { id: 'gupta', title: 'Gupta Empire', period: '320 CE - 550 CE' },
      { id: 'medieval', title: 'Medieval Period', period: '8th century - 18th century' },
      { id: 'mughal', title: 'Mughal Era', period: '1526 CE - 1857 CE' },
      { id: 'colonial', title: 'Colonial Period', period: '1757 CE - 1947 CE' },
      { id: 'independence', title: 'Independence & Modern India', period: '1947 CE - Present' }
    ];
  
    // Create content for each era
    eras.forEach(era => {
      // Check if the content already exists
      if (document.getElementById(era.id)) return;
  
      const eraElement = document.createElement('div');
      eraElement.className = 'era-content';
      eraElement.id = era.id;
      
      eraElement.innerHTML = `
        <div class="era-image">
          <img src="assets/${era.id}.jpg" alt="${era.title}">
        </div>
        <div class="era-details">
          <h2>${era.title}</h2>
          <div class="era-period">${era.period}</div>
          <p>This is sample content for the ${era.title} period. In a complete implementation, this would contain detailed information about key developments, cultural achievements, important figures, and historical sites from this era.</p>
          <h3>Key Developments</h3>
          <ul>
            <li>Sample development point 1</li>
            <li>Sample development point 2</li>
            <li>Sample development point 3</li>
            <li>Sample development point 4</li>
            <li>Sample development point 5</li>
          </ul>
          <h3>Notable Sites</h3>
          <div class="site-gallery">
            <div class="site">
              <img src="assets/placeholder-site-1.jpg" alt="Site 1">
              <p>Historical Site 1</p>
            </div>
            <div class="site">
              <img src="assets/placeholder-site-2.jpg" alt="Site 2">
              <p>Historical Site 2</p>
            </div>
            <div class="site">
              <img src="assets/placeholder-site-3.jpg" alt="Site 3">
              <p>Historical Site 3</p>
            </div>
          </div>
        </div>
      `;
      
      timelineSlider.appendChild(eraElement);
    });
  }
  