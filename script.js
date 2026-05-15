// Quiz Data
const quizData = {
    science: {
        name: "Science",
        icon: "🔬",
        questions: [
            {
                question: "What is the chemical symbol for gold?",
                answers: ["Go", "Au", "Ag", "Gd"],
                correct: 1
            },
            {
                question: "What planet is known as the Red Planet?",
                answers: ["Venus", "Jupiter", "Mars", "Saturn"],
                correct: 2
            },
            {
                question: "What is the hardest natural substance on Earth?",
                answers: ["Iron", "Diamond", "Quartz", "Titanium"],
                correct: 1
            },
            {
                question: "How many bones are in the adult human body?",
                answers: ["186", "206", "226", "246"],
                correct: 1
            },
            {
                question: "What gas do plants absorb from the atmosphere?",
                answers: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
                correct: 2
            },
            {
                question: "What is the speed of light in vacuum (approx)?",
                answers: ["300,000 km/s", "150,000 km/s", "500,000 km/s", "1,000,000 km/s"],
                correct: 0
            },
            {
                question: "What is the powerhouse of the cell?",
                answers: ["Nucleus", "Ribosome", "Mitochondria", "Golgi apparatus"],
                correct: 2
            },
            {
                question: "What element does 'O' represent on the periodic table?",
                answers: ["Osmium", "Oganesson", "Oxygen", "Oxide"],
                correct: 2
            },
            {
                question: "How many planets are in our solar system?",
                answers: ["7", "8", "9", "10"],
                correct: 1
            },
            {
                question: "What force keeps us on the ground?",
                answers: ["Magnetism", "Friction", "Gravity", "Inertia"],
                correct: 2
            },
            {
                question: "What is the largest organ in the human body?",
                answers: ["Heart", "Liver", "Skin", "Brain"],
                correct: 2
            },
            {
                question: "What is H2O commonly known as?",
                answers: ["Hydrogen Peroxide", "Heavy Water", "Water", "Hydroxide"],
                correct: 2
            },
            {
                question: "Which planet has the most moons?",
                answers: ["Jupiter", "Saturn", "Uranus", "Neptune"],
                correct: 1
            },
            {
                question: "What type of animal is a dolphin?",
                answers: ["Fish", "Reptile", "Mammal", "Amphibian"],
                correct: 2
            },
            {
                question: "What is the boiling point of water in Celsius?",
                answers: ["90°C", "100°C", "110°C", "120°C"],
                correct: 1
            }
        ]
    },
    history: {
        name: "History",
        icon: "📜",
        questions: [
            {
                question: "In what year did World War II end?",
                answers: ["1943", "1944", "1945", "1946"],
                correct: 2
            },
            {
                question: "Who was the first President of the United States?",
                answers: ["Thomas Jefferson", "John Adams", "George Washington", "Benjamin Franklin"],
                correct: 2
            },
            {
                question: "What ancient wonder was located in Alexandria?",
                answers: ["Colossus", "Lighthouse", "Hanging Gardens", "Mausoleum"],
                correct: 1
            },
            {
                question: "Which empire built the Colosseum?",
                answers: ["Greek", "Roman", "Ottoman", "Persian"],
                correct: 1
            },
            {
                question: "What year did the Berlin Wall fall?",
                answers: ["1987", "1988", "1989", "1990"],
                correct: 2
            },
            {
                question: "Who wrote the Declaration of Independence?",
                answers: ["George Washington", "Benjamin Franklin", "Thomas Jefferson", "John Adams"],
                correct: 2
            },
            {
                question: "What was the name of the ship the Pilgrims sailed on?",
                answers: ["Santa Maria", "Mayflower", "Endeavour", "Victoria"],
                correct: 1
            },
            {
                question: "Which country gifted the Statue of Liberty to the USA?",
                answers: ["England", "Spain", "France", "Germany"],
                correct: 2
            },
            {
                question: "Who discovered America in 1492?",
                answers: ["Amerigo Vespucci", "Christopher Columbus", "Leif Erikson", "John Cabot"],
                correct: 1
            },
            {
                question: "What was the longest war in history?",
                answers: ["Hundred Years' War", "Thirty Years' War", "Reconquista", "Punic Wars"],
                correct: 2
            },
            {
                question: "Who was known as the 'Maid of Orléans'?",
                answers: ["Marie Antoinette", "Joan of Arc", "Catherine de Medici", "Eleanor of Aquitaine"],
                correct: 1
            },
            {
                question: "What ancient civilization built the pyramids at Giza?",
                answers: ["Mesopotamian", "Greek", "Egyptian", "Roman"],
                correct: 2
            },
            {
                question: "In what year did the Titanic sink?",
                answers: ["1910", "1911", "1912", "1913"],
                correct: 2
            },
            {
                question: "Who painted the ceiling of the Sistine Chapel?",
                answers: ["Leonardo da Vinci", "Raphael", "Michelangelo", "Donatello"],
                correct: 2
            },
            {
                question: "What empire was ruled by Genghis Khan?",
                answers: ["Ottoman", "Mongol", "Persian", "Roman"],
                correct: 1
            }
        ]
    },
    geography: {
        name: "Geography",
        icon: "🌍",
        questions: [
            {
                question: "What is the largest country by land area?",
                answers: ["China", "USA", "Canada", "Russia"],
                correct: 3
            },
            {
                question: "What is the longest river in the world?",
                answers: ["Amazon", "Nile", "Yangtze", "Mississippi"],
                correct: 1
            },
            {
                question: "What is the capital of Australia?",
                answers: ["Sydney", "Melbourne", "Canberra", "Perth"],
                correct: 2
            },
            {
                question: "Which continent is the Sahara Desert located in?",
                answers: ["Asia", "Africa", "South America", "Australia"],
                correct: 1
            },
            {
                question: "What is the smallest country in the world?",
                answers: ["Monaco", "San Marino", "Vatican City", "Liechtenstein"],
                correct: 2
            },
            {
                question: "What ocean lies between Africa and Australia?",
                answers: ["Atlantic", "Pacific", "Indian", "Arctic"],
                correct: 2
            },
            {
                question: "What is the capital of Japan?",
                answers: ["Osaka", "Kyoto", "Tokyo", "Nagoya"],
                correct: 2
            },
            {
                question: "Which mountain is the tallest in the world?",
                answers: ["K2", "Kangchenjunga", "Mount Everest", "Lhotse"],
                correct: 2
            },
            {
                question: "How many continents are there?",
                answers: ["5", "6", "7", "8"],
                correct: 2
            },
            {
                question: "What is the largest ocean on Earth?",
                answers: ["Atlantic", "Indian", "Pacific", "Arctic"],
                correct: 2
            },
            {
                question: "Which country has the most population?",
                answers: ["USA", "India", "China", "Indonesia"],
                correct: 1
            },
            {
                question: "What is the capital of Brazil?",
                answers: ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"],
                correct: 2
            },
            {
                question: "Which river flows through London?",
                answers: ["Seine", "Danube", "Thames", "Rhine"],
                correct: 2
            },
            {
                question: "What country is known as the Land of the Rising Sun?",
                answers: ["China", "South Korea", "Japan", "Vietnam"],
                correct: 2
            },
            {
                question: "On which continent is the Amazon Rainforest?",
                answers: ["Africa", "Asia", "South America", "North America"],
                correct: 2
            }
        ]
    },
    entertainment: {
        name: "Entertainment",
        icon: "🎬",
        questions: [
            {
                question: "What is the highest-grossing film of all time?",
                answers: ["Titanic", "Avatar", "Avengers: Endgame", "Star Wars: The Force Awakens"],
                correct: 1
            },
            {
                question: "Who played Jack in the movie Titanic?",
                answers: ["Brad Pitt", "Tom Cruise", "Leonardo DiCaprio", "Johnny Depp"],
                correct: 2
            },
            {
                question: "What band was Freddie Mercury the lead singer of?",
                answers: ["The Beatles", "Queen", "Led Zeppelin", "Pink Floyd"],
                correct: 1
            },
            {
                question: "In what year was the first iPhone released?",
                answers: ["2005", "2006", "2007", "2008"],
                correct: 2
            },
            {
                question: "What is the name of Harry Potter's pet owl?",
                answers: ["Errol", "Hedwig", "Pigwidgeon", "Scabbers"],
                correct: 1
            },
            {
                question: "Who directed the movie 'Inception'?",
                answers: ["Steven Spielberg", "James Cameron", "Christopher Nolan", "Martin Scorsese"],
                correct: 2
            },
            {
                question: "What is the name of the fictional country in Black Panther?",
                answers: ["Zamunda", "Wakanda", "Genovia", "Latveria"],
                correct: 1
            },
            {
                question: "Which TV show features the character Walter White?",
                answers: ["The Wire", "Breaking Bad", "Better Call Saul", "Ozark"],
                correct: 1
            },
            {
                question: "What year was Minecraft officially released?",
                answers: ["2009", "2010", "2011", "2012"],
                correct: 2
            },
            {
                question: "Who sang 'Thriller'?",
                answers: ["Prince", "Michael Jackson", "Stevie Wonder", "James Brown"],
                correct: 1
            },
            {
                question: "What is the name of the coffee shop in Friends?",
                answers: ["Central Perk", "The Brew House", "Java Junction", "Café Mocha"],
                correct: 0
            },
            {
                question: "Which studio created the movie 'Toy Story'?",
                answers: ["DreamWorks", "Disney", "Pixar", "Illumination"],
                correct: 2
            },
            {
                question: "Who wrote the Harry Potter book series?",
                answers: ["J.R.R. Tolkien", "C.S. Lewis", "J.K. Rowling", "Stephen King"],
                correct: 2
            },
            {
                question: "What is the best-selling video game of all time?",
                answers: ["Tetris", "Minecraft", "GTA V", "Wii Sports"],
                correct: 1
            },
            {
                question: "In 'The Lion King', what is Simba's father's name?",
                answers: ["Scar", "Mufasa", "Rafiki", "Zazu"],
                correct: 1
            }
        ]
    }
};

// DOM Elements
const screens = {
    start: document.getElementById('start-screen'),
    quiz: document.getElementById('quiz-screen'),
    results: document.getElementById('results-screen')
};

const elements = {
    categoryGrid: document.getElementById('category-grid'),
    questionCount: document.getElementById('question-count'),
    startBtn: document.getElementById('start-btn'),
    questionCounter: document.getElementById('question-counter'),
    categoryLabel: document.getElementById('category-label'),
    timerText: document.getElementById('timer-text'),
    timerProgress: document.getElementById('timer-progress'),
    currentScore: document.getElementById('current-score'),
    progressFill: document.getElementById('progress-fill'),
    questionText: document.getElementById('question-text'),
    answersContainer: document.getElementById('answers-container'),
    nextBtn: document.getElementById('next-btn'),
    resultsIcon: document.getElementById('results-icon'),
    resultsTitle: document.getElementById('results-title'),
    resultsMessage: document.getElementById('results-message'),
    finalScore: document.getElementById('final-score'),
    totalQuestions: document.getElementById('total-questions'),
    scorePercentage: document.getElementById('score-percentage'),
    correctCount: document.getElementById('correct-count'),
    wrongCount: document.getElementById('wrong-count'),
    avgTime: document.getElementById('avg-time'),
    retryBtn: document.getElementById('retry-btn'),
    homeBtn: document.getElementById('home-btn')
};

// Game State
let gameState = {
    selectedCategory: null,
    questions: [],
    currentQuestionIndex: 0,
    score: 0,
    timeLeft: 30,
    timerInterval: null,
    answered: false,
    responseTimes: [],
    questionStartTime: null
};

const TIMER_DURATION = 30;
const TIMER_CIRCUMFERENCE = 2 * Math.PI * 45;

// Initialize App
function init() {
    renderCategories();
    setupEventListeners();
}

function renderCategories() {
    elements.categoryGrid.innerHTML = '';
    
    Object.entries(quizData).forEach(([key, category]) => {
        const card = document.createElement('div');
        card.className = 'category-card';
        card.dataset.category = key;
        card.innerHTML = `
            <span class="icon">${category.icon}</span>
            <span class="name">${category.name}</span>
        `;
        elements.categoryGrid.appendChild(card);
    });
}

function setupEventListeners() {
    // Category selection
    elements.categoryGrid.addEventListener('click', (e) => {
        const card = e.target.closest('.category-card');
        if (!card) return;
        
        document.querySelectorAll('.category-card').forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
        gameState.selectedCategory = card.dataset.category;
        elements.startBtn.disabled = false;
    });

    // Start quiz
    elements.startBtn.addEventListener('click', startQuiz);

    // Next question
    elements.nextBtn.addEventListener('click', nextQuestion);

    // Results actions
    elements.retryBtn.addEventListener('click', () => startQuiz());
    elements.homeBtn.addEventListener('click', goHome);
}

function showScreen(screenName) {
    Object.values(screens).forEach(screen => screen.classList.remove('active'));
    screens[screenName].classList.add('active');
}

function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function startQuiz() {
    const questionCount = parseInt(elements.questionCount.value);
    const categoryData = quizData[gameState.selectedCategory];
    
    // Reset game state
    gameState.questions = shuffleArray(categoryData.questions).slice(0, questionCount);
    gameState.currentQuestionIndex = 0;
    gameState.score = 0;
    gameState.responseTimes = [];
    gameState.answered = false;

    // Update UI
    elements.categoryLabel.textContent = categoryData.name;
    elements.currentScore.textContent = '0';
    
    showScreen('quiz');
    loadQuestion();
}

function loadQuestion() {
    const question = gameState.questions[gameState.currentQuestionIndex];
    const total = gameState.questions.length;
    
    // Reset state
    gameState.answered = false;
    gameState.questionStartTime = Date.now();
    elements.nextBtn.disabled = true;

    // Update UI
    elements.questionCounter.textContent = `Question ${gameState.currentQuestionIndex + 1}/${total}`;
    elements.progressFill.style.width = `${((gameState.currentQuestionIndex) / total) * 100}%`;
    elements.questionText.textContent = question.question;

    // Render answers
    const letters = ['A', 'B', 'C', 'D'];
    elements.answersContainer.innerHTML = question.answers.map((answer, index) => `
        <button class="answer-btn" data-index="${index}">
            <span class="letter">${letters[index]}</span>
            <span class="text">${answer}</span>
        </button>
    `).join('');

    // Add click listeners to answers
    elements.answersContainer.querySelectorAll('.answer-btn').forEach(btn => {
        btn.addEventListener('click', () => selectAnswer(parseInt(btn.dataset.index)));
    });

    // Start timer
    startTimer();
}

function startTimer() {
    gameState.timeLeft = TIMER_DURATION;
    updateTimerDisplay();

    gameState.timerInterval = setInterval(() => {
        gameState.timeLeft--;
        updateTimerDisplay();

        if (gameState.timeLeft <= 0) {
            clearInterval(gameState.timerInterval);
            timeUp();
        }
    }, 1000);
}

function updateTimerDisplay() {
    elements.timerText.textContent = gameState.timeLeft;
    
    const offset = TIMER_CIRCUMFERENCE * (1 - gameState.timeLeft / TIMER_DURATION);
    elements.timerProgress.style.strokeDashoffset = offset;

    // Color changes
    elements.timerProgress.classList.remove('warning', 'danger');
    if (gameState.timeLeft <= 5) {
        elements.timerProgress.classList.add('danger');
    } else if (gameState.timeLeft <= 10) {
        elements.timerProgress.classList.add('warning');
    }
}

function selectAnswer(selectedIndex) {
    if (gameState.answered) return;
    
    gameState.answered = true;
    clearInterval(gameState.timerInterval);

    const responseTime = (Date.now() - gameState.questionStartTime) / 1000;
    gameState.responseTimes.push(responseTime);

    const question = gameState.questions[gameState.currentQuestionIndex];
    const buttons = elements.answersContainer.querySelectorAll('.answer-btn');
    
    // Disable all buttons
    buttons.forEach(btn => btn.disabled = true);

    // Show correct/wrong
    if (selectedIndex === question.correct) {
        buttons[selectedIndex].classList.add('correct');
        gameState.score++;
        elements.currentScore.textContent = gameState.score;
    } else {
        buttons[selectedIndex].classList.add('wrong');
        buttons[question.correct].classList.add('correct');
    }

    elements.nextBtn.disabled = false;
}

function timeUp() {
    if (gameState.answered) return;
    
    gameState.answered = true;
    gameState.responseTimes.push(TIMER_DURATION);

    const question = gameState.questions[gameState.currentQuestionIndex];
    const buttons = elements.answersContainer.querySelectorAll('.answer-btn');
    
    buttons.forEach(btn => btn.disabled = true);
    buttons[question.correct].classList.add('correct');

    elements.nextBtn.disabled = false;
}

function nextQuestion() {
    gameState.currentQuestionIndex++;

    if (gameState.currentQuestionIndex >= gameState.questions.length) {
        showResults();
    } else {
        loadQuestion();
    }
}

function showResults() {
    clearInterval(gameState.timerInterval);

    const total = gameState.questions.length;
    const percentage = Math.round((gameState.score / total) * 100);
    const avgTime = gameState.responseTimes.length > 0
        ? (gameState.responseTimes.reduce((a, b) => a + b, 0) / gameState.responseTimes.length).toFixed(1)
        : 0;

    // Determine result message
    let icon, title, message;
    if (percentage >= 90) {
        icon = '🏆';
        title = 'Outstanding!';
        message = "You're a true quiz master!";
    } else if (percentage >= 70) {
        icon = '🌟';
        title = 'Great Job!';
        message = 'Impressive knowledge!';
    } else if (percentage >= 50) {
        icon = '👍';
        title = 'Good Effort!';
        message = 'Keep learning and improving!';
    } else {
        icon = '📚';
        title = 'Keep Practicing!';
        message = "You'll do better next time!";
    }

    // Update UI
    elements.resultsIcon.textContent = icon;
    elements.resultsTitle.textContent = title;
    elements.resultsMessage.textContent = message;
    elements.finalScore.textContent = gameState.score;
    elements.totalQuestions.textContent = total;
    elements.scorePercentage.textContent = `${percentage}%`;
    elements.correctCount.textContent = gameState.score;
    elements.wrongCount.textContent = total - gameState.score;
    elements.avgTime.textContent = `${avgTime}s`;

    // Update progress bar to 100%
    elements.progressFill.style.width = '100%';

    showScreen('results');
}

function goHome() {
    gameState.selectedCategory = null;
    document.querySelectorAll('.category-card').forEach(c => c.classList.remove('selected'));
    elements.startBtn.disabled = true;
    showScreen('start');
}

// Start the app
init();
