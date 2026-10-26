# Vagtapp – vagtbytte med godkendelse

Vagtapp samler event- og festivalvagters vagter ét sted – også når de arbejder for flere bureauer – og gør det muligt at bytte en vagt med vagtlederens godkendelse direkte i appen.

**Demovideo (G2):** [https://youtube.com/shorts/krQ_rqRSYJQ]

Godkendelsesopgave 2, Innovation og ny teknologi (INNT), CBS, efterår 2026. Individuel aflevering

## Skærme

1. **Mine vagter** – liste over mine vagter fra alle bureauer, med status.
2. **Vagtdetaljer** – post, tid, vagtleder og krav til posten.
3. **Afgiv vagt** – slår vagten op som ledig.
4. **Ledige vagter** (ny) – kollegers ledige vagter. "Tag vagten" er grå, hvis man mangler en kvalifikation, og appen advarer, hvis man allerede har en vagt samme dag.
5. **Godkend** (ny) – vagtlederens liste over bytter, der venter, med kvalifikationstjek og knapperne Godkend/Afvis.

## Projektstruktur

```
App.js                    Tab- og stack-navigation
firebase.js               Forbindelse til Firebase
services/vagtService.js   Læs/skriv vagter + kvalifikations- og dobbeltbookingstjek
data/vagter.js            Startdata (skrives kun til databasen, hvis den er tom)
data/bruger.js            Den "indloggede" bruger og dennes kvalifikationer
screens/                  De fem skærme
styles/globalStyles.js    Al styling
```

## Sådan kører du appen

```
npm install
npx expo start
```

Scan QR-koden med Expo Go.

Appen bruger Firebase Realtime Database. Indsæt dit eget `firebaseConfig` i `firebase.js` (Firebase-konsollen → Project settings → Your apps → Web app). Databasen skal stå i test mode. Første gang appen åbner, lægges startdata automatisk op

**Nulstil demoen:** Slet noden `vagter` i Firebase-konsollen og genstart appen.

## Pakker

React Navigation (native-stack og bottom-tabs), Firebase (JS SDK), @expo/vector-icons.
