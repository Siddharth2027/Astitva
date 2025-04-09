
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
  
    // Festival data - in a real application this would come from a server
    const festivals = [
      {
        id: 1,
        name: "Diwali",
        date: "November 12, 2025",
        month: "nov",
        region: ["north", "south", "east", "west", "central"],
        type: "religious",
        description: "Festival of Lights celebrating the victory of light over darkness",
        image: "assets/diwali.jpg",
        longDescription: "Diwali, or Deepavali, is India's biggest festival celebrated with great enthusiasm across the country. The festival symbolizes the spiritual victory of light over darkness, good over evil, and knowledge over ignorance. Homes are decorated with oil lamps (diyas), candles, and colorful electric lights. People wear new clothes, share sweets and gifts, and light fireworks. It's also considered an auspicious time to start new ventures.",
        regionalVariations: [
          { region: "North India", custom: "Worship of Goddess Lakshmi and Lord Ganesha" },
          { region: "South India", custom: "Known as Deepavali, celebrated to mark Krishna's victory over Narakasura" },
          { region: "West India", custom: "Celebration of the return of Lord Rama to Ayodhya" },
          { region: "East India", custom: "Worship of Goddess Kali in Bengal and Goddess Lakshmi in Odisha" }
        ]
      },
      {
        id: 2,
        name: "Holi",
        date: "March 14, 2025",
        month: "mar",
        region: ["north", "central"],
        type: "seasonal",
        description: "Festival of Colors welcoming spring and celebrating good over evil",
        image: "assets/holi.jpg",
        longDescription: "Holi marks the arrival of spring and is one of the most vibrant festivals of India. It celebrates the eternal love of Radha and Krishna, and the victory of good over evil. The festival begins with Holika Dahan, where people gather around a bonfire to celebrate the victory of good over evil. The next day is marked by people smearing each other with colors and drenching everyone with colored water. It's a time when people forget resentments and make new beginnings.",
        regionalVariations: [
          { region: "Mathura & Vrindavan", custom: "Celebrated with special enthusiasm as it's associated with Lord Krishna" },
          { region: "West Bengal", custom: "Known as 'Dol Jatra' or 'Dol Purnima'" },
          { region: "Maharashtra", custom: "Celebrated as Rangapanchami, five days after Purnima" },
          { region: "Uttar Pradesh", custom: "Lathmar Holi, where women playfully beat men with sticks" }
        ]
      },
      {
        id: 3,
        name: "Pongal",
        date: "January 15, 2025",
        month: "jan",
        region: ["south"],
        type: "harvest",
        description: "Tamil harvest festival giving thanks for a bountiful harvest",
        image: "assets/pongal.jpg",
        longDescription: "Pongal is a four-day harvest festival celebrated primarily in Tamil Nadu. It's a thanksgiving ceremony in which farmers thank the sun, earth, and farm animals for helping them cultivate crops. The name comes from the Tamil word meaning 'to boil over' or 'overflow,' signifying abundance and prosperity. Special rice dishes are prepared in clay pots which are allowed to boil over, symbolizing abundance.",
        regionalVariations: [
          { region: "Tamil Nadu", custom: "Four-day celebration including Bhogi, Thai Pongal, Mattu Pongal, and Kaanum Pongal" },
          { region: "Karnataka", custom: "Known as 'Sankranthi' with similar customs" },
          { region: "Andhra Pradesh", custom: "Known as 'Sankranti' with distinct regional traditions" }
        ]
      },
      {
        id: 4,
        name: "Durga Puja",
        date: "October 3-7, 2025",
        month: "oct",
        region: ["east"],
        type: "religious",
        description: "Celebration of the Goddess Durga's victory over the demon Mahishasura",
        image: "assets/durga-puja.jpg",
        longDescription: "Durga Puja celebrates the victory of Goddess Durga over the demon Mahishasura, symbolizing the triumph of good over evil. The festival spans over 10 days, with the last five days being the most significant. Elaborate pandals (temporary structures) are set up, and the idols of Goddess Durga are installed and worshipped. The festivities conclude with the immersion of the idol in water, known as Vijaya Dashami or Dussehra.",
        regionalVariations: [
          { region: "West Bengal", custom: "Elaborate pandals, cultural performances, and community celebrations" },
          { region: "Assam", custom: "Known as 'Durga Puja' with similar traditions to Bengal" },
          { region: "Odisha", custom: "Celebrated as 'Dussehra' with unique local customs" }
        ]
      },
      {
        id: 5,
        name: "Republic Day",
        date: "January 26, 2025",
        month: "jan",
        region: ["north", "south", "east", "west", "central", "northeast"],
        type: "national",
        description: "National holiday commemorating the adoption of the Indian Constitution",
        image: "assets/republic-day.jpg",
        longDescription: "Republic Day honors the date on which the Constitution of India came into effect on January 26, 1950. The main celebration takes place at Rajpath in New Delhi where a grand parade showcases India's cultural and military heritage. The President of India hoists the national flag, and awards such as the Param Vir Chakra, Ashok Chakra, and Kirti Chakra are presented. The parade includes tableaux representing different states and cultural themes.",
        regionalVariations: [
          { region: "Delhi", custom: "Main Republic Day parade at Rajpath featuring military displays and cultural performances" },
          { region: "State Capitals", custom: "Flag hoisting ceremonies and local parades" },
          { region: "Schools & Colleges", custom: "Flag hoisting, cultural programs, and patriotic activities" }
        ]
      }
    ];
  
    // More festivals would be added to the data array in a complete implementation
  
    // View toggle functionality
    const viewToggles = document.querySelectorAll('.view-toggle');
    const viewSections = document.querySelectorAll('.view-section');
  
    if (viewToggles.length > 0) {
      viewToggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
          // Remove active class from all toggles
          viewToggles.forEach(t => t.classList.remove('active'));
          
          // Add active class to clicked toggle
          this.classList.add('active');
          
          // Get view to show
          const viewToShow = this.getAttribute('data-view');
          
          // Hide all view sections
          viewSections.forEach(section => {
            section.classList.remove('active');
          });
          
          // Show selected view section
          document.getElementById(viewToShow + 'View').classList.add('active');
        });
      });
    }
  
    // Calendar functionality
    const calendarDays = document.getElementById('calendarDays');
    const currentMonthEl = document.getElementById('currentMonth');
    const prevMonthBtn = document.getElementById('prevMonth');
    const nextMonthBtn = document.getElementById('nextMonth');
    const selectedFestivalEl = document.getElementById('selectedFestival');
    
    // Current date for navigation
    let currentDate = new Date(2025, 0, 1); // Starting with January 2025
    
    // Initialize calendar
    function renderCalendar(date) {
      const year = date.getFullYear();
      const month = date.getMonth();
      
      // Update month display
      currentMonthEl.textContent = new Date(year, month, 1).toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
      
      // Clear previous calendar
      if (calendarDays) {
        calendarDays.innerHTML = '';
        
        // Get first day of month and total days
        const firstDay = new Date(year, month, 1).getDay(); // 0 = Sunday
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        
        // Add empty cells for days before the first day of the month
        for (let i = 0; i < firstDay; i++) {
          const emptyCell = document.createElement('div');
          emptyCell.className = 'calendar-day empty';
          calendarDays.appendChild(emptyCell);
        }
        
        // Add days of the month
        for (let day = 1; day <= daysInMonth; day++) {
          const dayCell = document.createElement('div');
          dayCell.className = 'calendar-day';
          
          const dateString = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
          dayCell.setAttribute('data-date', dateString);
          
          const dayNumber = document.createElement('span');
          dayNumber.className = 'day-number';
          dayNumber.textContent = day;
          dayCell.appendChild(dayNumber);
          
          // Check if there are festivals on this date
          const currentMonthStr = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'][month];
          const festivalsOnDay = festivals.filter(festival => {
            const festivalDate = new Date(festival.date);
            return festivalDate.getDate() === day && 
                  festivalDate.getMonth() === month && 
                  festival.month === currentMonthStr;
          });
          
          if (festivalsOnDay.length > 0) {
            dayCell.classList.add('has-festival');
            
            const festivalIndicator = document.createElement('div');
            festivalIndicator.className = 'festival-indicator';
            
            festivalsOnDay.forEach(festival => {
              const dot = document.createElement('span');
              dot.className = 'festival-dot';
              dot.setAttribute('data-festival-id', festival.id);
              festivalIndicator.appendChild(dot);
            });
            
            dayCell.appendChild(festivalIndicator);
            
            // Add click event to show festival details
            dayCell.addEventListener('click', function() {
              showFestivalDetails(festivalsOnDay[0]);
            });
          }
          
          calendarDays.appendChild(dayCell);
        }
      }
    }
    
    // Initialize calendar on page load
    renderCalendar(currentDate);
    
    // Month navigation
    if (prevMonthBtn && nextMonthBtn) {
      prevMonthBtn.addEventListener('click', function() {
        currentDate.setMonth(currentDate.getMonth() - 1);
        renderCalendar(currentDate);
      });
      
      nextMonthBtn.addEventListener('click', function() {
        currentDate.setMonth(currentDate.getMonth() + 1);
        renderCalendar(currentDate);
      });
    }
    
    // Show festival details function
    function showFestivalDetails(festival) {
      if (selectedFestivalEl) {
        selectedFestivalEl.innerHTML = `
          <div class="festival-detail-card">
            <div class="festival-image">
              <img src="${festival.image}" alt="${festival.name}">
            </div>
            <div class="festival-info">
              <h3>${festival.name}</h3>
              <p class="festival-date">${festival.date}</p>
              <p class="festival-type">${capitalizeFirstLetter(festival.type)} Festival</p>
              <p class="festival-desc">${festival.description}</p>
              <button class="view-more-btn" data-festival-id="${festival.id}">View Full Details</button>
            </div>
          </div>
        `;
        
        // Add event listener to view more button
        const viewMoreBtn = selectedFestivalEl.querySelector('.view-more-btn');
        if (viewMoreBtn) {
          viewMoreBtn.addEventListener('click', function() {
            const festivalId = this.getAttribute('data-festival-id');
            const selectedFestival = festivals.find(f => f.id === parseInt(festivalId));
            if (selectedFestival) {
              openFestivalModal(selectedFestival);
            }
          });
        }
      }
    }
    
    // List view functionality
    const festivalsList = document.getElementById('festivalsList');
    const monthSelect = document.getElementById('monthSelect');
    const regionSelect = document.getElementById('regionSelect');
    const typeSelect = document.getElementById('typeSelect');
    
    // Populate list view
    function renderFestivalsList(filteredFestivals = null) {
      const festivalsToRender = filteredFestivals || festivals;
      
      if (festivalsList) {
        festivalsList.innerHTML = '';
        
        if (festivalsToRender.length === 0) {
          festivalsList.innerHTML = '<div class="no-festivals">No festivals match your filters</div>';
          return;
        }
        
        festivalsToRender.forEach(festival => {
          const listItem = document.createElement('div');
          listItem.className = 'festival-list-item';
          listItem.setAttribute('data-festival-id', festival.id);
          
          listItem.innerHTML = `
            <div class="festival-list-image">
              <img src="${festival.image}" alt="${festival.name}">
            </div>
            <div class="festival-list-info">
              <h3>${festival.name}</h3>
              <p class="festival-date">${festival.date}</p>
              <p class="festival-type">${capitalizeFirstLetter(festival.type)} Festival</p>
              <p class="festival-desc">${festival.description}</p>
            </div>
            <button class="list-view-btn">View</button>
          `;
          
          festivalsList.appendChild(listItem);
          
          // Add click event to view button
          const viewBtn = listItem.querySelector('.list-view-btn');
          viewBtn.addEventListener('click', function() {
            openFestivalModal(festival);
          });
        });
      }
    }
    
    // Initial list rendering
    renderFestivalsList();
    
    // Filter functionality
    if (monthSelect && regionSelect && typeSelect) {
      const filterElements = [monthSelect, regionSelect, typeSelect];
      
      filterElements.forEach(element => {
        element.addEventListener('change', function() {
          applyFilters();
        });
      });
    }
    
    function applyFilters() {
      const selectedMonth = monthSelect.value;
      const selectedRegion = regionSelect.value;
      const selectedType = typeSelect.value;
      
      let filteredFestivals = [...festivals];
      
      if (selectedMonth !== 'all') {
        filteredFestivals = filteredFestivals.filter(festival => festival.month === selectedMonth);
      }
      
      if (selectedRegion !== 'all') {
        filteredFestivals = filteredFestivals.filter(festival => festival.region.includes(selectedRegion));
      }
      
      if (selectedType !== 'all') {
        filteredFestivals = filteredFestivals.filter(festival => festival.type === selectedType);
      }
      
      renderFestivalsList(filteredFestivals);
      populateCategoryView();
    }
    
    // Category view functionality
    const categoryTabs = document.querySelectorAll('.category-tab');
    const categoryContents = document.querySelectorAll('.category-content');
    
    if (categoryTabs.length > 0) {
      categoryTabs.forEach(tab => {
        tab.addEventListener('click', function() {
          // Remove active class from all tabs
          categoryTabs.forEach(t => t.classList.remove('active'));
          
          // Add active class to clicked tab
          this.classList.add('active');
          
          // Get category to show
          const categoryToShow = this.getAttribute('data-category');
          
          // Hide all category contents
          categoryContents.forEach(content => {
            content.classList.remove('active');
          });
          
          // Show selected category content
          document.querySelector(`.category-content[data-category="${categoryToShow}"]`).classList.add('active');
        });
      });
    }
    
    // Populate category view
    function populateCategoryView() {
      const categories = ['religious', 'harvest', 'national', 'seasonal'];
      
      categories.forEach(category => {
        const categoryContainer = document.getElementById(category + 'Festivals');
        if (categoryContainer) {
          categoryContainer.innerHTML = '';
          
          const categoryFestivals = festivals.filter(festival => festival.type === category);
          
          if (categoryFestivals.length === 0) {
            categoryContainer.innerHTML = '<div class="no-festivals">No festivals in this category</div>';
            return;
          }
          
          categoryFestivals.forEach(festival => {
            const festivalCard = document.createElement('div');
            festivalCard.className = 'festival-card';
            festivalCard.setAttribute('data-festival-id', festival.id);
            
            festivalCard.innerHTML = `
              <div class="festival-card-image">
                <img src="${festival.image}" alt="${festival.name}">
              </div>
              <div class="festival-card-info">
                <h4>${festival.name}</h4>
                <p class="festival-date">${festival.date}</p>
                <button class="festival-card-btn" data-festival-id="${festival.id}">Details</button>
              </div>
            `;
            
            categoryContainer.appendChild(festivalCard);
            
            // Add click event to details button
            const detailsBtn = festivalCard.querySelector('.festival-card-btn');
            detailsBtn.addEventListener('click', function() {
              const festivalId = this.getAttribute('data-festival-id');
              const selectedFestival = festivals.find(f => f.id === parseInt(festivalId));
              if (selectedFestival) {
                openFestivalModal(selectedFestival);
              }
            });
          });
        }
      });
    }
    
    // Initial category view population
    populateCategoryView();
    
    // Festival modal functionality
    const festivalModal = document.getElementById('festivalModal');
    const festivalDetails = document.getElementById('festivalDetails');
    const closeModal = document.querySelector('.close-modal');
    
    function openFestivalModal(festival) {
      if (festivalModal && festivalDetails) {
        festivalDetails.innerHTML = `
          <div class="festival-modal-content">
            <div class="festival-modal-image">
              <img src="${festival.image}" alt="${festival.name}">
            </div>
            <div class="festival-modal-info">
              <h2>${festival.name}</h2>
              <p class="festival-date">${festival.date}</p>
              <p class="festival-type">${capitalizeFirstLetter(festival.type)} Festival</p>
              <div class="festival-modal-description">
                ${festival.longDescription}
              </div>
              
              <h3>Regional Variations</h3>
              <div class="regional-variations">
                ${festival.regionalVariations.map(variation => `
                  <div class="variation">
                    <h4>${variation.region}</h4>
                    <p>${variation.custom}</p>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
        `;
        
        festivalModal.classList.add('active');
      }
    }
    
    if (closeModal) {
      closeModal.addEventListener('click', function() {
        festivalModal.classList.remove('active');
      });
    }
    
    // Click outside to close modal
    window.addEventListener('click', function(event) {
      if (event.target === festivalModal) {
        festivalModal.classList.remove('active');
      }
    });
    
    // Helper function to capitalize first letter
    function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
  });
  