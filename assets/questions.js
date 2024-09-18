let questions = [
    {
        text: "1 Cosa ti preoccupa di più, in questo momento, dal punto di vista finanziario? (massimo due risposte)",
        options: [
            "aumento dei prezzi (cibo, energia, ecc)",
            "riduzione del mio reddito familiare",
            "aumento dei costi per gli alloggi (acquisto / affitto)",
            "non riuscire a risparmiare (spendo tutto ciò che guadagno)",
            "rimborsare i debiti (mutui, carte di credito, debiti di altra natura)",
            "fluttuazioni del mercato azionario",
            "incremento delle spese mediche",
            "incremento spese per i figli (ad esempio scuola)",
            "ho intaccato il mio fondo emergenze",
            "paura di non poter affrontare un’emergenza",
            "altre preoccupazioni",
            "nessuna preoccupazione"
        ]
    },
    {
        text: "2 Qual è la tua necessità in ambito finanziario ?(massimo due risposte)",
        options: [
            "imparare a pianificare le spese in relazione alle entrate",
            "contenere le spese eccessive che affronto",
            "identificare gli sprechi economici",
            "conoscere i temi fiscali (tasse e imposte)",
            "migliorare la mia propensione al risparmio",
            "ampliare la conoscenza del settore finanziario",
            "acquisire consapevolezza dei rischi legati agli investimenti",
            "capire quanti soldi mi servono per il mio stile di vita",
            "riuscire a risparmiare",
            "capire se mi serve un’assicurazione e per che cosa"
        ]
    },
    {
        text: "3 Quando potresti avere più bisogno di un supporto per le tue scelte finanziarie? (una risposta)?",
        options: [
            "quando devo prendere una decisione importante come ad esempio comperare una casa",
            "quando mi trovo in una situazione di crisi finanziaria (debiti, spese impreviste, riduzione dello stipendio, perdita del lavoro di un familiare, poca liquidità)",
            "quando riesco a risparmiare una discreta somma, che tengo disponibile sul conto corrente"
        ]
    },
    {
        text: "4 È capitato a chiunque nella vita di vivere un imprevisto con implicazioni economiche inattese,cioè spese non previste, anche di entità considerevole. Le persone si tutelano per situazioni simili con le polizze di assicurazione. Perchè? (una rispost· ",
        options: [
            "l’assicurazione sostiene in totale o in parte le conseguenze economiche dell’imprevisto",
            "l’assicurazione annulla gli effetti derivanti dall’imprevisto",
            "l’assicurazione previene un imprevisto"
        ]
    },
    {
        text: "5 Rispetto alle tue finanze personali, quale frase ti rappresenta? (una rispost· ",
        options: [
            "voglio poter scegliere da sola / solo, ma vorrei che qualcuno potesse ‘validare’ la mia decisione",
            "vorrei avere delle indicazioni sulla cui base poter fare scelte consapevoli",
            "vorrei che qualcuno mi dicesse esattamente che cosa fare"
        ]
    },
    {
        text: "6 Ti sentiresti a tuo agio se dovessi parlare di temi finanziari con un’esperta / un esperto? (scegliere una rispost· ",
        options: [
            "sì, sarebbe un sollievo avere una persona con cui poter parlare delle mie difficoltà finanziarie",
            "non voglio che altri sappiano che ho dei debiti",
            "sì, vorrei delle indicazioni su come gestire il mio bilancio personale",
            "nella mia famiglia non si parla di soldi",
            "non saprei nemmeno che cosa chiedere",
            "non ho soldi a sufficienza per parlarne",
            "non voglio affidare ad altri il controllo",
            "sì vorrei che qualcuno mi aiutasse a capire come valutare i rischi e il potenziale di un investimento"
        ]
    },
    {
        text: "7 Che cosa ti interessa di più? (massimo 2 risposte)",
        options: [
            "anticipo dello stipendio",
            "prestiti a breve termine",
            "carte di credito e scoperti di conto",
            "risparmio di denaro",
            "budgeting e pianificazione",
            "pensione",
            "investimenti",
            "assicurazioni"
        ]
    },
    {
        text: "8 Vuoi aprire un nuovo conto corrente! Hai scelto la banca e ora ti viene richiesto di sottoscrivere il contratto.Come agisci? (una rispost· ",
        options: [
            "leggo tutto il documento, se ci sono cose che non capisco chiedo per ottenere informazioni, solo quando mi è tutto chiaro firmo",
            "non serve leggere, la firma è una pura formalità perché si tratta di una normativa standard, già controllata dagli enti di vigilanza",
            "chiedo che mi vengano raccontati i contenuti del documento, perché tanto anche se leggo non comprendo le clausole che sono scritte con terminologia tecnica che non conosco"
        ]
    },
    {
        text: "9 In quale affermazione ti ritrovi di più? (una rispost· ",
        options: [
            "fatico ad arrivare a fine mese e potrei avere bisogno di un supporto",
            "sono ok con la gestione dei miei soldi, ma vorrei migliorare",
            "vorrei saper pianificare meglio",
            "sono finanziariamente esperto, ma vorrei ottimizzare le mie finanze"
        ]
    },
    {
        text: "10  0 Hai un conto corrente senza spese di gestione. Ricevi interessi con tasso dell’1% annuo. Con l’inflazione al 5% annua, dopo un anno, con il denaro depositato sul tuo conto corrente, sarai in grado di acquistare: (una rispost· ",
        options: [
            "le stesse cose che puoi acquistare oggi",
            "meno di quello che puoi acquistare oggi",
            "più di quello che puoi acquistare oggi"
        ]
    },
    {
        text: "11 Come gestisci le tue utenze? (una rispost· ",
        options: [
            "non gestisco le bollette / le gestisce qualcun altro",
            "non so fare previsioni sulle mie bollette, le gestisco man mano che arrivano",
            "ho una idea approssimativa degli importi e delle date di scadenza",
            "so esattamente quando scadono e ho una conoscenza precisa di quale sarà l’importo delle bollette"
        ]
    },
    {
        text: "12  Come imposti la tua gestione delle finanze? Scegli la frase che ti rappresenta di più (una rispost· ",
        options: [
            "ho una idea esatta delle mie spese ricorrenti, tengo segnate tutte le spese che faccio e le pianifico nel mese ",
            "non ho idea di quanto spendo nel mese per cibo, utenze, generi di prima necessità",
            "se mi arriva una raccomandata tremo",
            "se capitasse un imprevisto, anche di modica entità, dovrei ricorrere a un prestito",
            "conservo tutti gli scontrini e li controllo con l’estratto conto"
        ]
    },
    {
        text: "13  Ti tamponano mentre sei alla guida della tua auto. Proponi di compilare la constatazione amichevole. L’altro automobilista dice che la colpa è tua, mentre tu non la pensi così. Che cosa fai? (una rispost· ",
        options: [
            "cerco dei testimoni che confermino la mia versione",
            "faccio scrivere sia la mia versione che la sua",
            "faccio riparare l’auto perché ne ho bisogno, poi andrò all’assicurazione e spiegherò tutto",
            "compilo il modulo di constatazione amichevole con la mia versione e la mando alla mia assicurazione"
        ]
    },
    {
        text: "14  Quando pianifichi il tuo bilancio mensile, quanto consideri importante il risparmio? (una rispost) ",
        options: [
            "Il risparmio è la mia priorità assoluta, cerco di mettere da parte una parte consistente del mio reddito ogni mese",
            "Il risparmio è importante, ma spesso finisco per spenderlo in altre cose prima di metterlo da parte",
            "Non riesco a risparmiare nulla, ogni mese arrivo a fine mese a stento"
        ]
    },
    {
        text: "15  Quando investi i tuoi soldi, qual è il tuo principale obiettivo? (una rispost) ",
        options: [
            "Voglio ottenere un rendimento sicuro anche se modesto, senza rischiare troppo il capitale iniziale ",
            "Voglio massimizzare il rendimento dei miei investimenti, anche se ciò comporta un certo livello di rischio",
            "Voglio investire in modo equilibrato, cercando di ottenere un buon rendimento senza espormi a troppi rischi"
        ]
    },

    {
        text: "16  Quando ti trovi di fronte a un acquisto importante, come una casa o un auto, come pianifichi di finanziarlo? (una rispost) ",
        options: [
            "Studio attentamente le opzioni di finanziamento disponibili e scelgo quella che mi offre le migliori condizioni in termini di tassi d interesse e flessibilia di pagamento",
            "Mi affido a prestiti bancari o finanziamenti per coprire il costo dell'n acquisto",
            "Cerco di risparmiare il piu possibile in anticipo per pagare l acquisto in contanti o con un versamento consistente"
        ]
    },
    {
        text: "17  Quanto sei consapevole dei tuoi diritti e delle tue responsabilità finanziarie, ad esempio nei confronti delle banche o delle compagnie assicurative? ",
        options: [
            "Non ho molta chiarezza sui miei diritti e responsabilità finanziarie, preferisco fidarmi delle istituzioni o delle persone che mi forniscono servizi finanziari ",
            "Sono consapevole dei miei diritti e responsabilità finanziarie di base, ma potrei approfondire meglio l'argomento",
            "Conosco bene i miei diritti e responsabilità finanziarie e li faccio valere attivamente quando necessario"
        ]
    },
    {
        text: "18  Quando pianifichi il tuo futuro finanziario, quanto consideri importante l' aspetto della diversificazione? (una rispost) ",
        options: [
            "Non ho molta chiarezza su cosa significhi diversificare i miei investimenti e non lo considero particolarmente importante ",
            "Credo che diversificare i miei investimenti possa essere utile, ma non ho ancora implementato una strategia di diversificazione",
            "Ritengo che la diversificazione sia fondamentale per mitigare i rischi e massimizzare i rendimenti dei miei investimenti, quindi la tengo sempre in considerazione quando pianifico il mio futuro finanziario"
        ]
    },
    {
        text: "19  Quando hai a che fare con questioni finanziarie complesse, preferisci: (una rispost· ",
        options: [
            "Prendere decisioni da solo/sola, anche se significa affrontare qualche difficoltà nel processo decisionale",
            "Richiedere il parere di esperti o consulenti finanziari per avere un opinione esterna e prendere decisioni più informate",
            "Evitare del tutto le questioni finanziarie complesse, sperando che si risolvano da sole nel tempo"
        ]
    },
    {
        text: "20  Quando guardi al futuro, quali sono le tue principali preoccupazioni finanziarie? (massimo due risposte) ",
        options: [
            "La possibilita di non avere abbastanza risparmi per il pensionamento",
            "L'incapacita di far fronte a spese impreviste, come cure mediche costose o riparazioni di emergenza",
            "La paura di perdere il lavoro o di subire una riduzione del reddito nel tempo",
            "Il timore di non riuscire a raggiungere i miei obiettivi finanziari a lungo termine, come l'acquisto di una casa o il finanziamento dell'istruzione dei figli"
        ]
    }
    ];