// logic.js

let currentQuestionIndex = 0;
const GROUPS = ['A', 'B', 'C'];
let groupAScore = 0;
let groupBScore = 0;
let groupCScore = 0;

function startAssessment() {
    console.log("Starting assessment");
    displayApplicantInfoForm();
}

function displayApplicantInfoForm() {
    const container = document.getElementById("question-container");
    container.innerHTML = `
        <form id="applicant-info-form">
            <label for="name">Name:</label><br>
            <input type="text" id="name" name="name"><br>
            <label for="company">Company:</label><br>
            <input type="text" id="company" name="company"><br>
            <label for="companyId">Company ID:</label><br>
            <input type="text" id="companyId" name="companyId"><br>
            <label for="email">Email:</label><br>
            <input type="email" id="email" name="email"><br>
            <button onclick="submitApplicantInfo(event)">Start Assessment</button>
        </form>
    `;
}

function submitApplicantInfo(event) {
    event.preventDefault();
    const form = document.getElementById("applicant-info-form");
    const applicantInfo = {
        name: form.elements['name'].value,
        company: form.elements['company'].value,
        companyId: form.elements['companyId'].value,
        email: form.elements['email'].value
    };
    localStorage.setItem('currentApplicant', JSON.stringify(applicantInfo));
    displayNextQuestion();
}

function displayNextQuestion() {
    console.log("Displaying next question", currentQuestionIndex);
    
    if (currentQuestionIndex >= questions.length) {
        endAssessment();
        return;
    }

    const currentQuestion = questions[currentQuestionIndex];
    showQuestion(currentQuestion);
}

function showQuestion(questionData) {
    console.log("Showing question:", questionData.text);
    const questionContainer = document.getElementById("question-container");
    
    questionContainer.innerHTML = `
        <h2>${questionData.text}</h2>
        ${questionData.options.map((option, index) => 
            `<button onclick="handleAnswer('${String.fromCharCode(65 + index)}')">${String.fromCharCode(65 + index)} ${option}</button>`
        ).join('')}
    `;
}

function handleAnswer(userChoice) {
    console.log("User chose:", userChoice);
    switch (userChoice) {
        case 'A':
            groupAScore++;
            break;
        case 'B':
            groupBScore++;
            break;
        case 'C':
            groupCScore++;
            break;
    }
    currentQuestionIndex++;
    displayNextQuestion();
}

function endAssessment() {
    console.log("Ending assessment");
    const totalResponses = groupAScore + groupBScore + groupCScore;
    const highestGroup = getHighestScoringGroup();

    const applicantInfo = JSON.parse(localStorage.getItem('currentApplicant'));
    const testResults = {
        applicantInfo,
        scores: {
            A: groupAScore,
            B: groupBScore,
            C: groupCScore
        },
        totalResponses,
        highestGroup
    };

    localStorage.setItem(`testResult_${Date.now()}`, JSON.stringify(testResults));

    displayAssessmentResult(testResults);
}

function displayAssessmentResult(testResults) {
    const container = document.getElementById("question-container");
    container.innerHTML = `
        <h2>Self-Assessment Results</h2>
        <p>Name: ${testResults.applicantInfo.name}</p>
        <p>Company: ${testResults.applicantInfo.company}</p>
        <p>Company ID: ${testResults.applicantInfo.companyId}</p>
        <p>Email: ${testResults.applicantInfo.email}</p>
        <p>Total responses collected: ${testResults.totalResponses}</p>
        <p>The highest scoring group is ${testResults.highestGroup.group}, with ${testResults.highestGroup.score} responses.</p>
        <button onclick="viewReports()">View Reports</button>
    `;
}

function getHighestScoringGroup() {
    const scores = [
        { group: 'A', score: groupAScore },
        { group: 'B', score: groupBScore },
        { group: 'C', score: groupCScore }
    ];

    return scores.reduce((max, current) => 
        max.score > current.score ? max : current
    );
}

function viewReports() {
    const container = document.getElementById("question-container");
    container.innerHTML = `
        <h2>Test Reports</h2>
        <button onclick="downloadReport()">Download Report</button>
        <div id="reports"></div>
    `;
    
    displayAllReports();
}

function displayAllReports() {
    const reportsContainer = document.getElementById("reports");
    let reportHtml = '';

    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.startsWith('testResult_')) {
            const testResult = JSON.parse(localStorage.getItem(key));
            reportHtml += `
                <div>
                    <h3>Report ${i + 1}</h3>
                    <p>Name: ${testResult.applicantInfo.name}</p>
                    <p>Date: ${new Date(parseInt(key.split('_')[1])).toLocaleString()}</p>
                </div>
            `;
        }
    }

    reportsContainer.innerHTML = reportHtml;
}

function downloadReport() {
    const csvContent = "Name,Company,Company ID,Email,A,B,C,Total,Highest Group\n";
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.startsWith('testResult_')) {
            const testResult = JSON.parse(localStorage.getItem(key));
            csvContent += `${testResult.applicantInfo.name},${testResult.applicantInfo.company},${testResult.applicantInfo.companyId},${testResult.applicantInfo.email},${testResult.scores.A},${testResult.scores.B},${testResult.scores.C},${testResult.totalResponses},${testResult.highestGroup.group}\n`;
        }
    }

    const encodedUri = encodeURI(`data:text/csv;charset=utf-8,${csvContent}`);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "assessment_results.csv");
    document.body.appendChild(link);
    link.click();
}

document.addEventListener('DOMContentLoaded', function() {
    const startButton = document.querySelector('#start-button');
    console.log("Start button found:", startButton);
    
    if (startButton) {
        startButton.addEventListener('click', () => {
            console.log("Start button clicked");
            startAssessment();
        });
    } else {
        console.error("Start button not found!");
    }
});