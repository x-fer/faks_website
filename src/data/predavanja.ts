export type SpeakerType = {
    name: string,
    image: string,
    biography: string
}
export type TalkInfo = {
    title: string
    description: string
    speaker?: SpeakerType
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
        isTalk: true,
        talkInfo: {
            title: "Kako danas izgledaju ransomware napadi?",
            description: "Jedna od najvećih prijetnji organizacijama u privatnom i javnom sektoru su ransomware napadi koji u isto vrijeme zaključavaju informacijske sustave i kradu osjetljive podatke. Ovo predavanje će proći kroz anonimizirane primjere nedavnih ransomware napada na mete u Hrvatskoj iz perspektive CSIRT-a Nacionalnog centra za kibernetičku sigurnost. Primjeri tehnika koje napadači koriste u praksi, od inicijalnih vektora napada do metoda eskalacije privilegija i eksfiltracije podataka, mogu pomoći administratorima da bolje zaštite svoje sustave i sigurnosnim stručnjacima da bolje usmjere penetracijska testiranja, odgovore na incidente i druge aktivnosti.",
            type: "tech",
        },
        startTime: "11:00",
        endTime: "11:30",
    },
    {
        isTalk: true,
        talkInfo: {
            title: "NIS2 u praksi, izazovi s terena.",
            description: "Predavanje će pružiti pregled ključnih aspekata NIS2 direktive, s posebnim naglaskom na njenu primjenu u Republici Hrvatskoj. Umjesto suhoparnog nabrajanja regulatornih zahtjeva, fokus će biti na praktičnim izazovima s kojima se organizacije suočavaju pri usklađivanju — od procjene rizika do implementacije sigurnosnih mjera. Kroz konkretne primjere iz prakse sudionici će dobiti jasniju sliku što NIS2 znači za njihovo poslovanje i kako izbjeći najčešće zamke u provedbi.",
            speaker: {
                name: "Davor Stanec",
                biography: "Davor ima više od 20 godina iskustva u IT sektoru, većinom na inženjerskim pozicijama u velikim organizacijama. Posljednjih godina usmjeren je na područje sigurnosti informacijskih sustava, s naglaskom na identifikaciju sigurnosnih nedostataka te podršku klijentima u uspostavi i unapređenju okvira za upravljanje informacijskom sigurnošću u skladu s najboljim praksama.\n\nPoziciju i firmu nije stavio jer će biti nezaposlen tada? Ili ima nešto svoje ugl nije discloseao. Ja bih stavila ništa ili nezavisni konzultant ako želite da nešto piše.",
                image: "TBD"
            },
            type: "policy"
        },
        startTime: "11:00",
        endTime: "11:30",
    }
]

const eventsDayTwo: EventInfo[] = [
    {
        isTalk: false,
        title: "CTF",
        startTime: "09:00",
        endTime: "18:00",
    }
]

const events = [eventsDayOne, eventsDayTwo]

export default events;