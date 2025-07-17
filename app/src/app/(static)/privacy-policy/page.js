'use client'

import './style.css';
import { useTranslations } from "next-intl"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function PrivacyPolicy() {
    const t = useTranslations();
    const [locale, setLocale] = useState('');
    const router = useRouter();
    useEffect(() => {
        const cookieLocale = document.cookie.split('; ').find((row) => row.startsWith('MYNEXTAPP_LOCALE='))?.split('=')[1];
        if (cookieLocale) {
            setLocale(cookieLocale);
        } else {
            const browserLocale = navigator.language.slice(0, 2);
            setLocale(browserLocale);
            document.cookie = `MYNEXTAPP_LOCALE=${browserLocale};`;
            window.location.reload();
        }
    }, [router]);

    let appName = process.env.NEXT_PUBLIC_APP_NAME || 'mythosforge';
    let appUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://www.mythosforge.com';
    let supportEmail = process.env.NEXT_PUBLIC_SUPPORT_EMAIL || 'hello@mythosforge.com';
    return (
        <div className="container mx-auto px-5 lg:px-24 rounded-4xl">
             <div className=" ">
                <h1 className="relative text-6xl font-semibold font-heading pt-5">
                    <span className="mr-3">{t('pages.privacy_policy')}</span>
                </h1>
            </div>

            { locale == 'it' ?
            (
                <div className="py-12 pageContents">
                    <p>Ultimo aggiornamento: 30 dicembre 2024</p>
                    <p>Questa Informativa sulla Privacy descrive le nostre politiche e procedure relative alla raccolta,
                        all'utilizzo e alla divulgazione delle
                        tue informazioni quando utilizzi il Servizio e ti informa sui tuoi diritti in materia di privacy e su
                        come la legge ti tutela.
                    </p>
                    <p>Utilizziamo i tuoi dati personali per fornire e migliorare il Servizio. Utilizzando il Servizio, accetti
                        la raccolta e l'utilizzo
                        delle informazioni in conformità con questa Informativa sulla Privacy.</p>
                    <h2>Interpretazione e Definizioni</h2>
                    <h3>Interpretazione</h3>
                    <p>Le parole la cui lettera iniziale è maiuscola hanno significati definiti secondo le seguenti condizioni.
                        Le seguenti definizioni avranno lo stesso significato indipendentemente dal fatto che siano al singolare
                        o al plurale.</p>
                    <h3>Definizioni</h3>
                    <p>Ai fini di questa Informativa sulla Privacy:</p>
                    <ul>
                        <li>
                            <p><strong>Account</strong> significa un account unico creato per consentirti di accedere al nostro
                                Servizio o a parti del nostro Servizio.</p>
                        </li>
                        <li>
                            <p><strong>Affiliato</strong> indica un'entità che controlla, è controllata da, o è sotto il
                                controllo comune con una parte, dove il termine &quot;controllo&quot; significa la proprietà del
                                50% o più delle azioni, partecipazioni o altri titoli che conferiscono il diritto di voto per
                                l'elezione dei direttori o di altre autorità di gestione.</p>
                        </li>
                        <li>
                            <p><strong>Azienda</strong> (indicata come &quot;l'Azienda&quot;, &quot;Noi&quot;, &quot;Ci&quot; o
                                &quot;Nostro&quot; in questo Accordo) si riferisce a Mythos S.r.l., Via Sandro Pertini 25 -
                                42017 Novellara (RE) - Italia.</p>
                        </li>
                        <li>
                            <p><strong>Cookie</strong> sono piccoli file che vengono posizionati sul tuo computer, dispositivo
                                mobile o qualsiasi altro dispositivo da un sito web, contenenti i dettagli della tua cronologia
                                di navigazione su quel sito web tra i vari utilizzi.</p>
                        </li>
                        <li>
                            <p><strong>Paese</strong> si riferisce a: Italia</p>
                        </li>
                        <li>
                            <p><strong>Dispositivo</strong> indica qualsiasi dispositivo che può accedere al Servizio, come un
                                computer, un telefono cellulare o un tablet digitale.</p>
                        </li>
                        <li>
                            <p><strong>Dati Personali</strong> sono tutte le informazioni che si riferiscono a un individuo
                                identificato o identificabile.</p>
                        </li>
                        <li>
                            <p><strong>Servizio</strong> si riferisce al Sito Web.</p>
                        </li>
                        <li>
                            <p><strong>Fornitore di Servizi</strong> indica qualsiasi persona fisica o giuridica che elabora i
                                dati per conto dell'Azienda. Si riferisce a società o persone fisiche terze impiegate
                                dall'Azienda per facilitare il Servizio, fornire il Servizio per conto dell'Azienda, svolgere
                                servizi legati al Servizio o assistere l'Azienda nell'analisi di come viene utilizzato il
                                Servizio.</p>
                        </li>
                        <li>
                            <p><strong>Servizio di Social Media di Terze Parti</strong> si riferisce a qualsiasi sito web o
                                social network attraverso cui un Utente può accedere o creare un account per utilizzare il
                                Servizio.</p>
                        </li>
                        <li>
                            <p><strong>Dati di Utilizzo</strong> si riferisce ai dati raccolti automaticamente, generati
                                dall'uso del Servizio o dall'infrastruttura stessa del Servizio (ad esempio, la durata di una
                                visita a una pagina).</p>
                        </li>
                        <li>
                            <p><strong>Sito Web</strong> si riferisce a { appName }, accessibile da <a href="{ appUrl }"
                                    rel="external nofollow noopener" target="_blank">{ appUrl }</a></p>
                        </li>
                        <li>
                            <p><strong>Tu</strong> indica l'individuo che accede o utilizza il Servizio, o la società o altra
                                entità giuridica per conto della quale tale individuo sta accedendo o utilizzando il Servizio, a
                                seconda dei casi.</p>
                        </li>
                    </ul>
                    <h2>Raccolta e Utilizzo dei Tuoi Dati Personali</h2>
                    <h3>Tipi di Dati Raccolti</h3>
                    <h4>Dati Personali</h4>
                    <p>Durante l'utilizzo del nostro Servizio, potremmo chiederti di fornirci alcune informazioni personali
                        identificabili che possono essere utilizzate per contattarti o identificarti. Le informazioni personali
                        identificabili possono includere, ma non sono limitate a:</p>
                    <ul>
                        <li>
                            <p>Indirizzo email</p>
                        </li>
                        <li>
                            <p>Nome e cognome</p>
                        </li>
                        <li>
                            <p>Dati di Utilizzo</p>
                        </li>
                    </ul>
                    <h4>Dati di Utilizzo</h4>
                    <p>I Dati di Utilizzo vengono raccolti automaticamente durante l'utilizzo del Servizio.</p>
                    <p>I Dati di Utilizzo possono includere informazioni come l'indirizzo IP del tuo dispositivo (ad esempio
                        indirizzo IP), il tipo di browser, la versione del browser, le pagine del nostro Servizio che visiti,
                        l'ora e la data della tua visita, il tempo trascorso su tali pagine, identificatori univoci del
                        dispositivo e altri dati diagnostici.</p>
                    <p>Quando accedi al Servizio tramite un dispositivo mobile, potremmo raccogliere automaticamente alcune
                        informazioni, inclusi, ma non limitati a, il tipo di dispositivo mobile che utilizzi, l'ID univoco del
                        tuo dispositivo mobile, l'indirizzo IP del tuo dispositivo mobile, il sistema operativo mobile, il tipo
                        di browser Internet mobile che utilizzi, identificatori univoci del dispositivo e altri dati
                        diagnostici.</p>
                    <p>Potremmo anche raccogliere informazioni inviate dal tuo browser ogni volta che visiti il nostro Servizio
                        o quando accedi al Servizio tramite un dispositivo mobile.</p>

                    <h4>Tecnologie di Tracciamento e Cookie</h4>
                    <p>Utilizziamo Cookie e tecnologie di tracciamento simili per monitorare l'attività sul nostro Servizio e
                        archiviare determinate informazioni. Le tecnologie di tracciamento utilizzate includono beacon, tag e
                        script per raccogliere e tracciare informazioni, nonché per migliorare e analizzare il nostro Servizio.
                        Le tecnologie che utilizziamo possono includere:</p>
                    <ul>
                        <li><strong>Cookie o Cookie del Browser.</strong> Un cookie è un piccolo file posizionato sul tuo
                            dispositivo. Puoi configurare il tuo browser per rifiutare tutti i Cookie o per segnalare quando un
                            Cookie viene inviato. Tuttavia, se non accetti i Cookie, potresti non essere in grado di utilizzare
                            alcune parti del nostro Servizio. A meno che tu non abbia impostato il browser in modo che rifiuti i
                            Cookie, il nostro Servizio potrebbe utilizzare i Cookie.</li>
                        <li><strong>Web Beacon.</strong> Alcune sezioni del nostro Servizio e le nostre email possono contenere
                            piccoli file elettronici noti come web beacon (chiamati anche clear gif, pixel tag e single-pixel
                            gif) che consentono all'Azienda, ad esempio, di contare gli utenti che hanno visitato tali pagine o
                            aperto un'email e di raccogliere altre statistiche relative al sito web (ad esempio, registrare la
                            popolarità di una certa sezione e verificare l'integrità del sistema e del server).</li>
                    </ul>
                    <p>I Cookie possono essere &quot;Persistenti&quot; o &quot;di Sessione&quot;. I Cookie Persistenti rimangono
                        sul tuo computer personale o dispositivo mobile quando sei offline, mentre i Cookie di Sessione vengono
                        eliminati non appena chiudi il browser web.</p>
                    <p>Utilizziamo sia Cookie di Sessione che Cookie Persistenti per gli scopi indicati di seguito:</p>

                    <ul>
                        <li>
                            <p><strong>Cookie Necessari / Essenziali</strong></p>
                            <p>Tipo: Cookie di Sessione</p>
                            <p>Gestiti da: Noi</p>
                            <p>Scopo: Questi Cookie sono essenziali per fornirti servizi disponibili tramite il Sito Web e per
                                consentirti di utilizzare alcune delle sue funzionalità. Aiutano ad autenticare gli utenti e a
                                prevenire l'uso fraudolento degli account utente. Senza questi Cookie, i servizi che hai
                                richiesto non possono essere forniti e li utilizziamo esclusivamente per fornirti tali servizi.
                            </p>
                        </li>
                        <li>
                            <p><strong>Cookie di Accettazione della Politica sui Cookie</strong></p>
                            <p>Tipo: Cookie Persistenti</p>
                            <p>Gestiti da: Noi</p>
                            <p>Scopo: Questi Cookie identificano se gli utenti hanno accettato l'uso dei cookie sul Sito Web.
                            </p>
                        </li>
                        <li>
                            <p><strong>Cookie di Funzionalità</strong></p>
                            <p>Tipo: Cookie Persistenti</p>
                            <p>Gestiti da: Noi</p>
                            <p>Scopo: Questi Cookie ci consentono di ricordare le scelte che fai quando utilizzi il Sito Web,
                                come ricordare i tuoi dati di accesso o la tua preferenza linguistica. Lo scopo di questi Cookie
                                è offrirti un'esperienza più personalizzata ed evitare che tu debba reinserire le tue preferenze
                                ogni volta che utilizzi il Sito Web.</p>
                        </li>
                    </ul>
                    <p>Per ulteriori informazioni sui cookie che utilizziamo e sulle tue scelte in merito ai cookie, ti
                        invitiamo a visitare la nostra Politica sui Cookie o la sezione Cookie della nostra Informativa sulla
                        Privacy.</p>
                    <h3>Uso dei Tuoi Dati Personali</h3>
                    <p>L'Azienda può utilizzare i Dati Personali per i seguenti scopi:</p>
                    <ul>
                        <li>
                            <p><strong>Per fornire e mantenere il nostro Servizio</strong>, inclusa la possibilità di monitorare
                                l'uso del nostro Servizio.</p>
                        </li>
                        <li>
                            <p><strong>Per gestire il tuo Account:</strong> per gestire la tua registrazione come utente del
                                Servizio. I Dati Personali che fornisci possono darti accesso a diverse funzionalità del
                                Servizio disponibili per te come utente registrato.</p>
                        </li>
                        <li>
                            <p><strong>Per l'esecuzione di un contratto:</strong> lo sviluppo, il rispetto e l'esecuzione del
                                contratto di acquisto per i prodotti, gli articoli o i servizi che hai acquistato o di qualsiasi
                                altro contratto con noi tramite il Servizio.</p>
                        </li>
                        <li>
                            <p><strong>Per contattarti:</strong> Per contattarti tramite email, telefonate, SMS o altre forme
                                equivalenti di comunicazione elettronica, come notifiche push dell'applicazione mobile, in
                                merito ad aggiornamenti o comunicazioni informative relative alle funzionalità, ai prodotti o ai
                                servizi contrattati, inclusi gli aggiornamenti di sicurezza, quando necessario o ragionevole per
                                la loro implementazione.</p>
                        </li>
                        <li>
                            <p><strong>Per fornirti</strong> notizie, offerte speciali e informazioni generali su altri beni,
                                servizi ed eventi che offriamo simili a quelli che hai già acquistato o su cui hai chiesto
                                informazioni, a meno che tu non abbia scelto di non ricevere tali informazioni.</p>
                        </li>
                        <li>
                            <p><strong>Per gestire le tue richieste:</strong> Per gestire e rispondere alle tue richieste.</p>
                        </li>
                        <li>
                            <p><strong>Per trasferimenti aziendali:</strong> Possiamo utilizzare le tue informazioni per
                                valutare o condurre una fusione, cessione, ristrutturazione, riorganizzazione, scioglimento o
                                altra vendita o trasferimento di alcuni o di tutti i nostri beni, sia come attività in
                                funzionamento che come parte di fallimento, liquidazione o procedura simile, in cui i Dati
                                Personali detenuti da noi sugli utenti del Servizio sono tra i beni trasferiti.</p>
                        </li>
                        <li>
                            <p><strong>Per altri scopi:</strong> Possiamo utilizzare le tue informazioni per altri scopi, come
                                analisi dei dati, identificazione delle tendenze di utilizzo, determinazione dell'efficacia
                                delle nostre campagne promozionali e valutazione e miglioramento del nostro Servizio, prodotti,
                                servizi, marketing e la tua esperienza.</p>
                        </li>
                    </ul>

                    <p>Potremmo condividere le tue informazioni personali nelle seguenti situazioni:</p>
                    <ul>
                        <li><strong>Con i Fornitori di Servizi:</strong> Potremmo condividere le tue informazioni personali con
                            i Fornitori di Servizi per monitorare e analizzare l'uso del nostro Servizio o per contattarti.</li>
                        <li><strong>Per trasferimenti aziendali:</strong> Potremmo condividere o trasferire le tue informazioni
                            personali in relazione a, o durante le negoziazioni di, qualsiasi fusione, vendita di beni
                            aziendali, finanziamento o acquisizione di tutta o parte della nostra attività da parte di un'altra
                            azienda.</li>
                        <li><strong>Con gli Affiliati:</strong> Potremmo condividere le tue informazioni con i nostri affiliati,
                            a condizione che questi rispettino questa Informativa sulla Privacy. Gli affiliati includono la
                            nostra società madre e qualsiasi altra controllata, partner in joint venture o altre società che
                            controlliamo o che sono sotto controllo comune con noi.</li>
                        <li><strong>Con i partner commerciali:</strong> Potremmo condividere le tue informazioni con i nostri
                            partner commerciali per offrirti determinati prodotti, servizi o promozioni.</li>
                        <li><strong>Con altri utenti:</strong> Quando condividi informazioni personali o interagisci in aree
                            pubbliche con altri utenti, tali informazioni possono essere viste da tutti gli utenti e distribuite
                            pubblicamente all'esterno. Se interagisci con altri utenti o ti registri tramite un Servizio di
                            Social Media di Terze Parti, i tuoi contatti su tale Servizio potrebbero vedere il tuo nome,
                            profilo, immagini e descrizione della tua attività. Allo stesso modo, altri utenti potranno vedere
                            le descrizioni della tua attività, comunicare con te e visualizzare il tuo profilo.</li>
                        <li><strong>Con il tuo consenso:</strong> Potremmo divulgare le tue informazioni personali per qualsiasi
                            altro scopo con il tuo consenso.</li>
                    </ul>
                    <h3>Conservazione dei tuoi Dati Personali</h3>
                    <p>L'Azienda conserverà i tuoi Dati Personali solo per il tempo necessario a soddisfare gli scopi indicati
                        in questa Informativa sulla Privacy. Tratterremo e utilizzeremo i tuoi Dati Personali nella misura
                        necessaria per adempiere ai nostri obblighi legali (ad esempio, se siamo obbligati a conservare i tuoi
                        dati per conformarci alle leggi applicabili), risolvere controversie e applicare i nostri accordi e
                        politiche legali.</p>
                    <p>L'Azienda conserverà inoltre i Dati di Utilizzo per scopi di analisi interna. I Dati di Utilizzo vengono
                        generalmente conservati per un periodo di tempo più breve, a meno che non vengano utilizzati per
                        rafforzare la sicurezza o migliorare la funzionalità del nostro Servizio, o se siamo legalmente
                        obbligati a conservarli per periodi di tempo più lunghi.</p>
                    <h3>Trasferimento dei tuoi Dati Personali</h3>
                    <p>Le tue informazioni, inclusi i Dati Personali, sono trattate presso gli uffici operativi dell'Azienda e
                        in qualsiasi altro luogo in cui si trovano le parti coinvolte nel trattamento. Ciò significa che queste
                        informazioni potrebbero essere trasferite a — e conservate su — computer situati al di fuori del tuo
                        stato, provincia, paese o altra giurisdizione governativa dove le leggi sulla protezione dei dati
                        potrebbero differire da quelle della tua giurisdizione.</p>
                    <p>Il tuo consenso a questa Informativa sulla Privacy, seguito dall'invio di tali informazioni, rappresenta
                        il tuo consenso a tale trasferimento.</p>
                    <p>L'Azienda adotterà tutte le misure ragionevolmente necessarie per garantire che i tuoi dati siano
                        trattati in modo sicuro e in conformità con questa Informativa sulla Privacy e che nessun trasferimento
                        dei tuoi Dati Personali avvenga verso un'organizzazione o un paese a meno che non siano in atto
                        controlli adeguati, inclusa la sicurezza dei tuoi dati e di altre informazioni personali.</p>
                    <h3>Eliminazione dei tuoi Dati Personali</h3>
                    <p>Hai il diritto di eliminare o richiedere la nostra assistenza per eliminare i Dati Personali che abbiamo
                        raccolto su di te.</p>
                    <p>Il nostro Servizio può darti la possibilità di eliminare alcune informazioni su di te direttamente
                        all'interno del Servizio.</p>
                    <p>Puoi aggiornare, modificare o eliminare le tue informazioni in qualsiasi momento accedendo al tuo
                        Account, se ne hai uno, e visitando la sezione impostazioni dell'account che ti consente di gestire le
                        tue informazioni personali. Puoi anche contattarci per richiedere l'accesso, la correzione o
                        l'eliminazione di qualsiasi informazione personale che ci hai fornito.</p>
                    <p>Tieni presente, tuttavia, che potremmo dover conservare alcune informazioni quando abbiamo un obbligo
                        legale o una base legittima per farlo.</p>
                    <h3>Divulgazione dei tuoi Dati Personali</h3>
                    <h4>Transazioni Aziendali</h4>
                    <p>Se l'Azienda è coinvolta in una fusione, acquisizione o vendita di beni, i tuoi Dati Personali potrebbero
                        essere trasferiti. Ti informeremo prima che i tuoi Dati Personali vengano trasferiti e diventino
                        soggetti a una diversa Informativa sulla Privacy.</p>
                    <h4>Forze dell'Ordine</h4>
                    <p>In determinate circostanze, l'Azienda potrebbe essere obbligata a divulgare i tuoi Dati Personali se
                        richiesto dalla legge o in risposta a richieste valide da parte delle autorità pubbliche (ad esempio, un
                        tribunale o un'agenzia governativa).</p>
                    <h4>Altri Requisiti Legali</h4>
                    <p>L'Azienda potrebbe divulgare i tuoi Dati Personali nella buona fede che tale azione sia necessaria per:
                    </p>
                    <ul>
                        <li>Rispettare un obbligo legale</li>
                        <li>Proteggere e difendere i diritti o la proprietà dell'Azienda</li>
                        <li>Prevenire o indagare su possibili illeciti in relazione al Servizio</li>
                        <li>Proteggere la sicurezza personale degli Utenti del Servizio o del pubblico</li>
                        <li>Proteggere contro responsabilità legali</li>
                    </ul>
                    <h3>Sicurezza dei tuoi Dati Personali</h3>
                    <p>La sicurezza dei tuoi Dati Personali è importante per noi, ma ricorda che nessun metodo di trasmissione
                        via Internet o metodo di archiviazione elettronica è sicuro al 100%. Sebbene ci sforziamo di utilizzare
                        mezzi commercialmente accettabili per proteggere i tuoi Dati Personali, non possiamo garantirne la
                        sicurezza assoluta.</p>
                    <h2>Privacy dei Minori</h2>
                    <p>Il nostro Servizio non è rivolto a persone di età inferiore ai 13 anni. Non raccogliamo consapevolmente
                        informazioni personali identificabili da chiunque abbia meno di 13 anni. Se sei un genitore o tutore e
                        sei a conoscenza che tuo figlio ci ha fornito Dati Personali, ti preghiamo di contattarci. Se veniamo a
                        conoscenza di aver raccolto Dati Personali da chiunque abbia meno di 13 anni senza la verifica del
                        consenso dei genitori, prenderemo provvedimenti per rimuovere tali informazioni dai nostri server.</p>
                    <p>Se dobbiamo basarci sul consenso come base legale per trattare le tue informazioni e il tuo paese
                        richiede il consenso di un genitore, potremmo richiedere il consenso dei tuoi genitori prima di
                        raccogliere e utilizzare tali informazioni.</p>
                    <h2>Collegamenti ad Altri Siti Web</h2>
                    <p>Il nostro Servizio può contenere collegamenti ad altri siti web che non sono gestiti da noi. Se fai clic
                        su un collegamento di terze parti, verrai indirizzato al sito di tali terze parti. Ti consigliamo
                        vivamente di esaminare l'Informativa sulla Privacy di ogni sito che visiti.</p>
                    <p>Non abbiamo alcun controllo e non ci assumiamo alcuna responsabilità per il contenuto, le politiche sulla
                        privacy o le pratiche di siti o servizi di terze parti.</p>
                    <h2>Modifiche a questa Informativa sulla Privacy</h2>
                    <p>Potremmo aggiornare la nostra Informativa sulla Privacy di tanto in tanto. Ti informeremo di eventuali
                        modifiche pubblicando la nuova Informativa sulla Privacy su questa pagina.</p>
                    <p>Ti faremo sapere via email e/o con un avviso evidente sul nostro Servizio, prima che la modifica diventi
                        effettiva, e aggiorneremo la data di "Ultimo aggiornamento" nella parte superiore di questa Informativa
                        sulla Privacy.</p>
                    <p>Ti consigliamo di esaminare periodicamente questa Informativa sulla Privacy per eventuali modifiche. Le
                        modifiche a questa Informativa sulla Privacy sono efficaci quando vengono pubblicate su questa pagina.
                    </p>
                    <h2>Contattaci</h2>
                    <p>Se hai domande su questa Informativa sulla Privacy, puoi contattarci:</p>
                    <ul>
                        <li>Via email: <a href="mailto:{ supportEmail }">{ supportEmail }</a></li>
                    </ul>

                </div>
            ) :
            (
                <div className="py-12 pageContents">
                    <p>Last updated: December 30, 2024</p>
                    <p>This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your
                        information when You use the Service and tells You about Your privacy rights and how the law protects
                        You.
                    </p>
                    <p>We use Your Personal data to provide and improve the Service. By using the Service, You agree to the
                        collection and use of information in accordance with this Privacy Policy.</p>
                    <h2>Interpretation and Definitions</h2>
                    <h3>Interpretation</h3>
                    <p>The words of which the initial letter is capitalized have meanings defined under the following
                        conditions.
                        The following definitions shall have the same meaning regardless of whether they appear in singular or
                        in
                        plural.</p>
                    <h3>Definitions</h3>
                    <p>For the purposes of this Privacy Policy:</p>
                    <ul>
                        <li>
                            <p><strong>Account</strong> means a unique account created for You to access our Service or parts of
                                our
                                Service.</p>
                        </li>
                        <li>
                            <p><strong>Affiliate</strong> means an entity that controls, is controlled by or is under common
                                control
                                with a party, where &quot;control&quot; means ownership of 50% or more of the shares, equity
                                interest or other securities entitled to vote for election of directors or other managing
                                authority.
                            </p>
                        </li>
                        <li>
                            <p><strong>Company</strong> (referred to as either &quot;the Company&quot;, &quot;We&quot;,
                                &quot;Us&quot; or &quot;Our&quot; in this Agreement) refers to Mythos S.r.l., Via Sandro Pertini
                                25
                                - 42017 Novellara (RE) - Italy.</p>
                        </li>
                        <li>
                            <p><strong>Cookies</strong> are small files that are placed on Your computer, mobile device or any
                                other
                                device by a website, containing the details of Your browsing history on that website among its
                                many
                                uses.</p>
                        </li>
                        <li>
                            <p><strong>Country</strong> refers to: Italy</p>
                        </li>
                        <li>
                            <p><strong>Device</strong> means any device that can access the Service such as a computer, a
                                cellphone
                                or a digital tablet.</p>
                        </li>
                        <li>
                            <p><strong>Personal Data</strong> is any information that relates to an identified or identifiable
                                individual.</p>
                        </li>
                        <li>
                            <p><strong>Service</strong> refers to the Website.</p>
                        </li>
                        <li>
                            <p><strong>Service Provider</strong> means any natural or legal person who processes the data on
                                behalf
                                of the Company. It refers to third-party companies or individuals employed by the Company to
                                facilitate the Service, to provide the Service on behalf of the Company, to perform services
                                related
                                to the Service or to assist the Company in analyzing how the Service is used.</p>
                        </li>
                        <li>
                            <p><strong>Third-party Social Media Service</strong> refers to any website or any social network
                                website
                                through which a User can log in or create an account to use the Service.</p>
                        </li>
                        <li>
                            <p><strong>Usage Data</strong> refers to data collected automatically, either generated by the use
                                of
                                the Service or from the Service infrastructure itself (for example, the duration of a page
                                visit).
                            </p>
                        </li>
                        <li>
                            <p><strong>Website</strong> refers to { appName }, accessible from <a href="{ appUrl }"
                                    rel="external nofollow noopener" target="_blank">{ appUrl }</a></p>
                        </li>
                        <li>
                            <p><strong>You</strong> means the individual accessing or using the Service, or the company, or
                                other
                                legal entity on behalf of which such individual is accessing or using the Service, as
                                applicable.
                            </p>
                        </li>
                    </ul>
                    <h2>Collecting and Using Your Personal Data</h2>
                    <h3>Types of Data Collected</h3>
                    <h4>Personal Data</h4>
                    <p>While using Our Service, We may ask You to provide Us with certain personally identifiable information
                        that
                        can be used to contact or identify You. Personally identifiable information may include, but is not
                        limited
                        to:</p>
                    <ul>
                        <li>
                            <p>Email address</p>
                        </li>
                        <li>
                            <p>First name and last name</p>
                        </li>
                        <li>
                            <p>Usage Data</p>
                        </li>
                    </ul>
                    <h4>Usage Data</h4>
                    <p>Usage Data is collected automatically when using the Service.</p>
                    <p>Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address),
                        browser
                        type, browser version, the pages of our Service that You visit, the time and date of Your visit, the
                        time
                        spent on those pages, unique device identifiers and other diagnostic data.</p>
                    <p>When You access the Service by or through a mobile device, We may collect certain information
                        automatically,
                        including, but not limited to, the type of mobile device You use, Your mobile device unique ID, the IP
                        address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You
                        use,
                        unique device identifiers and other diagnostic data.</p>
                    <p>We may also collect information that Your browser sends whenever You visit our Service or when You access
                        the
                        Service by or through a mobile device.</p>
                    <h4>Tracking Technologies and Cookies</h4>
                    <p>We use Cookies and similar tracking technologies to track the activity on Our Service and store certain
                        information. Tracking technologies used are beacons, tags, and scripts to collect and track information
                        and
                        to improve and analyze Our Service. The technologies We use may include:</p>
                    <ul>
                        <li><strong>Cookies or Browser Cookies.</strong> A cookie is a small file placed on Your Device. You can
                            instruct Your browser to refuse all Cookies or to indicate when a Cookie is being sent. However, if
                            You
                            do not accept Cookies, You may not be able to use some parts of our Service. Unless you have
                            adjusted
                            Your browser setting so that it will refuse Cookies, our Service may use Cookies.</li>
                        <li><strong>Web Beacons.</strong> Certain sections of our Service and our emails may contain small
                            electronic files known as web beacons (also referred to as clear gifs, pixel tags, and single-pixel
                            gifs) that permit the Company, for example, to count users who have visited those pages or opened an
                            email and for other related website statistics (for example, recording the popularity of a certain
                            section and verifying system and server integrity).</li>
                    </ul>
                    <p>Cookies can be &quot;Persistent&quot; or &quot;Session&quot; Cookies. Persistent Cookies remain on Your
                        personal computer or mobile device when You go offline, while Session Cookies are deleted as soon as You
                        close Your web browser.</p>
                    <p>We use both Session and Persistent Cookies for the purposes set out below:</p>
                    <ul>
                        <li>
                            <p><strong>Necessary / Essential Cookies</strong></p>
                            <p>Type: Session Cookies</p>
                            <p>Administered by: Us</p>
                            <p>Purpose: These Cookies are essential to provide You with services available through the Website
                                and
                                to enable You to use some of its features. They help to authenticate users and prevent
                                fraudulent
                                use of user accounts. Without these Cookies, the services that You have asked for cannot be
                                provided, and We only use these Cookies to provide You with those services.</p>
                        </li>
                        <li>
                            <p><strong>Cookies Policy / Notice Acceptance Cookies</strong></p>
                            <p>Type: Persistent Cookies</p>
                            <p>Administered by: Us</p>
                            <p>Purpose: These Cookies identify if users have accepted the use of cookies on the Website.</p>
                        </li>
                        <li>
                            <p><strong>Functionality Cookies</strong></p>
                            <p>Type: Persistent Cookies</p>
                            <p>Administered by: Us</p>
                            <p>Purpose: These Cookies allow us to remember choices You make when You use the Website, such as
                                remembering your login details or language preference. The purpose of these Cookies is to
                                provide
                                You with a more personal experience and to avoid You having to re-enter your preferences every
                                time
                                You use the Website.</p>
                        </li>
                    </ul>
                    <p>For more information about the cookies we use and your choices regarding cookies, please visit our
                        Cookies
                        Policy or the Cookies section of our Privacy Policy.</p>
                    <h3>Use of Your Personal Data</h3>
                    <p>The Company may use Personal Data for the following purposes:</p>
                    <ul>
                        <li>
                            <p><strong>To provide and maintain our Service</strong>, including to monitor the usage of our
                                Service.
                            </p>
                        </li>
                        <li>
                            <p><strong>To manage Your Account:</strong> to manage Your registration as a user of the Service.
                                The
                                Personal Data You provide can give You access to different functionalities of the Service that
                                are
                                available to You as a registered user.</p>
                        </li>
                        <li>
                            <p><strong>For the performance of a contract:</strong> the development, compliance and undertaking
                                of
                                the purchase contract for the products, items or services You have purchased or of any other
                                contract with Us through the Service.</p>
                        </li>
                        <li>
                            <p><strong>To contact You:</strong> To contact You by email, telephone calls, SMS, or other
                                equivalent
                                forms of electronic communication, such as a mobile application's push notifications regarding
                                updates or informative communications related to the functionalities, products or contracted
                                services, including the security updates, when necessary or reasonable for their implementation.
                            </p>
                        </li>
                        <li>
                            <p><strong>To provide You</strong> with news, special offers and general information about other
                                goods,
                                services and events which we offer that are similar to those that you have already purchased or
                                enquired about unless You have opted not to receive such information.</p>
                        </li>
                        <li>
                            <p><strong>To manage Your requests:</strong> To attend and manage Your requests to Us.</p>
                        </li>
                        <li>
                            <p><strong>For business transfers:</strong> We may use Your information to evaluate or conduct a
                                merger,
                                divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or
                                all of
                                Our assets, whether as a going concern or as part of bankruptcy, liquidation, or similar
                                proceeding,
                                in which Personal Data held by Us about our Service users is among the assets transferred.</p>
                        </li>
                        <li>
                            <p><strong>For other purposes</strong>: We may use Your information for other purposes, such as data
                                analysis, identifying usage trends, determining the effectiveness of our promotional campaigns
                                and
                                to evaluate and improve our Service, products, services, marketing and your experience.</p>
                        </li>
                    </ul>
                    <p>We may share Your personal information in the following situations:</p>
                    <ul>
                        <li><strong>With Service Providers:</strong> We may share Your personal information with Service
                            Providers
                            to monitor and analyze the use of our Service, to contact You.</li>
                        <li><strong>For business transfers:</strong> We may share or transfer Your personal information in
                            connection with, or during negotiations of, any merger, sale of Company assets, financing, or
                            acquisition of all or a portion of Our business to another company.</li>
                        <li><strong>With Affiliates:</strong> We may share Your information with Our affiliates, in which case
                            we
                            will require those affiliates to honor this Privacy Policy. Affiliates include Our parent company
                            and
                            any other subsidiaries, joint venture partners or other companies that We control or that are under
                            common control with Us.</li>
                        <li><strong>With business partners:</strong> We may share Your information with Our business partners to
                            offer You certain products, services or promotions.</li>
                        <li><strong>With other users:</strong> when You share personal information or otherwise interact in the
                            public areas with other users, such information may be viewed by all users and may be publicly
                            distributed outside. If You interact with other users or register through a Third-Party Social Media
                            Service, Your contacts on the Third-Party Social Media Service may see Your name, profile, pictures
                            and
                            description of Your activity. Similarly, other users will be able to view descriptions of Your
                            activity,
                            communicate with You and view Your profile.</li>
                        <li><strong>With Your consent</strong>: We may disclose Your personal information for any other purpose
                            with
                            Your consent.</li>
                    </ul>
                    <h3>Retention of Your Personal Data</h3>
                    <p>The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in
                        this
                        Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our
                        legal
                        obligations (for example, if we are required to retain your data to comply with applicable laws),
                        resolve
                        disputes, and enforce our legal agreements and policies.</p>
                    <p>The Company will also retain Usage Data for internal analysis purposes. Usage Data is generally retained
                        for
                        a shorter period of time, except when this data is used to strengthen the security or to improve the
                        functionality of Our Service, or We are legally obligated to retain this data for longer time periods.
                    </p>
                    <h3>Transfer of Your Personal Data</h3>
                    <p>Your information, including Personal Data, is processed at the Company's operating offices and in any
                        other
                        places where the parties involved in the processing are located. It means that this information may be
                        transferred to — and maintained on — computers located outside of Your state, province, country or other
                        governmental jurisdiction where the data protection laws may differ than those from Your jurisdiction.
                    </p>
                    <p>Your consent to this Privacy Policy followed by Your submission of such information represents Your
                        agreement
                        to that transfer.</p>
                    <p>The Company will take all steps reasonably necessary to ensure that Your data is treated securely and in
                        accordance with this Privacy Policy and no transfer of Your Personal Data will take place to an
                        organization
                        or a country unless there are adequate controls in place including the security of Your data and other
                        personal information.</p>
                    <h3>Delete Your Personal Data</h3>
                    <p>You have the right to delete or request that We assist in deleting the Personal Data that We have
                        collected
                        about You.</p>
                    <p>Our Service may give You the ability to delete certain information about You from within the Service.</p>
                    <p>You may update, amend, or delete Your information at any time by signing in to Your Account, if you have
                        one,
                        and visiting the account settings section that allows you to manage Your personal information. You may
                        also
                        contact Us to request access to, correct, or delete any personal information that You have provided to
                        Us.
                    </p>
                    <p>Please note, however, that We may need to retain certain information when we have a legal obligation or
                        lawful basis to do so.</p>
                    <h3>Disclosure of Your Personal Data</h3>
                    <h4>Business Transactions</h4>
                    <p>If the Company is involved in a merger, acquisition or asset sale, Your Personal Data may be transferred.
                        We
                        will provide notice before Your Personal Data is transferred and becomes subject to a different Privacy
                        Policy.</p>
                    <h4>Law enforcement</h4>
                    <p>Under certain circumstances, the Company may be required to disclose Your Personal Data if required to do
                        so
                        by law or in response to valid requests by public authorities (e.g. a court or a government agency).</p>
                    <h4>Other legal requirements</h4>
                    <p>The Company may disclose Your Personal Data in the good faith belief that such action is necessary to:
                    </p>
                    <ul>
                        <li>Comply with a legal obligation</li>
                        <li>Protect and defend the rights or property of the Company</li>
                        <li>Prevent or investigate possible wrongdoing in connection with the Service</li>
                        <li>Protect the personal safety of Users of the Service or the public</li>
                        <li>Protect against legal liability</li>
                    </ul>
                    <h3>Security of Your Personal Data</h3>
                    <p>The security of Your Personal Data is important to Us, but remember that no method of transmission over
                        the
                        Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable
                        means to protect Your Personal Data, We cannot guarantee its absolute security.</p>
                    <h2>Children's Privacy</h2>
                    <p>Our Service does not address anyone under the age of 13. We do not knowingly collect personally
                        identifiable
                        information from anyone under the age of 13. If You are a parent or guardian and You are aware that Your
                        child has provided Us with Personal Data, please contact Us. If We become aware that We have collected
                        Personal Data from anyone under the age of 13 without verification of parental consent, We take steps to
                        remove that information from Our servers.</p>
                    <p>If We need to rely on consent as a legal basis for processing Your information and Your country requires
                        consent from a parent, We may require Your parent's consent before We collect and use that information.
                    </p>
                    <h2>Links to Other Websites</h2>
                    <p>Our Service may contain links to other websites that are not operated by Us. If You click on a third
                        party
                        link, You will be directed to that third party's site. We strongly advise You to review the Privacy
                        Policy
                        of every site You visit.</p>
                    <p>We have no control over and assume no responsibility for the content, privacy policies or practices of
                        any
                        third party sites or services.</p>
                    <h2>Changes to this Privacy Policy</h2>
                    <p>We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new
                        Privacy Policy on this page.</p>
                    <p>We will let You know via email and/or a prominent notice on Our Service, prior to the change becoming
                        effective and update the &quot;Last updated&quot; date at the top of this Privacy Policy.</p>
                    <p>You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy
                        Policy
                        are effective when they are posted on this page.</p>
                    <h2>Contact Us</h2>
                    <p>If you have any questions about this Privacy Policy, You can contact us:</p>
                    <ul>
                        <li>By email: <a href="mailto:{ supportEmail }">{ supportEmail }</a></li>
                    </ul>

                </div>
            )
            }

        </div>
    )
}
