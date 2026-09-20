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
  // overskrift: stor titel-tekst, fx øverst på en detalje-skærm.
  overskrift: {
    color: farver.tekst,
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 16,
  },
  // label: lille, dæmpet tekst der beskriver et felt (fx "Sted" eller "Tidspunkt")
  // — bruges typisk lige over den tilhørende værdi.
  label: {
    color: farver.dæmpet,
    fontSize: 13,
    marginTop: 12,
  },
  // værdi: selve indholdet/svaret til et label (fx "Roskilde Festival").
  værdi: {
    color: farver.tekst,
    fontSize: 16,
  },
  // besked: løbende brødtekst, fx en note eller besked fra vagtlederen.
  // lineHeight sætter afstanden mellem linjer, så længere tekst er lettere at læse.
  besked: {
    color: farver.tekst,
    fontSize: 16,
    lineHeight: 24,
  },
  // knap: en trykbar knap-beholder, typisk brugt sammen med TouchableOpacity/Pressable.
  // alignItems: 'center' centrerer indholdet (fx knapTekst) vandret inde i knappen.
  knap: {
    backgroundColor: farver.accent,
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    marginTop: 24,
  },
  // knapTekst: teksten inde i knappen. Sort tekst, fordi accentfarven (gul/orange)
  // er lys og derfor giver bedst kontrast med mørk tekst i stedet for hvid.
  knapTekst: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '600',
  },
});

