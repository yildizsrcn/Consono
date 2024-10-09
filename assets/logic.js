// logic.js


const GROUPS = ['A', 'B', 'C'];
let groupAScore = 0;
let groupBScore = 0;
let groupCScore = 0;

let timerInterval;
let timeElapsed = 0;
const MAX_TIME = 15 * 60;
let currentQuestionIndex = 0;

function startAssessment() {
    document.getElementById('entrance-screen').style.display = 'none';
    document.getElementById('content-wrapper').style.display = 'block';
    console.log("Starting assessment");
    console.log("Total questions:", questions.length);
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
    startTimer();
    displayNextQuestion();
}
function startTimer() {
    timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
    timeElapsed++;
    const minutes = Math.floor(timeElapsed / 60);
    const seconds = timeElapsed % 15;
    document.getElementById("time").textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    if (timeElapsed >= MAX_TIME) {
        clearInterval(timerInterval);
        endAssessment();
    }
}



function showQuestion(questionData) {
    console.log("Showing question:", questionData.text);
    console.log("Options:", questionData.options);

    const questionContainer = document.getElementById("question-container");
    questionContainer.innerHTML = `
        <h2>${questionData.text}</h2>
        <ul>
            ${questionData.options.map((option, index) => 
                `<li><button onclick="handleAnswer('${option}')">${option.replace(/^[A-Z]\.?\s?/, '')}</button></li>`
            ).join('')}
        </ul>
    `;
}

function displayNextQuestion() {
    console.log("Displaying next question", currentQuestionIndex);
    console.log("Questions length:", questions.length);
    timeElapsed = 0;
    document.getElementById("time").textContent = "00:00";
    
    if (currentQuestionIndex >= questions.length) {
        console.log("All questions completed. Ending assessment.");
        endAssessment();
        return;
    }

    const currentQuestion = questions[currentQuestionIndex];
    console.log("Current Question:", currentQuestion);
    showQuestion(currentQuestion);
}

function handleAnswer(userChoice) {
    console.log(`Question ${currentQuestionIndex + 1}: User chose: ${userChoice}`);
    
    const groupRules = [
        // Question 0
        { condition: ['aumento', 'riduzione', 'costi'], group: 'A' },
        { condition: ['risparmiare', 'debiti'], group: 'B' },

        // Question 1
        { condition: ['pianificare', 'contenere', 'sprechi', 'fiscali', 'stile'], group: 'A' },
        { condition: ['risparmio', 'tasse', 'assicurazione'], group: 'B' },

        // Question 2
        { condition: ['crisi', 'debiti', 'spese', 'reddito', 'lavoro'], group: 'A' },
        { condition: ['decisione', 'importante'], group: 'B' },

        // Question 3
        { condition: ['previene', 'imprevisto'], group: 'A' },
        { condition: ['annulla', 'effetti'], group: 'B' },

        // Question 4
        { condition: ['validare', 'indicazioni'], group: 'B' },
        { condition: ['esattamente', 'fare'], group: 'A' },

        // Question 5
        { condition: ['sollievo', 'parlare', 'difficoltà'], group: 'A' },
        { condition: ['indicazioni', 'bilancio'], group: 'B' },

        // Question 6
        { condition: ['anticipo', 'prestiti', 'budgeting'], group: 'A' },
        { condition: ['carte', 'risparmio', 'assicurazioni'], group: 'B' },

        // Question 7
        { condition: ['significhi', 'molta'], group: 'A' },
        { condition: ['Credo', 'ancora'], group: 'B' },

        // Question 8
        { condition: ['arrivare', 'supporto'], group: 'A' },
        { condition: ['gestione', 'migliorare'], group: 'B' },

        // Question 9
        { condition: ['stesse', 'oggi'], group: 'A' },
        { condition: ['più', 'acquistare'], group: 'B' },

        // Question 10
        { condition: ['gestisco', 'altri'], group: 'A' },
        { condition: ['approssimativa', 'date'], group: 'B' },

        // Question 11
        { condition: ['esatta', 'spese', 'pianifico'], group: 'A' },
        { condition: ['non', 'idea', 'passare'], group: 'B' },

        // Question 12
        { condition: ['testimoni', 'versione'], group: 'B' },
        { condition: ['riparare', 'assicurazione'], group: 'A' },

        // Question 13
        { condition: ['priorità', 'saperne'], group: 'B' },
        { condition: ['spesso', 'spenderlo'], group: 'A' },

        // Question 14
        { condition: ['sicuro', 'saprei'], group: 'A' },
        { condition: ['equilibrato', 'rendimento'], group: 'B' },

        // Question 15
        { condition: ['prestiti', 'finanziamenti'], group: 'A' },
        { condition: ['risparmiare', 'contanti'], group: 'B' },

        // Question 16
        { condition: ['fidarmi', 'istituzioni'], group: 'A' },
        { condition: ['approfondire', 'consapevole'], group: 'B' },

        // Question 17
        { condition: ['diversificare', 'importante'], group: 'A' },
        { condition: ['utile', 'strategia'], group: 'B' },

        // Question 18
        { condition: ['decisioni', 'difficoltà'], group: 'B' },
        { condition: ['evitare', 'risolvano'], group: 'A' },

        // Question 19
        { condition: ['imprevisti', 'spese'], group: 'A' },
        { condition: ['obiettivi', 'lungo'], group: 'B' }
    ];

    let group = 'C'; // Default to group C

    for (const rule of groupRules.slice(currentQuestionIndex * 2)) {
        if (rule.condition.some(word => userChoice.toLowerCase().includes(word))) {
            group = rule.group;
            break;
        }
    }

    console.log(`Group assigned: ${group}`);

    switch (group) {
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

    console.log(`Current scores - A: ${groupAScore}, B: ${groupBScore}, C: ${groupCScore}`);

    console.log("Before increment: currentQuestionIndex =", currentQuestionIndex);
    currentQuestionIndex++;
    console.log("After increment: currentQuestionIndex =", currentQuestionIndex);

    displayNextQuestion();
}

function endAssessment() {
    console.log("Ending assessment");
    console.log(`Current question index: ${currentQuestionIndex}`);
    console.log(`Questions length: ${questions.length}`);
    console.log(`Time elapsed: ${timeElapsed}`);
    console.log(`MAX_TIME: ${MAX_TIME}`);

    clearInterval(timerInterval);
    timeElapsed = 0;
    document.getElementById("time").textContent = "00:00";
    const totalResponses = groupAScore + groupBScore + groupCScore;
    console.log(`Total responses calculated: ${totalResponses}`);

    const highestGroup = getHighestScoringGroup();
    console.log(`Highest scoring group detected: ${highestGroup.group} with ${highestGroup.score} responses`);

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
    fetch('http://localhost:3000/api/results', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(testResults),
    })
    .then(response => response.json())
    .then(data => console.log('Success:', data))
    .catch((error) => console.error('Error:', error));
    
    console.log("Final testResults object:", JSON.stringify(testResults, null, 2));

    localStorage.setItem(`testResult_${Date.now()}`, JSON.stringify(testResults));

    displayAssessmentResult(testResults);
}

function getHighestScoringGroup() {
    const scores = [
        { group: 'CapitalMente', score: groupAScore },
        { group: 'ValutaMente', score: groupBScore },
        { group: 'RendiMente', score: groupCScore }
    ];
    console.log("Scores array:", JSON.stringify(scores, null, 2));

    const highestGroup = scores.reduce((max, current) => 
        max.score > current.score ? max : current
    );

    console.log(`Highest scoring group found: ${highestGroup.group} with ${highestGroup.score} responses`);
    
    return highestGroup;
}

function displayAssessmentResult(testResults) {
    console.log("Displaying assessment results");
    console.log(JSON.stringify(testResults, null, 2)); // Log the entire testResults object

    const container = document.getElementById("question-container");
    container.innerHTML = `
        <h2>Self-Assessment Results</h2>
        <p>Name: ${testResults.applicantInfo.name}</p>
        <p>Company: ${testResults.applicantInfo.company}</p>
        <p>Company ID: ${testResults.applicantInfo.companyId}</p>
        <p>Email: ${testResults.applicantInfo.email}</p>
        <p>Total responses collected: ${testResults.totalResponses}</p>
        <p>You are ${testResults.highestGroup.group}
        
    `;
}

/*

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
*/
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
