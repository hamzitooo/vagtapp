import { StyleSheet } from 'react-native';

// farver samler alle app'ens farver ét sted (et "design token"-mønster).
// Fordelen: skal appens farvetema ændres, rettes det kun her — ikke i hver enkelt
// komponent, der bruger farverne. Det gør det også nemt at se og huske,
// hvilke farver der overhovedet findes i app'en.
export const farver = {
  baggrund: '#121212', // mørk baggrund til hele skærmen
  kort: '#1f1f1f',     // lidt lysere end baggrunden, så "kort" (vagt-bokse) skiller sig ud
  tekst: '#ffffff',    // primær tekstfarve (hvid, for kontrast mod mørk baggrund)
  dæmpet: '#9e9e9e',   // sekundær/mindre vigtig tekst (grå, mindre kontrast)
  accent: '#ffb300',   // farve til fx knapper eller ting, der skal fremhæves
};

// StyleSheet.create() minder om CSS, men er React Natives egen løsning til styling.
// I modsætning til CSS på web findes der ingen klasser eller filer, der deles på
// tværs — styles er JavaScript-objekter, der importeres direkte i den komponent,
// der skal bruge dem. StyleSheet.create() validerer stilene og optimerer dem,
// så de kan genbruges effektivt i stedet for at oprette nye objekter, hver gang
// komponenten tegnes igen.
export const globalStyles = StyleSheet.create({
  // container: den ydre ramme om hele skærmen.
  // flex: 1 betyder "fyld al tilgængelig plads" — svarer til height: 100% på web,
  // men React Native bruger Flexbox som sit primære layout-system.
  container: {
    flex: 1,
    backgroundColor: farver.baggrund,
    padding: 16,
  },
  // kort: styling for hver enkelt "vagt-boks" i listen.
  kort: {
    backgroundColor: farver.kort,
    borderRadius: 12,   // runde hjørner
    padding: 16,
    marginBottom: 12,   // luft ned til næste kort i listen
  },
  // kortTitel: den fremhævede overskrift i et kort (fx stedet for vagten).
  kortTitel: {
    color: farver.tekst,
    fontSize: 18,
    fontWeight: '600', // halvfed skrift
    marginBottom: 4,
  },
  // kortTekst: mindre, dæmpet tekst i kortet (fx dato, tid, post).
  kortTekst: {
    color: farver.dæmpet,
    fontSize: 14,
  },
});