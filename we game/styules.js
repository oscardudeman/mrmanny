const quizQuestions = [
    { question: "What is the capital of France?", options: ["Paris", "London", "Berlin", "Madrid"], answer: "Paris" },
    { question: "Who wrote 'Romeo and Juliet'?", options: ["William Shakespeare", "Jane Austen", "Charles Dickens", "Mark Twain"], answer: "William Shakespeare" },
    { question: "What is the chemical symbol for water?", options: ["H2O", "CO2", "NaCl", "O2"], answer: "H2O" }
];

let currentQuestionIndex = 0;
let score = 0;

function displayQuestion() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    const nextButton = document.getElementById("next-btn");

    const currentQuestion = quizQuestions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = "";

    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => checkAnswer(option);
        optionsElement.appendChild(button);
    });

    nextButton.style.display = "none";
}

function checkAnswer(selectedOption) {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    if (selectedOption === currentQuestion.answer) {
        score++;
    }
    document.getElementById("score-value").textContent = score;
    currentQuestionIndex++;

    const nextButton = document.getElementById("next-btn");
    if (currentQuestionIndex < quizQuestions.length) {
        nextButton.style.display = "block";
    } else {
        alert("Quiz completed! Your score: " + score);
    }
}

function nextQuestion() {
    displayQuestion();
}

// Initialize the quiz
displayQuestion();