// ====== 1. Search from text input ======
function searchPlace() {
    const input = document.getElementById("searchInput").value.trim();
    if (input !== "") {
      fetchAndDisplayPlaceInfo(input);
    }
  }
  
  // ====== 2. Analyze image with Imagga API ======
  async function analyzeImage() {
    const fileInput = document.getElementById("imageInput");
    const image = fileInput.files[0];
  
    if (!image) {
      alert("Please select an image first.");
      return;
    }
  
    try {
      const formData = new FormData();
      formData.append("image", image);
  
      const response = await fetch("https://api.imagga.com/v2/tags", {
        method: "POST",
        headers: {
          "Authorization": "Basic " + btoa("YOUR_API_KEY: YOUR_SECRET_API_KEY") // Replace with your Imagga API credentials
        },
        body: formData
      });
  
      const result = await response.json();
  
      // Get top tags
      const tags = result.result.tags.map(tag => tag.tag.en.toLowerCase());
  
      // Match with heritage places
      const matchedPlace = matchPlaceWithTags(tags);
  
      if (matchedPlace) {
        fetchAndDisplayPlaceInfo(matchedPlace);
        displayImagePreview(image);
      } else {
        alert("Couldn't identify a known heritage place in the image.");
      }
    } catch (error) {
      console.error(error);
      alert("Failed to analyze image.");
    }
  }
  
  // ====== 3. Match Imagga tags to heritage places ======
  function matchPlaceWithTags(tags) {
    const dataset = {
        "Hampi": ["hampi", "ruins", "karnataka", "vijayanagara", "temples", "unesco world heritage", "ancient city", "stone chariot", "virupaksha temple"],
        "Red Fort": ["red", "fort", "delhi", "mughal", "red sandstone", "unesco world heritage", "lal qila", "shah jahan", "historic fortification"],
        "Taj Mahal": ["taj", "mahal", "white marble", "dome", "agra", "mughal", "unesco world heritage", "shah jahan", "mumtaz mahal", "yamuna river", "ivory-white", "mausoleum"],
        "Tirumala Venkateswara Temple": ["venkateswara", "tirumala", "tirupati", "balaji", "srinivasa", "lord vishnu", "andhra pradesh", "seven hills", "swarna ratnam", "sahasra dipalankarana seva"],
        "St. Joseph's Church Medchal": ["medchal church","medak church", "st joseph's church", "catholic", "christianity", "mass", "hyderabad", "telangana", "church", "roman catholic","fr martin"],
        "Qutub Minar": ["qutub", "minar", "delhi", "tower", "sandstone", "mughal", "unesco world heritage", "victory tower", "qutbuddin aibak", "tallest brick minaret"],
        "Charminar": ["charminar", "hyderabad", "arches", "minarets", "mosque", "qutb shahi", "four towers", "landmark", "pearl city"],
        "Sun Temple, Konark": ["sun", "temple", "konark", "odisha", "chariot", "wheels", "unesco world heritage", "surya devalaya", "kalinga architecture"],
        "Gateway of India": ["gateway", "mumbai", "arch", "monument", "harbor", "british raj", "apollo bunder", "indo-saracenic", "landmark"],
        "Mecca Masjid": ["mecca", "masjid", "hyderabad", "mosque", "islamic", "qutb shahi", "largest mosque", "granite", "historical"],
        "Agra Fort": ["agra", "fort", "mughal", "red sandstone", "palace", "unesco world heritage", "akbar", "diwan-i-am", "diwan-i-khas"],
        "Fatehpur Sikri": ["fatehpur", "sikri", "agra", "mughal", "buland darwaza", "unesco world heritage", "akbar", "panch mahal", "jodha bai palace"],
        "Humayun's Tomb": ["humayun", "tomb", "delhi", "mughal", "garden", "unesco world heritage", "persian architecture", "mausoleum", "red sandstone"],
        "Sanchi Stupa": ["sanchi", "stupa", "madhya pradesh", "buddhist", "ashoka", "unesco world heritage", "great stupa", "monolithic pillars", "toranas"],
        "Khajuraho Temples": ["khajuraho", "temples", "madhya pradesh", "erotic", "sculptures", "unesco world heritage", "chandela dynasty", "nagara style", "hindu", "jain"],
        "Mysore Palace": ["mysore", "palace", "karnataka", "wodeyar", "architecture", "indo-saracenic", "royal residence", "illuminations", "durbar hall"],
        "Victoria Memorial": ["victoria", "memorial", "kolkata", "marble", "british", "museum", "queen victoria", "angel of victory", "colonial architecture"],
        "Amer Fort": ["amer", "fort", "jaipur", "rajasthan", "rajput", "unesco world heritage", "amber fort", "sheesh mahal", "maota lake"],
        "Jantar Mantar, Jaipur": ["jantar", "mantar", "jaipur", "observatory", "astronomy", "unesco world heritage", "sundial", "maharaja jai singh ii", "architectural instruments"],
        "Brihadeeswarar Temple": ["brihadeeswarar", "temple", "tamil nadu", "chola", "thanjavur", "unesco world heritage", "big temple", "rajendra chola", "granite"],
        "Golkonda Fort": ["golkonda", "fort", "hyderabad", "diamonds", "qutb shahi", "balahisar", "acoustic system", "fateh darwaza", "citadel"],
        "Elephanta Caves": ["elephanta", "caves", "mumbai", "rock-cut", "shiva", "unesco world heritage", "trimurti", "sculptures", "gharapuri"],
        "Lotus Temple": ["lotus", "temple", "delhi", "bahai", "architecture", "flower-like", "worship", "white marble", "universal faith"],
        "Jaisalmer Fort": ["jaisalmer", "fort", "rajasthan", "golden", "sandstone", "unesco world heritage", "sonar quila", "desert fort", "rajput architecture"],
        "Rani ki Vav": ["rani", "vav", "gujarat", "stepwell", "queen", "unesco world heritage", "maru-gurjara architecture", "sculptures", "water management"],
        "Chittorgarh Fort": ["chittorgarh", "fort", "rajasthan", "rajput", "siege", "vijay stambh", "kirti stambh", "padmini palace", "largest fort"],
        "Sundarbans": ["sundarbans", "west bengal", "mangrove", "tiger", "unesco world heritage", "delta", "biosphere reserve", "royal bengal tiger", "estuarine"],
        "Nalanda University": ["nalanda", "university", "bihar", "ancient", "buddhist", "unesco world heritage", "mahavihara", "learning center", "ruins"]
      }
      
  
    for (let place in dataset) {
      const keywords = dataset[place];
      if (tags.some(tag => keywords.includes(tag))) {
        return place;
      }
    }
  
    return null;
  }
  
  // ====== 4. Fetch info from Wikipedia ======
  async function fetchAndDisplayPlaceInfo(place) {
    try {
      const wikiRes = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(place)}`);
      const wikiData = await wikiRes.json();
  
      document.getElementById("title").innerText = wikiData.title || place;
      document.getElementById("description").innerText = wikiData.extract || "No information available.";
      document.getElementById("infoBox").style.display = "block";
    } catch (err) {
      console.error(err);
      alert("Failed to fetch information from Wikipedia.");
    }
  }
  
  // ====== 5. Show image preview ======
  function displayImagePreview(image) {
    const imageURL = URL.createObjectURL(image);
    const imagePreview = document.getElementById("imagePreview");
    imagePreview.src = imageURL;
    imagePreview.style.maxWidth = "300px";
    imagePreview.style.marginTop = "10px";
  }