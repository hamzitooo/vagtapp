// Dette er vores (foreløbige) datakilde: en almindelig JavaScript-array af
// objekter, der hver repræsenterer én vagt. Senere kan denne fil nemt
// erstattes af data fra et API eller en database — resten af app'en behøver
// ikke ændres, så længe formen (id, sted, post, dato, tid, kontakt) er den samme.
// Det kaldes ofte "mock data" eller "seed data", når man bruger det til
// udvikling/test, inden der er en rigtig backend tilkoblet.
export const vagter = [
  {
    // id skal være unikt for hver vagt. FlatList (i VagtListeScreen) bruger
    // dette id til effektivt at holde styr på, hvilket element der er hvilket,
    // når listen skal opdateres eller genoptegnes.
    id: '1',
    sted: 'Roskilde Festival',
    post: 'Port 4 — indgangskontrol',
    dato: 'Fre 12. sep',
    tid: '18:00 – 02:00',
    kontakt: 'Vagtleder Morten, 12 34 56 78',
  },
  {
    id: '2',
    sted: 'Parken',
    post: 'Sektion B — trappevagt',
    dato: 'Man 15. sep',
    tid: '16:00 – 23:00',
    kontakt: 'Vagtleder Sara, 23 45 67 89',
  },
  {
    id: '3',
    sted: 'Forum København',
    post: 'Backstage',
    dato: 'Lør 20. sep',
    tid: '19:00 – 01:00',
    kontakt: 'Vagtleder Ali, 34 56 78 90',
  },
];