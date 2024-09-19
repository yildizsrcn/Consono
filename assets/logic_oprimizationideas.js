// logic.js with some optimization ideas:
// 1. State Management: Scores and other variables are moved to a state object to avoid global variables.
// 2. Form Submission and Timer: The form handling is cleaned up by attaching the event listener programmatically.
// 3. Timer Handling: The logic for updating the timer is simplified for clarity.
// 4. Question Rules: The getGroupRulesForQuestion function was created to make rules retrieval cleaner and modular.


const GROUPS = ['A', 'B', 'C'];
const state = {
    groupScores: {
        A: 0,
        B: 0,
        C: 0
    },
    timerInterval: null,
    timeElapsed: 0,
    currentQuestionIndex: 0,
    MAX_TIME: 15 * 60
};

function startAssessment() {
    console.log("Starting assessment");
    console.log("Total questions:", questions.length);
    displayApplicantInfoForm();
}

function displayApplicantInfoForm() {
    const container = document.getElementById("question-container");
    container.innerHTML = `
        <form id="applicant-info-form">
            <label for="name">Name:</label><br>
            <input type="text" id="name" name="name" required><br>
            <label for="company">Company:</label><br>
            <input type="text" id="company" name="company" required><br>
            <label for="companyId">Company ID:</label><br>
            <input type="text" id="companyId" name="companyId" required><br>
            <label for="email">Email:</label><br>
            <input type="email" id="email" name="email" required><br>
            <button type="submit">Start Assessment</button>
        </form>
    `;
    document.getElementById('applicant-info-form').addEventListener('submit', submitApplicantInfo);
}

function submitApplicantInfo(event) {
    event.preventDefault();
    const form = event.target;
    const applicantInfo = Object.fromEntries(new FormData(form).entries());

    localStorage.setItem('currentApplicant', JSON.stringify(applicantInfo));
    startTimer();
    displayNextQuestion();
}

function startTimer() {
    state.timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
    state.timeElapsed++;
    const minutes = Math.floor(state.timeElapsed / 60);
    const seconds = state.timeElapsed % 60;
    document.getElementById("time").textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    if (state.timeElapsed >= state.MAX_TIME) {
        clearInterval(state.timerInterval);
        endAssessment();
    }
}

function showQuestion(questionData) {
    const questionContainer = document.getElementById("question-container");
    questionContainer.innerHTML = `
        <h2>${questionData.text}</h2>
        ${questionData.options.map((option, index) =>
            `<button onclick="handleAnswer('${option}')">${String.fromCharCode(65 + index)} ${option}</button>`
        ).join('')}
    `;
}

function displayNextQuestion() {
    if (state.currentQuestionIndex >= questions.length) {
        endAssessment();
        return;
    }

    const currentQuestion = questions[state.currentQuestionIndex];
    state.timeElapsed = 0;
    document.getElementById("time").textContent = "00:00";
    showQuestion(currentQuestion);
}

function handleAnswer(userChoice) {
    const rules = getGroupRulesForQuestion(state.currentQuestionIndex);
    let group = 'C'; // Default group

    for (const rule of rules) {
        if (rule.condition.some(word => userChoice.toLowerCase().includes(word))) {
            group = rule.group;
            break;
        }
    }

    state.groupScores[group]++;
    state.currentQuestionIndex++;
    displayNextQuestion();
}

function endAssessment() {
    clearInterval(state.timerInterval);
    state.timeElapsed = 0;

    const highestGroup = getHighestScoringGroup();
    const applicantInfo = JSON.parse(localStorage.getItem('currentApplicant'));
    const totalResponses = Object.values(state.groupScores).reduce((acc, score) => acc + score, 0);
    
    const testResults = {
        applicantInfo,
        scores: state.groupScores,
        totalResponses,
        highestGroup
    };

    localStorage.setItem(`testResult_${Date.now()}`, JSON.stringify(testResults));
    displayAssessmentResult(testResults);
}

function getGroupRulesForQuestion(questionIndex) {
    const groupRules = [
        { condition: ['aumento', 'riduzione', 'costi'], group: 'A' },
        { condition: ['risparmiare', 'debiti'], group: 'B' },
        { condition: ['pianificare', 'contenere'], group: 'A' },
        // Add the remaining rules here similarly for all questions.
    ];
    return groupRules.slice(questionIndex * 2, (questionIndex + 1) * 2);
}

function getHighestScoringGroup() {
    return Object.entries(state.groupScores).reduce((highest, [group, score]) => {
        return score > highest.score ? { group, score } : highest;
    }, { group: 'C', score: 0 });
}

function displayAssessmentResult(testResults) {
    const container = document.getElementById("question-container");
    container.innerHTML = `
        <h2>Self-Assessment Results</h2>
        <p>Name: ${testResults.applicantInfo.name}</p>
        <p>Company: ${testResults.applicantInfo.company}</p>
        <p>Company ID: ${testResults.applicantInfo.companyId}</p>
        <p>Email: ${testResults.applicantInfo.email}</p>
        <p>Total responses: ${testResults.totalResponses}</p>
        <p>Highest Group: ${testResults.highestGroup.group}</p>
    `;
}

document.addEventListener('DOMContentLoaded', function () {
    const startButton = document.querySelector('#start-button');
    if (startButton) {
        startButton.addEventListener('click', startAssessment);
    }
});
