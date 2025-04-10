
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
  
    // Add welcome message
    const chatMessages = document.getElementById('chatMessages');
    if (chatMessages) {
      addMessage("Welcome to Acharya! I'm your guide to Indian heritage and culture. Ask me about any aspect of Indian traditions, history, festivals, mythology, or cultural practices.", "bot");
    }
  
    // Add example topic suggestions
    const suggestionTopics = [
      "Tell me about Diwali festival",
      "What is the significance of the Ganges River?",
      "Explain the Mahabharata",
      "What is Ayurveda?",
      "History of the Taj Mahal"
    ];
  
    // Add suggestion chips
    const suggestionsContainer = document.createElement('div');
    suggestionsContainer.className = 'suggestions-container';
    suggestionsContainer.style.display = 'flex';
    suggestionsContainer.style.flexWrap = 'wrap';
    suggestionsContainer.style.gap = '8px';
    suggestionsContainer.style.margin = '10px 0';
    
    suggestionTopics.forEach(topic => {
      const chip = document.createElement('button');
      chip.innerText = topic;
      chip.className = 'suggestion-chip';
      chip.style.background = '#f8f9fa';
      chip.style.border = '1px solid #e2e8f0';
      chip.style.borderRadius = '16px';
      chip.style.padding = '6px 12px';
      chip.style.fontSize = '14px';
      chip.style.cursor = 'pointer';
      chip.style.transition = 'all 0.2s';
      
      chip.addEventListener('mouseenter', function() {
        this.style.background = '#FF77221A';
        this.style.borderColor = '#FF7722';
      });
      
      chip.addEventListener('mouseleave', function() {
        this.style.background = '#f8f9fa';
        this.style.borderColor = '#e2e8f0';
      });
      
      chip.addEventListener('click', function() {
        document.getElementById('userInput').value = topic;
        sendMessage();
      });
      
      suggestionsContainer.appendChild(chip);
    });
    
    if (chatMessages) {
      chatMessages.appendChild(suggestionsContainer);
    }
  
    // Voice input button
    const inputContainer = document.querySelector('.input-container');
    if (inputContainer) {
      const voiceButton = document.createElement('button');
      voiceButton.className = 'voice-button';
      voiceButton.innerHTML = '🎤';
      voiceButton.style.background = '#f1f5f9';
      voiceButton.style.border = 'none';
      voiceButton.style.borderRadius = '50%';
      voiceButton.style.width = '45px';
      voiceButton.style.height = '45px';
      voiceButton.style.cursor = 'pointer';
      voiceButton.style.transition = 'all 0.2s';
      
      voiceButton.addEventListener('click', function() {
        if ('webkitSpeechRecognition' in window) {
          const recognition = new webkitSpeechRecognition();
          recognition.lang = 'en-US';
          
          // Change button appearance
          this.style.background = '#FF7722';
          this.style.color = 'white';
          this.innerHTML = '🔴';
          
          recognition.onresult = function(event) {
            const transcript = event.results[0][0].transcript;
            document.getElementById('userInput').value = transcript;
            voiceButton.style.background = '#f1f5f9';
            voiceButton.style.color = 'black';
            voiceButton.innerHTML = '🎤';
          };
          
          recognition.onerror = function() {
            voiceButton.style.background = '#f1f5f9';
            voiceButton.style.color = 'black';
            voiceButton.innerHTML = '🎤';
            alert('Sorry, there was an error with voice recognition.');
          };
          
          recognition.onend = function() {
            voiceButton.style.background = '#f1f5f9';
            voiceButton.style.color = 'black';
            voiceButton.innerHTML = '🎤';
          };
          
          recognition.start();
        } else {
          alert('Sorry, your browser does not support voice recognition.');
        }
      });
      
      // Insert before the send button
      const sendButton = inputContainer.querySelector('.send-button');
      inputContainer.insertBefore(voiceButton, sendButton);
    }
  });
  