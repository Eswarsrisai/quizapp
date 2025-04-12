const questions = [
  {
    question: "What is JavaScript?",
    options: ["Scripting Language", "Interpreter", "Compiler", "NONE"],
    answer: 0,
  },
  {
    question: "Which company developed JS?",
    options: ["IBM", "Microsoft", "Google", "Netscape"],
    answer: 3,
  },
  {
    question: "Who invented Java?",
    options: ["Ed Frank", "Patrick Naughton", "James Gosling", "All the Above"],
    answer: 3,
  },
  {
    question: "What is the latest standard of JS?",
    options: ["ES06", "ES2023", "32", "NONE"],
    answer: 1,
  },

  {
    question: "Who invented Java?",
    options: ["Ed Frank", "Patrick Naughton", "James Gosling", "All the Above"],
    answer: 3,
  },
];

let currentQuestion = 0;
let score = 0;
function displayQuestion() {
  const questionData = questions[currentQuestion];
  questionBox.textContent = questionData.question;
  optionsBox.innerHTML = "";

  questionData.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.className = "option-btn";
    button.onclick = () => selectAnswer(index);
    optionsBox.appendChild(button);
  });

  nextBtn.disabled = true;
}

function selectAnswer(selectedIndex) {
  const correctAnswer = questions[currentQuestion].answer;

  // Get all option buttons
  const optionButtons = optionsBox.querySelectorAll(".option-btn");

  // Highlight the selected answer
  optionButtons.forEach((button, index) => {
    if (index === correctAnswer && index === selectedIndex) {
      score++; // Increment score for correct answer
      button.style.backgroundColor = "green"; // Correct answer
    } else if (index === selectedIndex) {
      button.style.backgroundColor = "red"; // Wrong answer
    } else {
      button.style.backgroundColor = "gray"; // Disable other buttons
    }
    button.disabled = true;
  });

  nextBtn.disabled = false;
}
function scorecard() {
  const scoreBox = document.getElementById("scoreBox");
  scoreBox.classList.remove("hide"); // Make it visible
  scoreBox.innerHTML = `
    <h2>Your Score: ${score}/${questions.length}</h2>
  `;
}
function nextQuestion() {
  currentQuestion++;

  if (currentQuestion < questions.length) {
    // Clear the current options
    displayQuestion();
  } else {
    questionBox.textContent = ""; // Clear the current question
    optionsBox.innerHTML = "";

    nextBtn.style.display = "none";
    scorecard();
  }
}

nextBtn.addEventListener("click", nextQuestion);

displayQuestion();
