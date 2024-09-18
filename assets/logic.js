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
    console.log("Starting assessment");
    displayApplicantInfoForm();
}
function startTimer() {
    timerInterval = setInterval(updateTimer, 1000);
}
function updateTimer() {
    timeElapsed++;
    const minutes = Math.floor(timeElapsed / 60);
    const seconds = timeElapsed % 60;
    document.getElementById("time").textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    if (timeElapsed >= MAX_TIME) {
        clearInterval(timerInterval);
        endAssessment();
    }
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
    const seconds = timeElapsed % 60;
    document.getElementById("time").textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    if (timeElapsed >= MAX_TIME) {
        clearInterval(timerInterval);
        endAssessment();
    }
}

function displayNextQuestion() {
    console.log("Displaying next question", currentQuestionIndex);
    timeElapsed = 0;
    document.getElementById("time").textContent = "00:00";
    
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
    console.log(`Question ${currentQuestionIndex + 1}: User chose: ${userChoice}`);
    
    let group = 'C';
    switch (currentQuestionIndex) {
        case 0:
if ([
    "aumento dei prezzi (cibo, energia, ecc)", 
    "riduzione del mio reddito familiare", 
    "aumento dei costi per gli alloggi (acquisto / affitto)", 
    "rimborsare i debiti (mutui, carte di credito, debiti di altra natura)", 
    "incremento delle spese mediche", 
    "incremento spese per i figli (ad esempio scuola)"
].includes(userChoice)) {
group = 'A';
} else if ([
    "non riuscire a risparmiare (spendo tutto ciò che guadagno)", 
    "incremento delle spese mediche", 
    "incremento spese per i figli (ad esempio scuola)"
].includes(userChoice)) {
group = 'B';
} else {
console.log("Case 0: No match found");
}
break;
case 1:
if (["imparare a pianificare le spese in relazione alle entrate", "contenere le spese eccessive che affronto",  "identificare gli sprechi economici", "conoscere i temi fiscali (tasse e imposte)",  "capire quanti soldi mi servono per il mio stile di vita"].includes(userChoice)) {
group = 'A';
} else if (["conoscere i temi fiscali (tasse e imposte)", "migliorare la mia propensione al risparmio", "riuscire a risparmiare", "capire se mi serve un’assicurazione e per che cosa"].includes(userChoice)) {
group = 'B';
}
 
break;/*
case 2:
if (["quando mi trovo in una situazione di crisi finanziaria (debiti, spese impreviste, riduzione dello stipendio, perdita del lavoro di un familiare, poca liquidità)"].includes(userChoice)) {
group = 'A';
} else if (["quando devo prendere una decisione importante come ad esempio comperare una casa"].includes(userChoice)) {
group = 'B';
} else {
group = 'C';
}
break;
 
case 3:
if (["l’assicurazione previene un imprevisto"].includes(userChoice)) {
group = 'A';
} else if (["l’assicurazione annulla gli effetti derivanti dall’imprevisto"].includes(userChoice)) {
group = 'B';
} else {
group = 'C';
}
break;
 
case 4:
if (["vorrei che qualcuno mi dicesse esattamente che cosa fare"].includes(userChoice)) {
group = 'A';
} else if (["voglio poter scegliere da sola / solo, ma vorrei che qualcuno potesse ‘validare’ la mia decisione"].includes(userChoice)) {
group = 'B';
} else {
group = 'C';
}
break;
 
case 5:
if (["sì, sarebbe un sollievo avere una persona con cui poter parlare delle mie difficoltà finanziarie", "non voglio che altri sappiano che ho dei debiti", "non saprei nemmeno che cosa chiedere", "non ho soldi a sufficienza per parlarne"].includes(userChoice)) {
group = 'A';
} else if (["sì, vorrei delle indicazioni su come gestire il mio bilancio personale", "nella mia famiglia non si parla di soldi"].includes(userChoice)) {
group = 'B';
} else {
group = 'C';
}
break;
 
case 6:
if (["anticipo dello stipendio", "prestiti a breve termine", "budgeting e pianificazione"].includes(userChoice)) {
group = 'A';
} else if (["carte di credito e scoperti di conto", "risparmio di denaro", "assicurazioni"].includes(userChoice)) {
group = 'B';
} else {
group = 'C';
}
break;
 
case 7:
if (["non serve leggere, la firma è una pura formalità perché si tratta di una normativa standard, già controllata dagli enti di vigilanza"].includes(userChoice)) {
group = 'A';
} else if (["chiedo che mi vengano raccontati i contenuti del documento, perché tanto anche se leggo non comprendo le clausole che sono scritte con terminologia tecnica che non conosco"].includes(userChoice)) {
group = 'B';
} else {
group = 'C';
}
break;
 
case 8:
if (["fatico ad arrivare a fine mese e potrei avere bisogno di un supporto"].includes(userChoice)) {
group = 'A';
} else if (["sono ok con la gestione dei miei soldi, ma vorrei migliorare", "vorrei saper pianificare meglio"].includes(userChoice)) {
group = 'B';
} else {
group = 'C';
}
break;
 
case 9:
if (["le stesse cose che puoi acquistare oggi", "più di quello che puoi acquistare oggi"].includes(userChoice)) {
group = 'A';
} else if ([""].includes(userChoice)) {
group = 'B';
} else {
group = 'C';
}
break;
 
case 10:
if (["non gestisco le bollette / le gestisce qualcun altro", "non so fare previsioni sulle mie bollette, le gestisco man mano che arrivano"].includes(userChoice)) {
group = 'A';
} else if (["ho una idea approssimativa degli importi e delle date di scadenza"].includes(userChoice)) {
group = 'B';
} else {
group = 'C';
}
break;
 
case 11:
if (["non ho idea di quanto spendo nel mese per cibo, utenze, generi di prima necessità", "se mi arriva una raccomandata tremo", "se capitasse un imprevisto, anche di modica entità, dovrei ricorrere a un prestito"].includes(userChoice)) {
group = 'A';
} else if (["se capitasse un imprevisto, anche di modica entità, dovrei ricorrere a un prestito", "se mi arriva una raccomandata tremo"].includes(userChoice)) {
group = 'B';
} else {
group = 'C';
}
break;
 
case 12:
if ([          "faccio riparare l’auto perché ne ho bisogno, poi andrò all’assicurazione e spiegherò tutto"].includes(userChoice)) {
group = 'A';
} else if (["faccio scrivere sia la mia versione che la sua", "cerco dei testimoni che confermino la mia versione"].includes(userChoice)) {
group = 'B';
} else {
group = 'C';
}
break;
 
case 13:
if (["Il risparmio è importante, ma spesso finisco per spenderlo in altre cose prima di metterlo da parte", "Non riesco a risparmiare nulla, ogni mese arrivo a fine mese a stento"].includes(userChoice)) {
group = 'A';
} else if (["Il risparmio è la mia priorità assoluta, cerco di mettere da parte una parte consistente del mio reddito ogni mese"].includes(userChoice)) {
group = 'B';
} else {
group = 'C';
}
break;
 
case 14:
if (["Voglio ottenere un rendimento sicuro anche se modesto, senza rischiare troppo il capitale iniziale"].includes(userChoice)) {
group = 'A';
} else if (["Voglio investire in modo equilibrato, cercando di ottenere un buon rendimento senza espormi a troppi rischi"].includes(userChoice)) {
group = 'B';
} else {
group = 'C';
}
break;
 
case 15:
if (["Mi affido a prestiti bancari o finanziamenti per coprire il costo dell'n acquisto"].includes(userChoice)) {
group = 'A';
} else if (["Cerco di risparmiare il più possibile in anticipo per pagare l' acquisto in contanti o con un versamento consistente"].includes(userChoice)) {
group = 'B';
} else {
group = 'C';
}
break;
 
case 16:
if (["Non ho molta chiarezza sui miei diritti e responsabilità finanziarie, preferisco fidarmi delle istituzioni o delle persone che mi forniscono servizi finanziari "].includes(userChoice)) {
group = 'A';
} else if (["Sono consapevole dei miei diritti e responsabilità finanziarie di base, ma potrei approfondire meglio l'argomento"].includes(userChoice)) {
group = 'B';
} else {
group = 'C';
}
break;
 
case 17:
if (["Non ho molta chiarezza su cosa significhi diversificare i miei investimenti e non lo considero particolarmente importante"].includes(userChoice)) {
group = 'A';
} else if (["Credo che diversificare i miei investimenti possa essere utile, ma non ho ancora implementato una strategia di diversificazione"].includes(userChoice)) {
group = 'B';
} else {
group = 'C';
}
break;
 
case 18:
if (["Evitare del tutto le questioni finanziarie complesse, sperando che si risolvano da sole nel tempo"].includes(userChoice)) {
group = 'A';
} else if (["Prendere decisioni da solo/sola, anche se significa affrontare qualche difficoltà nel processo decisionale"].includes(userChoice)) {
group = 'B';
} else {
group = 'C';
}
break;
 
case 19:
if (["L'incapacità di far fronte a spese impreviste, come cure mediche costose o riparazioni di emergenza", "La paura di perdere il lavoro o di subire una riduzione del reddito nel tempo"].includes(userChoice)) {
group = 'A';
} else if (["Il timore di non riuscire a raggiungere i miei obiettivi finanziari a lungo termine, come l'acquisto di una casa o il finanziamento dell'istruzione dei figli "].includes(userChoice)) {
group = 'B';
} else {
group = 'C';
}
break;*/
 
        // Add more cases for other question indices as needed
        default:
            console.log("Invalid question index");
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

    currentQuestionIndex++;
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

/*function getHighestScoringGroup() {
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
