(() => {
  "use strict";

  const rows = [
    // Shared navigation, footer and accessibility text
    ["Vai al contenuto", "Skip to content", "Zum Inhalt springen"],
    ["Studio Tecnico Ferba — Home", "Studio Tecnico Ferba — Home", "Studio Tecnico Ferba — Startseite"],
    ["Studio Tecnico Ferba", "Studio Tecnico Ferba", "Studio Tecnico Ferba"],
    ["Navigazione principale", "Main navigation", "Hauptnavigation"],
    ["Navigazione mobile", "Mobile navigation", "Mobile Navigation"],
    ["Home", "Home", "Start"],
    ["Chi sono", "About", "Über mich"],
    ["Servizi", "Services", "Leistungen"],
    ["Progetti", "Projects", "Projekte"],
    ["Contatti", "Contact", "Kontakt"],
    ["Parliamone", "Let’s talk", "Sprechen wir darüber"],
    ["Menu", "Menu", "Menü"],
    ["FAQ", "FAQ", "FAQ"],
    ["ESPLORA", "EXPLORE", "ENTDECKEN"],
    ["Approfondimenti", "Insights", "Einblicke"],
    ["Domande frequenti", "Frequently asked questions", "Häufige Fragen"],
    ["RESTIAMO IN CONTATTO", "LET’S STAY IN TOUCH", "BLEIBEN WIR IN KONTAKT"],
    ["EMAIL", "EMAIL", "E-MAIL"],
    ["Ricevimento su appuntamento", "Meetings by appointment", "Termine nach Vereinbarung"],
    ["© 2026 Studio Tecnico Ferba", "© 2026 Studio Tecnico Ferba", "© 2026 Studio Tecnico Ferba"],
    ["Dall’agronomia alle tecnologie alimentari.", "From agronomy to food technology.", "Von Agrarwissenschaft bis Lebensmitteltechnologie."],
    ["Studio Tecnico Ferba, studio agroalimentare. Agronomia, tecnologie alimentari e consulenza.", "Studio Tecnico Ferba, agrifood consultancy. Agronomy, food technology and technical advice.", "Studio Tecnico Ferba, Beratung für Agrar- und Lebensmittelwirtschaft. Agrarwissenschaft, Lebensmitteltechnologie und Fachberatung."],
    ["Lingua", "Language", "Sprache"],
    ["Italiano", "Italian", "Italienisch"],
    ["Inglese", "English", "Englisch"],
    ["Tedesco", "German", "Deutsch"],

    // Page titles and search descriptions
    ["Agronomia e tecnologie alimentari a Palermo | Studio Tecnico Ferba", "Agronomy and food technology in Palermo | Studio Tecnico Ferba", "Agrar- und Lebensmitteltechnologie in Palermo | Studio Tecnico Ferba"],
    ["Chi sono | Studio Tecnico Ferba", "About | Studio Tecnico Ferba", "Über mich | Studio Tecnico Ferba"],
    ["Servizi | Studio Tecnico Ferba", "Services | Studio Tecnico Ferba", "Leistungen | Studio Tecnico Ferba"],
    ["Progetti | Studio Tecnico Ferba", "Projects | Studio Tecnico Ferba", "Projekte | Studio Tecnico Ferba"],
    ["Esperienze e progetti | Studio Tecnico Ferba", "Experience and projects | Studio Tecnico Ferba", "Erfahrung und Projekte | Studio Tecnico Ferba"],
    ["Contatti | Studio Tecnico Ferba", "Contact | Studio Tecnico Ferba", "Kontakt | Studio Tecnico Ferba"],
    ["Domande frequenti | Studio Tecnico Ferba", "Frequently asked questions | Studio Tecnico Ferba", "Häufige Fragen | Studio Tecnico Ferba"],
    ["Approfondimenti | Studio Tecnico Ferba", "Insights | Studio Tecnico Ferba", "Einblicke | Studio Tecnico Ferba"],
    ["Pagina non trovata | Studio Tecnico Ferba", "Page not found | Studio Tecnico Ferba", "Seite nicht gefunden | Studio Tecnico Ferba"],
    ["Agronomia e zootecnia | Studio Tecnico Ferba", "Agronomy and livestock | Studio Tecnico Ferba", "Agrarwissenschaft und Tierhaltung | Studio Tecnico Ferba"],
    ["Finanza agevolata | Studio Tecnico Ferba", "Business incentives | Studio Tecnico Ferba", "Fördermittelberatung | Studio Tecnico Ferba"],
    ["HACCP e sicurezza alimentare | Studio Tecnico Ferba", "HACCP and food safety | Studio Tecnico Ferba", "HACCP und Lebensmittelsicherheit | Studio Tecnico Ferba"],
    ["Qualità e sviluppo agroalimentare | Studio Tecnico Ferba", "Agrifood quality and development | Studio Tecnico Ferba", "Qualität und Entwicklung in der Agrar- und Lebensmittelwirtschaft | Studio Tecnico Ferba"],
    ["Ricerca e sviluppo alimentare | Studio Tecnico Ferba", "Food research and development | Studio Tecnico Ferba", "Lebensmittel-Forschung und -Entwicklung | Studio Tecnico Ferba"],
    ["Studio Tecnico Ferba a Palermo: dall’agronomia alle tecnologie alimentari. Consulenza tecnica, HACCP, qualità, finanza agevolata e sviluppo di prodotto con il Dott. Gianluca Ferba.", "Studio Tecnico Ferba in Palermo: from agronomy to food technology. Technical consulting, HACCP, quality, business incentives and food product development with Dr Gianluca Ferba.", "Studio Tecnico Ferba in Palermo: von Agrarwissenschaft bis Lebensmitteltechnologie. Fachberatung, HACCP, Qualität, Fördermittel und Produktentwicklung mit Dr. Gianluca Ferba."],
    ["Operazione Resto al Sud 2.0: avvio di un’attività di consulenza agraria, cofinanziata dall’Unione europea nell’ambito del PN Giovani, donne e lavoro FSE+ 2021–2027.", "Resto al Sud 2.0 operation: launch of an agronomy consultancy, co-funded by the European Union under the National Youth, Women and Work Programme, ESF+ 2021–2027.", "Resto al Sud 2.0: Start einer agrarwirtschaftlichen Beratung, kofinanziert von der Europäischen Union im Rahmen des Nationalen Programms Jugend, Frauen und Arbeit, ESF+ 2021–2027."],

    // Home page
    ["STUDIO TECNICO FERBA", "FERBA TECHNICAL STUDIO", "STUDIO TECNICO FERBA"],
    ["Dall’agronomia", "From agronomy", "Von Agrarwissenschaft"],
    ["alle tecnologie", "to food", "bis zur Lebensmittel-"],
    ["alimentari.", "technology.", "technologie."],
    ["Analisi, consulenza e sviluppo.", "Analysis, consulting and development.", "Analyse, Beratung und Entwicklung."],
    ["Competenze integrate per dare forma", "Integrated expertise to shape", "Integrierte Fachkompetenz für"],
    ["ai progetti della tua impresa.", "your business projects.", "die Projekte Ihres Unternehmens."],
    ["GLI AMBITI DELLO STUDIO", "AREAS OF EXPERTISE", "UNSERE FACHGEBIETE"],
    ["PALERMO · SICILIA", "PALERMO · SICILY", "PALERMO · SIZILIEN"],
    ["Panorama agricolo con nove ambiti di intervento dello studio, descritti nell’elenco seguente.", "Agricultural landscape with nine areas of the studio’s work, described in the list below.", "Agrarlandschaft mit neun Tätigkeitsbereichen des Büros, die in der folgenden Liste beschrieben sind."],
    ["Leggi i 9 ambiti di intervento", "Read about the 9 areas of work", "Die 9 Tätigkeitsbereiche lesen"],
    ["Consulenza agronomica", "Agronomy consulting", "Agrarwissenschaftliche Beratung"],
    ["Progettazione", "Project planning", "Planung"],
    ["Finanza agevolata e bandi", "Business incentives and grants", "Fördermittel und Ausschreibungen"],
    ["Ricerca e sviluppo di prodotti alimentari", "Food product research and development", "Forschung und Entwicklung von Lebensmitteln"],
    ["Analisi del suolo", "Soil analysis", "Bodenanalyse"],
    ["Irrigazione", "Irrigation", "Bewässerung"],
    ["Fertilizzazione", "Fertilisation", "Düngung"],
    ["Difesa fitosanitaria", "Plant health protection", "Pflanzenschutz"],
    ["Agricoltura di precisione e monitoraggio digitale", "Precision agriculture and digital monitoring", "Präzisionslandwirtschaft und digitales Monitoring"],
    ["Sono il", "I’m", "Ich bin"],
    [". Affianco imprese e professionisti nella gestione di processi, qualità e documentazione tecnica. Integro competenze agronomiche e alimentari per affrontare esigenze operative e sviluppare nuovi progetti.", ". I support businesses and professionals with processes, quality and technical documentation. I combine agronomy and food expertise to address operational needs and develop new projects.", ". Ich unterstütze Unternehmen und Fachleute bei Prozessen, Qualität und technischer Dokumentation. Dabei verbinde ich agrar- und lebensmittelwissenschaftliche Kenntnisse, um praktische Anforderungen zu erfüllen und neue Projekte zu entwickeln."],
    ["Ogni incarico parte dall’ascolto e dall’analisi: un percorso concreto, costruito intorno agli obiettivi e alle risorse della tua attività.", "Every assignment begins with listening and analysis: a practical path shaped around your business goals and resources.", "Jeder Auftrag beginnt mit Zuhören und Analyse: ein konkreter Weg, ausgerichtet auf die Ziele und Ressourcen Ihres Unternehmens."],
    ["Conosci il mio approccio", "Learn about my approach", "Lernen Sie meine Arbeitsweise kennen"],
    ["COMPETENZE E SERVIZI", "EXPERTISE AND SERVICES", "KOMPETENZ UND LEISTUNGEN"],
    ["Le competenze al servizio", "Expertise in support of", "Fachkompetenz für"],
    ["della tua impresa.", "your business.", "Ihr Unternehmen."],
    ["Un supporto tecnico concreto, costruito intorno alle esigenze della tua attività.", "Practical technical support shaped around your business needs.", "Konkrete fachliche Unterstützung, abgestimmt auf die Anforderungen Ihres Unternehmens."],
    ["01 / CONSULENZA", "01 / CONSULTING", "01 / BERATUNG"],
    ["Agronomia e zootecnia", "Agronomy and livestock", "Agrarwissenschaft und Tierhaltung"],
    ["Assistenza tecnica alle aziende agricole e agli allevamenti, con attenzione alla produzione, alla gestione e alla tracciabilità.", "Technical support for farms and livestock operations, with a focus on production, management and traceability.", "Fachliche Unterstützung für landwirtschaftliche Betriebe und Tierhaltungen mit Fokus auf Produktion, Betriebsführung und Rückverfolgbarkeit."],
    ["Esplora il servizio", "Explore the service", "Leistung ansehen"],
    ["02 / CONSULENZA", "02 / CONSULTING", "02 / BERATUNG"],
    ["HACCP e sicurezza alimentare", "HACCP and food safety", "HACCP und Lebensmittelsicherheit"],
    ["Piani di autocontrollo, igiene, allergeni e documentazione per accompagnare le attività alimentari nella gestione quotidiana.", "Food safety plans, hygiene, allergens and documentation to support food businesses in their day-to-day work.", "Eigenkontrollpläne, Hygiene, Allergene und Dokumentation zur Unterstützung von Lebensmittelbetrieben im Alltag."],
    ["03 / CONSULENZA", "03 / CONSULTING", "03 / BERATUNG"],
    ["Qualità e sviluppo agroalimentare", "Agrifood quality and development", "Qualität und Entwicklung in der Agrar- und Lebensmittelwirtschaft"],
    ["Qualità, materie prime e processi: una visione integrata per organizzare i documenti e valorizzare le produzioni.", "Quality, raw materials and processes: an integrated approach to documentation and adding value to products.", "Qualität, Rohstoffe und Prozesse: ein integrierter Ansatz für Dokumentation und die Aufwertung von Erzeugnissen."],
    ["NUOVE PROSPETTIVE", "NEW PERSPECTIVES", "NEUE PERSPEKTIVEN"],
    ["Investire con una direzione.", "Invest with direction.", "Mit Richtung investieren."],
    ["Innovare con un metodo.", "Innovate with a method.", "Mit Methode innovieren."],
    ["Dare forma a un progetto significa mettere in relazione risorse, obiettivi e possibilità.", "Shaping a project means bringing resources, goals and opportunities together.", "Ein Projekt zu gestalten bedeutet, Ressourcen, Ziele und Möglichkeiten zusammenzuführen."],
    ["Finanza agevolata", "Business incentives", "Fördermittelberatung"],
    ["Un primo confronto per inquadrare il progetto d’impresa e valutare opportunità di sostegno coerenti con i suoi obiettivi.", "An initial discussion to define the business project and consider support opportunities aligned with its goals.", "Ein erstes Gespräch zur Einordnung des Vorhabens und zur Prüfung passender Fördermöglichkeiten."],
    ["Ricerca e sviluppo alimentare", "Food research and development", "Lebensmittel-Forschung und -Entwicklung"],
    ["Obiettivi, materie prime, processo e qualità: accompagno la definizione di un percorso progettuale per nuovi prodotti alimentari.", "Goals, raw materials, processes and quality: I help shape a development pathway for new food products.", "Ziele, Rohstoffe, Prozesse und Qualität: Ich begleite die Entwicklung eines Projektwegs für neue Lebensmittel."],
    ["IL METODO", "THE METHOD", "DIE METHODE"],
    ["Prima capire.", "First, understand.", "Zuerst verstehen."],
    ["Poi costruire il percorso.", "Then, build a path.", "Dann den Weg gestalten."],
    ["La consulenza parte dalla realtà dell’impresa, dalle sue priorità e dalle risorse disponibili.", "Consulting starts with the business as it is: its priorities and available resources.", "Die Beratung beginnt mit der Realität des Unternehmens, seinen Prioritäten und den verfügbaren Ressourcen."],
    ["Ascolto", "Listening", "Zuhören"],
    ["Comprendo la tua attività, gli obiettivi e i vincoli del progetto.", "I learn about your business, goals and project constraints.", "Ich erfasse Ihr Unternehmen, Ihre Ziele und die Rahmenbedingungen des Projekts."],
    ["Analisi", "Analysis", "Analyse"],
    ["Individuo le priorità tecniche e la documentazione utile.", "I identify technical priorities and useful documentation.", "Ich ermittle fachliche Prioritäten und relevante Unterlagen."],
    ["Supporto", "Support", "Unterstützung"],
    ["Definisco con te un percorso proporzionato alle esigenze dell’impresa.", "Together, we define a path suited to the business’s needs.", "Gemeinsam legen wir einen Weg fest, der zum Bedarf des Unternehmens passt."],
    ["Dott. Gianluca Ferba · IL PROFESSIONISTA", "Dr Gianluca Ferba · THE PROFESSIONAL", "Dr. Gianluca Ferba · DER FACHMANN"],
    ["Una visione d’insieme.", "A broad perspective.", "Das Ganze im Blick."],
    ["Un interlocutore diretto.", "A direct point of contact.", "Ein direkter Ansprechpartner."],
    ["La mia formazione unisce scienze agrarie e tecnologie alimentari. Porto questa visione integrata nel lavoro con le imprese, con attenzione a qualità, conformità, tracciabilità e innovazione.", "My background combines agricultural sciences and food technology. I bring this integrated perspective to work with businesses, with a focus on quality, compliance, traceability and innovation.", "Meine Ausbildung verbindet Agrarwissenschaften und Lebensmitteltechnologie. Diese integrierte Perspektive bringe ich in die Zusammenarbeit mit Unternehmen ein – mit Blick auf Qualität, Konformität, Rückverfolgbarkeit und Innovation."],
    ["LE IMPRESE CON CUI LAVORO", "WHO I WORK WITH", "MIT WEM ICH ARBEITE"],
    ["Esigenze diverse.", "Different needs.", "Unterschiedliche Anforderungen."],
    ["Lo stesso rigore tecnico.", "The same technical rigour.", "Dieselbe fachliche Sorgfalt."],
    ["Aziende agricole", "Farms", "Landwirtschaftliche Betriebe"],
    ["Allevamenti", "Livestock farms", "Tierhaltungen"],
    ["Cereali e farine", "Cereals and flours", "Getreide und Mehle"],
    ["Lattiero-caseario", "Dairy", "Milchwirtschaft"],
    ["Trasformazione alimentare", "Food processing", "Lebensmittelverarbeitung"],
    ["Ristorazione", "Food service", "Gastronomie"],
    ["Filiere vitivinicole", "Wine supply chains", "Weinwirtschaftliche Wertschöpfungsketten"],
    ["Cooperative e consorzi", "Cooperatives and consortia", "Genossenschaften und Konsortien"],
    ["DOMANDE FREQUENTI", "FREQUENTLY ASKED QUESTIONS", "HÄUFIGE FRAGEN"],
    ["Partiamo dalle", "Let’s start with", "Beginnen wir mit"],
    ["prime risposte.", "the first answers.", "den ersten Antworten."],
    ["Tutte le domande", "All questions", "Alle Fragen"],

    // About page
    ["/ IL PROFESSIONISTA", "/ THE PROFESSIONAL", "/ DER FACHMANN"],
    ["IL PROFESSIONISTA", "THE PROFESSIONAL", "DER FACHMANN"],
    ["Dott. Gianluca Ferba.", "Dr Gianluca Ferba.", "Dr. Gianluca Ferba."],
    ["Consulenza agronomica e agroalimentare, con una visione che collega produzione, trasformazione e qualità.", "Agronomy and agrifood consulting, connecting production, processing and quality.", "Agrar- und Lebensmittelberatung mit einer Perspektive, die Produktion, Verarbeitung und Qualität verbindet."],
    ["IL MIO APPROCCIO", "MY APPROACH", "MEINE ARBEITSWEISE"],
    ["Vicino all’impresa.", "Close to the business.", "Nah am Unternehmen."],
    ["Dentro i suoi processi.", "Embedded in its processes.", "Mitten in seinen Prozessen."],
    ["La mia formazione unisce scienze agrarie e tecnologie alimentari. Mi occupo di supportare le imprese nelle sfide che collegano produzione agricola, trasformazione, qualità e conformità alimentare.", "My background combines agricultural sciences and food technology. I support businesses in challenges that connect agricultural production, processing, quality and food compliance.", "Meine Ausbildung verbindet Agrarwissenschaften und Lebensmitteltechnologie. Ich unterstütze Unternehmen bei Herausforderungen an der Schnittstelle von landwirtschaftlicher Erzeugung, Verarbeitung, Qualität und Lebensmittelkonformität."],
    ["Credo in una consulenza capace di collegare la realtà operativa dell’impresa agli adempimenti e alle opportunità di sviluppo. Parto dall’ascolto, analizzo problemi concreti e costruisco percorsi sostenibili per le risorse e gli obiettivi del cliente.", "I believe consulting should connect the day-to-day reality of a business with its obligations and opportunities for growth. I listen first, analyse practical issues and develop paths that fit the client’s resources and goals.", "Beratung sollte die betriebliche Realität mit Pflichten und Entwicklungsmöglichkeiten verbinden. Ich höre zunächst zu, analysiere konkrete Probleme und entwickle Wege, die zu den Ressourcen und Zielen des Kunden passen."],
    ["Lavoro prevalentemente a Palermo e in Sicilia. Il confronto diretto permette di definire le attività e le modalità più adatte a ogni incarico.", "I work mainly in Palermo and Sicily. Direct discussion helps define the right activities and approach for each assignment.", "Ich arbeite hauptsächlich in Palermo und Sizilien. Das persönliche Gespräch hilft, die passenden Leistungen und Vorgehensweisen für jeden Auftrag festzulegen."],
    ["Scopri le aree di consulenza", "Explore consulting areas", "Beratungsbereiche ansehen"],
    ["IL PROSSIMO PASSO", "THE NEXT STEP", "DER NÄCHSTE SCHRITT"],
    ["Ogni progetto comincia", "Every project begins", "Jedes Projekt beginnt"],
    ["da un confronto.", "with a conversation.", "mit einem Gespräch."],
    ["Raccontami la tua attività e l’obiettivo che vuoi raggiungere.", "Tell me about your business and the goal you want to achieve.", "Erzählen Sie mir von Ihrem Unternehmen und Ihrem Ziel."],
    ["Richiedi una consulenza", "Request a consultation", "Beratung anfragen"],
    ["RICHIEDI UNA CONSULENZA", "REQUEST A CONSULTATION", "BERATUNG ANFRAGEN"],

    // Contact page
    ["/ CONTATTI", "/ CONTACT", "/ KONTAKT"],
    ["CONTATTI", "CONTACT", "KONTAKT"],
    ["Parliamo della", "Let’s talk about", "Sprechen wir über"],
    ["tua prossima sfida.", "your next challenge.", "Ihre nächste Herausforderung."],
    ["Hai un’esigenza tecnica o un progetto da sviluppare? Raccontami la tua attività, la zona in cui operi e il supporto che stai cercando.", "Do you have a technical need or a project to develop? Tell me about your business, where you operate and the support you are looking for.", "Haben Sie eine fachliche Frage oder ein Projekt, das Sie entwickeln möchten? Erzählen Sie mir von Ihrem Unternehmen, Ihrem Standort und der gewünschten Unterstützung."],
    ["EMAIL DI CONTATTO", "CONTACT EMAIL", "KONTAKT-E-MAIL"],
    ["Scrivi allo studio", "Email the studio", "Schreiben Sie dem Büro"],
    ["COME PREPARARE IL PRIMO CONTATTO", "PREPARING FOR YOUR FIRST CONTACT", "SO BEREITEN SIE DIE ERSTE KONTAKTAUFNAHME VOR"],
    ["Qualche informazione", "A little information", "Ein paar Informationen"],
    ["per partire bene.", "to get started.", "für einen guten Start."],
    ["Nella tua email puoi indicare il settore, il comune in cui operi, il servizio di interesse e una breve descrizione dell’obiettivo. Per il primo contatto non occorrono documenti riservati.", "In your email, you can include your sector, town, the service you are interested in and a short description of your goal. Please do not send confidential documents with your first message.", "In Ihrer E-Mail können Sie Branche, Gemeinde, gewünschte Leistung und eine kurze Beschreibung Ihres Ziels angeben. Für die erste Kontaktaufnahme sind keine vertraulichen Unterlagen erforderlich."],
    ["Dott. Gianluca Ferba — Studio Tecnico Ferba", "Dr Gianluca Ferba — Studio Tecnico Ferba", "Dr. Gianluca Ferba — Studio Tecnico Ferba"],
    ["Palermo e Sicilia · Ricevimento su appuntamento.", "Palermo and Sicily · Meetings by appointment.", "Palermo und Sizilien · Termine nach Vereinbarung."],
    ["Ulteriori aree e modalità di collaborazione su richiesta.", "Other locations and ways of working together are available on request.", "Weitere Einsatzgebiete und Formen der Zusammenarbeit auf Anfrage."],

    // FAQ page
    ["/ FAQ", "/ FAQ", "/ FAQ"],
    ["Le tue domande.", "Your questions.", "Ihre Fragen."],
    ["Le prime risposte.", "The first answers.", "Die ersten Antworten."],
    ["Orientarsi tra servizi, ambiti di intervento e modalità di collaborazione.", "An overview of services, areas of work and ways of collaborating.", "Ein Überblick über Leistungen, Tätigkeitsbereiche und die Zusammenarbeit."],
    ["A quali imprese ti rivolgi?", "What kinds of businesses do you work with?", "Mit welchen Unternehmen arbeiten Sie?"],
    ["+", "+", "+"],
    ["Affianco aziende agricole e zootecniche, laboratori, imprese di trasformazione, cooperative, consorzi e operatori della ristorazione.", "I work with farms and livestock businesses, laboratories, food processors, cooperatives, consortia and food service operators.", "Ich unterstütze landwirtschaftliche Betriebe und Tierhaltungen, Labore, Verarbeitungsunternehmen, Genossenschaften, Konsortien und Gastronomiebetriebe."],
    ["Operi solo a Palermo?", "Do you only work in Palermo?", "Arbeiten Sie nur in Palermo?"],
    ["Lavoro prevalentemente a Palermo e in Sicilia. Ulteriori aree e modalità di collaborazione si valutano su richiesta.", "I work mainly in Palermo and Sicily. Other locations and ways of working together can be discussed on request.", "Ich arbeite hauptsächlich in Palermo und Sizilien. Weitere Einsatzgebiete und Formen der Zusammenarbeit können auf Anfrage besprochen werden."],
    ["Puoi aiutarmi con il manuale HACCP?", "Can you help me with an HACCP plan?", "Können Sie mir mit dem HACCP-Konzept helfen?"],
    ["Offro supporto per autocontrollo alimentare, procedure e documentazione, in relazione alla tipologia di attività e ai requisiti applicabili.", "I support food safety self-monitoring, procedures and documentation according to the type of business and applicable requirements.", "Ich unterstütze bei Eigenkontrolle, Verfahren und Dokumentation entsprechend der Betriebsart und den geltenden Anforderungen."],
    ["Ti occupi di etichettatura e tracciabilità?", "Do you work on labelling and traceability?", "Bieten Sie Unterstützung bei Kennzeichnung und Rückverfolgbarkeit?"],
    ["Sì. Informazioni al consumatore, allergeni, etichette e tracciabilità rientrano nelle aree di consulenza. Gli adempimenti specifici si valutano caso per caso.", "Yes. Consumer information, allergens, labels and traceability are among my consulting areas. Specific requirements are assessed case by case.", "Ja. Verbraucherinformationen, Allergene, Kennzeichnung und Rückverfolgbarkeit gehören zu meinen Beratungsbereichen. Die konkreten Anforderungen werden im Einzelfall geprüft."],
    ["Come si avvia un progetto di sviluppo alimentare?", "How do you start a food development project?", "Wie beginnt ein Projekt zur Entwicklung von Lebensmitteln?"],
    ["Si parte dall’idea, dagli obiettivi e dalle risorse disponibili. Attività, prove e competenze specialistiche vengono concordate per il singolo incarico.", "It starts with the idea, goals and available resources. Activities, trials and specialist expertise are agreed for each assignment.", "Ausgangspunkt sind Idee, Ziele und verfügbare Ressourcen. Maßnahmen, Versuche und Fachkompetenzen werden für jeden Auftrag einzeln vereinbart."],
    ["È garantito l’accesso a contributi?", "Is access to grants guaranteed?", "Ist der Zugang zu Fördermitteln garantiert?"],
    ["No. Ammissibilità, graduatorie e concessioni dipendono dalle regole e dalle decisioni dei soggetti competenti. Il supporto disponibile va definito in base al progetto.", "No. Eligibility, rankings and awards depend on the rules and decisions of the competent authorities. The available support must be defined for each project.", "Nein. Förderfähigkeit, Ranglisten und Bewilligungen hängen von den Regeln und Entscheidungen der zuständigen Stellen ab. Die mögliche Unterstützung wird projektbezogen festgelegt."],
    ["Come posso fissare un incontro?", "How can I arrange a meeting?", "Wie kann ich einen Termin vereinbaren?"],
    ["Puoi scrivermi via email. Ricevo su appuntamento.", "You can email me. Meetings are by appointment.", "Sie können mir eine E-Mail schreiben. Termine erfolgen nach Vereinbarung."],

    // Insights page
    ["/ APPROFONDIMENTI", "/ INSIGHTS", "/ EINBLICKE"],
    ["APPROFONDIMENTI", "INSIGHTS", "EINBLICKE"],
    ["Conoscere per", "Knowledge helps you", "Wissen, um"],
    ["scegliere meglio.", "make better choices.", "besser zu entscheiden."],
    ["Agronomia, sicurezza alimentare, qualità e innovazione: uno spazio dedicato alle esigenze concrete delle imprese.", "Agronomy, food safety, quality and innovation: insights for the practical needs of businesses.", "Agrarwissenschaft, Lebensmittelsicherheit, Qualität und Innovation: Einblicke zu den konkreten Anforderungen von Unternehmen."],
    ["SPAZIO EDITORIALE", "EDITORIAL SPACE", "REDAKTION"],
    ["I prossimi approfondimenti,", "Upcoming insights,", "Weitere Einblicke"],
    ["qui.", "will appear here.", "finden Sie hier."],
    ["I contenuti sono in preparazione. Nel frattempo puoi esplorare i servizi o contattarmi per un’esigenza specifica.", "Articles are in preparation. In the meantime, explore the services or get in touch about a specific need.", "Die Beiträge werden vorbereitet. In der Zwischenzeit können Sie sich die Leistungen ansehen oder mich mit einem konkreten Anliegen kontaktieren."],
    ["Esplora i servizi", "Explore services", "Leistungen ansehen"],

    // Projects page and EU funded operation
    ["/ ESPERIENZE E PROGETTI", "/ EXPERIENCE AND PROJECTS", "/ ERFAHRUNG UND PROJEKTE"],
    ["ESPERIENZE E PROGETTI", "EXPERIENCE AND PROJECTS", "ERFAHRUNG UND PROJEKTE"],
    ["Ogni impresa,", "Every business,", "Jedes Unternehmen"],
    ["un contesto diverso.", "a different context.", "hat einen eigenen Kontext."],
    ["Il lavoro tecnico parte dalla comprensione della produzione, dei processi e dell’organizzazione aziendale.", "Technical work begins with understanding production, processes and business organisation.", "Fachliche Arbeit beginnt mit dem Verständnis von Produktion, Prozessen und Betriebsorganisation."],
    ["INIZIATIVA SOSTENUTA DA RESTO AL SUD 2.0", "INITIATIVE SUPPORTED BY RESTO AL SUD 2.0", "VON RESTO AL SUD 2.0 GEFÖRDERTE INITIATIVE"],
    ["Avvio e svolgimento di un’attività professionale di consulenza agraria.", "Launch and operation of a professional agronomy consultancy.", "Aufbau und Durchführung einer beruflichen Tätigkeit in der Agrarberatung."],
    ["Blocco dei loghi istituzionali", "Institutional logos", "Institutionelle Logos"],
    ["Coesione Italia 21–27 — Giovani, donne e lavoro.", "Cohesion Italy 21–27 — Youth, women and work.", "Kohäsion Italien 21–27 — Jugend, Frauen und Arbeit."],
    ["Emblema dell’Unione europea e dicitura Cofinanziato dall’Unione europea.", "European Union emblem and the wording “Cofinanziato dall’Unione europea”.", "Emblem der Europäischen Union und der Wortlaut „Cofinanziato dall’Unione europea“."],
    ["Ministero del Lavoro e delle Politiche Sociali.", "Ministry of Labour and Social Policies.", "Ministerium für Arbeit und Sozialpolitik."],
    ["Resto al Sud 2.0 — Due punto zero.", "Resto al Sud 2.0 — Two point zero.", "Resto al Sud 2.0 — Zwei Punkt Null."],
    ["Cofinanziato dall’Unione europea", "Cofinanziato dall’Unione europea", "Cofinanziato dall’Unione europea"],
    ["Programma Nazionale Giovani, donne e lavoro", "National Youth, Women and Work Programme", "Nationales Programm Jugend, Frauen und Arbeit"],
    ["Fondo Sociale Europeo Plus (FSE+) 2021–2027", "European Social Fund Plus (ESF+) 2021–2027", "Europäischer Sozialfonds Plus (ESF+) 2021–2027"],
    ["Finalità", "Purpose", "Zweck"],
    ["L’operazione sostiene l’avvio e lo svolgimento di un’attività professionale di consulenza in ambito agrario, riconducibile al codice ATECO 74.99.12.", "The operation supports the launch and operation of a professional consultancy in the agricultural sector, classified under ATECO code 74.99.12.", "Die Maßnahme unterstützt den Aufbau und die Durchführung einer beruflichen Beratungstätigkeit im Agrarbereich gemäß ATECO-Code 74.99.12."],
    ["Risultati attesi", "Expected results", "Erwartete Ergebnisse"],
    ["Avviare un servizio di supporto tecnico in agronomia e zootecnia, analisi del suolo, irrigazione, fertilizzazione, difesa fitosanitaria e agricoltura di precisione, a beneficio delle aziende agricole e degli operatori della filiera.", "To launch a technical support service in agronomy and livestock, soil analysis, irrigation, fertilisation, plant health protection and precision agriculture, serving farms and supply chain operators.", "Aufbau eines technischen Unterstützungsangebots in Agrarwissenschaft und Tierhaltung, Bodenanalyse, Bewässerung, Düngung, Pflanzenschutz und Präzisionslandwirtschaft für landwirtschaftliche Betriebe und Akteure der Wertschöpfungskette."],
    ["Attività", "Activity", "Tätigkeit"],
    ["Consulenza agraria fornita da agrotecnici · ATECO 74.99.12", "Agricultural consulting provided by agrotechnicians · ATECO 74.99.12", "Agrarberatung durch Agrartechniker · ATECO 74.99.12"],
    ["CUP", "Project code", "Projektcode"],
    ["Dott. Gianluca Ferba", "Dr Gianluca Ferba", "Dr. Gianluca Ferba"],
    ["Palermo · Sicilia", "Palermo · Sicily", "Palermo · Sizilien"],

    // Service pages
    ["/ SERVIZI", "/ SERVICES", "/ LEISTUNGEN"],
    ["Consulenza specialistica.", "Specialist consulting.", "Fachberatung."],
    ["Soluzioni per la tua attività.", "Solutions for your business.", "Lösungen für Ihr Unternehmen."],
    ["Cinque aree di consulenza: agronomia, sicurezza alimentare, qualità, finanza agevolata e sviluppo di prodotto. Il percorso si definisce in base all’attività, agli obiettivi e al contesto.", "Five areas of consulting: agronomy, food safety, quality, business incentives and product development. The approach is shaped around the business, its goals and its context.", "Fünf Beratungsbereiche: Agrarwissenschaft, Lebensmittelsicherheit, Qualität, Fördermittel und Produktentwicklung. Der Weg richtet sich nach Tätigkeit, Zielen und Kontext."],
    ["04 / CONSULENZA", "04 / CONSULTING", "04 / BERATUNG"],
    ["05 / CONSULENZA", "05 / CONSULTING", "05 / BERATUNG"],
    ["/ SERVIZI / AGRONOMIA E ZOOTECNIA", "/ SERVICES / AGRONOMY AND LIVESTOCK", "/ LEISTUNGEN / AGRARWISSENSCHAFT UND TIERHALTUNG"],
    ["SERVIZI / AGRONOMIA E ZOOTECNIA", "SERVICES / AGRONOMY AND LIVESTOCK", "LEISTUNGEN / AGRARWISSENSCHAFT UND TIERHALTUNG"],
    ["IL PERCORSO", "THE APPROACH", "DER WEG"],
    ["Competenze tecniche per la produzione.", "Technical expertise for production.", "Fachkompetenz für die Produktion."],
    ["Le attività vengono definite in funzione del settore, degli obiettivi e del perimetro dell’incarico.", "Activities are defined according to the sector, objectives and scope of the assignment.", "Die Leistungen werden entsprechend Branche, Zielen und Umfang des Auftrags festgelegt."],
    ["A chi mi rivolgo", "Who I work with", "Für wen ich arbeite"],
    ["Aziende agricole, allevamenti, cooperative e operatori della produzione primaria.", "Farms, livestock operations, cooperatives and primary production operators.", "Landwirtschaftliche Betriebe, Tierhaltungen, Genossenschaften und Akteure der Primärproduktion."],
    ["AMBITI DI CONFRONTO", "AREAS OF WORK", "TÄTIGKEITSBEREICHE"],
    ["Assistenza tecnica agli allevamenti e benessere animale, nei limiti dell’incarico", "Technical support for livestock operations and animal welfare, within the agreed scope", "Fachliche Unterstützung für Tierhaltungen und Tierwohl im vereinbarten Auftragsrahmen"],
    ["Valorizzazione delle filiere cerealicole e dei prodotti locali", "Adding value to cereal supply chains and local products", "Aufwertung von Getreidewertschöpfungsketten und lokalen Erzeugnissen"],
    ["Tracciabilità d’origine e supporto documentale", "Origin traceability and documentation support", "Herkunftsrückverfolgbarkeit und Dokumentationshilfe"],
    ["Esplora anche", "Explore also", "Entdecken Sie auch"],
    ["/ SERVIZI / FINANZA AGEVOLATA", "/ SERVICES / BUSINESS INCENTIVES", "/ LEISTUNGEN / FÖRDERMITTELBERATUNG"],
    ["SERVIZI / FINANZA AGEVOLATA", "SERVICES / BUSINESS INCENTIVES", "LEISTUNGEN / FÖRDERMITTELBERATUNG"],
    ["Dare una direzione agli investimenti.", "Give your investment a clear direction.", "Investitionen eine klare Richtung geben."],
    ["Misure e prestazioni specifiche si concordano in fase preliminare. Non è possibile garantire ammissibilità, concessione di contributi o tempi di erogazione.", "Specific measures and services are agreed during the initial phase. Eligibility, grant awards and payment times cannot be guaranteed.", "Konkrete Maßnahmen und Leistungen werden in der Vorbereitungsphase vereinbart. Förderfähigkeit, Bewilligung und Auszahlungsfristen können nicht garantiert werden."],
    ["Imprese agricole e agroalimentari che valutano investimenti, crescita o innovazione.", "Agricultural and food businesses considering investment, growth or innovation.", "Landwirtschafts- und Lebensmittelunternehmen, die Investitionen, Wachstum oder Innovation prüfen."],
    ["Esigenze e obiettivi dell’investimento", "Investment needs and objectives", "Bedarf und Ziele der Investition"],
    ["Prima ricognizione delle opportunità potenzialmente pertinenti", "Initial review of potentially relevant opportunities", "Erste Prüfung potenziell relevanter Fördermöglichkeiten"],
    ["Informazioni necessarie per una valutazione preliminare", "Information needed for an initial assessment", "Informationen für eine erste Einschätzung"],
    ["Raccordo tra progetto tecnico e percorso di agevolazione, secondo l’incarico concordato", "Aligning the technical project with an incentive pathway, as agreed in the assignment", "Abstimmung zwischen technischem Projekt und Förderweg gemäß vereinbartem Auftrag"],
    ["/ SERVIZI / HACCP E SICUREZZA ALIMENTARE", "/ SERVICES / HACCP AND FOOD SAFETY", "/ LEISTUNGEN / HACCP UND LEBENSMITTELSICHERHEIT"],
    ["SERVIZI / HACCP E SICUREZZA ALIMENTARE", "SERVICES / HACCP AND FOOD SAFETY", "LEISTUNGEN / HACCP UND LEBENSMITTELSICHERHEIT"],
    ["Procedure chiare. Lavoro più consapevole.", "Clear procedures. More confident work.", "Klare Verfahren. Mehr Sicherheit im Arbeitsalltag."],
    ["Laboratori, trasformatori, imprese alimentari e attività di ristorazione.", "Laboratories, processors, food businesses and food service operators.", "Labore, Verarbeiter, Lebensmittelunternehmen und Gastronomiebetriebe."],
    ["Piani di autocontrollo e manuali HACCP", "Food safety plans and HACCP manuals", "Eigenkontrollpläne und HACCP-Handbücher"],
    ["Organizzazione di procedure e registri", "Organisation of procedures and records", "Organisation von Verfahren und Aufzeichnungen"],
    ["Gestione degli allergeni e informazioni in etichetta", "Allergen management and label information", "Allergenmanagement und Kennzeichnungsangaben"],
    ["Tracciabilità e valutazione dei fornitori", "Traceability and supplier assessment", "Rückverfolgbarkeit und Lieferantenbewertung"],
    ["/ SERVIZI / QUALITÀ E SVILUPPO AGROALIMENTARE", "/ SERVICES / AGRIFOOD QUALITY AND DEVELOPMENT", "/ LEISTUNGEN / QUALITÄT UND ENTWICKLUNG IN DER AGRAR- UND LEBENSMITTELWIRTSCHAFT"],
    ["SERVIZI / QUALITÀ E SVILUPPO AGROALIMENTARE", "SERVICES / AGRIFOOD QUALITY AND DEVELOPMENT", "LEISTUNGEN / QUALITÄT UND ENTWICKLUNG IN DER AGRAR- UND LEBENSMITTELWIRTSCHAFT"],
    ["Il valore di una filiera ben costruita.", "The value of a well-built supply chain.", "Der Wert einer gut aufgebauten Wertschöpfungskette."],
    ["Imprese di trasformazione, filiere cerealicole, lattiero-casearie e vitivinicole.", "Processors and cereal, dairy and wine supply chains.", "Verarbeitungsunternehmen sowie Getreide-, Milch- und Weinwirtschaft."],
    ["Organizzazione della documentazione di qualità", "Organisation of quality documentation", "Organisation der Qualitätsdokumentation"],
    ["Valorizzazione delle materie prime e delle produzioni tipiche", "Adding value to raw materials and traditional products", "Aufwertung von Rohstoffen und typischen Erzeugnissen"],
    ["Etichette, schede tecniche e tracciabilità", "Labels, technical data sheets and traceability", "Etiketten, technische Datenblätter und Rückverfolgbarkeit"],
    ["Supporto al miglioramento delle procedure e dei disciplinari tecnici", "Support to improve procedures and technical specifications", "Unterstützung bei der Verbesserung von Verfahren und technischen Spezifikationen"],
    ["/ SERVIZI / RICERCA E SVILUPPO ALIMENTARE", "/ SERVICES / FOOD RESEARCH AND DEVELOPMENT", "/ LEISTUNGEN / LEBENSMITTEL-FORSCHUNG UND -ENTWICKLUNG"],
    ["SERVIZI / RICERCA E SVILUPPO ALIMENTARE", "SERVICES / FOOD RESEARCH AND DEVELOPMENT", "LEISTUNGEN / LEBENSMITTEL-FORSCHUNG UND -ENTWICKLUNG"],
    ["Dall’idea, un percorso di sviluppo.", "From idea to development.", "Von der Idee zur Entwicklung."],
    ["Test microbiologici, prove sensoriali, shelf-life e competenze specialistiche non sono inclusi automaticamente: vanno definiti per il singolo incarico e, quando necessario, affidati a soggetti abilitati.", "Microbiological tests, sensory trials, shelf-life studies and specialist expertise are not automatically included. They must be defined for each assignment and, where necessary, carried out by qualified providers.", "Mikrobiologische Tests, sensorische Prüfungen, Haltbarkeitsstudien und spezielle Fachleistungen sind nicht automatisch enthalten. Sie werden für jeden Auftrag festgelegt und bei Bedarf qualifizierten Stellen übertragen."],
    ["Laboratori, trasformatori e aziende agricole che vogliono sviluppare o migliorare un prodotto.", "Laboratories, processors and farms looking to develop or improve a product.", "Labore, Verarbeiter und landwirtschaftliche Betriebe, die ein Produkt entwickeln oder verbessern möchten."],
    ["Analisi dell’idea e degli obiettivi tecnico-produttivi", "Analysis of the idea and technical and production goals", "Analyse der Idee sowie der technischen und produktionsbezogenen Ziele"],
    ["Impostazione dei requisiti e delle attività progettuali", "Definition of project requirements and activities", "Festlegung der Anforderungen und Projektaktivitäten"],
    ["Studio delle materie prime e dei vincoli di filiera", "Study of raw materials and supply chain constraints", "Untersuchung der Rohstoffe und Rahmenbedingungen der Wertschöpfungskette"],
    ["Coordinamento degli aspetti di qualità e conformità pertinenti.", "Coordination of relevant quality and compliance aspects.", "Koordination relevanter Aspekte zu Qualität und Konformität."],
  ];

  const translations = {
    en: Object.fromEntries(rows.map(([it, en]) => [it, en])),
    de: Object.fromEntries(rows.map(([it, en, de]) => [it, de])),
  };
  const supported = ["it", "en", "de"];
  const storageKey = "ferba-language";

  function browserLanguage() {
    const preferences = navigator.languages?.length ? navigator.languages : [navigator.language];
    for (const preference of preferences) {
      const code = String(preference || "").toLowerCase().split(/[-_]/)[0];
      if (supported.includes(code)) return code;
    }
    return "it";
  }

  function normalize(value) {
    return String(value || "").trim().replace(/\s+/g, " ");
  }

  const textSources = new Map();
  const attributeSources = new Map();
  const translatableAttributes = ["alt", "aria-label", "title", "placeholder"];

  function applyLanguage(language, rememberChoice = false) {
    const code = supported.includes(language) ? language : "it";
    document.documentElement.lang = code;

    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) {
      if (!textSources.has(node)) textSources.set(node, node.nodeValue);
      const original = textSources.get(node);
      const key = normalize(original);
      const translated = translations[code]?.[key];
      if (code === "it" || !translated) {
        node.nodeValue = original;
      } else {
        const leading = original.match(/^\s*/)?.[0] || "";
        const trailing = original.match(/\s*$/)?.[0] || "";
        node.nodeValue = `${leading}${translated}${trailing}`;
      }
    }

    for (const element of document.querySelectorAll("*") ) {
      for (const attribute of translatableAttributes) {
        if (!element.hasAttribute(attribute)) continue;
        if (!attributeSources.has(element)) attributeSources.set(element, {});
        const sources = attributeSources.get(element);
        if (!(attribute in sources)) sources[attribute] = element.getAttribute(attribute);
        const original = sources[attribute];
        const translated = translations[code]?.[normalize(original)];
        element.setAttribute(attribute, code !== "it" && translated ? translated : original);
      }
    }

    document.querySelectorAll(".language-switcher button").forEach((button) => {
      const active = button.dataset.language === code;
      button.setAttribute("aria-pressed", String(active));
      button.classList.toggle("is-active", active);
    });

    if (rememberChoice) {
      try {
        localStorage.setItem(storageKey, code);
      } catch (_) {
        // The language still works for this visit when browser storage is unavailable.
      }
    }
  }

  function addLanguageSwitcher() {
    const header = document.querySelector(".header");
    if (!header || header.querySelector(".language-switcher")) return;

    const group = document.createElement("div");
    group.className = "language-switcher";
    group.setAttribute("role", "group");
    group.setAttribute("aria-label", "Lingua");
    for (const [code, label] of [["it", "Italiano"], ["en", "Inglese"], ["de", "Tedesco"]]) {
      const button = document.createElement("button");
      button.type = "button";
      button.dataset.language = code;
      button.textContent = code.toUpperCase();
      button.setAttribute("aria-label", label);
      button.addEventListener("click", () => applyLanguage(code, true));
      group.append(button);
    }

    const cta = header.querySelector(".header-cta");
    if (cta) header.insertBefore(group, cta);
    else header.append(group);
  }

  let initial = browserLanguage();
  try {
    const saved = localStorage.getItem(storageKey);
    if (supported.includes(saved)) initial = saved;
  } catch (_) {
    // Use the browser's preferred language when storage is unavailable.
  }

  addLanguageSwitcher();
  applyLanguage(initial);
})();
