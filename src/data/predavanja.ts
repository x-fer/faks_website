export type SpeakerType = {
    name: string,
    image: string,
    biography: string,
    gender: string,
    title: string
}
export type TalkInfo = {
    title: string
    description: string
    speakers?: SpeakerType[]
    logo: string
    type: "tech" | "policy" | "keynote";
}

type BaseEvent = {
    startTime: string;
    endTime: string;
    small?: boolean;
};

export type TalkEvent = BaseEvent & {
    isTalk: true;
    talkInfo: TalkInfo;
};

type NonTalkEvent = BaseEvent & {
    isTalk: false;
    title: string
    talkInfo?: undefined;
};

export type EventInfo = TalkEvent | NonTalkEvent;

const eventsDayOne: EventInfo[] = [
    {
        title: "Otvorenje",
        isTalk: false,
        startTime: "09:30",
        endTime: "10:00",
        small: false,
    },
    {
        isTalk: true,
        talkInfo: {
            type: "keynote",
            title: "Regulativni okvir kibernetičke sigurnosti u Republici Hrvatskoj",
            description: "Transpozicijom NIS2 Direktive ostvaren je novi regulativni okvir kibernetičke sigurnosti u RH. Regulativni okvir utemeljen je Zakonom o kibernetičkoj sigurnosti (NN 14/2024), a nastavlja se razrađivati različitim podzakonskim aktima i smjernicama nadležnih tijela. Ključni elementi novog regulativnog okvira su mjere kibernetičke sigurnosti, koje se utvrđuju kao obvezujuće i povezuju se s obvezama upravljanja rizicima i to za subjekte odabrane po općim i posebnim kriterijima iz Zakonom utvrđenih sektora, podsektora i vrsta subjekata. Regulativni okvir uvodi subjektima obveze prijave značajnih kibernetičkih incidenata, a na nacionalnoj razini donosi program upravljanja kibernetičkim incidentima velikih razmjera i kibernetičkim krizama. Predviđeno je i više načina nadzora provedbe obveza u subjektima, kroz procese samoprocjene, revizije i stručnog nadzora, kao i mogućnost korištenja određenih nacionalnih usluga i resursa u okviru dobrovoljnog postupanja pravnih osoba koje nisu obveznici Zakona. Početak provedbe Zakona s jedne strane obilježava inicijalna kategorizacija subjekata, a s druge strane donošenje niza smjernica koje će olakšati provedbu mjera kategoriziranim subjektima.",
            logo:"/speaker_logo/ncsc_logo.svg",
            speakers: [{
                gender:"male",
                name: "NCSC",
                biography:"",
                image:"",
                title:""
            }]
        },
        startTime: "10:00",
        endTime: "10:45",
    },
    {
        isTalk: false,
        startTime: "10:45",
        endTime: "11:00",
        title: 'Pauza',
        small: true
    },
    {
        isTalk: false,
        startTime: "15:10",
        endTime: "15:30",
        title: 'Pauza',
        small: true
    },
    {
        isTalk: false,
        startTime: "12:05",
        endTime: "13:00",
        title: 'Pauza',
        small: true
    },
    {
        isTalk: true,
        talkInfo: {
            title: "Kako danas izgledaju ransomware napadi?",
            description: "Jedna od najvećih prijetnji organizacijama u privatnom i javnom sektoru su ransomware napadi koji u isto vrijeme zaključavaju informacijske sustave i kradu osjetljive podatke. Ovo predavanje će proći kroz anonimizirane primjere nedavnih ransomware napada na mete u Hrvatskoj iz perspektive CSIRT-a Nacionalnog centra za kibernetičku sigurnost. Primjeri tehnika koje napadači koriste u praksi, od inicijalnih vektora napada do metoda eskalacije privilegija i eksfiltracije podataka, mogu pomoći administratorima da bolje zaštite svoje sustave i sigurnosnim stručnjacima da bolje usmjere penetracijska testiranja, odgovore na incidente i druge aktivnosti.",
            type: "tech",
            logo:"/speaker_logo/ncsc_logo.svg",
            speakers: [{
                gender:"male",
                name:"NCSC",
                biography:"",
                image:"",
                title:""
            }]
        },
        startTime: "11:00",
        endTime: "11:30",
    },
    {
        isTalk: true,
        talkInfo: {
            title: "NIS2 u praksi, izazovi s terena.",
            description: "Predavanje će pružiti pregled ključnih aspekata NIS2 direktive, s posebnim naglaskom na njenu primjenu u Republici Hrvatskoj. Umjesto suhoparnog nabrajanja regulatornih zahtjeva, fokus će biti na praktičnim izazovima s kojima se organizacije suočavaju pri usklađivanju — od procjene rizika do implementacije sigurnosnih mjera. Kroz konkretne primjere iz prakse sudionici će dobiti jasniju sliku što NIS2 znači za njihovo poslovanje i kako izbjeći najčešće zamke u provedbi.",
            logo:"",
            speakers: [{
                gender:"male",
                title:"",
                name: "Davor Stanec",
                biography: "Davor ima više od 20 godina iskustva u IT sektoru, većinom na inženjerskim pozicijama u velikim organizacijama. Posljednjih godina usmjeren je na područje sigurnosti informacijskih sustava, s naglaskom na identifikaciju sigurnosnih nedostataka te podršku klijentima u uspostavi i unapređenju okvira za upravljanje informacijskom sigurnošću u skladu s najboljim praksama.",
                image: "/speakers/davor_stanec.jpg"
            }],
            type: "policy",
        },
        startTime: "11:00",
        endTime: "11:30",
    },
    {
        isTalk: true,
        talkInfo: {
            title: "'Do you want to run a malware?' – Kako izgubiti identitet u 12 koraka",
            description: `Potvrdite da ste čovjek. Ne, zaista, jeste li čovjek?

                          Rijetko se viđa da napadači s ovakvom razinom uspješnosti iskorištavaju naučenu bespomoćnost bezazlenih žrtvi u kampanji takvih opsega. Unatoč tome, ovaj pristup je aktualan, i više je nego učinkovit. Ako ste na prvoj crti obrane, ronite kroz dnevničke zapise i razne korake infekcije, dobre su šanse da znate sve o reCAPTCHA prijevari i zašto vam je Windows Run prozorčić zagorčao život u posljednjih godinu dana. No, znate li što se točno dogodi kad pokrenete naizgled bezopasnu naredbu? Na kraju krajeva, radi se samo o poruci s vašim CAPTCHA identifikatorom, zar ne?

                          Pridružite nam se na tehničkom deep-diveu u anatomiju Lumma stealer infekcije i zavirimo iza horizonta - kako izgledaju paketi s podacima, kako je složena napadačka infrastruktura, te kako ovakvi napadi skaliraju bez većih poteškoća, usprkos modernim zaštitama.`,
            logo: "/speaker_logo/span.png",
            speakers: [{
                gender:"male",
                name: "Zdravko Petričušić",
                biography: `Zdravko Petričušić dio je Spanovog Blue Teama primarno zaduženog za istraživanje sigurnosnih incidenata. Usmjeren je na reverzni inženjering, analizu zloćudnog koda i razvoj detekcijskih pravila za lokalne (on-premises) odnosno sustave u računalnom oblaku, s fokusom na Microsoft Azure/Entra ID.

                Izvan radnog vremena istražuje metode zaobilaženja EDR rješenja, analizira legitimne i zloćudne programe, te sudjeluje na raznim CTF natjecanjima s ciljem unaprjeđivanja vlastitog znanja, ali i podučavanja kolega zainteresiranih za područje kibernetičke sigurnosti.`,
                image: "/speakers/zdravko_petricusic.JPG",
                title:"Cyber Security Analyst"
            }],
            type: "tech"
        },
        startTime: "11:35",
        endTime: "12:05",
    },
    {
        isTalk: true,
        talkInfo: {
            title: "Od FER-a do Fortune 100: Kako izgleda stvarni svijet kibernetičke sigurnosti i zašto je super raditi u njemu",
            description: `Kako izgleda karijera u kibernetičkoj sigurnosti nakon FER-a? U ovom predavanju podijelit ću svoj profesionalni put – od početaka u Hrvatskoj do savjetovanja nekih od najvećih svjetskih organizacija u području kibernetičke sigurnosti. Govorit ću o izazovima i prilikama u osnivanju vlastite konzultantske firme, kako izgleda rad s američkim klijentima, koji su najčešći problemi koje rješavamo, te kako nove EU regulative mijenjaju praksu u industriji. Cilj predavanja je studentima približiti stvarne projekte, tehnologije, timsku dinamiku i poslovne aspekte koji ih očekuju izvan akademskog okruženja.`,
            logo:"/speaker_logo/ostendo.png",
            speakers: [{
                title:"suosnivačica i direktorica",
                gender:"female",
                name: "Biljana Cerin",
                biography: `Biljana Cerin je suosnivačica i direktorica tvrtke Ostendo Consulting. Diplomirala je na FER-u i već više od 25 godina savjetuje organizacije u Europi i SAD-u o upravljanju rizicima kibernetičke sigurnosti i zaštiti privatnosti. Radila je s vodećim institucijama i kompanijama poput Stanford University Hospital, Amgena, MGM Resortsa, Mercka, Zillow-a, T-Coma i drugih.

                    Izabrana je kao jedna od 50 najutjecajnijih žena u kibernetičkoj sigurnosti u Europi prema SC Magazine UK i 50 najutjecajnijih žena u ICT-u u Hrvatskoj. Bila je članica Upravnog odbora međunarodne udruge certificiranih stručnjaka za kibernetičku sigurnost ISC2, gdje je vodila Etičko povjerenstvo.

                    Govornica je na brojnim međunarodnim konferencijama, mentorica mladim stručnjacima i predana razvoju globalne zajednice kibernetičke sigurnosti. Također je sudjelovala u prestižnom IVLP programu američkog State Departmenta s fokusom na kibernetičku sigurnost.`,
                image: "/speakers/biljana cerin.jpg"
            }],
            type: "policy"
        },
        startTime: "11:35",
        endTime: "12:05",
    },
    {
        isTalk: true,
        talkInfo: {
            title: "Kako Pronaći Ranjivosti u Web Preglednicima",
            description: `U naprednim napadima na krajnje korisnike, ranjivost u web pregledniku je često prva točka napada. U ovom uvodnom predavanju o sigurnosti web browsera, bit će objašnjeni osnovni principi potrebni za razumijevanje nekih od najčešćih ranjivosti koje pogađaju web preglednike. Također ćemo nešto reći o automatiziranim metodama traženja ovih ranjivosti. Na kraju, koristeći principe s početka predavanja, objasnit ćemo nedavno pronađenu kritičnu ranjivost u Firefox web pregledniku i demonstrirati kako napadač može tu ranjivost iskoristiti.`,
            logo:"/speaker_logo/google.png",
            speakers: [{
                title:"Security Researcher",
                gender:"male",
                name: "Ivan Fratrić",
                biography: `Ivan Fratrić je inženjer i istraživač u Googleovom Project Zero timu u Švicarskoj, gdje se bavi otkrivanjem ranjivosti u popularnom softveru kao što su web preglednici, aplikacije za slanje poruka i mobilni operacijski sustavi. Prije toga radio je na analizi sigurnosti Googleovih softverskih proizvoda. Prije Googlea bio je znanstveni novak na Fakultetu Elektrotehnike i Računarstva u Zagrebu, gdje je doktorirao 2011. godine. Bavi se istraživanjem sigurnosti više od desetljeća te je objavio više radova i predavanja na konferencijama na tu temu. Autor je nekoliko popularnih alata otvorenog koda za otkrivanje ranjivosti.`,
                image: "/speakers/ivan_fratric.jpg"
            }],
            type: "keynote"
        },
        startTime: "13:00",
        endTime: "14:00",
    },
    {
        isTalk: true,
        talkInfo: {
            title: "Open-source pod napadom: kako maliciozni NPM paketi mogu završiti u produkciji?",
            description: `Sve češće se u softverskom razvoju koriste paketi iz repozitorija otvorenog koda, što otvara prostor za zlonamjerne napade. Predavanje daje pregled formata paketa (npm, PyPI, RubyGems, NuGet) i njihovih ranjivosti, predstavlja metode za rano otkrivanje zlonamjernih paketa te prikazuje stvarne primjere napada. Poseban naglasak stavlja se na novije slučajeve napada na članove kripto zajednice kroz kompromitiranje legitimnih paketa.`,
            logo:"/speaker_logo/rl.png",
            speakers: [{
                gender:"male",
                title:"Threat Researcher u Threat Detection teamu",
                name: "Vladimir Pezo",
                biography: `Vladimir Pezo pridružio se ReversingLabsu 2022. godine, gdje kao Threat Research Intern prati nove napade na repozitorije otvorenog koda, analizira maliciozni kod i sudjeluje u održavanju interne baze zlonamjernih paketa. Student je 2. godine diplomskog studija Računarske znanosti na FER-u.

`,
                image: "/speakers/vladimir_pezo.jpg"
            }],
            type: "tech"
        },
        startTime: "14:10",
        endTime: "14:40",
    },
    {
        isTalk: true,
        talkInfo: {
            title: "CTF - Igrifikacija kibernetičke sigurnosti",
            description: `Vođeni idejom učenja kroz igru CARNET-ov sektor Nacionalni CERT održava brojne aktivnosti usmjerene na podizanje svijesti o kibernetičkoj sigurnosti među svim generacijama. U predavanju će biti riječ o praktičnim iskustvima našeg dosadašnjeg rada kao i korisne informacije za sve ljude željne učenja o vještinama koje su nam svakim danom (nažalost) sve više potrebne.`,
            logo:"/speaker_logo/cert.png",
            speakers: [{
                gender:"male",
                title:"Cyber Awareness Influencer",
                name: "Jakov Đogić",
                biography: `Jakov radi u Nacionalnom CERT-u kao wannabe pentester, guru elektroničke certifikacije te cyber awareness influencer. Višestruki osvajač mobitela i zelenih karti za SAD, a u slobodno vrijeme financijski pomaže nigerijskim prinčevima te moderira server/zajednicu CTF Hrvatska.
`,
                image: "/speakers/jakov_dogic.png"
            }],
            type: "policy"
        },
        startTime: "14:10",
        endTime: "14:40",
    },
    {
        isTalk: true,
        talkInfo: {
            title: "Web malware i kako ga loviti",
            description: `Predavanje će istražiti trenutno stanje prijetnji web malwarea, tehnike kako masovno detektirati stranice inficirane web malwareom i tehnike za oporavak od infekcije.`,
            logo:"",
            speakers: [{
                gender:"male",
                title:"Zavodski suradnik",
                name: "Benjamin Nadarević",
                biography: 'Benjamin Nadarević je zaposlen kao zavodski suradnik u FER-ovom Laboratoriju za Sustave i Signale na poslovima suradnje s gospodarstvom u području kibernetičke sigurnosti. Prvenstveno se bavi penetracijskim testiranjima web aplikacija i izradom zadataka za nacionalna srednjoškolska i studentska CTF natjecanja. Osim toga, povremeno radi i na defanzivnim projektima vezanim za kibernetičku sigurnost.',
                image: "/speaker_logo/benjamin.jpeg"
            }],
            type: "tech"
        },
        startTime: "14:45",
        endTime: "15:10",
    },
    {
        isTalk: true,
        talkInfo: {
            title: "Zaštita pristupa i privilegija: Prva linija obrane protiv krađe poslovnih digitalnih identiteta",
            description: `Prema najnovijim izvješćima, više od 70% sigurnosnih incidenata započinje kompromitacijom korisničkih računa, najčešće kroz krađu vjerodajnica pomoću malwarea, phishinga ili drugih metoda socijalnog inženjeringa. Uz to, broj credential-based napada gotovo se utrostručio u posljednje dvije godine, a čak 70% napada uključuje više istovremenih vektora, što ukazuje na sve veću kompleksnost prijetnji.
U ovom predavanju prikazujemo konkretan scenarij kompromitacije korisničkog računa u poslovnom okruženju (Active Directory) i pokazujemo kako višeslojna obrana - uključujući autentikaciju, nadzor privilegiranih računa i proaktivnu detekciju kompromitiranih lozinki - može spriječiti daljnju eskalaciju napada.
Fokus je isključivo na zaštiti poslovnih digitalnih identiteta, uz praktične korake i savjete.`,
            logo:"/speaker_logo/cs.png",
            speakers: [{
                gender:"male",
                title:"Voditelj tima za zaštitu identiteta i aplikacija",
                name: "Marco Baban",
                biography: 'Voditelj tima za zaštitu identiteta i aplikacija u CS Computer Systems, s više od pet godina iskustva u IT industriji. Specijalizirao se za razvoj i implementaciju naprednih rješenja u području kibernetičke sigurnosti. Njegovo bogato inženjersko iskustvo uključuje rad s vrhunskim sigurnosnim tehnologijama kao što su Application Delivery Controllers (ADC), Web Application Firewalls (WAF), Next-Generation Firewall (NGFW) te Privileged Access Management (PAM) sustavi. Nositelj je prestižnih stručnih certifikata, uključujući F5 Solutions Expert, Check Point Master, CyberArk PAM i CSC Delivery Engineer. Njegov rad karakterizira posvećenost sigurnosti, učinkovitosti i inovacijama u zaštiti IT okruženja.',
                image: "/speakers/Marco_Baban.jpg"
            },
            {
                gender:"male",
                title:"cyber security researcher",
                name: "Matija Čiček",
                biography:"Matija Čiček stručnjak je za kibernetičku sigurnost u CS Computer Systems, kojeg pokreće duboka znatiželja za razumijevanje načina na koji prijetnje nastaju, razvijaju se i mogu biti otkrivene prije nego što postanu napad. U svakodnevnom radu bavi se implementacijom sigurnosnih rješenja poput CyberArk-a, Silverforta i Trellixa, a posebno ga motivira proučavanje složenih prijetnji, s naglaskom na područja kao što su Threat Intelligence, Threat Hunting, OSINT i Social Engineering. Redovito istražuje nove koncepte, alate i taktike, uz stalnu težnju za usavršavanjem i produbljivanjem znanja. Njegov rad oblikuje spoj znanstvene metodologije, tehničke ekspertize i strasti za sigurnost, s jasno usmjerenim ciljem: razumjeti prijetnje u njihovoj srži i graditi otpornije sigurnosne sustave.",
                image:"/speakers/matija_cicek.jpg"
            }],
            type: "tech"
        },
        startTime: "15:30",
        endTime: "16:00",
    },
    {
        isTalk: true,
        talkInfo: {
            title: "Red Teaming: The Art of Modern Adversary Simulation",
            description: `Što je zapravo Red Teaming, zašto je ključan za sigurnost sustava i kako izgleda u praksi?
                U ovom predavanju Luka će vas provesti kroz sve faze modernog Red Team angažmana na stvarnim primjerima iz prakse: od planiranja i početnog pristupa pa sve do potpune kompromitacije.
                Očekuju vas uvidi u metode oponašanja stvarnih napadača, taktike zaobilaženja sigurnosnih mjera te razlozi zbog kojih se simuliraju stvarne prijetnje.
                Bez obzira jeste li već duboko u svijetu sigurnosti ili tek zakoračili u njega, ovo predavanje pružit će vam konkretan uvid u način razmišljanja i djelovanja pravih napadača.`,
            logo:"/speaker_logo/infigo-logo-white.svg",
                speakers: [{
                gender:"male",
                name: "Luka Srdarev",
                title:"Cyber Security Specialist",
                biography: `Luka je stručnjak za kibernetičku sigurnost u tvrtki Infigo IS s višegodišnjim iskustvom u provođenju Red Teaming angažmana i mrežnih penetracijskih testova
                Specijalizirao se za Red Team operacije i simulacija napadača (adversary simulation) te sigurnost Active Directory okruženja.
                Luka koristi svoje znanje kako bi pomogao organizacijama da ojačaju obranu i budu spremnije za stvarne prijetnje.
                Vjeruje da je najbolja zaštita ona koja proizlazi iz razumijevanja načina razmišljanja i taktika pravih napadača.`,
                image: "/speakers/LS.jpg"
            }],
            type: "tech"
        },
        startTime: "16:05",
        endTime: "16:35",
    }
]

const eventsDayTwo: EventInfo[] = [
    {
        isTalk: false,
        title: "CTF",
        startTime: "10:00",
        endTime: "17:00",
    }
]

const events = [eventsDayOne, eventsDayTwo]

export default events;