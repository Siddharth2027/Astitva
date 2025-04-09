document.addEventListener('DOMContentLoaded', function() {
    // Quiz elements
    const quizIntro = document.getElementById('quiz-intro');
    const quizQuestions = document.getElementById('quiz-questions');
    const quizResults = document.getElementById('quiz-results');
    const categoryCards = document.querySelectorAll('.category-card');
    const questionContainer = document.getElementById('question-container');
    const quizTitle = document.getElementById('quiz-title');
    const currentQuestionEl = document.getElementById('current-question');
    const totalQuestionsEl = document.getElementById('total-questions');
    const prevQuestionBtn = document.getElementById('prev-question');
    const nextQuestionBtn = document.getElementById('next-question');
    const submitQuizBtn = document.getElementById('submit-quiz');
    const scoreValue = document.getElementById('score-value');
    const scoreTotal = document.getElementById('score-total');
    const scoreMessage = document.getElementById('score-message');
    const answersReview = document.getElementById('answers-review');
    const retryQuizBtn = document.getElementById('retry-quiz');
    const newCategoryBtn = document.getElementById('new-category');
    
    // Quiz state
    let currentCategory = '';
    let questions = [];
    let currentQuestionIndex = 0;
    let userAnswers = [];
    const totalQuestions = 10;
    
    // Initialize quiz display
    if (totalQuestionsEl) {
      totalQuestionsEl.textContent = totalQuestions;
    }
    
    // Handle category selection
    if (categoryCards) {
      categoryCards.forEach(card => {
        card.addEventListener('click', function() {
          currentCategory = this.getAttribute('data-category');
          startQuiz(currentCategory);
        });
      });
    }
    
    // Start quiz for selected category
    function startQuiz(category) {
      // Generate questions for the selected category
      questions = generateQuizQuestions(category, totalQuestions);
      currentQuestionIndex = 0;
      userAnswers = new Array(totalQuestions).fill(null);
      
      // Update UI
      if (quizTitle) {
        quizTitle.textContent = capitalizeFirstLetter(category) + ' Quiz';
      }
      
      // Show questions screen
      if (quizIntro && quizQuestions) {
        quizIntro.classList.remove('active');
        quizResults.classList.remove('active');
        quizQuestions.classList.add('active');
      }
      
      // Display first question
      displayQuestion(0);
      updateNavButtons();
    }
    
    // Display the current question
    function displayQuestion(index) {
      if (!questionContainer) return;
      
      const question = questions[index];
      if (!question) return;
      
      if (currentQuestionEl) {
        currentQuestionEl.textContent = index + 1;
      }
      
      let html = `
        <div class="question">
          <p>${index + 1}. ${question.question}</p>
        </div>
        <div class="options">
      `;
      
      question.options.forEach((option, i) => {
        const isSelected = userAnswers[index] === i;
        const optionClass = isSelected ? 'option selected' : 'option';
        const markers = ['A', 'B', 'C', 'D'];
        
        html += `
          <div class="${optionClass}" data-index="${i}">
            <div class="option-marker">${markers[i]}</div>
            <div class="option-text">${option}</div>
          </div>
        `;
      });
      
      html += '</div>';
      questionContainer.innerHTML = html;
      
      // Add event listeners to the options
      const optionElements = questionContainer.querySelectorAll('.option');
      optionElements.forEach(option => {
        option.addEventListener('click', function() {
          const optionIndex = parseInt(this.getAttribute('data-index'));
          userAnswers[currentQuestionIndex] = optionIndex;
          
          // Update selected option UI
          optionElements.forEach(opt => opt.classList.remove('selected'));
          this.classList.add('selected');
          
          // Enable next button if disabled
          if (nextQuestionBtn.disabled) {
            nextQuestionBtn.disabled = false;
          }
          
          // If this is the last question, show submit button
          if (currentQuestionIndex === totalQuestions - 1) {
            submitQuizBtn.style.display = 'block';
          }
        });
      });
    }
    
    // Update navigation buttons state
    function updateNavButtons() {
      if (prevQuestionBtn) {
        prevQuestionBtn.disabled = currentQuestionIndex === 0;
      }
      
      if (nextQuestionBtn) {
        nextQuestionBtn.disabled = currentQuestionIndex === totalQuestions - 1;
      }
      
      if (submitQuizBtn) {
        submitQuizBtn.style.display = currentQuestionIndex === totalQuestions - 1 ? 'block' : 'none';
      }
    }
    
    // Handle navigation button clicks
    if (prevQuestionBtn) {
      prevQuestionBtn.addEventListener('click', function() {
        if (currentQuestionIndex > 0) {
          currentQuestionIndex--;
          displayQuestion(currentQuestionIndex);
          updateNavButtons();
        }
      });
    }
    
    if (nextQuestionBtn) {
      nextQuestionBtn.addEventListener('click', function() {
        if (currentQuestionIndex < totalQuestions - 1) {
          currentQuestionIndex++;
          displayQuestion(currentQuestionIndex);
          updateNavButtons();
        }
      });
    }
    
    // Handle quiz submission
    if (submitQuizBtn) {
      submitQuizBtn.addEventListener('click', function() {
        showResults();
      });
    }
    
    // Show quiz results
    function showResults() {
      // Calculate score
      let correctAnswers = 0;
      questions.forEach((question, index) => {
        if (userAnswers[index] === question.correctAnswer) {
          correctAnswers++;
        }
      });
      
      // Update results UI
      if (scoreValue && scoreTotal) {
        scoreValue.textContent = correctAnswers;
        scoreTotal.textContent = totalQuestions;
      }
      
      // Set score message
      if (scoreMessage) {
        if (correctAnswers === totalQuestions) {
          scoreMessage.textContent = 'Perfect! You are a master of knowledge!';
        } else if (correctAnswers >= totalQuestions * 0.7) {
          scoreMessage.textContent = 'Great job! You know your stuff!';
        } else if (correctAnswers >= totalQuestions * 0.5) {
          scoreMessage.textContent = 'Good effort! Keep learning!';
        } else {
          scoreMessage.textContent = 'Keep exploring to learn more about Indian heritage!';
        }
      }
      
      // Generate answers review
      if (answersReview) {
        let reviewHtml = '';
        
        questions.forEach((question, index) => {
          const userAnswer = userAnswers[index];
          const isCorrect = userAnswer === question.correctAnswer;
          const reviewClass = isCorrect ? 'correct' : 'incorrect';
          
          reviewHtml += `
            <div class="answer-review ${reviewClass}">
              <p class="answer-question">${index + 1}. ${question.question}</p>
              <div class="answer-choice">
                <span class="answer-icon">${isCorrect ? '✓' : '✗'}</span>
                <span class="${isCorrect ? 'correct-answer' : 'incorrect-answer'}">
                  Your answer: ${question.options[userAnswer]}
                </span>
              </div>
          `;
          
          // Show correct answer if user was wrong
          if (!isCorrect) {
            reviewHtml += `
              <div class="answer-choice">
                <span class="answer-icon">✓</span>
                <span class="correct-answer">
                  Correct answer: ${question.options[question.correctAnswer]}
                </span>
              </div>
            `;
          }
          
          reviewHtml += '</div>';
        });
        
        answersReview.innerHTML = reviewHtml;
      }
      
      // Show results screen
      if (quizQuestions && quizResults) {
        quizQuestions.classList.remove('active');
        quizResults.classList.add('active');
      }
      
      // Add result to leaderboard
      addToLeaderboard(currentCategory, correctAnswers);
    }
    
    // Handle retry quiz button
    if (retryQuizBtn) {
      retryQuizBtn.addEventListener('click', function() {
        startQuiz(currentCategory);
      });
    }
    
    // Handle new category button
    if (newCategoryBtn) {
      newCategoryBtn.addEventListener('click', function() {
        if (quizResults && quizIntro) {
          quizResults.classList.remove('active');
          quizIntro.classList.add('active');
        }
      });
    }
    
    // Add result to leaderboard
    function addToLeaderboard(category, score) {
      const leaderboardBody = document.getElementById('leaderboard-body');
      if (!leaderboardBody) return;
      
      // Generate random name for demo
      const names = ['Arjun', 'Priya', 'Rahul', 'Meera', 'Rajesh', 'Anjali', 'Vikram', 'Shanti'];
      const surnames = ['S.', 'P.', 'K.', 'M.', 'R.', 'G.', 'D.', 'T.'];
      const randomName = names[Math.floor(Math.random() * names.length)] + ' ' + 
                        surnames[Math.floor(Math.random() * surnames.length)];
      
      // Current date
      const today = new Date();
      const dateStr = today.getFullYear() + '-' + 
                    String(today.getMonth() + 1).padStart(2, '0') + '-' + 
                    String(today.getDate()).padStart(2, '0');
      
      // Create new row
      const newRow = document.createElement('tr');
      newRow.innerHTML = `
        <td>?</td>
        <td>${randomName}</td>
        <td>${capitalizeFirstLetter(category)}</td>
        <td>${score}/${totalQuestions}</td>
        <td>${dateStr}</td>
      `;
      
      // Add to top of table
      if (leaderboardBody.firstChild) {
        leaderboardBody.insertBefore(newRow, leaderboardBody.firstChild);
      } else {
        leaderboardBody.appendChild(newRow);
      }
      
      // Update ranks
      updateLeaderboardRanks();
    }
    
    // Update rank numbers in leaderboard
    function updateLeaderboardRanks() {
      const leaderboardBody = document.getElementById('leaderboard-body');
      if (!leaderboardBody) return;
      
      const rows = leaderboardBody.querySelectorAll('tr');
      rows.forEach((row, index) => {
        const rankCell = row.cells[0];
        if (rankCell) {
          rankCell.textContent = index + 1;
        }
      });
    }
    
    // Helper function to capitalize first letter
    function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
  });
  
  // Function to generate quiz questions for a given category
  function generateQuizQuestions(category, count) {
    // This would be replaced with real questions for each category
    // For demonstration purposes, we'll use sample questions
    
    const questions = {
      history: [
        {
          question: 'Which ancient civilization flourished in the Indus Valley region around 2500 BCE?',
          options: ['Mesopotamian Civilization', 'Indus Valley Civilization', 'Egyptian Civilization', 'Greek Civilization'],
          correctAnswer: 1
        },
        {
          question: 'Who was the founder of the Mauryan Empire?',
          options: ['Ashoka', 'Chandragupta Maurya', 'Bindusara', 'Samudragupta'],
          correctAnswer: 1
        },
        {
          question: 'Which Mughal emperor built the Taj Mahal?',
          options: ['Akbar', 'Jahangir', 'Shah Jahan', 'Aurangzeb'],
          correctAnswer: 2
        },
        {
          question: 'In which year did India gain independence from British rule?',
          options: ['1945', '1947', '1950', '1952'],
          correctAnswer: 1
        },
        {
          question: 'Who is known as the "Iron Man of India"?',
          options: ['Jawaharlal Nehru', 'Mahatma Gandhi', 'Sardar Vallabhbhai Patel', 'B.R. Ambedkar'],
          correctAnswer: 2
        }
      ],
      culture: [
        {
          question: 'What is the traditional Indian greeting?',
          options: ['Aloha', 'Namaste', 'Bonjour', 'Hola'],
          correctAnswer: 1
        },
        {
          question: 'Which of the following is a traditional Indian art form?',
          options: ['Batik', 'Origami', 'Madhubani', 'Macramé'],
          correctAnswer: 2
        }
      ],
      arts: [
        {
          question: 'Which classical dance form originated in Tamil Nadu?',
          options: ['Kathak', 'Bharatanatyam', 'Odissi', 'Manipuri'],
          correctAnswer: 1
        },
        {
          question: 'The Tabla is which type of musical instrument?',
          options: ['String', 'Wind', 'Percussion', 'Electronic'],
          correctAnswer: 2
        }
      ]
    };
    
    // Other category questions would be defined here
    
    // Create a full set of questions for the selected category
    let categoryQuestions = questions[category] || questions['history']; // Default to history if category not found
    let result = [];
    
    // If we don't have enough questions, create some generic ones
    while (result.length < count) {
      // Use existing questions first
      if (result.length < categoryQuestions.length) {
        result.push(categoryQuestions[result.length]);
      } else {
        // Create generic questions if we need more
        result.push({
          question: `Sample question ${result.length + 1} about ${category}?`,
          options: [
            `Sample answer 1 for question ${result.length + 1}`, 
            `Sample answer 2 for question ${result.length + 1}`, 
            `Sample answer 3 for question ${result.length + 1}`, 
            `Sample answer 4 for question ${result.length + 1}`
          ],
          correctAnswer: Math.floor(Math.random() * 4) // Random correct answer for sample questions
        });
      }
    }
    
    return result;
  }
  