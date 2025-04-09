
document.addEventListener('DOMContentLoaded', function() {
    // Create the SVG map of India
    createIndiaMap();
    
    // Cultural highlights tabs
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    if (tabButtons.length > 0) {
      tabButtons.forEach(button => {
        button.addEventListener('click', function() {
          // Remove active class from all buttons and contents
          tabButtons.forEach(btn => btn.classList.remove('active'));
          tabContents.forEach(content => content.classList.remove('active'));
          
          // Add active class to current button and associated content
          const tabId = this.dataset.tab;
          this.classList.add('active');
          document.getElementById(tabId).classList.add('active');
        });
      });
    }
  });
  
  // Function to create and render the India map
  function createIndiaMap() {
    const mapContainer = document.getElementById('india-map');
    if (!mapContainer) return;
    
    // Sample simplified SVG map of India (placeholder)
    // In a real implementation, you would use a detailed SVG map of India with state boundaries
    const svgContent = `
      <svg viewBox="0 0 400 450" xmlns="http://www.w3.org/2000/svg">
        <!-- This is a very simplified outline of India -->
        <g id="india-states">
          <!-- Northern states -->
          <path id="jammu-kashmir" d="M100,50 L150,40 L180,70 L160,100 L120,90 Z" data-state="Jammu & Kashmir" />
          <path id="himachal" d="M160,100 L180,70 L200,90 L190,110 Z" data-state="Himachal Pradesh" />
          <path id="punjab" d="M160,100 L190,110 L180,130 L150,120 Z" data-state="Punjab" />
          <path id="uttarakhand" d="M190,110 L220,100 L230,130 L180,130 Z" data-state="Uttarakhand" />
          
          <!-- Central states -->
          <path id="rajasthan" d="M120,130 L150,120 L180,130 L170,180 L120,170 Z" data-state="Rajasthan" />
          <path id="gujarat" d="M90,170 L120,170 L130,220 L70,230 Z" data-state="Gujarat" />
          <path id="madhya-pradesh" d="M170,180 L230,170 L240,220 L170,230 L130,220 Z" data-state="Madhya Pradesh" />
          <path id="maharashtra" d="M130,220 L170,230 L220,240 L190,280 L110,260 Z" data-state="Maharashtra" />
          
          <!-- Eastern states -->
          <path id="west-bengal" d="M280,180 L300,200 L290,240 L270,230 Z" data-state="West Bengal" />
          <path id="odisha" d="M240,220 L270,230 L260,270 L230,260 Z" data-state="Odisha" />
          
          <!-- Southern states -->
          <path id="telangana" d="M200,240 L240,220 L230,260 L200,270 Z" data-state="Telangana" />
          <path id="andhra-pradesh" d="M200,270 L230,260 L220,300 L190,320 L170,290 Z" data-state="Andhra Pradesh" />
          <path id="karnataka" d="M170,290 L190,280 L180,320 L140,340 L130,310 Z" data-state="Karnataka" />
          <path id="tamil-nadu" d="M180,320 L190,320 L210,370 L170,390 L140,340 Z" data-state="Tamil Nadu" />
          <path id="kerala" d="M140,340 L170,390 L130,380 L120,350 Z" data-state="Kerala" />
          
          <!-- North-eastern states (simplified as one region) -->
          <path id="northeast" d="M300,150 L330,170 L320,200 L300,200 L280,180 Z" data-state="North-East India" />
        </g>
      </svg>
    `;
    
    mapContainer.innerHTML = svgContent;
    
    // Add click event listeners to the state paths
    const statePaths = document.querySelectorAll('#india-states path');
    statePaths.forEach(path => {
      path.addEventListener('click', function() {
        // Remove active class from all paths
        statePaths.forEach(p => p.classList.remove('active'));
        
        // Add active class to the clicked path
        this.classList.add('active');
        
        // Show region information
        const stateName = this.getAttribute('data-state');
        showRegionInfo(stateName);
      });
    });
  }
  
  // Function to display region information when a state is clicked
  function showRegionInfo(stateName) {
    const regionInfo = document.getElementById('region-info');
    if (!regionInfo) return;
    
    // Hide default content
    const defaultContent = document.querySelector('.region-default');
    if (defaultContent) {
      defaultContent.style.display = 'none';
    }
    
    // Create region details container if it doesn't exist
    let regionDetails = document.querySelector('.region-details');
    if (!regionDetails) {
      regionDetails = document.createElement('div');
      regionDetails.className = 'region-details';
      regionInfo.appendChild(regionDetails);
    }
    
    // Update region details content
    regionDetails.innerHTML = generateRegionContent(stateName);
    regionDetails.classList.add('active');
  }
  
  // Function to generate sample content for each region
  function generateRegionContent(stateName) {
    // This would be replaced with actual data for each state
    
    let content = `
      <div class="region-header">
        <h2>${stateName}</h2>
        <p>Explore the rich cultural heritage of ${stateName}</p>
      </div>
    `;
    
    // Add sample content for different cultural categories
    const categories = ['Traditional Clothing', 'Dance Forms', 'Cuisine', 'Festivals', 'Art & Architecture'];
    
    categories.forEach(category => {
      content += `
        <div class="region-category">
          <h3>${category}</h3>
          <p>Sample description about ${category.toLowerCase()} in ${stateName}. In a complete implementation, this would contain detailed information specific to this region.</p>
          <div class="gallery-grid">
            <div class="gallery-item">
              <img src="assets/placeholder-${category.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}-1.jpg" alt="${category} in ${stateName}">
              <div class="gallery-caption">${category} Sample 1</div>
            </div>
            <div class="gallery-item">
              <img src="assets/placeholder-${category.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}-2.jpg" alt="${category} in ${stateName}">
              <div class="gallery-caption">${category} Sample 2</div>
            </div>
            <div class="gallery-item">
              <img src="assets/placeholder-${category.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}-3.jpg" alt="${category} in ${stateName}">
              <div class="gallery-caption">${category} Sample 3</div>
            </div>
          </div>
        </div>
      `;
    });
    
    return content;
  }
  