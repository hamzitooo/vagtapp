# Vagtapp

Mobilapp til event- og festivalvagter, der samler praktisk information om kommende vagter ét sted — i stedet for at den ligger spredt i SMS'er, Facebook-grupper og opkald.


## Demovideo

https://youtube.com/shorts/KURgDxbpECI?feature=share

## Funktionalitet

Appen består af tre skærme:

1. **Mine vagter** — liste over kommende vagter (sted, dato, tidsrum, post)
2. **Vagtdetaljer** — fuld information om den valgte vagt, inkl. vagtleder
3. **Afgiv vagt** — bekræftelse af, at vagten slås op til kollegerne

Data er hardkodet i `data/vagter.js`. Appen har ingen backend, da formålet er at teste værdien for brugeren og ikke at bygge et færdigt system.

## Teknologi

- React Native med Expo (SDK 57)
- React Navigation (native stack) til navigation mellem skærme
- `FlatList` til listevisningen
- `useState` til at skifte mellem bekræftelses- og kvitteringsvisning

## Mappestruktur
data/ – vagtdata
screens/ – én fil per skærm
styles/ – globalStyles.js med farver og StyleSheet
App.js – navigationsopsætning

## Sådan kører du appen

npm install
npx expo start
Scan QR-koden med Expo Go på telefonen.


