// data/vagter.js
// Startdata. Filen bruges KUN første gang appen åbner, hvor databasen er tom.
// Så bliver vagterne skrevet op i Firebase, og derefter læser appen alt
// derfra. Ændringer (afgiv, tag, godkend) bliver gemt i databasen, ikke her.
//
// Felter:
//  ejer      – hvem vagten tilhører lige nu
//  status    – 'aktiv' (min vagt), 'ledig' (slået op), 'afventer' (en kollega
//              har taget den og venter på vagtlederens godkendelse)
//  kræver    – kvalifikationer man skal have for at stå på posten
//  dag       – datoen i et format, appen kan sammenligne (til dobbeltbooking)
//  bureau    – hvilket vagtbureau vagten er fra (vagter kan have flere)

export const vagter = [
  {
    id: 'v1',
    sted: 'Royal Arena',
    post: 'Indgang A – billetkontrol',
    dato: 'Fre 6. nov',
    dag: '2026-11-06',
    tid: '17:00 – 23:30',
    kontakt: 'Morten, 12 34 56 78',
    bureau: 'NordVagt',
    kræver: ['Vagtkort'],
    ejer: 'Hamza',
    status: 'aktiv',
    overtager: '',
  },
  {
    id: 'v2',
    sted: 'Parken',
    post: 'Sektion B – trappevagt',
    dato: 'Lør 14. nov',
    dag: '2026-11-14',
    tid: '16:00 – 23:00',
    kontakt: 'Sara, 23 45 67 89',
    bureau: 'EventSikring',
    kræver: ['Vagtkort'],
    ejer: 'Hamza',
    status: 'aktiv',
    overtager: '',
  },
  {
    id: 'v3',
    sted: 'Forum København',
    post: 'Backstage',
    dato: 'Fre 20. nov',
    dag: '2026-11-20',
    tid: '19:00 – 01:00',
    kontakt: 'Ali, 34 56 78 90',
    bureau: 'NordVagt',
    kræver: ['Vagtkort'],
    ejer: 'Hamza',
    status: 'aktiv',
    overtager: '',
  },
  // Kollegers vagter, der allerede er slået op som ledige
  {
    id: 'v4',
    sted: 'Vega',
    post: 'Garderobe og indgang',
    dato: 'Tor 12. nov',
    dag: '2026-11-12',
    tid: '19:00 – 00:00',
    kontakt: 'Morten, 12 34 56 78',
    bureau: 'NordVagt',
    kræver: ['Vagtkort'],
    ejer: 'Emil',
    status: 'ledig',
    overtager: '',
  },
  {
    id: 'v5',
    sted: 'Tivoli – Fredagsrock',
    post: 'Barområde',
    dato: 'Fre 13. nov',
    dag: '2026-11-13',
    tid: '18:00 – 00:00',
    kontakt: 'Sara, 23 45 67 89',
    bureau: 'EventSikring',
    kræver: ['Vagtkort', 'Alkoholbevis'],
    ejer: 'Nadia',
    status: 'ledig',
    overtager: '',
  },
  {
    id: 'v6',
    sted: 'Bella Center',
    post: 'Messehal C – rundering',
    dato: 'Lør 14. nov',
    dag: '2026-11-14',
    tid: '12:00 – 18:00',
    kontakt: 'Ali, 34 56 78 90',
    bureau: 'NordVagt',
    kræver: ['Vagtkort'],
    ejer: 'Emil',
    status: 'ledig',
    overtager: '',
  },
];
